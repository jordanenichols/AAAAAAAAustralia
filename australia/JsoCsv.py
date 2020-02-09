import json
import csv
import argparse
from pprint import pprint
#parser = argparse.ArgumentParser(description='Convert a CSV to JSON.')
#parser.add_argument('--file', type=str, help='The filename you want converted')
#args = parser.parse_args()






"""
from JsoCsv import convert_to_csv_from_json
"""
def convert_to_csv_from_json(json_file, output_file):
    with open(json_file, 'r') as f:
        with open(output_file, 'w') as csv_file:
            j = json.loads(f.read())
            pprint(j)
            csv_writer = csv.writer(csv_file)
            csv_writer.writerow(["month", "number"])
            for d in j["data"]:
                csv_writer.writerow(d)


#python3 JsoCsv.py --file test.json





import zmq
import os


context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:5555")

while True:
    #  Wait for next request from client
    message = socket.recv()
    convert_to_csv_from_json("/Users/williamkopans/json_playing/data.json", "./data.csv")
    os.system("Rscript ShinyPNG.R")

    #  Send reply back to client
    socket.send(b"Work done")

