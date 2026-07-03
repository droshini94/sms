<<<<<<< HEAD
document.getElementById("registerForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match");
        return;
    }

    const btn = document.querySelector("#registerForm button");
    btn.innerHTML = "Creating Account...";
    btn.disabled = true;

    try {

        const response = await fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                phone,
                password
            })

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {
            window.location.href = "login.html";
        }

    } catch (error) {

        console.error(error);
        alert("Server Error");

    } finally {

        btn.innerHTML = "Create Account";
        btn.disabled = false;

    }

});


/*login*/
document.getElementById("loginForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const btn = document.querySelector("#loginForm button");

    btn.innerHTML = "Logging In...";
    btn.disabled = true;

    try {

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        if (response.ok) {

            alert(data.message);

          
            localStorage.setItem("token", data.token);

            
            localStorage.setItem("user", JSON.stringify(data.user));

        
            window.location.href = "dashboard.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Server Error");

    } finally {

        btn.innerHTML = "Login";
        btn.disabled = false;

    }

});
/*payment*/

document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector(".activate-btn");

    button.addEventListener("click", function(){

        const selectedPayment =
        document.querySelector('input[name="payment"]:checked');

        if(!selectedPayment){
            alert("Please select a payment method.");
            return;
        }

        button.innerHTML = "Processing...";

        setTimeout(function(){

            button.innerHTML = "Subscription Activated ✓";

            const message =
            document.createElement("p");

            message.classList.add("success-message");

            message.innerText =
            "Your Premium Subscription is now active.";

            document
            .querySelector(".subscription-box")
            .appendChild(message);

        },2000);

    });

});


/*dashboard*/
const token = localStorage.getItem("token");

if (!token) {

    alert("Please login first!");

    window.location.href = "login.html";

}
const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.getElementById("username").innerHTML =
        `Welcome, ${user.name}`;

}
const targetDate =
new Date("June 30, 2027 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
"⏳ " + days + " days remaining";

},1000);

document
.getElementById("logoutBtn")
.addEventListener("click", function(e){

e.preventDefault();

alert("Logged Out Successfully!");

window.location.href="login.html";

});
function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login.html";

}


/*upgrade*/

document.addEventListener("DOMContentLoaded", function () {

    const monthlyBtn = document.getElementById("monthlyBtn");
    const yearlyBtn = document.getElementById("yearlyBtn");

    const prices = document.querySelectorAll(".price");

   
    const monthly = [
        "₹199",
        "₹499",
        "₹999"
    ];

    const yearly = [
        "₹1,910",
        "₹4,790",
        "₹9,590"
    ];

    monthlyBtn.addEventListener("click", function () {

        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                monthly[index] +
                "<span>/month</span>";

        });

    });

    yearlyBtn.addEventListener("click", function () {

        yearlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                yearly[index] +
                "<span>/year</span>";

        });

    });

});

