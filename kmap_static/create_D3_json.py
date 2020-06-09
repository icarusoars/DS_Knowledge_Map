import os
import markdown
import json

DEFAULT_CIRCLE_SIZE = 5
ROOT_DIR = 'data_science'
OUTFILE_NAME = 'circlemap.json'


def create_D3_json():

    d = path_to_dict(ROOT_DIR)

    return json.dumps(d, indent=2)


def path_to_dict(path):

    # get information of this node by accessing corresponding md file
    file_info = get_md_info(path + '/' + os.path.basename(path) + '.md')
    file_name = ''.join(
        file_info['name']) if 'name' in file_info else os.path.basename(path)
    md_file_path = path + '/' + os.path.basename(path) + '.md'

    # assemble dict items
    d = {
        'md_file_path': md_file_path,
        'name': file_name
    }

    subdirs = [x for x in os.listdir(
        path) if os.path.isdir(os.path.join(path, x))]

    # recursively fill in dictionary structure
    d['children'] = [path_to_dict(os.path.join(path, subdir))
                     for subdir in subdirs]

    # for leaf nodes, delete children attribute, set size attribute
    if not d['children']:
        del d['children']
        d['size'] = file_info['learning-effort'] if 'learning-effort' in file_info else DEFAULT_CIRCLE_SIZE

    return d


def get_md_info(file_path):
    md = markdown.Markdown(extensions=['meta'])

    file_info = {}
    with open(file_path) as md_file:
        md.convert(md_file.read())
        file_info = md.Meta

    file_info['path'] = file_path

    return file_info


if __name__ == "__main__":
    d3_json = create_D3_json()

    with open(OUTFILE_NAME, "w") as outfile:
        outfile.write(d3_json)
