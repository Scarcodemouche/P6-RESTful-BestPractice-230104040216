from pymongo import MongoClient

uri = "mongodb+srv://zero:zero123@cluster0.fhqpash.mongodb.net/?appName=Cluster0"

client = MongoClient(uri)

print("Testing...")
print(client.list_database_names())