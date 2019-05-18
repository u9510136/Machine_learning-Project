import sys
from flask import Flask, render_template, jsonify, redirect, request
from flask_pymongo import PyMongo
import pymongo
import scrape_google

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/google")


@app.route("/")
def home():
    google = mongo.db.google_search.find_one()
    return render_template("index.html", google=google)

@app.route('/scrape')
def scrape():
    user_input = request.args.get("q")
    ui_splited = user_input.split()
    ui_formatted = ""
    for words in range(len(ui_splited) - 1 ):
        ui_formatted = ui_formatted + ui_splited[words] + "+"
    ui_formatted = ui_formatted + ui_splited[len(ui_splited) - 1 ]
    google = mongo.db.google_search
    google_data = scrape_google.scrape(ui_formatted)
    google.update({}, google_data, upsert=True)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
