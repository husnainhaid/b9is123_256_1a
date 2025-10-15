from flask import Flask, jsonify, request
import json
import os

app = Flask(__name__)
DATA_FILE = "products.json"

def load_data():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)

@app.route("/products", methods=["GET"])
def get_products():
    return jsonify(load_data())

@app.route("/products", methods=["POST"])
def add_product():
    data = load_data()
    new_item = request.json
    data.append(new_item)
    save_data(data)
    return jsonify(new_item), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
