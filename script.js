// ============================================
// FARMSYNC
// Farmer -> Consumer Dynamic Listing
// No Firebase / No OTP
// ============================================


// --------------------------------------------
// DATA
// --------------------------------------------

let produce = JSON.parse(
    localStorage.getItem("farmsyncProduce")
) || null;

let orders = JSON.parse(
    localStorage.getItem("farmsyncOrders")
) || [];

let joinedPool =
    localStorage.getItem("farmsyncPool") === "true";

let selectedProduct = null;


// --------------------------------------------
// SAVE DATA
// --------------------------------------------

function saveData() {

    localStorage.setItem(
        "farmsyncProduce",
        JSON.stringify(produce)
    );

    localStorage.setItem(
        "farmsyncOrders",
        JSON.stringify(orders)
    );

    localStorage.setItem(
        "farmsyncPool",
        joinedPool
    );
}


// --------------------------------------------
// SCREEN
// --------------------------------------------

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

    window.scrollTo(0, 0);
}


// --------------------------------------------
// HOME
// --------------------------------------------

function goHome() {

    showScreen("home");

}


// --------------------------------------------
// FARMER
// --------------------------------------------

function openFarmer() {

    showScreen("farmer");

    updateDashboard();

}


// --------------------------------------------
// ADD PRODUCE
// --------------------------------------------

function openAddProduce() {

    showScreen("addProduce");

    if (produce) {

        document.getElementById("farmerName").value =
            produce.farmerName;

        document.getElementById("farmerLocation").value =
            produce.farmerLocation;

    }

}


// --------------------------------------------
// ADD PRODUCE
// --------------------------------------------

function addProduce() {

    const farmerName =
        document.getElementById("farmerName")
        .value
        .trim();

    const farmerLocation =
        document.getElementById("farmerLocation")
        .value
        .trim();

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


    // VALIDATION

    if (!farmerName) {
        alert("Please enter farmer name.");
        return;
    }

    if (!farmerLocation) {
        alert("Please enter location.");
        return;
    }

    if (!crop) {
        alert("Please enter crop name.");
        return;
    }

    if (!quantity || quantity <= 0) {
        alert("Please enter valid quantity.");
        return;
    }

    if (!price || price <= 0) {
        alert("Please enter valid price.");
        return;
    }


    // CREATE PRODUCE

    produce = {

        farmerName: farmerName,

        farmerLocation: farmerLocation,

        crop: crop,

        quantity: quantity,

        price: price,

        harvest:
            harvest || "Ready",

        createdAt:
            new Date().toLocaleString()

    };


    // SAVE

    saveData();


    // MESSAGE

    document.getElementById(
        "addMessage"
    ).innerHTML = `

        <div class="success-message">

            <b>
                ✅ Produce Listed Successfully!
            </b>

            <p>
                👨‍🌾 ${escapeHTML(farmerName)}
            </p>

            <p>
                📍 ${escapeHTML(farmerLocation)}
            </p>

            <p>
                🌱 ${escapeHTML(crop)}
            </p>

            <p>
                ⚖️ ${quantity} kg
            </p>

            <p>
                💰 ₹${price}/kg
            </p>

        </div>

    `;


    updateDashboard();


    // AUTOMATICALLY OPEN MY PRODUCE

    setTimeout(() => {

        openMyProduce();

    }, 1000);

}


// --------------------------------------------
// DASHBOARD
// --------------------------------------------

function updateDashboard() {

    const name =
        document.getElementById(
            "farmerDisplayName"
        );

    const location =
        document.getElementById(
            "farmerDisplayLocation"
        );

    const quantity =
        document.getElementById(
            "myQuantity"
        );

    const earnings =
        document.getElementById(
            "farmerEarnings"
        );


    if (!produce) {

        if (name)
            name.innerText = "Farmer";

        if (location)
            location.innerText = "📍 Location";

        if (quantity)
            quantity.innerText = "0 kg";

        if (earnings)
            earnings.innerText = "₹0";

        return;
    }


    if (name) {

        name.innerText =
            produce.farmerName;

    }


    if (location) {

        location.innerText =
            "📍 " +
            produce.farmerLocation;

    }


    if (quantity) {

        quantity.innerText =
            produce.quantity +
            " kg";

    }


    if (earnings) {

        const total =
            produce.quantity *
            produce.price;

        earnings.innerText =
            "₹" +
            total.toLocaleString("en-IN");

    }

}


// --------------------------------------------
// MY PRODUCE
// --------------------------------------------

