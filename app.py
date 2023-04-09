from flask import Flask, render_template, request, redirect, url_for
import stripe

app= Flask(__name__)

public_key = "pk_test_51MuMW1HHyOS1Htzs86I0uKz6C7aFCgrz5BAln4AzZ4c90KLSCg6b4WGhoi37ix6uA40SaiTqK7IMBaamRRHqFJzZ00azbBkiYD"
stripe.api_key = "sk_test_51MuMW1HHyOS1HtzsRTIAYZel2hBmh335XigzftbqLSQ1qvGMyjj0U3rZ2TI7aCbK1wRAZmFWzLjBNy8ePXlTcT4300y32urBPI"

@app.route('/')
def index():
    return render_template('cartpage.html', public_key=public_key)


@app.route('/thankyou')
def thankyou():
    return render_template('thankyou.html')

@app.route('/payment', methods=['POST'])
def payment():
    
       customer = stripe.Customer.create(email=request.form['stripeEmail'],
                                      source=request.form['stripeToken'])
       
       charge = stripe.Charge.create(
            customer=customer.id, 
            currency='usd',
            description='Payment'
        ) 
       return redirect(url_for('thankyou'))

if __name__ == '__main__':
    app.run(port=5000,debug=True)