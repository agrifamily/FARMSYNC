// ==========================================
// FARMSYNC - FULL UPGRADED SCRIPT
// Firebase / OTP இல்லாமல் prototype
// ==========================================


// ==========================================
// DEFAULT DATA
// ==========================================

const defaultProduce = {
    crop: "Tomato",
    quantity: 100,
    price: 27,
    harvest: "Ready"
};


// ==========================================
// LOAD DATA FROM LOCAL STORAGE
// ==========================================

let produce =
    JSON.parse(localStorage.getItem("farmsyncProduce"))
    || defaultProduce;

let joinedPool =
    localStorage.getItem("farmsyncPool") === "true";

let orders =
    JSON.parse(localStorage.getItem("farmsyncOrders"))
    || [];

let selectedProduct = {
    name: "Tomato",
    price: 30
};


// ==========================================
// SAVE DATA
// ==========================================

function saveData() {

    localStorage.setItem(
        "farmsyncProduce",
        JSON.stringify(produce)
    );

    localStorage.setItem(
        "farmsyncPool",
        joinedPool
    );

    localStorage.setItem(
        "farmsyncOrders",
        JSON.stringify(orders)
    );
}


// ==========================================
// SCREEN NAVIGATION
// ==========================================

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const screen =
        document.getElementById(id);


    if (screen) {

        screen.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// HOME
// ==========================================

function goHome() {

    showScreen("home");

}


// ==========================================
// FARMER
// ==========================================

function openFarmer() {

    showScreen("farmer");

    updateDashboard();

}


// ==========================================
// CONSUMER
// ==========================================

function openConsumer() {

    showScreen("consumer");

    loadConsumerProducts();

}


// ==========================================
// ADD PRODUCE
// ==========================================

function openAddProduce() {

    showScreen("addProduce");


    document.getElementById("cropName").value =
        produce.crop || "Tomato";

    document.getElementById("quantity").value =
        "";

    document.getElementById("price").value =
        "";

    document.getElementById("harvest").value =
        "";

    document.getElementById("addMessage").innerHTML =
        "";
}


// ==========================================
// ADD PRODUCE
// ==========================================

function addProduce() {

    const crop =
        document.getElementById("cropName")
            .value
            .trim();

    const quantity =
        Number(
            document.getElementById("quantity")
                .value
        );

    const price =
        Number(
            document.getElementById("price")
                .value
        );

    const harvest =
        document.getElementById("harvest")
            .value
            .trim();


    // Validation

    if (crop === "") {

        alert("Please enter crop name.");

        return;

    }


    if (quantity <= 0 || isNaN(quantity)) {

        alert("Please enter a valid quantity.");

        return;

    }


    if (price <= 0 || isNaN(price)) {

        alert("Please enter a valid price.");

        return;

    }


    // Save produce

    produce = {

        crop: crop,

        quantity: quantity,

        price: price,

        harvest: harvest || "Ready"

    };


    saveData();


    const earnings =
        quantity * price;


    document.getElementById(
        "addMessage"
    ).innerHTML = `

        <div class="success-message">

            <b>✅ Produce Listed Successfully!</b>

            <p>
                🌱 ${crop}
            </p>

            <p>
                ⚖️ ${quantity} kg
            </p>

            <p>
                💰 ₹${price}/kg
            </p>

            <p>
                💵 Expected Earnings:
                <b>
                    ₹${earnings.toLocaleString("en-IN")}
                </b>
            </p>

        </div>

    `;


    updateDashboard();


    // Automatically open My Produce

    setTimeout(() => {

        openMyProduce();

    }, 1200);

}


// ==========================================
// FARMER DASHBOARD
// ==========================================

function updateDashboard() {

    const quantity =
        Number(produce.quantity) || 0;

    const price =
        Number(produce.price) || 0;


    const earnings =
        quantity * price;


    const myQuantity =
        document.getElementById("myQuantity");

    if (myQuantity) {

        myQuantity.innerText =
            quantity + " kg";

    }


    const farmerEarnings =
        document.getElementById("farmerEarnings");

    if (farmerEarnings) {

        farmerEarnings.innerText =
            "₹" +
            earnings.toLocaleString("en-IN");

    }


    const yourPool =
        document.getElementById("yourPool");

    if (yourPool) {

        yourPool.innerText =
            quantity + " kg";

    }


    const totalPool =
        document.getElementById("totalPool");

    if (totalPool) {

        totalPool.innerText =
            (quantity + 400) + " kg";

    }


    const decisionCrop =
        document.getElementById("decisionCrop");

    if (decisionCrop) {

        decisionCrop.innerText =
            produce.crop;

    }

}


// ==========================================
// MY PRODUCE
// ==========================================

function openMyProduce() {

    showScreen("myProduce");


    const list =
        document.getElementById("produceList");


    if (!list) return;


    let icon = getCropIcon(
        produce.crop
    );


    const earnings =
        produce.quantity *
        produce.price;


    list.innerHTML = `

        <div class="produce-card">

            <div class="crop-icon">
                ${icon}
            </div>


            <div>

                <h3>
                    ${escapeHTML(produce.crop)}
                </h3>

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

                <p>
                    📅 ${escapeHTML(produce.harvest)}
                </p>

            </div>


            <span class="available">
                ACTIVE
            </span>

        </div>

    `;

}


// ==========================================
// CROP ICON
// ==========================================

function getCropIcon(crop) {

    const name =
        crop.toLowerCase();


    if (name.includes("tomato"))
        return "🍅";


    if (name.includes("onion"))
        return "🧅";


    if (name.includes("potato"))
        return "🥔";


    if (name.includes("carrot"))
        return "🥕";


    if (name.includes("brinjal"))
        return "🍆";


    if (name.includes("banana"))
        return "🍌";


    if (name.includes("mango"))
        return "🥭";


    if (name.includes("apple"))
        return "🍎";


    return "🌱";

}


// ==========================================
// SMART SELL / HOLD
// ==========================================

function openDecision() {

    showScreen("decision");

    updateDecision();

}


function updateDecision() {

    const crop =
        document.getElementById("decisionCrop");


    if (crop) {

        crop.innerText =
            produce.crop;

    }

}


function holdProduce() {

    saveData();


    showMessage(
        "🟢 " +
        produce.crop +
        " added to 3-day HOLD plan."
    );

}


function sellNow() {

    showMessage(
        "💰 " +
        produce.crop +
        " marked for SELL NOW."
    );

}


// ==========================================
// POWER POOL
// ==========================================

function openPool() {

    showScreen("pool");

    updateDashboard();


    if (joinedPool) {

        showPoolJoined();

    }

}


function joinPool() {

    if (joinedPool) {

        showMessage(
            "You are already a member of the Power Pool."
        );

        return;

    }


    joinedPool = true;


    saveData();


    showPoolJoined();


    alert(
        "👥 Successfully joined FARMSYNC Power Pool!"
    );

}


function showPoolJoined() {

    const status =
        document.getElementById("poolStatus");


    if (!status) return;


    status.innerHTML = `

        <div class="success-message">

            <b>
                ✅ Power Pool Joined
            </b>

            <p>
                Your
                <b>${produce.quantity} kg</b>
                of ${escapeHTML(produce.crop)}
                has been added.
            </p>

            <p>
                👥 Total Pool:
                <b>
                    ${produce.quantity + 400} kg
                </b>
            </p>

            <p>
                🎯 Demand Match:
                <b>90%</b>
            </p>

        </div>

    `;

}


// ==========================================
// BUYER DEMAND
// ==========================================

function openDemand() {

    showScreen("demand");

}


// ==========================================
// CONSUMER PRODUCTS
// ==========================================

function loadConsumerProducts() {

    // The farmer's latest crop can be highlighted
    // through the marketplace in the prototype.

    console.log(
        "FARMSYNC marketplace loaded"
    );

}


// ==========================================
// BUY PRODUCT
// ==========================================

function buy(product, price) {

    selectedProduct = {

        name: product,

        price: price

    };


    const productElement =
        document.getElementById("orderProduct");


    const priceElement =
        document.getElementById("orderPrice");


    const quantityElement =
        document.getElementById("orderQuantity");


    if (productElement) {

        productElement.innerText =
            product;

    }


    if (priceElement) {

        priceElement.innerText =
            "₹" + price;

    }


    if (quantityElement) {

        quantityElement.value = 1;

    }


    showScreen("order");

}


// ==========================================
// CONFIRM ORDER
// ==========================================

function confirmOrder() {

    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );


    const quantity =
        Number(quantityInput.value);


    if (quantity <= 0 || isNaN(quantity)) {

        alert(
            "Please enter a valid quantity."
        );

        return;

    }


    const total =
        selectedProduct.price *
        quantity;


    // Create order ID

    const orderId =
        "FS" +
        Date.now()
            .toString()
            .slice(-6);


    const order = {

        id: orderId,

        product:
            selectedProduct.name,

        quantity:
            quantity,

        price:
            selectedProduct.price,

        total:
            total,

        date:
            new Date()
                .toLocaleString()

    };


    orders.push(order);


    saveData();


    const orderIdElement =
        document.getElementById(
            "orderId"
        );


    if (orderIdElement) {

        orderIdElement.innerText =
            orderId;

    }


    showScreen("orderSuccess");

}


// ==========================================
// SUCCESS MESSAGE
// ==========================================

function showMessage(message) {

    alert(message);

}


// ==========================================
// SIMPLE SECURITY
// ==========================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.innerText =
        text;

    return div.innerHTML;

}


// ==========================================
// INITIALIZE APP
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboard();

        console.log(
            "🌱 FARMSYNC initialized successfully"
        );

    }
);
