import os
import jinja2
import pathlib
import shutil

NEWS_ITEMS = [
	# {
	# 	'thumbnail': 'img/thumbs/4-3.jpg',
	# 	'full_image': 'img/news/1.jpg',
	# 	'title': 'Building brands through customer service',
	# 	'date': 'August 9, 2021',
	# 	'category': 'Branding',
	# 	'text': [
	# 		'BuckyCavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
	# 		"In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
	# 		"That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
	# 	],
	# }
]


BUILD_FOLDER = 'build'
SOURCE_FOLDER = 'source'

os.makedirs(BUILD_FOLDER, exist_ok=True)

from jinja2 import Environment, PackageLoader, FileSystemLoader, select_autoescape
env = Environment(
    loader = PackageLoader(SOURCE_FOLDER, '_templates'),
    # loader = FileSystemLoader(t_path),
    autoescape=select_autoescape()
)

template_obj = env.get_template('index.html')

with open(f'{BUILD_FOLDER}/index.html', 'w') as f:
	f.write(template_obj.render({
		'my_name': 'Marc Leonard',
		'news_items': NEWS_ITEMS
	}))




folders_to_copy = [
	(f'{SOURCE_FOLDER}/css/', f'{BUILD_FOLDER}/css/'),
	(f'{SOURCE_FOLDER}/img/', f'{BUILD_FOLDER}/img/'),
	(f'{SOURCE_FOLDER}/js/', f'{BUILD_FOLDER}/js/'),

]

def recurse_make_folders(source_dir, target_dir):
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