/*plan*/
document.addEventListener("DOMContentLoaded", function () {

    const monthlyBtn = document.getElementById("monthlyBtn");
    const yearlyBtn = document.getElementById("yearlyBtn");

    const prices = document.querySelectorAll(".price");

    const monthlyPrices = [
        "₹199",
        "₹499",
        "₹999"
    ];

    const yearlyPrices = [
        "₹1,910",
        "₹4,790",
        "₹9,590"
    ];

    monthlyBtn.addEventListener("click", function () {

        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                monthlyPrices[index] +
                "<span>/month</span>";

        });

    });

    yearlyBtn.addEventListener("click", function () {

        yearlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                yearlyPrices[index] +
                "<span>/year</span>";

        });

    });

    const search = document.getElementById("searchPlan");

    search.addEventListener("keyup", function () {

        let value = search.value.toLowerCase();

        document.querySelectorAll(".plan-card").forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

    const chooseButtons = document.querySelectorAll(".choose-btn");

    chooseButtons.forEach(function(btn){

        btn.addEventListener("click", function(){

            chooseButtons.forEach(function(button){

                button.innerHTML = "Choose Plan";
                button.style.background =
                "linear-gradient(135deg,#ff5ea8,#8b5cf6)";

            });

            btn.innerHTML = "✔ Selected";

            btn.style.background =
            "linear-gradient(135deg,#16a34a,#22c55e)";

            const plan =
            btn.parentElement.querySelector("h2").innerText;

            alert(plan + " Plan Selected!");

        });

    });

    document
    .getElementById("upgradeBtn")
    .addEventListener("click", function(){

        alert("Redirecting to Upgrade Page...");

        window.location.href = "upgrade.html";

    });

});
const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({

    planName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    features: {
        type: [String],
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Plan", planSchema);

/*payment*/

       document.addEventListener("DOMContentLoaded", function () {

   
    const cardSection = document.getElementById("cardSection");
    const upiSection = document.getElementById("upiSection");
    const bankSection = document.getElementById("bankSection");

   
    const methods = document.querySelectorAll('input[name="method"]');


    methods.forEach(function (method) {

        method.addEventListener("change", function () {

            cardSection.style.display = "none";
            upiSection.style.display = "none";
            bankSection.style.display = "none";

            if (this.value === "card") {

                cardSection.style.display = "block";

            }

            else if (this.value === "upi") {

                upiSection.style.display = "block";

            }

            else {

                bankSection.style.display = "block";

            }

        });

    });
    const verifyBtn = document.querySelector(".verify-btn");

    verifyBtn.addEventListener("click", function () {

        const upi = document.getElementById("upi").value.trim();

        if (upi === "") {

            alert("Please enter your UPI ID.");

            return;

        }

        if (!upi.includes("@")) {

            alert("Invalid UPI ID");

            return;

        }

        alert("✅ UPI Verified Successfully");

    });

    document.getElementById("applyCoupon").addEventListener("click", function () {

        const coupon = document
            .getElementById("coupon")
            .value
            .trim()
            .toUpperCase();

        if (coupon === "SAVE10") {

            alert("🎉 Coupon Applied! ₹100 Discount");

        }

        else {

            alert("Invalid Coupon");

        }

    });
    document.getElementById("paymentForm").addEventListener("submit", function (e) {

        e.preventDefault();

        const selected =
            document.querySelector('input[name="method"]:checked').value;

        // CARD

        if (selected === "card") {

            const holder = document.getElementById("holder").value.trim();

            const card = document.getElementById("cardNumber").value.trim();

            const expiry = document.getElementById("expiry").value.trim();

            const cvv = document.getElementById("cvv").value.trim();

            if (
                holder === "" ||
                card === "" ||
                expiry === "" ||
                cvv === ""
            ) {

                alert("Please fill all Card Details.");

                return;

            }

            if (card.length != 16 || isNaN(card)) {

                alert("Card Number must contain 16 digits.");

                return;

            }

            if (cvv.length != 3 || isNaN(cvv)) {

                alert("CVV must contain 3 digits.");

                return;

            }

        }
        else if (selected === "upi") {

            const upi = document.getElementById("upi").value.trim();

            if (upi === "") {

                alert("Enter UPI ID.");

                return;

            }

            if (!upi.includes("@")) {

                alert("Invalid UPI ID.");

                return;

            }

        }
        else {

            const bank = document.getElementById("bank").value;

            const holder = document.getElementById("accHolder").value.trim();

            const account = document.getElementById("accNumber").value.trim();

            const ifsc = document.getElementById("ifsc").value.trim();

            if (
                bank === "Select Bank" ||
                holder === "" ||
                account === "" ||
                ifsc === ""
            ) {

                alert("Please fill all Net Banking Details.");

                return;

            }

        }
        const payBtn = document.querySelector(".pay-btn");

        payBtn.innerHTML = "Processing Payment...";

        payBtn.disabled = true;

        setTimeout(function () {

            alert("🎉 Payment Successful!\n\nWelcome to SubscriptionPro Premium.");

            window.location.href = "billing.html";

        }, 2500);

    });

});
/*logout*/

let timeLeft = 5;

t
const timer = document.getElementById("timer");

const countdown = setInterval(function () {

    timeLeft--;

    timer.textContent = timeLeft;

    if (timeLeft <= 0) {

        clearInterval(countdown);

       
        window.location.href = "login.html";

    }

}, 1000);


history.pushState(null, null, location.href);

window.onpopstate = function () {

    history.go(1);

};


const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function () {

    clearInterval(countdown);

    window.location.href = "login.html";

});


/*profile*/

const upload = document.getElementById("upload");
const profileImage = document.getElementById("profileImage");

upload.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            profileImage.src = e.target.result;

        };

        reader.readAsDataURL(file);

    }

});


