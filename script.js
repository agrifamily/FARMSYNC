document.addEventListener("DOMContentLoaded", () => {

    // ===== SPLASH / ENTRANCE =====
    const splash = document.getElementById("splash");
    const app = document.getElementById("app");
    const enterBtn = document.getElementById("enterBtn");

    // Safety: automatically remove loading after 2.5 sec
    setTimeout(() => {
        if (splash) {
            splash.classList.add("hide");
        }

        if (app) {
            app.classList.add("show");
        }
    }, 2500);


    // ENTER FARMSYNC button
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {

            if (splash) {
                splash.classList.add("hide");
            }

            if (app) {
                app.classList.add("show");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ===== ROLE BUTTONS =====
    const farmerBtn = document.getElementById("farmerBtn");
    const consumerBtn = document.getElementById("consumerBtn");

    if (farmerBtn) {
        farmerBtn.addEventListener("click", () => {
            showDashboard("farmer");
        });
    }

    if (consumerBtn) {
        consumerBtn.addEventListener("click", () => {
            showDashboard("consumer");
        });
    }


    // ===== DASHBOARD =====
    function showDashboard(role) {

        const farmerDashboard =
            document.getElementById("farmerDashboard");

        const consumerDashboard =
            document.getElementById("consumerDashboard");

        if (farmerDashboard) {
            farmerDashboard.style.display =
                role === "farmer" ? "block" : "none";
        }

        if (consumerDashboard) {
            consumerDashboard.style.display =
                role === "consumer" ? "block" : "none";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // ===== ADD PRODUCE =====
    const addProduceBtn =
        document.getElementById("addProduceBtn");

    if (addProduceBtn) {

        addProduceBtn.addEventListener("click", () => {

            const name =
                document.getElementById("farmerName")?.value;

            const location =
                document.getElementById("farmerLocation")?.value;

            const crop =
                document.getElementById("cropName")?.value;

            const quantity =
                Number(document.getElementById("quantity")?.value);

            const price =
                Number(document.getElementById("price")?.value);

            if (!name || !location || !crop ||
                !quantity || !price) {

                alert("Please fill all details.");
                return;
            }

            const produce = {
                id: Date.now(),
                name,
                location,
                crop,
                quantity,
                price
            };

            let data =
                JSON.parse(localStorage.getItem("farmsyncProduce")) || [];

            data.push(produce);

            localStorage.setItem(
                "farmsyncProduce",
                JSON.stringify(data)
            );

            alert("Produce successfully added! 🌱");

            loadProduce();
        });
    }


    // ===== LOAD PRODUCE =====
    function loadProduce() {

        const container =
            document.getElementById("produceList");

        if (!container) return;

        let data =
            JSON.parse(localStorage.getItem("farmsyncProduce")) || [];

        container.innerHTML = "";

        if (data.length === 0) {

            container.innerHTML =
                `<div class="empty-box">
                    🌱 No produce listed yet
                </div>`;

            return;
        }

        data.forEach(item => {

            const card = document.createElement("div");

            card.className = "produce-card";

            card.innerHTML = `
                <div class="produce-icon">🍅</div>

                <div>
                    <h3>${item.crop}</h3>

                    <p>👨‍🌾 ${item.name}</p>

                    <p>📍 ${item.location}</p>

                    <p>📦 ${item.quantity} kg</p>

                    <strong>₹${item.price}/kg</strong>
                </div>

                <button onclick="matchProduce(${item.id})">
                    ⚡ Match
                </button>
            `;

            container.appendChild(card);
        });
    }


    // ===== SEARCH =====
    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const query =
                searchInput.value.toLowerCase();

            document
                .querySelectorAll(".produce-card")
                .forEach(card => {

                    const text =
                        card.innerText.toLowerCase();

                    card.style.display =
                        text.includes(query)
                            ? "flex"
                            : "none";
                });
        });
    }


    // ===== POWERPOOL LIVE DEMAND =====
    let demand = 500;

    function updateDemand() {

        const demandValue =
            document.getElementById("demandValue");

        const demandBar =
            document.getElementById("demandBar");

        if (demandValue) {
            demandValue.textContent =
                demand + " kg";
        }

        if (demandBar) {

            const percentage =
                Math.min((demand / 1000) * 100, 100);

            demandBar.style.width =
                percentage + "%";
        }
    }

    updateDemand();

    // Simulated live demand update
    setInterval(() => {

        const change =
            Math.floor(Math.random() * 21) - 10;

        demand += change;

        if (demand < 300) demand = 300;
        if (demand > 800) demand = 800;

        updateDemand();

    }, 5000);


    // ===== SMART MATCH =====
    window.matchProduce = function(id) {

        const data =
            JSON.parse(
                localStorage.getItem("farmsyncProduce")
            ) || [];

        const item =
            data.find(x => x.id === id);

        if (!item) return;

        const score =
            Math.floor(Math.random() * 16) + 84;

        alert(
            `⚡ POWERPOOL MATCH FOUND!\n\n` +
            `Farmer: ${item.name}\n` +
            `Location: ${item.location}\n` +
            `Crop: ${item.crop}\n` +
            `Supply: ${item.quantity} kg\n\n` +
            `🎯 Smart Match Score: ${score}%`
        );
    };


    // ===== DELIVERY TRACKING =====
    const trackBtn =
        document.getElementById("trackBtn");

    if (trackBtn) {

        trackBtn.addEventListener("click", () => {

            const steps =
                document.querySelectorAll(".delivery-step");

            steps.forEach((step, index) => {

                setTimeout(() => {
                    step.classList.add("active");
                }, index * 700);

            });

        });
    }


    // ===== AI DEMAND FORECAST DEMO =====
    const forecastBtn =
        document.getElementById("forecastBtn");

    if (forecastBtn) {

        forecastBtn.addEventListener("click", () => {

            const result =
                document.getElementById("forecastResult");

            if (!result) return;

            result.innerHTML =
                `
                🤖 AI Demand Forecast

                <br><br>

                🍅 Tomato demand next week:
                <strong>+18%</strong>

                <br>

                📦 Expected demand:
                <strong>590 kg</strong>

                <br>

                📈 Confidence:
                <strong>87%</strong>
                `;

            result.classList.add("forecast-active");
        });
    }


    // ===== QR TRACEABILITY =====
    const qrBtn =
        document.getElementById("qrBtn");

    if (qrBtn) {

        qrBtn.addEventListener("click", () => {

            const qrResult =
                document.getElementById("qrResult");

            if (!qrResult) return;

            qrResult.innerHTML =
                `
                <div class="qr-demo">
                    <div class="fake-qr">
                        ▦ ▦ ▦ ▦<br>
                        ▦ ▦ ▦ ▦<br>
                        ▦ ▦ ▦ ▦<br>
                        ▦ ▦ ▦ ▦
                    </div>

                    <strong>FARMSYNC TRACE ID</strong>

                    <small>
                        Farm → Collection → Consumer
                    </small>
                </div>
                `;
        });
    }


    // ===== RANDOM USER DATA =====
    const farmerNames = [
        "Arun Kumar",
        "Suresh",
        "Ramesh",
        "Karthik",
        "Mohan",
        "Prakash"
    ];

    const farmerLocations = [
        "Coimbatore",
        "Pollachi",
        "Erode",
        "Tiruppur",
        "Salem",
        "Namakkal"
    ];

    const consumerNames = [
        "Priya",
        "Anitha",
        "Rahul",
        "Vijay",
        "Meena",
        "Harish"
    ];

    const consumerLocations = [
        "Coimbatore",
        "Chennai",
        "Erode",
        "Salem",
        "Tiruppur",
        "Madurai"
    ];


    function randomItem(array) {
        return array[
            Math.floor(Math.random() * array.length)
        ];
    }


    // Random farmer
    const randomFarmer =
        document.getElementById("randomFarmer");

    if (randomFarmer) {

        randomFarmer.innerHTML =
            `
            👨‍🌾 ${randomItem(farmerNames)}
            <br>
            📍 ${randomItem(farmerLocations)}
            `;
    }


    // Random consumer
    const randomConsumer =
        document.getElementById("randomConsumer");

    if (randomConsumer) {

        randomConsumer.innerHTML =
            `
            👥 ${randomItem(consumerNames)}
            <br>
            📍 ${randomItem(consumerLocations)}
            `;
    }


    // ===== INITIAL LOAD =====
    loadProduce();

});
