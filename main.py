import os
import jinja2
import pathlib
import shutil

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