function openMyProduce() {

    showScreen("myProduce");

    const list =
        document.getElementById(
            "produceList"
        );


    if (!produce) {

        list.innerHTML = `

            <div class="empty-box">

                🌱 No produce listed yet.

                <br><br>

                Add your first crop.

            </div>

        `;

        return;

    }


    list.innerHTML = `

        <div class="produce-card">

            <div class="crop-icon">

                ${getCropIcon(
                    produce.crop
                )}

            </div>


            <div class="produce-main">

                <h3>
                    ${escapeHTML(
                        produce.crop
                    )}
                </h3>

                <p>
                    👨‍🌾
                    ${escapeHTML(
                        produce.farmerName
                    )}
                </p>

                <p>
                    📍
                    ${escapeHTML(
                        produce.farmerLocation
                    )}
                </p>

                <p>
                    ⚖️
                    ${produce.quantity} kg
                </p>

                <p>
                    💰
                    ₹${produce.price}/kg
                </p>

                <p>
                    📅
                    ${escapeHTML(
                        produce.harvest
                    )}
                </p>

            </div>

        </div>

    `;

}


// --------------------------------------------
// CONSUMER
// --------------------------------------------

function openConsumer() {

    showScreen("consumer");

    renderConsumerProducts();

}


// --------------------------------------------
// CONSUMER PRODUCTS
// --------------------------------------------

function renderConsumerProducts() {

    const container =
        document.getElementById(
            "consumerProducts"
        );

    const empty =
        document.getElementById(
            "emptyConsumer"
        );


    if (!produce) {

        container.innerHTML = "";

        empty.style.display = "block";

        return;

    }


    empty.style.display = "none";


    const icon =
        getCropIcon(
            produce.crop
        );


    // Demo market price
    const marketPrice =
        Math.ceil(
            produce.price * 1.25
        );


    const saving =
        marketPrice -
        produce.price;


    container.innerHTML = `

        <div class="product-card">

            <div class="product-top">

                <div class="product-image">

                    ${icon}

                </div>


                <div class="product-info">

                    <h3>

                        ${escapeHTML(
                            produce.crop
                        )}

                    </h3>


                    <p>

                        👨‍🌾 Farmer:

                        <b>
                            ${escapeHTML(
                                produce.farmerName
                            )}
                        </b>

                    </p>


                    <p>

                        📍

                        ${escapeHTML(
                            produce.farmerLocation
                        )}

                    </p>


                    <p>

                        ⚖️

                        ${produce.quantity}
                        kg available

                    </p>


                    <p>

                        📅

                        ${escapeHTML(
                            produce.harvest
                        )}

                    </p>


                    <p class="farmer-price">

                        💰 ₹${produce.price}
                        / kg

                    </p>


                    <p class="market-price">

                        🏪 Market:
                        ₹${marketPrice}/kg

                    </p>


                    <p class="saving">

                        💚 You save
                        ₹${saving}/kg

                    </p>

                </div>

            </div>


            <button
                class="buy-btn"
                onclick="buyProduce()">

                🛒 BUY FROM FARMER

            </button>

        </div>

    `;

}


// --------------------------------------------
// BUY
// --------------------------------------------

function buyProduce() {

    if (!produce) {

        alert(
            "No produce available."
        );

        return;

    }


    selectedProduct = {
        ...produce
    };


    document.getElementById(
        "orderProduct"
    ).innerText =
        produce.crop;


    document.getElementById(
        "orderFarmer"
    ).innerText =
        produce.farmerName;


    document.getElementById(
        "orderLocation"
    ).innerText =
        produce.farmerLocation;


    document.getElementById(
        "orderPrice"
    ).innerText =
        "₹" + produce.price;


    document.getElementById(
        "orderQuantity"
    ).value = 1;


    updateOrderTotal();


    showScreen("order");

}


// --------------------------------------------
// ORDER TOTAL
// --------------------------------------------

function updateOrderTotal() {

    if (!selectedProduct)
        return;


    const quantity =
        Number(
            document.getElementById(
                "orderQuantity"
            ).value
        ) || 0;


    const total =
        selectedProduct.price *
        quantity;


    document.getElementById(
        "orderTotal"
    ).innerText =
        "₹" +
        total.toLocaleString("en-IN");

}


// --------------------------------------------
// CONFIRM ORDER
// --------------------------------------------

