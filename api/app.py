from flask import Flask, jsonify,json,url_for
from flask_cors import CORS
import os
from resources.userdata import getUsers
from resources.studiendata import getStudies
from resources.teilnahme import getTeilnahme

app = Flask(__name__)
CORS(app)

# USERS = [
#     {
#         'name': 'Max Mustermann',
#         'role': 'Forscher',
#     },
#     {
#         'name': 'Peter Lustig',
#         'role': 'Teilnehmer',
#     },
#     {
#         'name': 'Heinz Platte',
#         'role': 'Administrator',
#     },
#     {
#         'name': 'Hans Raser',
#         'role': 'Teilnehmer',
#     },
#     {
#         'name': 'Rudolf Reiner',
#         'role': 'Forscher',
#     }, 
#     {
#         'name': 'Anna Schmidt',
#         'role': 'Teilnehmer',
#     },
#     {
#         'name': 'Alice Wonder',
#         'role': 'Administrator',
#     },
# ]

@app.route("/greeting")
def greeting():
    return {"greeting": "Hello from Flask!"}

@app.route("/users")
def getUserData():
    USERS = getUsers()
    return jsonify({
        'users': USERS
    })

@app.route("/teilnehmen")
def getTeilnahmeData():
    TEILNAHME = getTeilnahme()
    return jsonify({
        'studies': TEILNAHME
    })

@app.route("/studies")
def getStudienData():
    STUDIES = getStudies()
    return jsonify({
        'studies': STUDIES
    })