const form = document.getElementById("profileForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const password =
        document.querySelector('input[placeholder="Enter New Password"]').value;

    const confirmPassword =
        document.querySelector('input[placeholder="Confirm Password"]').value;
    if (password === "" && confirmPassword === "") {

        alert("✅ Profile Updated Successfully!");

        return;

    }

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }
    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    alert("✅ Profile Updated Successfully!");

});



const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function () {

    const answer = confirm(
        "Are you sure you want to delete your account?\n\nThis action cannot be undone."
    );

    if (answer) {

        alert("Your account has been deleted successfully.");
        localStorage.clear();
        sessionStorage.clear();

        // Redirect
        window.location.href = "logout.html";

    }

});

/*subscription*/
document.addEventListener("DOMContentLoaded", function () {

    const renewalDate = new Date("July 30, 2026");
    const today = new Date();

    const difference = renewalDate - today;

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    const dayText = document.getElementById("daysRemaining");

    if (days > 0) {

        dayText.innerHTML = days + " Days";

    } else {

        dayText.innerHTML = "Expired";

    }

    const progress = document.querySelector(".progress-fill");

    let percentage = 75;

    progress.style.width = percentage + "%";

    const toggle = document.getElementById("renewToggle");

    toggle.addEventListener("change", function () {

        if (this.checked) {

            alert("✅ Auto Renewal Enabled");

        }

        else {

            alert("⚠ Auto Renewal Disabled");

        }

    });
    const buttons = document.querySelectorAll(".button-group button");

    // Renew Now

    buttons[0].addEventListener("click", function () {

        const confirmRenew = confirm("Renew your subscription now?");

        if (confirmRenew) {

            window.location.href = "payment.html";

        }

    });

   

    buttons[1].addEventListener("click", function () {

        window.location.href = "billing.html";

    });

  

    buttons[2].addEventListener("click", function () {

        const confirmPlan = confirm("Go to Upgrade Plan page?");

        if (confirmPlan) {

            window.location.href = "plans.html";

        }

    });

});

/*settings*/
document.addEventListener("DOMContentLoaded", function () {

    const saveBtn = document.getElementById("saveBtn");

    saveBtn.addEventListener("click", function () {

        const currentPassword = document.getElementById("currentPassword").value.trim();
        const newPassword = document.getElementById("newPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validate password only if user entered one
        if (newPassword !== "" || confirmPassword !== "") {

            if (currentPassword === "") {

                alert("Please enter your current password.");
                return;

            }

            if (newPassword.length < 6) {

                alert("New password must be at least 6 characters.");
                return;

            }

            if (newPassword !== confirmPassword) {

                alert("Passwords do not match.");
                return;

            }

        }

        alert("✅ Settings saved successfully!");

    });
    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {

        if (confirm("Reset all settings?")) {

            location.reload();

        }

    });

    const deleteBtn = document.getElementById("deleteBtn");

    deleteBtn.addEventListener("click", function () {

        const confirmDelete = confirm(
            "Are you sure you want to delete your account?\n\nThis action cannot be undone."
        );

        if (confirmDelete) {

            alert("Your account has been deleted successfully.");

            localStorage.clear();
            sessionStorage.clear();

            window.location.href = "logout.html";

        }

    });

    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("change", function () {

        if (this.checked) {

            document.body.style.background =
                "linear-gradient(135deg,#111827,#1e293b,#0f172a)";

            alert("Dark Mode Enabled");

        } else {

            document.body.style.background =
                "linear-gradient(135deg,#0f172a,#6d28d9,#ec4899)";

            alert("Dark Mode Disabled");

        }

    });

    const language = document.getElementById("language");

    language.addEventListener("change", function () {

        alert("Language changed to " + language.value);

    });

    const paymentMethod = document.getElementById("paymentMethod");

    if (paymentMethod) {

        paymentMethod.addEventListener("change", function () {

            alert("Default payment method: " + paymentMethod.value);

        });

    }

});