function confirmOrder() {

    if (!selectedProduct)
        return;


    const quantity =
        Number(
            document.getElementById(
                "orderQuantity"
            ).value
        );


    if (
        !quantity ||
        quantity <= 0
    ) {

        alert(
            "Enter valid quantity."
        );

        return;

    }


    if (
        quantity >
        selectedProduct.quantity
    ) {

        alert(
            "Not enough produce available."
        );

        return;

    }


    const total =
        selectedProduct.price *
        quantity;


    const orderId =
        "FS" +
        Date.now()
            .toString()
            .slice(-6);


    const order = {

        id: orderId,

        farmer:
            selectedProduct.farmerName,

        location:
            selectedProduct.farmerLocation,

        crop:
            selectedProduct.crop,

        quantity:
            quantity,

        price:
            selectedProduct.price,

        total:
            total,

        date:
            new Date().toLocaleString()

    };


    orders.push(order);

    saveData();


    document.getElementById(
        "orderId"
    ).innerText =
        orderId;


    showScreen(
        "orderSuccess"
    );

}


// --------------------------------------------
// QUANTITY CHANGE
// --------------------------------------------

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target.id ===
            "orderQuantity"
        ) {

            updateOrderTotal();

        }

    }
);


// --------------------------------------------
// SMART SELL
// --------------------------------------------

function openDecision() {

    showScreen("decision");

    if (produce) {

        document.getElementById(
            "decisionCrop"
        ).innerText =
            produce.crop;

    }

}


function holdProduce() {

    alert(
        "🟢 " +
        produce.crop +
        " added to HOLD plan."
    );

}


function sellNow() {

    alert(
        "💰 " +
        produce.crop +
        " marked for SELL."
    );

}


// --------------------------------------------
// POWER POOL
// --------------------------------------------

function openPool() {

    showScreen("pool");

    updateDashboard();

    startDemandMatching();

}


function startDemandMatching() {

    const bar =
        document.getElementById(
            "matchBar"
        );

    const percent =
        document.getElementById(
            "matchPercent"
        );

    const text =
        document.getElementById(
            "matchText"
        );


    if (!bar || !percent)
        return;


    let value = 0;


    bar.style.width = "0%";

    percent.innerText = "0";


    text.innerText =
        "🔍 Finding consumer demand...";


    const timer =
        setInterval(() => {

            value += 5;


            if (value > 90)
                value = 90;


            bar.style.width =
                value + "%";


            percent.innerText =
                value;


            if (
                value === 25
            ) {

                text.innerText =
                    "📡 Checking farmer supply...";

            }


            if (
                value === 50
            ) {

                text.innerText =
                    "📊 Comparing demand...";

            }


            if (
                value === 75
            ) {

                text.innerText =
                    "🎯 Matching buyers...";

            }


            if (
                value === 90
            ) {

                clearInterval(timer);


                text.innerHTML =
                    "✅ <b>90% Demand Match!</b><br>" +
                    "Your produce matches current consumer demand.";

            }

        }, 100);

}


// --------------------------------------------
// JOIN POWER POOL
// --------------------------------------------

function joinPool() {

    if (!produce) {

        alert(
            "First add your produce."
        );

        return;

    }


    joinedPool = true;

    saveData();


    const button =
        document.getElementById(
            "poolButton"
        );


    button.innerText =
        "✅ POWER POOL JOINED";


    button.disabled =
        true;


    document.getElementById(
        "poolStatus"
    ).innerHTML = `

        <div class="success-message">

            <b>
                ✅ Power Pool Active
            </b>

            <p>
                👨‍🌾 ${escapeHTML(
                    produce.farmerName
                )}
            </p>

            <p>
                📍 ${escapeHTML(
                    produce.farmerLocation
                )}
            </p>

            <p>
                ⚖️ Contribution:
                ${produce.quantity} kg
            </p>

            <p>
                🎯 Demand Match:
                <b>90%</b>
            </p>

        </div>

    `;

}


// --------------------------------------------
// CROP ICON
// --------------------------------------------

function getCropIcon(crop) {

    const name =
        crop.toLowerCase();


    if (name.includes("tomato"))
        return "🍅";

    if (name.includes("onion"))
        return "🧅";

    if (name.includes("carrot"))
        return "🥕";

    if (name.includes("potato"))
        return "🥔";

    if (name.includes("brinjal"))
        return "🍆";

    if (name.includes("banana"))
        return "🍌";

    if (name.includes("mango"))
        return "🥭";

    if (name.includes("corn"))
        return "🌽";

    return "🌱";

}


// --------------------------------------------
// SECURITY
// --------------------------------------------

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.innerText = text;

    return div.innerHTML;

}


// --------------------------------------------
// START
// --------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDashboard();

        console.log(
            "🌱 FARMSYNC is ready!"
        );

    }
);
