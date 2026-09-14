/* =====================================================
   FARMSYNC
   Firebase NOT required
   GitHub Pages compatible
===================================================== */


/* ================= RANDOM DATA ================= */

const farmerNames = [
    "Arun Kumar",
    "Suresh",
    "Manoj",
    "Prakash",
    "Ravi",
    "Karthik",
    "Dinesh",
    "Vijay",
    "Selvam",
    "Mohan"
];

const consumerNames = [
    "Ananya",
    "Priya",
    "Rahul",
    "Nithya",
    "Divya",
    "Harish",
    "Keerthana",
    "Arjun",
    "Meena",
    "Akash"
];

const locations = [
    "Coimbatore",
    "Pollachi",
    "Sulur",
    "Tiruppur",
    "Erode",
    "Mettupalayam",
    "Avinashi",
    "Udumalpet",
    "Palladam",
    "Annur"
];

const produceEmoji = {
    Tomato: "🍅",
    Onion: "🧅",
    Potato: "🥔",
    Carrot: "🥕",
    Banana: "🍌",
    Mango: "🥭",
    Brinjal: "🍆",
    Cabbage: "🥬"
};


/* ================= RANDOM FUNCTION ================= */

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


/* ================= DEMO DATA ================= */

let listings = JSON.parse(
    localStorage.getItem("farmsyncListings")
) || [
    {
        farmer: "Arun Kumar",
        location: "Coimbatore",
        produce: "Tomato",
        quantity: 100,
        price: 28
    },

    {
        farmer: "Suresh",
        location: "Pollachi",
        produce: "Onion",
        quantity: 80,
        price: 34
    },

    {
        farmer: "Prakash",
        location: "Tiruppur",
        produce: "Banana",
        quantity: 120,
        price: 42
    }
];


let demands = JSON.parse(
    localStorage.getItem("farmsyncDemands")
) || [];


/* ================= SPLASH ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const splash = document.getElementById("splash");
        const app = document.getElementById("app");

        if (splash) {
            splash.style.display = "none";
        }

        if (app) {
            app.style.display = "block";
        }

        updateStats();

    }, 1200);

});


/* ================= ROLE OPEN ================= */

