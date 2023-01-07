import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

with open('model/Breast Cancer LR.pickle', 'rb') as f:
    _model = pickle.load(f)

def predict(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9):
    sample = [f0, f1, f2, f3, f4, f5, f6, f7, f8, f9]
    proba = _model.predict_proba([sample])
    if proba[0][0] < proba[0][1]:
        return "Malignant"
    else:
        return "Benign"

@app.route('/predict', methods=['POST'])
def get_predict():
    f0 = float(request.form['f0'])
    f1 = float(request.form['f1'])
    f2 = float(request.form['f2'])
    f3 = float(request.form['f3'])
    f4 = float(request.form['f4'])
    f5 = float(request.form['f5'])
    f6 = float(request.form['f6'])
    f7 = float(request.form['f7'])
    f8 = float(request.form['f8'])
    f9 = float(request.form['f9'])


    # Converting the output JSON file to a response
    response = jsonify({
        'predicted': predict(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    app.run()