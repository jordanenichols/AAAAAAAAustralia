import json
import csv
import argparse
from pprint import pprint


parser = argparse.ArgumentParser(description='Convert a CSV to JSON.')
parser.add_argument('--file', type=str, help='The filename you want converted')
args = parser.parse_args()


"""
from JsoCsv import convert_to_csv_from_json
"""
def convert_to_csv_from_json(json_file, output_file):
    with open(json_file, 'r') as f:
        with open(output_file, 'w') as csv_file:
            j = json.loads(f.read())
            pprint(j)
            csv_writer = csv.writer(csv_file)
            csv_writer.writerow(j["headers"])
            for d in j["data"]:
                csv_writer.writerow(d)

convert_to_csv_from_json(args.file, args.file.replace("json", "csv"))