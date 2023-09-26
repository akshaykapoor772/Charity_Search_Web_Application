from flask import (Flask, g, jsonify, redirect, render_template, request,
                   session)
from passlib.hash import pbkdf2_sha256

from db import Database

DATABASE_PATH = 'data.db'

app = Flask(__name__)
app.secret_key = b'demo_key_not_real!'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = Database(DATABASE_PATH)
    return db


@app.teardown_appcontext
def close_db(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/view')
def about():
    return render_template('view.html')


@app.route('/adopt')
def adopt():
    return render_template('adopt.html')


@app.route('/mygoats')
def mygoats():
    return render_template('mygoats.html')


def generate_get_goats_response(args):
    n = args.get('query')
    data = get_db().get_data(n)
    return jsonify(data)
    
@app.route('/api/get_viewer_data', methods=['GET']) 
def generate_get_viewer_response():
    return generate_get_response2(request.args)
    
 
def generate_get_response2(args):
    n = args.get('uid')
    print("uid:", n)
    data = get_db().get_viewer_data(n)
    return jsonify(data)

@app.route('/api/get_data', methods=['GET'])
def api_get_goats():
    return generate_get_goats_response(request.args)


@app.route('/api/adopt_goat', methods=['GET'])
def api_adopt():
    if 'user' in session:
        goat_id = request.form.get('goat_id')
        user_id = session['user']['id']
        get_db().update_goat(goat_id, user_id)
        return generate_get_goats_response(request.form)
    else:
        return jsonify('Error: User not authenticated')


def generate_my_goats_response(args):
    user_id = session['user']['id']
    goats = get_db().get_user_goats(user_id)
    return jsonify({
        'goats': goats,
        'total': len(goats),
    })




if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
