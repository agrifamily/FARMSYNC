/* =====================================================
   FARMSYNC
   Farm to Family
   Demo Application
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("FARMSYNC JavaScript Loaded Successfully");


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const splash =
        document.getElementById("splash");

    const app =
        document.getElementById("app");

    const enterBtn =
        document.getElementById("enterBtn");

    const farmerBtn =
        document.getElementById("farmerBtn");

    const consumerBtn =
        document.getElementById("consumerBtn");

    const farmerDashboard =
        document.getElementById("farmerDashboard");

    const consumerDashboard =
        document.getElementById("consumerDashboard");


    /* =====================================================
       LOCAL STORAGE
    ===================================================== */

    const STORAGE_KEY =
        "FARMSYNC_PRODUCE_DATA";

    const DEMAND_KEY =
        "FARMSYNC_DEMAND_DATA";


    /* =====================================================
       DEFAULT PRODUCE
    ===================================================== */

    let produceData =
        JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );


    if (!Array.isArray(produceData)) {

        produceData = [

            {
                id: 1,
                name: "Arun Kumar",
                location: "Coimbatore",
                crop: "Tomato",
                quantity: 100,
                price: 28
            },

            {
                id: 2,
                name: "Suresh",
                location: "Pollachi",
                crop: "Tomato",
                quantity: 150,
                price: 27
            },

            {
                id: 3,
                name: "Karthik",
                location: "Erode",
                crop: "Onion",
                quantity: 200,
                price: 34
            },

            {
                id: 4,
                name: "Ramesh",
                location: "Tiruppur",
                crop: "Banana",
                quantity: 180,
                price: 32
            }

        ];

        saveProduce();
    }


    function saveProduce() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(produceData)
        );

    }


    /* =====================================================
       ENTRANCE SCREEN
    ===================================================== */

    function enterApp() {

        splash.classList.add("hide");

        setTimeout(function () {

            app.classList.add("show");

        }, 250);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    enterBtn.addEventListener(
        "click",
        enterApp
    );


    /* Auto entrance after loading */

    setTimeout(function () {

        if (!splash.classList.contains("hide")) {

            enterApp();

        }

    }, 3000);


    /* =====================================================
       ROLE SWITCHING
    ===================================================== */

    function showFarmer() {

        farmerDashboard.classList.remove("hidden");

        consumerDashboard.classList.add("hidden");

        farmerBtn.classList.add("active");

        consumerBtn.classList.remove("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    function showConsumer() {

        farmerDashboard.classList.add("hidden");

        consumerDashboard.classList.remove("hidden");

        farmerBtn.classList.remove("active");

        consumerBtn.classList.add("active");

        renderConsumerProduce();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    farmerBtn.addEventListener(
        "click",
        showFarmer
    );


    consumerBtn.addEventListener(
        "click",
        showConsumer
    );


    /* =====================================================
       TOAST
    ===================================================== */

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");


    function showToast(message) {

        toastMessage.textContent =
            message;

        toast.classList.add("show");

        setTimeout(function () {

            toast.classList.remove("show");

        }, 2500);

    }


    /* =====================================================
       FARMER PRODUCE
    ===================================================== */

    function renderProduce() {

        const list =
            document.getElementById("produceList");

        list.innerHTML = "";


        if (produceData.length === 0) {

            list.innerHTML =
                `
                <div class="empty-box">
                    🌱 No produce listed yet.
                </div>
                `;

        }


        produceData.forEach(function (item) {

            const card =
                document.createElement("div");

            card.className =
                "produce-card";


            let emoji = "🌱";

            if (item.crop === "Tomato")
                emoji = "🍅";

            if (item.crop === "Onion")
                emoji = "🧅";

            if (item.crop === "Potato")
                emoji = "🥔";

            if (item.crop === "Banana")
                emoji = "🍌";

            if (item.crop === "Carrot")
                emoji = "🥕";

            if (item.crop === "Brinjal")
                emoji = "🍆";

            if (item.crop === "Chilli")
                emoji = "🌶️";


            card.innerHTML =
                `
                <div class="produce-icon">
                    ${emoji}
                </div>

                <div class="produce-info">

                    <h3>${item.crop}</h3>

                    <p>
                        👨‍🌾 ${item.name}
                    </p>

                    <p>
                        📍 ${item.location}
                    </p>

                    <p>
                        📦 ${item.quantity} kg available
                    </p>

                    <div class="price">
                        ₹${item.price}/kg
                    </div>

                </div>

                <button
                    class="match-small"
                    onclick="quickMatch(${item.id})">

                    ⚡ Match

                </button>
                `;


            list.appendChild(card);

        });


        document.getElementById(
            "produceCount"
        ).textContent =
            produceData.length;


        document.getElementById(
            "farmerListingCount"
        ).textContent =
            produceData.length +
            " Listings";

    }


    /* =====================================================
       ADD PRODUCE
    ===================================================== */

    const addProduceBtn =
        document.getElementById(
            "addProduceBtn"
        );


    addProduceBtn.addEventListener(
        "click",
        function () {

            const name =
                document.getElementById(
                    "farmerName"
                ).value.trim();


            const location =
                document.getElementById(
                    "farmerLocation"
                ).value.trim();


            const crop =
                document.getElementById(
                    "cropName"
                ).value;


            const quantity =
                Number(
                    document.getElementById(
                        "quantity"
                    ).value
                );


            const price =
                Number(
                    document.getElementById(
                        "price"
                    ).value
                );


            if (
                !name ||
                !location ||
                !crop ||
                quantity <= 0 ||
                price <= 0
            ) {

                showToast(
                    "Please fill all produce details"
                );

                return;

            }


            const newProduce = {

                id:
                    Date.now(),

                name:
                    name,

                location:
                    location,

                crop:
                    crop,

                quantity:
                    quantity,

                price:
                    price

            };


            produceData.unshift(
                newProduce
            );


            saveProduce();

            renderProduce();

            renderConsumerProduce();


            document.getElementById(
                "farmerName"
            ).value = "";


            document.getElementById(
                "farmerLocation"
            ).value = "";


            document.getElementById(
                "cropName"
            ).value = "";


            document.getElementById(
                "quantity"
            ).value = "";


            document.getElementById(
                "price"
            ).value = "";


            showToast(
                "🌱 Produce successfully added!"
            );

        }
    );


    /* =====================================================
       QUICK MATCH
    ===================================================== */

    window.quickMatch =
        function (id) {

            const item =
                produceData.find(
                    x => x.id === id
                );


            if (!item) return;


            const score =
                Math.floor(
                    Math.random() * 8
                ) + 92;


            showToast(
                "⚡ " +
                item.crop +
                " matched with " +
                score +
                "% score!"
            );


            alert(

                "⚡ POWERPOOL MATCH\n\n" +

                "Farmer: " +
                item.name +

                "\nLocation: " +
                item.location +

                "\nCrop: " +
                item.crop +

                "\nSupply: " +
                item.quantity +
                " kg" +

                "\nPrice: ₹" +
                item.price +
                "/kg" +

                "\n\n🎯 Smart Match Score: " +
                score +
                "%"

            );

        };


    /* =====================================================
       CONSUMER MARKET
    ===================================================== */

    function renderConsumerProduce(
        search = ""
    ) {

        const container =
            document.getElementById(
                "consumerProduceList"
            );


        container.innerHTML = "";


        const filtered =
            produceData.filter(
                item =>

                    item.crop
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

                    ||

                    item.name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

                    ||

                    item.location
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );


        if (filtered.length === 0) {

            container.innerHTML =
                `
                <div class="empty-box">
                    🔎 No matching produce found.
                </div>
                `;

            return;
        }


        filtered.forEach(function (item) {

            const card =
                document.createElement("div");

            card.className =
                "produce-card";


            card.innerHTML =
                `
                <div class="produce-icon">
                    🍅
                </div>

                <div class="produce-info">

                    <h3>
                        ${item.crop}
                    </h3>

                    <p>
                        👨‍🌾 ${item.name}
                    </p>

                    <p>
                        📍 ${item.location}
                    </p>

                    <p>
                        📦 ${item.quantity} kg
                    </p>

                    <div class="price">
                        ₹${item.price}/kg
                    </div>

                </div>

                <button
                    class="match-small"
                    onclick="requestProduce('${item.crop}')">

                    🛒 Request

                </button>
                `;


            container.appendChild(card);

        });

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    document
        .getElementById("searchInput")
        .addEventListener(
            "input",
            function () {

                renderConsumerProduce(
                    this.value
                );

            }
        );


    /* =====================================================
       CONSUMER DEMAND
    ===================================================== */

    let demand =
        Number(
            localStorage.getItem(
                DEMAND_KEY
            )
        ) || 500;


    let requests =
        Number(
            localStorage.getItem(
                "FARMSYNC_REQUESTS"
            )
        ) || 24;


    function updateDemandUI() {

        document.getElementById(
            "demandValue"
        ).textContent =
            demand + " kg";


        document.getElementById(
            "demandNumber"
        ).textContent =
            demand + " kg";


        const percent =
            Math.min(
                demand / 10,
                100
            );


        document.getElementById(
            "demandBar"
        ).style.width =
            percent + "%";


        document.getElementById(
            "consumerRequests"
        ).textContent =
            requests;


        const totalSupply =
            produceData.reduce(
                (sum, item) =>
                    sum + Number(item.quantity),
                0
            );


        const gap =
            Math.max(
                0,
                demand - totalSupply
            );


        document.getElementById(
            "supplyGap"
        ).textContent =
            gap + " kg";

    }


    /* =====================================================
       CONSUMER DEMAND BUTTON
    ===================================================== */

    document
        .getElementById("demandBtn")
        .addEventListener(
            "click",
            function () {

                const name =
                    document.getElementById(
                        "consumerName"
                    ).value.trim();


                const location =
                    document.getElementById(
                        "consumerLocation"
                    ).value.trim();


                const crop =
                    document.getElementById(
                        "consumerCrop"
                    ).value;


                const qty =
                    Number(
                        document.getElementById(
                            "consumerQty"
                        ).value
                    );


                if (
                    !name ||
                    !location ||
                    qty <= 0
                ) {

                    showToast(
                        "Please enter consumer details"
                    );

                    return;

                }


                demand += qty;

                requests += 1;


                localStorage.setItem(
                    DEMAND_KEY,
                    demand
                );


                localStorage.setItem(
                    "FARMSYNC_REQUESTS",
                    requests
                );


                updateDemandUI();


                addConsumerCard(
                    name,
                    location,
                    crop,
                    qty
                );


                document.getElementById(
                    "consumerName"
                ).value = "";


                document.getElementById(
                    "consumerLocation"
                ).value = "";


                document.getElementById(
                    "consumerQty"
                ).value = "";


                showToast(
                    "⚡ Demand added to PowerPool!"
                );

            }
        );


    /* =====================================================
       REQUEST PRODUCE
    ===================================================== */

    window.requestProduce =
        function (crop) {

            demand += 25;

            requests += 1;


            localStorage.setItem(
                DEMAND_KEY,
                demand
            );


            localStorage.setItem(
                "FARMSYNC_REQUESTS",
                requests
            );


            updateDemandUI();


            showToast(
                "⚡ " +
                crop +
                " demand added to PowerPool!"
            );

        };


    /* =====================================================
       RANDOM PEOPLE
    ===================================================== */

    const farmerNames = [

        "Arun Kumar",
        "Suresh",
        "Ramesh",
        "Karthik",
        "Mohan",
        "Prakash",
        "Vignesh",
        "Selvam",
        "Mani"

    ];


    const farmerLocations = [

        "Coimbatore",
        "Pollachi",
        "Erode",
        "Tiruppur",
        "Salem",
        "Namakkal",
        "Madurai",
        "Dindigul",
        "Karur"

    ];


    const consumerNames = [

        "Priya",
        "Anitha",
        "Rahul",
        "Vijay",
        "Meena",
        "Harish",
        "Divya",
        "Naveen",
        "Kavya"

    ];


    const consumerLocations = [

        "Coimbatore",
        "Chennai",
        "Erode",
        "Salem",
        "Tiruppur",
        "Madurai",
        "Trichy",
        "Bangalore",
        "Mysore"

    ];


    function randomItem(array) {

        return array[
            Math.floor(
                Math.random() *
                array.length
            )
        ];

    }


    function renderRandomPeople() {

        const farmerGrid =
            document.getElementById(
                "randomFarmerGrid"
            );


        const consumerGrid =
            document.getElementById(
                "randomConsumerGrid"
            );


        farmerGrid.innerHTML = "";

        consumerGrid.innerHTML = "";


        for (
            let i = 0;
            i < 6;
            i++
        ) {

            const name =
                randomItem(
                    farmerNames
                );


            const location =
                randomItem(
                    farmerLocations
                );


            farmerGrid.innerHTML +=

                `
                <div class="person">

                    <div class="person-avatar">
                        👨‍🌾
                    </div>

                    <strong>
                        ${name}
                    </strong>

                    <small>
                        📍 ${location}
                    </small>

                </div>
                `;

        }


        for (
            let i = 0;
            i < 6;
            i++
        ) {

            const name =
                randomItem(
                    consumerNames
                );


            const location =
                randomItem(
                    consumerLocations
                );


            consumerGrid.innerHTML +=

                `
                <div class="person">

                    <div class="person-avatar">
                        👥
                    </div>

                    <strong>
                        ${name}
                    </strong>

                    <small>
                        📍 ${location}
                    </small>

                </div>
                `;

        }

    }


    /* =====================================================
       AI FORECAST
    ===================================================== */

    document
        .getElementById("forecastBtn")
        .addEventListener(
            "click",
            function () {

                const growth =
                    Math.floor(
                        Math.random() * 12
                    ) + 10;


                const forecast =
                    Math.round(
                        demand *
                        (1 + growth / 100)
                    );


                document.getElementById(
                    "forecastResult"
                ).innerHTML =

                    `
                    🤖 <strong>AI DEMAND FORECAST</strong>

                    <br>

                    Current PowerPool:
                    <strong>
                        ${demand} kg
                    </strong>

                    <br>

                    Predicted growth:
                    <strong>
                        +${growth}%
                    </strong>

                    <br>

                    Expected next-period demand:
                    <strong>
                        ${forecast} kg
                    </strong>

                    <br>

                    Confidence:
                    <strong>
                        87%
                    </strong>

                    <br><br>

                    <span style="color:#79e8b2">
                    Demo prediction — not a real production AI model.
                    </span>
                    `;


                document.getElementById(
                    "forecastResult"
                ).classList.add(
                    "forecast-active"
                );


                showToast(
                    "🤖 AI forecast generated"
                );

            }
        );


    /* =====================================================
       LIVE MULTIPLE FARMER MATCHING
    ===================================================== */

    document
        .getElementById(
            "runMatchingBtn"
        )
        .addEventListener(
            "click",
            function () {

                const result =
                    document.getElementById(
                        "matchingResult"
                    );


                result.innerHTML =

                    `
                    <div class="result-box">
                        ⚡ PowerPool scanning farmer supply...
                    </div>
                    `;


                setTimeout(
                    function () {

                        const tomatoFarmers =
                            produceData
                                .filter(
                                    x =>
                                        x.crop ===
                                        "Tomato"
                                )
                                .slice(0,4);


                        result.innerHTML =
                            `<div class="match-result"></div>`;


                        const box =
                            result.querySelector(
                                ".match-result"
                            );


                        tomatoFarmers.forEach(
                            function (
                                farmer,
                                index
                            ) {

                                setTimeout(
                                    function () {

                                        const score =
                                            90 +
                                            Math.floor(
                                                Math.random() * 10
                                            );


                                        box.innerHTML +=

                                            `
                                            <div class="match-result-item">

                                                <span>
                                                    🌾
                                                    ${farmer.name}
                                                    <small>
                                                        📍 ${farmer.location}
                                                    </small>
                                                </span>

                                                <span class="score">
                                                    ${score}% MATCH
                                                </span>

                                            </div>
                                            `;

                                    },
                                    index * 500
                                );

                            }
                        );


                        if (
                            tomatoFarmers.length === 0
                        ) {

                            box.innerHTML =

                                `
                                <div class="match-result-item">

                                    🌱 Add tomato farmers
                                    to demonstrate
                                    multiple matching.

                                </div>
                                `;

                        }

                    },
                    900
                );


                showToast(
                    "⚡ Live matching started"
                );

            }
        );


    /* =====================================================
       DELIVERY TRACKING
    ===================================================== */

    document
        .getElementById("trackBtn")
        .addEventListener(
            "click",
            function () {

                const steps =
                    document.querySelectorAll(
                        ".delivery-step"
                    );


                steps.forEach(
                    function (
                        step,
                        index
                    ) {

                        setTimeout(
                            function () {

                                step.classList.add(
                                    "active"
                                );

                            },
                            index * 650
                        );

                    }
                );


                showToast(
                    "🚚 Delivery tracking started"
                );

            }
        );


    /* =====================================================
       QR TRACEABILITY
    ===================================================== */

    document
        .getElementById("qrBtn")
        .addEventListener(
            "click",
            function () {

                const id =
                    "FS-" +
                    Math.floor(
                        100000 +
                        Math.random() *
                        899999
                    );


                document.getElementById(
                    "qrResult"
                ).innerHTML =

                    `
                    <div class="qr-demo">

                        <div class="fake-qr">

                            ▦ ▦ ▦ ▦<br>
                            ▦ ▦ ▦ ▦<br>
                            ▦ ▦ ▦ ▦<br>
                            ▦ ▦ ▦ ▦

                        </div>

                        <div>

                            <strong>
                                🔐 ${id}
                            </strong>

                            <small>
                                Farm → Collection →
                                Transit → Family
                            </small>

                            <small>
                                Digital traceability demo
                            </small>

                        </div>

                    </div>
                    `;


                showToast(
                    "🔐 Trace QR generated"
                );

            }
        );


    /* =====================================================
       CONSUMER RANDOM CARD
    ===================================================== */

    function addConsumerCard(
        name,
        location,
        crop,
        qty
    ) {

        const grid =
            document.getElementById(
                "randomConsumerGrid"
            );


        grid.insertAdjacentHTML(
            "afterbegin",

            `
            <div class="person">

                <div class="person-avatar">
                    👥
                </div>

                <strong>
                    ${name}
                </strong>

                <small>
                    📍 ${location}
                </small>

                <small>
                    ⚡ ${crop} • ${qty} kg
                </small>

            </div>
            `
        );

    }


    /* =====================================================
       LIVE DEMAND SIMULATION
    ===================================================== */

    setInterval(
        function () {

            const change =
                Math.floor(
                    Math.random() * 11
                ) - 5;


            demand += change;


            if (demand < 100) {
                demand = 100;
            }


            if (demand > 950) {
                demand = 950;
            }


            localStorage.setItem(
                DEMAND_KEY,
                demand
            );


            updateDemandUI();

        },
        5000
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    renderProduce();

    renderConsumerProduce();

    renderRandomPeople();

    updateDemandUI();


    /* =====================================================
       SUCCESS MESSAGE
    ===================================================== */

    console.log(
        "FARMSYNC initialized successfully."
    );

});
