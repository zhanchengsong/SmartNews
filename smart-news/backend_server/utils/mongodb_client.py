import os
import sys

from pymongo import MongoClient

MONGO_DB_HOST = 'ds121382.mlab.com'
MONGO_DB_PORT = '21382'
DB_NAME = 'newsappdb'
client = MongoClient(MONGO_DB_HOST+":"+ MONGO_DB_PORT)

def get_db (db = DB_NAME):
    db = client[db]
    db.authenticate("backendserver","diet4coke")
    return db