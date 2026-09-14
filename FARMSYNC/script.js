// ===============================
// FARMSYNC - SCRIPT.JS
// No Firebase / No OTP
// ===============================

let produce = {
    crop: "Tomato",
    quantity: 100,
    price: 27,
    harvest: "Available"
};

let joinedPool = false;


// ===============================
// SCREEN CONTROL
// ===============================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// ===============================
// HOME
// ===============================

function goHome() {
    showScreen("home");
}


// ===============================
// FARMER
// ===============================

function openFarmer() {
    showScreen("farmer");
    updateDashboard();
}


// ===============================
// CONSUMER
// ===============================

function openConsumer() {
    showScreen("consumer");
}


// ===============================
// ADD PRODUCE
// ===============================

function openAddProduce() {

    showScreen("addProduce");

    document.getElementById("quantity").value =
        "";

    document.getElementById("price").value =
        "";

    document.getElementById("harvest").value =
        "";

    document.getElementById("addMessage").innerHTML =
        "";
}


// ===============================
// ADD PRODUCE FUNCTION
// ===============================

function addProduce() {

    const crop =
        document.getElementById("cropName").value;

    const quantity =
        Number(
            document.getElementById("quantity").value
        );

    const price =
        Number(
            document.getElementById("price").value
        );

    const harvest =
        document.getElementById("harvest").value;


    if (!quantity || quantity <= 0) {

        alert("Please enter quantity.");

        return;
    }


    if (!price || price <= 0) {

        alert("Please enter expected price.");

        return;
    }


    produce.crop = crop;
    produce.quantity = quantity;
    produce.price = price;

    produce.harvest =
        harvest || "Available";


    const earnings =
        quantity * price;


    document.getElementById(
        "addMessage"
    ).innerHTML = `

        <div class="success-message">

            <b>✅ Produce Listed Successfully!</b>

            <p>
                🌱 Crop: <b>${crop}</b>
            </p>

            <p>
                ⚖️ Quantity: <b>${quantity} kg</b>
            </p>

            <p>
                💰 Expected Price:
                <b>₹${price}/kg</b>
            </p>

            <p>
                💵 Expected Earnings:
                <b>₹${earnings.toLocaleString("en-IN")}</b>
            </p>

        </div>

    `;


    updateDashboard();


    setTimeout(() => {

        openMyProduce();

    }, 1200);
}


// ===============================
// DASHBOARD UPDATE
// ===============================

function updateDashboard() {

    const earnings =
        produce.quantity * produce.price;


    document.getElementById(
        "myQuantity"
    ).innerText =
        produce.quantity + " kg";


    document.getElementById(
        "farmerEarnings"
    ).innerText =
        "₹" + earnings.toLocaleString("en-IN");


    document.getElementById(
        "yourPool"
    ).innerText =
        produce.quantity + " kg";


    document.getElementById(
        "poolQuantity"
    ).innerText =
        (produce.quantity + 400) + " kg";


    document.getElementById(
        "totalPool"
    ).innerText =
        (produce.quantity + 400) + " kg";


    document.getElementById(
        "decisionCrop"
    ).innerText =
        produce.crop;
}


// ===============================
// MY PRODUCE
// ===============================

function openMyProduce() {

    showScreen("myProduce");

    const list =
        document.getElementById("produceList");


    const earnings =
        produce.quantity * produce.price;


    let icon = "🌱";


    if (produce.crop === "Tomato") {
        icon = "🍅";
    }

    else if (produce.crop === "Onion") {
        icon = "🧅";
    }

    else if (produce.crop === "Potato") {
        icon = "🥔";
    }

    else if (produce.crop === "Carrot") {
        icon = "🥕";
    }

    else if (produce.crop === "Brinjal") {
        icon = "🍆";
    }


    list.innerHTML = `

        <div class="produce-card">

            <div class="crop-icon">
                ${icon}
            </div>

            <div>

                <h3>${produce.crop}</h3>

                <p>
                    ${produce.quantity} kg available
                </p>

                <b>
                    ₹${produce.price}/kg
                </b>

                <p>
                    Expected:
                    ₹${earnings.toLocaleString("en-IN")}
                </p>

            </div>

            <span class="available">
                ACTIVE
            </span>

        </div>

    `;
}


// ===============================
// SELL / HOLD
// ===============================

function openDecision() {

    showScreen("decision");

    document.getElementById(
        "decisionCrop"
    ).innerText =
        produce.crop;
}


function holdProduce() {

    alert(
        "🟢 " +
        produce.crop +
        " added to 3-day HOLD plan!"
    );
}


function sellNow() {

    alert(
        "💰 " +
        produce.crop +
        " marked for SELL NOW!"
    );
}


// ===============================
// POWER POOL
// ===============================

function openPool() {

    showScreen("pool");

    updateDashboard();
}


function joinPool() {

    joinedPool = true;


    document.getElementById(
        "poolStatus"
    ).innerHTML = `

        <div class="success-message">

            <b>✅ You Joined the Power Pool!</b>

            <p>
                Your <b>${produce.quantity} kg</b>
                of ${produce.crop} is now combined
                with nearby farmers.
            </p>

            <p>
                👥 Total Pool:
                <b>${produce.quantity + 400} kg</b>
            </p>

            <p>
                🎯 Buyer Demand Match: <b>90%</b>
            </p>

        </div>

    `;

    alert(
        "👥 Successfully joined FARMSYNC Power Pool!"
    );
}


// ===============================
// BUYER DEMAND
// ===============================

function openDemand() {

    showScreen("demand");

}


// ===============================
// BUY PRODUCT
// ===============================

function buy(product, price) {

    document.getElementById(
        "orderProduct"
    ).innerText =
        product;


    document.getElementById(
        "orderPrice"
    ).innerText =
        "₹" + price;


    showScreen("order");

}


// ===============================
// INITIAL LOAD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboard();

    }
);