/*about*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to SubscriptionPro");

    const contactLink = document.querySelector('a[href="#contact"]');

    if (contactLink) {

        contactLink.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector("#contact").scrollIntoView({

                behavior: "smooth"

            });

        });

    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                contactForm.querySelector('input[type="text"]').value.trim();

            const email =
                contactForm.querySelector('input[type="email"]').value.trim();

            const subject =
                contactForm.querySelectorAll('input[type="text"]')[1].value.trim();

            const message =
                contactForm.querySelector("textarea").value.trim();

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill in all fields.");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            alert(
                "✅ Thank you, " +
                name +
                "!\n\nYour message has been sent successfully."
            );

            contactForm.reset();

        });

    }

    const subscribeButton =
        document.querySelector(".newsletter-box button");

    if (subscribeButton) {

        subscribeButton.addEventListener("click", function () {

            const email =
                document.querySelector(".newsletter-box input").value.trim();

            if (email === "") {

                alert("Please enter your email.");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Invalid email address.");

                return;

            }

            alert("🎉 Newsletter subscription successful!");

            document.querySelector(".newsletter-box input").value = "";

        });

    }

    const cards = document.querySelectorAll(
        ".feature-card, .premium-card, .team-card, .mission-card, .stat-box, .security-item"
    );

    function revealCards() {

        const trigger = window.innerHeight - 100;

        cards.forEach(function (card) {

            const top = card.getBoundingClientRect().top;

            if (top < trigger) {

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

            }

        });

    }

    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform = "translateY(40px)";

        card.style.transition = "0.8s";

    });

    window.addEventListener("scroll", revealCards);

    revealCards();

});

/*cancel*/

function cancelSubscription() {

    
    const reason = document.getElementById("cancelReason").value;

    
    const feedback = document.getElementById("feedback").value.trim();

    
    if (reason === "") {
        alert("⚠ Please select a reason for cancellation.");
        return;
    }

    
    const confirmCancel = confirm(
        "Are you sure you want to cancel your subscription?\n\n" +
        "You will lose access to all Premium features."
    );

    if (!confirmCancel) {
        return;
    }
    localStorage.setItem("subscriptionStatus", "Cancelled");
    localStorage.setItem("cancelReason", reason);
    localStorage.setItem("cancelFeedback", feedback);
    alert(
        "✅ Your subscription has been cancelled successfully.\n\n" +
        "Reason: " + reason + "\n\n" +
        "Thank you for using SubscriptionPro."
    );

    
    window.location.href = "index.html";
}


document.addEventListener("DOMContentLoaded", function () {

    console.log("Cancel Subscription Page Loaded");

    
    const feedback = document.getElementById("feedback");

    feedback.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });

=======

