import datetime
import os
from jinja2 import Environment, PackageLoader, FileSystemLoader, select_autoescape
import pathlib
import shutil
import pygments

cloud_build = str(os.environ.get('CF_PAGES')) == "1"
# cloud_build = True

print(f"Cloud Build: {cloud_build}")

full_url = "http://localhost:63342/developer-portfolio-site/build/"
# full_url = "/"
if cloud_build:
	full_url = "https://marcrleonard.com/"



NEWS_ITEMS = [
	# {
	# 	'thumbnail': 'img/thumbs/4-3.jpg',
	# 	'full_image': 'img/news/1.jpg',
	# 	'title': 'Django Is Awesome.',
	# 	'date': 'January 3, 2022',
	# 	'category': 'Python',
	# 	'text': [
	# 		"Django is awesome.",
	# 		"That is all."
	# 	],
	# }
]

from pelican.readers import MarkdownReader
from pelican.tests.support import get_settings

BUILD_FOLDER = 'build'
SOURCE_FOLDER = 'source'
env = Environment(
    loader = PackageLoader(SOURCE_FOLDER, '_templates'),
    # loader = FileSystemLoader(t_path),
    autoescape=select_autoescape()
)
os.makedirs(BUILD_FOLDER, exist_ok=True)

md = MarkdownReader(settings=get_settings(), )

blog_dir = "source/blog"
for file in os.listdir("source/blog"):

	if str(file).startswith("_"):
		continue

	html_text, metadata = md.read(f"{blog_dir}/{file}")

	# html_text = html_text.replace("<code>", "<code class='highlight'>")

	post_date = datetime.datetime.fromisoformat(metadata['date'].isoformat())

	title = metadata['title']
	default_slug = title.lower().replace(" ","-")
	slug = metadata.get('slug', default_slug)

	url = f'{post_date.year}/{post_date.month}/{slug}'

	cats = [ str(c).lstrip().rstrip().lower() for c in  str(metadata['category']).split(",")]

	news_item = {
			'thumbnail': 'img/thumbs/4-3.jpg',
			'full_image': 'img/news/1.jpg',
			'title': title,
			'date': post_date,
			'category': cats,
			'tags': metadata['tags'],
			'slug': url,
			'summary': metadata['summary'],
			'text': html_text,
	}

	blog_location = f"{full_url}/blog/{url}"
	os.makedirs(blog_location, exist_ok=True)

	with open(f'{blog_location}/index.html', 'w') as f:
		f.write(env.get_template('_blog.html').render({
			'news_item': news_item,
			'full_url': full_url,
			"fixed_footer": True
		}))

	# with open(f'{blog_location}/index.html', 'r') as f:
	# 	print(f.read())

	NEWS_ITEMS.append(news_item)

# NEWS_ITEMS.sort(key = lambda x:x['date'])
# NEWS_ITEMS.reverse()

# Create rss
with open(f'{BUILD_FOLDER}/rss.xml', 'w') as f:
	f.write(env.get_template('rss.xml').render({
		'news_items': NEWS_ITEMS,
		'build_date': datetime.datetime.now(),
		'full_url': full_url,
	}))

template_obj = env.get_template('index.html')

with open(f'{BUILD_FOLDER}/index.html', 'w') as f:
	f.write(template_obj.render({
		'my_name': 'Marc Leonard',
		'news_items': NEWS_ITEMS,
		'full_url': full_url,
	}))




folders_to_copy = [
	(f'{SOURCE_FOLDER}/css/', f'{BUILD_FOLDER}/css/'),
	(f'{SOURCE_FOLDER}/img/', f'{BUILD_FOLDER}/img/'),
	(f'{SOURCE_FOLDER}/js/', f'{BUILD_FOLDER}/js/'),

]

def recurse_make_folders(source_dir, target_dir):

	if not pathlib.Path(source_dir).exists():
		return

	file_names = os.listdir(source_dir)

	os.makedirs(target_dir, exist_ok=True)

	for file_name in file_names:

		original_file = pathlib.Path(source_dir, file_name)

		new_path = pathlib.Path(target_dir, file_name)

		if original_file.is_file():
			shutil.copy2(original_file, new_path)
		else:
			os.makedirs(new_path, exist_ok=True)

			recurse_make_folders(original_file, new_path)

for source_dir, target_dir in folders_to_copy:
	recurse_make_folders(source_dir, target_dir)


