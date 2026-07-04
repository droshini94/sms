import "../css/payment.css";

function Payment() {
  return (
    <>
      <div className="logo">
        💎 SubscriptionPro
      </div>

      <div className="container">

      
        <div className="summary">
          <h1>Premium Plan</h1>

          <p>Unlimited Features</p>

          <div className="price">
            ₹999 <span>/Month</span>
          </div>

          <hr />

          <div className="bill">
            <p>Subscription</p>
            <span>₹999</span>
          </div>

          <div className="bill">
            <p>GST (18%)</p>
            <span>₹180</span>
          </div>

          <div className="bill total">
            <p>Total</p>
            <span>₹1179</span>
          </div>

          <hr />

          <input
            type="text"
            placeholder="Coupon Code"
            id="coupon"
          />

          <button id="applyCoupon">
            Apply Coupon
          </button>
        </div>

     
        <div className="payment">

          <h2>Select Payment Method</h2>

          <div className="payment-method">

            <label>
              <input
                type="radio"
                name="method"
                value="card"
                defaultChecked
              />
              💳 Card
            </label>

            <label>
              <input
                type="radio"
                name="method"
                value="upi"
              />
              📱 UPI
            </label>

            <label>
              <input
                type="radio"
                name="method"
                value="bank"
              />
              🏦 Net Banking
            </label>

          </div>

          <form id="paymentForm">

           
            <div id="cardSection">

              <input
                type="text"
                placeholder="Card Holder Name"
                id="holder"
              />

              <input
                type="text"
                placeholder="Card Number"
                maxLength="16"
                id="cardNumber"
              />

              <div className="row">

                <input
                  type="text"
                  placeholder="MM/YY"
                  id="expiry"
                />

                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  id="cvv"
                />

              </div>

            </div>

           
            <div
              id="upiSection"
              style={{ display: "none" }}
            >
              <input
                type="text"
                placeholder="Enter UPI ID (example@ybl)"
                id="upi"
              />

              <button
                type="button"
                className="verify-btn"
              >
                Verify UPI
              </button>
            </div>

         
            <div
              id="bankSection"
              style={{ display: "none" }}
            >
              <select id="bank">
                <option>Select Bank</option>
                <option>State Bank of India</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
                <option>Indian Bank</option>
                <option>Canara Bank</option>
              </select>

              <input
                type="text"
                placeholder="Account Holder Name"
                id="accHolder"
              />

              <input
                type="text"
                placeholder="Account Number"
                id="accNumber"
              />

              <input
                type="text"
                placeholder="IFSC Code"
                id="ifsc"
              />
            </div>

            <button
              type="submit"
              className="pay-btn"
            >
              Pay Securely
            </button>

          </form>

          <div className="security">
            🔒 SSL Secured Payment
            <br />
            256-bit Encryption
          </div>

        </div>

      </div>
    </>
  );
}

export default Payment;