document.addEventListener("DOMContentLoaded", () => {

    console.log("SubscriptionPro Loaded");

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

    const revealElements = document.querySelectorAll(
        ".stat-card, .feature-box, .service-card, .chart-card, .why-grid div, .testimonial-card, .feature, .dashboard-card, .cta, .newsletter"
    );

    revealElements.forEach(element => {
        element.classList.add("fade-up");
    });

    function revealOnScroll() {

        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < triggerBottom) {
                element.classList.add("show");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    const counters = document.querySelectorAll(".stat-card h2");

    counters.forEach(counter => {

        const original = counter.innerText;

        let target = parseInt(original.replace(/[^0-9]/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const increment = Math.ceil(target / 80);

        function updateCounter() {

            current += increment;

            if (current > target) current = target;

            if (original.includes("%")) {
                counter.innerText = current + "%";
            }

            else if (original.includes("₹")) {
                counter.innerText = "₹" + current + "M+";
            }

            else if (original.includes("+")) {
                counter.innerText = current + "+";
            }

            else {
                counter.innerText = current;
            }

            if (current < target) {

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

    const subscribeBtn = document.querySelector(".newsletter button");

    if (subscribeBtn) {

        subscribeBtn.addEventListener("click", () => {

            const email =
                document.querySelector(".newsletter input").value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {

                alert("Please enter your email.");

                return;

            }

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            alert("🎉 Successfully subscribed!");

            document.querySelector(".newsletter input").value = "";

        });

    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    const dashboard = document.querySelector(".dashboard-card");

    if(dashboard){

        dashboard.addEventListener("mousemove", function(e){

            const rect = dashboard.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            dashboard.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(255,255,255,.18),
            rgba(255,255,255,.08))`;

        });

        dashboard.addEventListener("mouseleave", function(){

            dashboard.style.background =
            "rgba(255,255,255,.10)";

        });

    }

    document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button => {

        button.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = button.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

});


function toggleTheme() {
    document.body.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const password =
        document.querySelector('input[placeholder="Password"]').value;

        const confirmPassword =
        document.querySelector('input[placeholder="Confirm Password"]').value;

        if(password !== confirmPassword){

            alert("❌ Passwords do not match");
            return;
        }

        const btn = document.querySelector("button");

        btn.innerHTML = "Creating Account...";
        btn.disabled = true;

        setTimeout(() => {

            alert("🎉 Account Created Successfully!");

            window.location.href = "login.html";

        }, 2000);

    });

});




/*login*/
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.querySelector('input[type="email"]').value;

        const password =
            document.querySelector('input[type="password"]').value;

        if(email === "" || password === ""){

            alert("Please enter Email and Password");
            return;
        }

        alert("✅ Login Successful!");

        window.location.href = "dashboard.html";

    });

});


/*payment*/

document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector(".activate-btn");

    button.addEventListener("click", function(){

        const selectedPayment =
        document.querySelector('input[name="payment"]:checked');

        if(!selectedPayment){
            alert("Please select a payment method.");
            return;
        }

        button.innerHTML = "Processing...";

        setTimeout(function(){

            button.innerHTML = "Subscription Activated ✓";

            const message =
            document.createElement("p");

            message.classList.add("success-message");

            message.innerText =
            "Your Premium Subscription is now active.";

            document
            .querySelector(".subscription-box")
            .appendChild(message);

        },2000);

    });

});


/*dashboard*/
const targetDate =
new Date("June 30, 2027 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
"⏳ " + days + " days remaining";

},1000);

document
.getElementById("logoutBtn")
.addEventListener("click", function(e){

e.preventDefault();

alert("Logged Out Successfully!");

window.location.href="login.html";

});


/*upgrade*/

document.addEventListener("DOMContentLoaded", function () {

    const monthlyBtn = document.getElementById("monthlyBtn");
    const yearlyBtn = document.getElementById("yearlyBtn");

    const prices = document.querySelectorAll(".price");

   
    const monthly = [
        "₹199",
        "₹499",
        "₹999"
    ];

    const yearly = [
        "₹1,910",
        "₹4,790",
        "₹9,590"
    ];

    monthlyBtn.addEventListener("click", function () {

        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                monthly[index] +
                "<span>/month</span>";

        });

    });

    yearlyBtn.addEventListener("click", function () {

        yearlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                yearly[index] +
                "<span>/year</span>";

        });

    });

});

/*plan*/
document.addEventListener("DOMContentLoaded", function () {

    const monthlyBtn = document.getElementById("monthlyBtn");
    const yearlyBtn = document.getElementById("yearlyBtn");

    const prices = document.querySelectorAll(".price");

    const monthlyPrices = [
        "₹199",
        "₹499",
        "₹999"
    ];

    const yearlyPrices = [
        "₹1,910",
        "₹4,790",
        "₹9,590"
    ];

    monthlyBtn.addEventListener("click", function () {

        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                monthlyPrices[index] +
                "<span>/month</span>";

        });

    });

    yearlyBtn.addEventListener("click", function () {

        yearlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        prices.forEach((price, index) => {

            price.innerHTML =
                yearlyPrices[index] +
                "<span>/year</span>";

        });

    });

    const search = document.getElementById("searchPlan");

    search.addEventListener("keyup", function () {

        let value = search.value.toLowerCase();

        document.querySelectorAll(".plan-card").forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

    const chooseButtons = document.querySelectorAll(".choose-btn");

    chooseButtons.forEach(function(btn){

        btn.addEventListener("click", function(){

            chooseButtons.forEach(function(button){

                button.innerHTML = "Choose Plan";
                button.style.background =
                "linear-gradient(135deg,#ff5ea8,#8b5cf6)";

            });

            btn.innerHTML = "✔ Selected";

            btn.style.background =
            "linear-gradient(135deg,#16a34a,#22c55e)";

            const plan =
            btn.parentElement.querySelector("h2").innerText;

            alert(plan + " Plan Selected!");

        });

    });

    document
    .getElementById("upgradeBtn")
    .addEventListener("click", function(){

        alert("Redirecting to Upgrade Page...");

        window.location.href = "upgrade.html";

    });

});

/*payment*/

       document.addEventListener("DOMContentLoaded", function () {

   
    const cardSection = document.getElementById("cardSection");
    const upiSection = document.getElementById("upiSection");
    const bankSection = document.getElementById("bankSection");

   
    const methods = document.querySelectorAll('input[name="method"]');


    methods.forEach(function (method) {

        method.addEventListener("change", function () {

            cardSection.style.display = "none";
            upiSection.style.display = "none";
            bankSection.style.display = "none";

            if (this.value === "card") {

                cardSection.style.display = "block";

            }

            else if (this.value === "upi") {

                upiSection.style.display = "block";

            }

            else {

                bankSection.style.display = "block";

            }

        });

    });
    const verifyBtn = document.querySelector(".verify-btn");

    verifyBtn.addEventListener("click", function () {

        const upi = document.getElementById("upi").value.trim();

        if (upi === "") {

            alert("Please enter your UPI ID.");

            return;

        }

        if (!upi.includes("@")) {

            alert("Invalid UPI ID");

            return;

        }

        alert("✅ UPI Verified Successfully");

    });

    document.getElementById("applyCoupon").addEventListener("click", function () {

        const coupon = document
            .getElementById("coupon")
            .value
            .trim()
            .toUpperCase();

        if (coupon === "SAVE10") {

            alert("🎉 Coupon Applied! ₹100 Discount");

        }

        else {

            alert("Invalid Coupon");

        }

    });
    document.getElementById("paymentForm").addEventListener("submit", function (e) {

        e.preventDefault();

        const selected =
            document.querySelector('input[name="method"]:checked').value;

        // CARD

        if (selected === "card") {

            const holder = document.getElementById("holder").value.trim();

            const card = document.getElementById("cardNumber").value.trim();

            const expiry = document.getElementById("expiry").value.trim();

            const cvv = document.getElementById("cvv").value.trim();

            if (
                holder === "" ||
                card === "" ||
                expiry === "" ||
                cvv === ""
            ) {

                alert("Please fill all Card Details.");

                return;

            }

            if (card.length != 16 || isNaN(card)) {

                alert("Card Number must contain 16 digits.");

                return;

            }

            if (cvv.length != 3 || isNaN(cvv)) {

                alert("CVV must contain 3 digits.");

                return;

            }

        }
        else if (selected === "upi") {

            const upi = document.getElementById("upi").value.trim();

            if (upi === "") {

                alert("Enter UPI ID.");

                return;

            }

            if (!upi.includes("@")) {

                alert("Invalid UPI ID.");

                return;

            }

        }
        else {

            const bank = document.getElementById("bank").value;

            const holder = document.getElementById("accHolder").value.trim();

            const account = document.getElementById("accNumber").value.trim();

            const ifsc = document.getElementById("ifsc").value.trim();

            if (
                bank === "Select Bank" ||
                holder === "" ||
                account === "" ||
                ifsc === ""
            ) {

                alert("Please fill all Net Banking Details.");

                return;

            }

        }
        const payBtn = document.querySelector(".pay-btn");

        payBtn.innerHTML = "Processing Payment...";

        payBtn.disabled = true;

        setTimeout(function () {

            alert("🎉 Payment Successful!\n\nWelcome to SubscriptionPro Premium.");

            window.location.href = "billing.html";

        }, 2500);

    });

});
/*logout*/

let timeLeft = 5;

t
const timer = document.getElementById("timer");

const countdown = setInterval(function () {

    timeLeft--;

    timer.textContent = timeLeft;

    if (timeLeft <= 0) {

        clearInterval(countdown);

       
        window.location.href = "login.html";

    }

}, 1000);


history.pushState(null, null, location.href);

window.onpopstate = function () {

    history.go(1);

};


const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function () {

    clearInterval(countdown);

    window.location.href = "login.html";

});


/*profile*/

const upload = document.getElementById("upload");
const profileImage = document.getElementById("profileImage");

upload.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            profileImage.src = e.target.result;

        };

        reader.readAsDataURL(file);

    }

});


const form = document.getElementById("profileForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const password =
        document.querySelector('input[placeholder="Enter New Password"]').value;

    const confirmPassword =
        document.querySelector('input[placeholder="Confirm Password"]').value;
    if (password === "" && confirmPassword === "") {

        alert("✅ Profile Updated Successfully!");

        return;

    }

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }
    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    alert("✅ Profile Updated Successfully!");

});



const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function () {

    const answer = confirm(
        "Are you sure you want to delete your account?\n\nThis action cannot be undone."
    );

    if (answer) {

        alert("Your account has been deleted successfully.");
        localStorage.clear();
        sessionStorage.clear();

        // Redirect
        window.location.href = "logout.html";

    }

});

/*subscription*/
document.addEventListener("DOMContentLoaded", function () {

    const renewalDate = new Date("July 30, 2026");
    const today = new Date();

    const difference = renewalDate - today;

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    const dayText = document.getElementById("daysRemaining");

    if (days > 0) {

        dayText.innerHTML = days + " Days";

    } else {

        dayText.innerHTML = "Expired";

    }

    const progress = document.querySelector(".progress-fill");

    let percentage = 75;

    progress.style.width = percentage + "%";

    const toggle = document.getElementById("renewToggle");

    toggle.addEventListener("change", function () {

        if (this.checked) {

            alert("✅ Auto Renewal Enabled");

        }

        else {

            alert("⚠ Auto Renewal Disabled");

        }

    });
    const buttons = document.querySelectorAll(".button-group button");

    // Renew Now

    buttons[0].addEventListener("click", function () {

        const confirmRenew = confirm("Renew your subscription now?");

        if (confirmRenew) {

            window.location.href = "payment.html";

        }

    });

   

    buttons[1].addEventListener("click", function () {

        window.location.href = "billing.html";

    });

  

    buttons[2].addEventListener("click", function () {

        const confirmPlan = confirm("Go to Upgrade Plan page?");

        if (confirmPlan) {

            window.location.href = "plans.html";

        }

    });

});

/*settings*/
document.addEventListener("DOMContentLoaded", function () {

    const saveBtn = document.getElementById("saveBtn");

    saveBtn.addEventListener("click", function () {

        const currentPassword = document.getElementById("currentPassword").value.trim();
        const newPassword = document.getElementById("newPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validate password only if user entered one
        if (newPassword !== "" || confirmPassword !== "") {

            if (currentPassword === "") {

                alert("Please enter your current password.");
                return;

            }

            if (newPassword.length < 6) {

                alert("New password must be at least 6 characters.");
                return;

            }

            if (newPassword !== confirmPassword) {

                alert("Passwords do not match.");
                return;

            }

        }

        alert("✅ Settings saved successfully!");

    });
    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {

        if (confirm("Reset all settings?")) {

            location.reload();

        }

    });

    const deleteBtn = document.getElementById("deleteBtn");

    deleteBtn.addEventListener("click", function () {

        const confirmDelete = confirm(
            "Are you sure you want to delete your account?\n\nThis action cannot be undone."
        );

        if (confirmDelete) {

            alert("Your account has been deleted successfully.");

            localStorage.clear();
            sessionStorage.clear();

            window.location.href = "logout.html";

        }

    });

    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("change", function () {

        if (this.checked) {

            document.body.style.background =
                "linear-gradient(135deg,#111827,#1e293b,#0f172a)";

            alert("Dark Mode Enabled");

        } else {

            document.body.style.background =
                "linear-gradient(135deg,#0f172a,#6d28d9,#ec4899)";

            alert("Dark Mode Disabled");

        }

    });

    const language = document.getElementById("language");

    language.addEventListener("change", function () {

        alert("Language changed to " + language.value);

    });

    const paymentMethod = document.getElementById("paymentMethod");

    if (paymentMethod) {

        paymentMethod.addEventListener("change", function () {

            alert("Default payment method: " + paymentMethod.value);

        });

    }

});

/*about*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to SubscriptionPro");

    const contactLink = document.querySelector('a[href="#contact"]');

    if (contactLink) {

        contactLink.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector("#contact").scrollIntoView({

                behavior: "smooth"

            });

        });

    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                contactForm.querySelector('input[type="text"]').value.trim();

            const email =
                contactForm.querySelector('input[type="email"]').value.trim();

            const subject =
                contactForm.querySelectorAll('input[type="text"]')[1].value.trim();

            const message =
                contactForm.querySelector("textarea").value.trim();

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill in all fields.");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            alert(
                "✅ Thank you, " +
                name +
                "!\n\nYour message has been sent successfully."
            );

            contactForm.reset();

        });

    }

    const subscribeButton =
        document.querySelector(".newsletter-box button");

    if (subscribeButton) {

        subscribeButton.addEventListener("click", function () {

            const email =
                document.querySelector(".newsletter-box input").value.trim();

            if (email === "") {

                alert("Please enter your email.");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Invalid email address.");

                return;

            }

            alert("🎉 Newsletter subscription successful!");

            document.querySelector(".newsletter-box input").value = "";

        });

    }

    const cards = document.querySelectorAll(
        ".feature-card, .premium-card, .team-card, .mission-card, .stat-box, .security-item"
    );

    function revealCards() {

        const trigger = window.innerHeight - 100;

        cards.forEach(function (card) {

            const top = card.getBoundingClientRect().top;

            if (top < trigger) {

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

            }

        });

    }

    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform = "translateY(40px)";

        card.style.transition = "0.8s";

    });

    window.addEventListener("scroll", revealCards);

    revealCards();

});

/*cancel*/

function cancelSubscription() {

    
    const reason = document.getElementById("cancelReason").value;

    
    const feedback = document.getElementById("feedback").value.trim();

    
    if (reason === "") {
        alert("⚠ Please select a reason for cancellation.");
        return;
    }

    
    const confirmCancel = confirm(
        "Are you sure you want to cancel your subscription?\n\n" +
        "You will lose access to all Premium features."
    );

    if (!confirmCancel) {
        return;
    }
    localStorage.setItem("subscriptionStatus", "Cancelled");
    localStorage.setItem("cancelReason", reason);
    localStorage.setItem("cancelFeedback", feedback);
    alert(
        "✅ Your subscription has been cancelled successfully.\n\n" +
        "Reason: " + reason + "\n\n" +
        "Thank you for using SubscriptionPro."
    );

    
    window.location.href = "index.html";
}


document.addEventListener("DOMContentLoaded", function () {

    console.log("Cancel Subscription Page Loaded");

    
    const feedback = document.getElementById("feedback");

    feedback.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });

>>>>>>> afad9aa4e079da768eee4a7d0e84def311c5aca1
});