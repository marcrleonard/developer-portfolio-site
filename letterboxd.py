import requests
import re
from collections import defaultdict
from datetime import datetime
import xml.etree.ElementTree as ET

# Replace with your actual Letterboxd RSS feed URL
RSS_FEED_URL = "https://letterboxd.com/marcrleonard/rss/"


def get_watched_films_from_rss():
	response = requests.get(RSS_FEED_URL)

	# Initialize a defaultdict to store films by year
	all_films = []
	films_by_year = defaultdict(list)

	if response.status_code == 200:
		content = response.text  # Get content as a string

		content = response.content.lstrip()  # Remove any leading whitespace or BOM
		root = ET.fromstring(content)

		for item in root.findall(".//item"):
			title = item.find("title").text
			pub_date = item.find("pubDate").text
			description = item.find("description").text
			link = item.find("link").text

			str_item = ET.tostring(item, encoding='utf8').decode()

			date_obj = datetime.strptime(pub_date, '%a, %d %b %Y %H:%M:%S %z')
			watched_date_str = date_obj.strftime('%Y-%m-%d')

			watched_date_match = re.search(r"<ns0:watchedDate>(.*?)</ns0:watchedDate>", str_item)
			if watched_date_match:
				watched_date_str = watched_date_match.group(1)



			# Add the film information to the corresponding year
			all_films.append({
				'title': title,
				'watched_date': watched_date_str,
				'description': description,
				'link': link
			})

		all_films.sort(key=lambda x: x['watched_date'])
		all_films.reverse()


		# Sort the films within each year by watched date (ascending)
		for film in all_films:
			date_obj = datetime.strptime(film['watched_date'], '%Y-%m-%d')
			films_by_year[date_obj.year].append(film)

	else:
		print(f"Error: {response.status_code} - {response.text}")

	return films_by_year


if __name__ == "__main__":
	r = get_watched_films_from_rss()