function openRole(role) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selected = document.getElementById(role);

    if (selected) {
        selected.classList.add("active");
    }

    if (role === "farmer") {
        createFarmerProfile();
        renderFarmerListings();
    }

    if (role === "consumer") {
        createConsumerProfile();
        renderConsumerListings();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= HOME ================= */

function goHome() {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("home").classList.add("active");

    updateStats();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= FARMER PROFILE ================= */

function createFarmerProfile() {

    document.getElementById("farmerName").textContent =
        randomItem(farmerNames);

    document.getElementById("farmerLocation").textContent =
        randomItem(locations);
}


/* ================= CONSUMER PROFILE ================= */

function createConsumerProfile() {

    document.getElementById("consumerName").textContent =
        randomItem(consumerNames);

    document.getElementById("consumerLocation").textContent =
        randomItem(locations);
}


/* ================= ADD PRODUCE ================= */

function addProduce() {

    const produce =
        document.getElementById("produceName").value;

    const quantity =
        Number(document.getElementById("produceQty").value);

    const price =
        Number(document.getElementById("producePrice").value);

    if (!quantity || quantity <= 0) {

        showToast("Please enter quantity");

        return;
    }

    if (!price || price <= 0) {

        showToast("Please enter price");

        return;
    }


    const farmer =
        document.getElementById("farmerName").textContent;

    const location =
        document.getElementById("farmerLocation").textContent;


    const newListing = {

        farmer: farmer,

        location: location,

        produce: produce,

        quantity: quantity,

        price: price

    };


    listings.unshift(newListing);


    localStorage.setItem(
        "farmsyncListings",
        JSON.stringify(listings)
    );


    document.getElementById("produceQty").value = "";
    document.getElementById("producePrice").value = "";


    renderFarmerListings();

    updateStats();

    showToast(
        "🌱 Produce listed successfully!"
    );
}


/* ================= FARMER LISTINGS ================= */

function renderFarmerListings() {

    const container =
        document.getElementById("farmerListings");

    if (!container) return;


    if (listings.length === 0) {

        container.innerHTML = `
            <div class="produce-card">
                No produce listed yet.
            </div>
        `;

        return;
    }


    container.innerHTML = listings
        .slice(0, 12)
        .map(item => {

            return `

            <div class="produce-card">

                <div class="produce-top">

                    <div class="produce-emoji">
                        ${produceEmoji[item.produce] || "🌱"}
                    </div>

                    <div class="price">
                        ₹${item.price}/kg
                    </div>

                </div>

                <h3>${item.produce}</h3>

                <p>
                    👨‍🌾 ${item.farmer}<br>
                    📍 ${item.location}<br>
                    📦 ${item.quantity} kg available
                </p>

                <div class="match-small">
                    ✓ Available for PowerPool matching
                </div>

            </div>

            `;

        })
        .join("");
}


/* ================= CONSUMER LISTINGS ================= */

function renderConsumerListings() {

    const container =
        document.getElementById("consumerListings");

    if (!container) return;


    if (listings.length === 0) {

        container.innerHTML = `
            <div class="produce-card">
                No farmer produce available.
            </div>
        `;

        return;
    }


    container.innerHTML = listings
        .slice(0, 12)
        .map((item, index) => {

            return `

            <div class="produce-card">

                <div class="produce-top">

                    <div class="produce-emoji">
                        ${produceEmoji[item.produce] || "🌱"}
                    </div>

                    <div class="price">
                        ₹${item.price}/kg
                    </div>

                </div>

                <h3>${item.produce}</h3>

                <p>
                    👨‍🌾 ${item.farmer}<br>
                    📍 ${item.location}<br>
                    📦 ${item.quantity} kg available
                </p>

                <button
                    class="primary-btn full-btn"
                    onclick="quickBuy(${index})"
                >
                    🛒 Request Produce
                </button>

            </div>

            `;

        })
        .join("");
}


/* ================= QUICK BUY ================= */

function quickBuy(index) {

    const item = listings[index];

    if (!item) return;

    document.getElementById("demandName").value =
        item.produce;

    document.getElementById("demandQty").value =
        Math.min(10, item.quantity);

    createDemand();
}


/* ================= CREATE DEMAND ================= */

function createDemand() {

    const produce =
        document.getElementById("demandName").value;

    const quantity =
        Number(document.getElementById("demandQty").value);

    if (!quantity || quantity <= 0) {

        showToast("Please enter required quantity");

        return;
    }


    const consumer =
        document.getElementById("consumerName").textContent;

    const location =
        document.getElementById("consumerLocation").textContent;


    const demand = {

        consumer: consumer,

        location: location,

        produce: produce,

        quantity: quantity

    };


    demands.unshift(demand);


    localStorage.setItem(
        "farmsyncDemands",
        JSON.stringify(demands)
    );


    findMatch(demand);
}


/* ================= FIND MATCH ================= */

function findMatch(demand) {

    const result =
        document.getElementById("consumerMatch");


    const matches = listings.filter(item =>

        item.produce === demand.produce &&
        item.quantity >= demand.quantity

    );


    if (matches.length === 0) {

        result.innerHTML = `

            <div class="match-card">

                <h2>🔎 Searching PowerPool...</h2>

                <p style="margin-top:10px;">
                    No direct farmer match found yet.
                    Your demand has been added to the PowerPool.
                </p>

            </div>

        `;

        showToast(
            "⚡ Demand added to PowerPool"
        );

        return;
    }


    const farmer = matches[0];


    result.innerHTML = `

        <div class="match-card">

            <span class="badge">
                POWERPOOL MATCH FOUND
            </span>

            <h2 style="margin-top:12px;">
                ⚡ ${demand.produce} Match Successful
            </h2>

            <p style="margin-top:12px;">
                🛒 Consumer:
                <b>${demand.consumer}</b>
            </p>

            <p style="margin-top:6px;">
                📍 Consumer Location:
                ${demand.location}
            </p>

            <p style="margin-top:6px;">
                👨‍🌾 Farmer:
                <b>${farmer.farmer}</b>
            </p>

            <p style="margin-top:6px;">
                📍 Farm Location:
                ${farmer.location}
            </p>

            <p style="margin-top:6px;">
                📦 Required:
                <b>${demand.quantity} kg</b>
            </p>

            <p style="margin-top:6px;">
                💰 Farmer Price:
                <b>₹${farmer.price}/kg</b>
            </p>

            <div class="match-small"
                 style="margin-top:15px;">
                ✓ Supply available
                &nbsp; • &nbsp;
                ✓ Demand matched
                &nbsp; • &nbsp;
                ✓ Direct connection
            </div>

        </div>

    `;


    runMatching();


    showToast(
        "⚡ PowerPool match found!"
    );
}


/* ================= POWERPOOL ANIMATION ================= */

function runMatching() {

    const animation =
        document.getElementById("matchingAnimation");

    const result =
        document.getElementById("matchResult");


    if (!animation) return;


    animation.classList.remove("running");

    void animation.offsetWidth;

    animation.classList.add("running");


    result.innerHTML =
        "⚡ <b>PowerPool is matching supply with consumer demand...</b>";


    setTimeout(() => {

        result.innerHTML =
            "✓ <b>Match complete!</b> Farmer supply and consumer demand successfully connected.";

    }, 2600);

}


/* ================= STATS ================= */

function updateStats() {

    const farmerCount =
        document.getElementById("farmerCount");

    const consumerCount =
        document.getElementById("consumerCount");

    const matchCount =
        document.getElementById("matchCount");


    if (farmerCount) {

        const uniqueFarmers =
            new Set(listings.map(item => item.farmer));

        farmerCount.textContent =
            uniqueFarmers.size;

    }


    if (consumerCount) {

        consumerCount.textContent =
            Math.max(3, demands.length);

    }


    if (matchCount) {

        matchCount.textContent =
            demands.length;

    }

}


/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}
