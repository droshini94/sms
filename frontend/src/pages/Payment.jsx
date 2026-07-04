import { useState } from "react";
import "../css/payment.css";

function Payment() {

  const [method, setMethod] = useState("card");
  const [total, setTotal] = useState(1179);
  const [coupon, setCoupon] = useState("");

  const applyCoupon = () => {

    if (coupon === "SAVE10") {
      setTotal(1061);
      alert("Coupon Applied Successfully!");
    } else {
      alert("Invalid Coupon");
    }

  };

  const verifyUPI = () => {
    alert("UPI Verified Successfully");
  };

  const handlePayment = (e) => {
    e.preventDefault();

    alert("Payment Successful!");

  };

  return (

<div className="payment-page">

<div className="logo">
💎 SubscriptionPro
</div>

<div className="container">

<div className="summary">

<h1>Premium Plan</h1>

<p>Unlimited Features</p>

<div className="price">
₹999<span>/Month</span>
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
<span>₹{total}</span>
</div>

<hr />

<input
type="text"
placeholder="Coupon Code"
value={coupon}
onChange={(e)=>setCoupon(e.target.value)}
/>

<button
className="coupon-btn"
onClick={applyCoupon}
>
Apply Coupon
</button>

</div>

<div className="payment">

<h2>Select Payment Method</h2>

<div className="payment-method">

<label>

<input
type="radio"
checked={method==="card"}
onChange={()=>setMethod("card")}
/>

💳 Card

</label>

<label>

<input
type="radio"
checked={method==="upi"}
onChange={()=>setMethod("upi")}
/>

📱 UPI

</label>

<label>

<input
type="radio"
checked={method==="bank"}
onChange={()=>setMethod("bank")}
/>

🏦 Net Banking

</label>

</div>

<form onSubmit={handlePayment}>

{method==="card" && (

<div>

<input
type="text"
placeholder="Card Holder Name"
/>

<input
type="text"
placeholder="Card Number"
/>

<div className="row">

<input
type="text"
placeholder="MM/YY"
/>

<input
type="password"
placeholder="CVV"
/>

</div>

</div>

)}

{method==="upi" && (

<div>

<input
type="text"
placeholder="example@ybl"
/>

<button
type="button"
className="verify-btn"
onClick={verifyUPI}
>

Verify UPI

</button>

</div>

)}

{method==="bank" && (

<div>

<select>

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
/>

<input
type="text"
placeholder="Account Number"
/>

<input
type="text"
placeholder="IFSC Code"
/>

</div>

)}

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

</div>

  );
}

export default Payment;