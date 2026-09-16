/* =========================================
   FARMSYNC - SMART AGRICULTURE DEMO
========================================= */

const app = document.getElementById("app");
const toast = document.getElementById("toast");

let currentRole = "";

const farmers = [
  {
    name: "Arun Kumar",
    location: "Pollachi",
    crop: "Tomato",
    quantity: 200,
    price: 27,
    match: 94
  },
  {
    name: "Suresh",
    location: "Udumalpet",
    crop: "Tomato",
    quantity: 180,
    price: 26,
    match: 89
  },
  {
    name: "Prakash",
    location: "Tiruppur",
    crop: "Tomato",
    quantity: 120,
    price: 28,
    match: 84
  }
];

const randomConsumers = [
  ["Rahul", "Coimbatore"],
  ["Priya", "Tiruppur"],
  ["Karthik", "Pollachi"],
  ["Divya", "Erode"],
  ["Arun", "Coimbatore"],
  ["Meena", "Udumalpet"]
];


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
    showHome();
  }, 1200);

});


/* =========================================
   HOME
========================================= */

function showHome() {

  app.innerHTML = `
    <section class="home">

      <div class="digital-orbit">
        <div class="orbit-dot">🌱</div>
      </div>

      <div class="brand-icon">🌱</div>

      <h1 class="brand-title">
        FARM<span>SYNC</span>
      </h1>

      <div class="brand-subtitle">
        Farm to Family
      </div>

      <p class="brand-description">
        Connecting Farmers with Consumer Demand
      </p>

      <div class="role-grid">

        <div class="role-card" onclick="openFarmer()">
          <div class="role-icon">👨‍🌾</div>

          <h2>Farmer</h2>

          <p>
            List your produce and connect
            directly with consumer demand.
          </p>

          <div class="arrow">→</div>
        </div>


        <div class="role-card" onclick="openConsumer()">
          <div class="role-icon">🛒</div>

          <h2>Consumer</h2>

          <p>
            Find fresh produce and create
            group demand through PowerPool.
          </p>

          <div class="arrow">→</div>
        </div>

      </div>


      <div class="feature-strip">
        <span>⚡ PowerPool</span>
        <span>🎯 Smart Matching</span>
        <span>🤖 AI Forecast</span>
        <span>📍 Location Matching</span>
      </div>

    </section>
  `;
}


/* =========================================
   FARMER DASHBOARD
========================================= */

function openFarmer() {

  currentRole = "farmer";

  app.innerHTML = `

    <main class="dashboard">

      <div class="topbar">

        <button class="back-btn" onclick="showHome()">←</button>

        <div class="topbar-title">

          <div class="topbar-icon">👨‍🌾</div>

          <div>
            <h2>Farmer Dashboard</h2>
            <small>
              Smart marketplace
              <span class="status-dot">●</span> Live
            </small>
          </div>

        </div>

      </div>


      <section class="welcome-card">

        <div>
          <div class="live-label">
            FARMER NETWORK
          </div>

          <h2>Welcome, Farmer 👋</h2>

          <p>
            Connect your harvest with real consumer demand.
          </p>
        </div>

        <div class="welcome-icon">
          🌾
        </div>

      </section>


      <div class="dashboard-grid">

        <div class="stat-card">
          <span>🥕</span>
          <div>
            <small>Active Produce</small>
            <strong>12</strong>
          </div>
        </div>

        <div class="stat-card">
          <span>⚡</span>
          <div>
            <small>PowerPool Demand</small>
            <strong>500 kg</strong>
          </div>
        </div>

        <div class="stat-card">
          <span>💰</span>
          <div>
            <small>Potential Sales</small>
            <strong>₹13.5K</strong>
          </div>
        </div>

      </div>


      <button class="primary-btn" onclick="addProduce()">
        + List New Produce
      </button>


      <!-- POWERPOOL -->

      <section class="powerpool-panel">

        <div class="powerpool-head">

          <div class="powerpool-logo">
            ⚡
          </div>

          <div>
            <span>SMART DEMAND ENGINE</span>
            <h2>PowerPool</h2>
          </div>

          <div class="active-pill">
            ● ACTIVE
          </div>

        </div>


        <div class="power-flow">

          <div class="flow-node">
            👨‍👩‍👧
            <small>Demand</small>
          </div>

          <div class="flow-line"></div>

          <div class="flow-node power-node">
            ⚡
            <small>PowerPool</small>
          </div>

          <div class="flow-line"></div>

          <div class="flow-node">
            👨‍🌾
            <small>Supply</small>
          </div>

        </div>

        <p>
          Aggregating consumer demand and matching
          suitable farmer supply.
        </p>

      </section>


      <!-- NEW FEATURES -->

      <div class="feature-dashboard">


        <!-- Demand -->

        <div class="feature-card">

          <div class="feature-card-header">
            <h3>📊 Live Demand</h3>
            <span>🍅</span>
          </div>

          <div class="demand-top">
            <span>Tomato Demand</span>
            <strong>420 / 500 kg</strong>
          </div>

          <div class="demand-meter">
            <div class="demand-track">
              <div class="demand-fill"></div>
            </div>
          </div>

          <small>
            84% of the current pool requirement
          </small>

        </div>


        <!-- Supply Gap -->

        <div class="feature-card">

          <div class="feature-card-header">
            <h3>⚠️ Supply Gap</h3>
            <span>📦</span>
          </div>

          <p>
            Current demand is higher than available supply.
          </p>

          <div class="gap-box">
            <div>
              <small>Required</small>
              <strong>500 kg</strong>
            </div>

            <div>
              <small>Available</small>
              <strong>380 kg</strong>
            </div>

            <div>
              <small>Gap</small>
              <strong>120 kg</strong>
            </div>
          </div>

        </div>


        <!-- Multiple Farmer Pool -->

        <div class="feature-card full">

          <div class="feature-card-header">

            <div>
              <h3>🔗 Multi-Farmer Pool</h3>
              <small>
                One demand → Multiple farmers
              </small>
            </div>

            <span>⚡</span>

          </div>


          <div class="pool-list">

            <div class="pool-farmer">

              <div class="pool-avatar">👨‍🌾</div>

              <div class="pool-info">
                <strong>Arun Kumar</strong>
                <small>Pollachi · 94% Match</small>
              </div>

              <div class="pool-quantity">
                200 kg
              </div>

            </div>


            <div class="pool-farmer">

              <div class="pool-avatar">👨‍🌾</div>

              <div class="pool-info">
                <strong>Suresh</strong>
                <small>Udumalpet · 89% Match</small>
              </div>

              <div class="pool-quantity">
                180 kg
              </div>

            </div>


            <div class="pool-farmer">

              <div class="pool-avatar">👨‍🌾</div>

              <div class="pool-info">
                <strong>Prakash</strong>
                <small>Tiruppur · 84% Match</small>
              </div>

              <div class="pool-quantity">
                120 kg
              </div>

            </div>

          </div>

        </div>


        <!-- AI Forecast -->

        <div class="feature-card ai-forecast">

          <div class="feature-card-header">
            <h3>🤖 AI Demand Forecast</h3>
            <span>📈</span>
          </div>

          <div class="forecast-number">
            620 kg
          </div>

          <div class="forecast-up">
            ↑ 24% expected demand
          </div>

          <p>
            Predicted tomato demand for next week.
          </p>

        </div>


        <!-- Smart Match -->

        <div class="feature-card">

          <div class="feature-card-header">
            <h3>🎯 Smart Match</h3>
            <span>🧠</span>
          </div>

          <div class="farmer-match">

            <div class="farmer-match-top">
              <strong>Arun Kumar</strong>
              <span class="match-score">94%</span>
            </div>

            <small>Location + Price + Quantity</small>

            <div class="match-bar">
              <span style="width:94%"></span>
            </div>

          </div>


          <div class="farmer-match">

            <div class="farmer-match-top">
              <strong>Suresh</strong>
              <span class="match-score">89%</span>
            </div>

            <small>Location + Price + Quantity</small>

            <div class="match-bar">
              <span style="width:89%"></span>
            </div>

          </div>

        </div>


        <!-- Delivery -->

        <div class="feature-card full">

          <div class="feature-card-header">
            <h3>🚚 Delivery Tracking</h3>
            <span>📍</span>
          </div>

          <div class="delivery-steps">

            <div class="delivery-step">
              <div class="delivery-step-icon">👨‍🌾</div>
              <strong>Farmer</strong>
              <small>Confirmed</small>
            </div>

            <div class="delivery-line"></div>

            <div class="delivery-step">
              <div class="delivery-step-icon">🚚</div>
              <strong>Transit</strong>
              <small>On the way</small>
            </div>

            <div class="delivery-line"></div>

            <div class="delivery-step">
              <div class="delivery-step-icon">🏠</div>
              <strong>Consumer</strong>
              <small>Pending</small>
            </div>

          </div>

        </div>


        <!-- QR -->

        <div class="feature-card full">

          <div class="feature-card-header">
            <h3>🔐 Produce Traceability</h3>
            <span>▣</span>
          </div>

          <div class="qr-trace">

            <div class="qr-code"></div>

            <div>
              <strong>Tomato Batch #FS-2026-001</strong>

              <p>
                Scan to view farmer, location,
                harvest date and supply journey.
              </p>

              <button
                class="small-btn"
                onclick="showToast('Traceability demo opened')">
                View Trace
              </button>

            </div>

          </div>

        </div>


        <!-- Digital Network -->

        <div class="feature-card full">

          <div class="feature-card-header">
            <h3>🌐 FARMSYNC Digital Network</h3>
            <span>🔗</span>
          </div>

          <div class="network">

            <div class="network-title">
              LIVE FARM → FAMILY CONNECTION
            </div>

            <div class="network-node n1">👨‍🌾</div>
            <div class="network-node n2">🛒</div>
            <div class="network-node n3">👨‍🌾</div>
            <div class="network-node n4">🏠</div>

            <div class="network-center">
              ⚡
            </div>

          </div>

        </div>

      </div>

    </main>
  `;
}


/* =========================================
   ADD PRODUCE
========================================= */

function addProduce() {

  app.innerHTML = `

    <main class="dashboard">

      <div class="topbar">

        <button class="back-btn"
          onclick="openFarmer()">
          ←
        </button>

        <div class="topbar-title">
          <div class="topbar-icon">🌱</div>

          <div>
            <h2>List Your Produce</h2>
            <small>Connect with demand</small>
          </div>
        </div>

      </div>


      <div class="form-card">

        <div class="form-header">

          <div>
            <span>FARMER LISTING</span>
            <h2>Add Produce</h2>
          </div>

          <div class="form-icon">🍅</div>

        </div>


        <label>Farmer Name</label>
        <input
          id="farmerName"
          placeholder="Enter farmer name"
          value="Arun Kumar"
        >


        <label>Location</label>
        <input
          id="farmerLocation"
          placeholder="Enter location"
          value="Pollachi"
        >


        <label>Crop</label>
        <select id="crop">
          <option>Tomato</option>
          <option>Onion</option>
          <option>Potato</option>
          <option>Banana</option>
          <option>Carrot</option>
        </select>


        <label>Quantity (kg)</label>
        <input
          id="quantity"
          type="number"
          value="100"
        >


        <label>Price / kg</label>
        <input
          id="price"
          type="number"
          value="27"
        >


        <label>Harvest Date</label>
        <input
          id="harvestDate"
          type="date"
        >


        <button
          class="primary-btn"
          onclick="saveProduce()">
          🚀 Publish Produce
        </button>


        <button
          class="secondary-btn"
          onclick="openFarmer()">
          Cancel
        </button>

      </div>

    </main>
  `;
}


/* =========================================
   SAVE PRODUCE
========================================= */

function saveProduce() {

  const name =
    document.getElementById("farmerName").value;

  const location =
    document.getElementById("farmerLocation").value;

  const crop =
    document.getElementById("crop").value;

  const quantity =
    document.getElementById("quantity").value;

  const price =
    document.getElementById("price").value;

  if (!name || !location || !quantity || !price) {

    showToast("Please fill all required fields");

    return;
  }

  showToast("Produce successfully added!");

  setTimeout(() => {

    openFarmer();

  }, 700);

}


/* =========================================
   CONSUMER DASHBOARD
========================================= */

function openConsumer() {

  currentRole = "consumer";

  app.innerHTML = `

    <main class="dashboard">

      <div class="topbar">

        <button
          class="back-btn"
          onclick="showHome()">
          ←
        </button>

        <div class="topbar-title">

          <div class="topbar-icon">🛒</div>

          <div>
            <h2>Consumer Dashboard</h2>
            <small>
              Smart fresh produce
              <span class="status-dot">●</span>
              Live
            </small>
          </div>

        </div>

      </div>


      <section class="consumer-hero">

        <div>

          <div class="live-label">
            CONSUMER NETWORK
          </div>

          <h1>
            Find Fresh Produce 🥬
          </h1>

          <p>
            Connect directly with farmers.
          </p>

        </div>

        <div class="welcome-icon">
          🛒
        </div>

      </section>


      <div class="consumer-stats">

        <div>
          <strong>18</strong>
          <small>Farmers</small>
        </div>

        <div>
          <strong>42</strong>
          <small>Products</small>
        </div>

        <div>
          <strong>500kg</strong>
          <small>Active Pool</small>
        </div>

      </div>


      <div class="search-wrapper">

        🔎

        <input
          id="searchInput"
          placeholder="Search tomato, onion, banana..."
          oninput="filterProducts()"
        >

      </div>


      <div class="section-heading">

        <div>
          <h2>Available Produce</h2>
          <p>
            Fresh listings from farmers
          </p>
        </div>

        <div class="count-badge">
          LIVE
        </div>

      </div>


      <div
        id="productGrid"
        class="product-grid">

        ${renderProducts()}

      </div>


      <!-- CREATE DEMAND -->

      <section class="feature-card full"
        style="margin-top:20px">

        <div class="feature-card-header">

          <div>
            <h3>⚡ Create PowerPool Demand</h3>

            <small>
              Combine your demand with other consumers
            </small>
          </div>

          <span>📊</span>

        </div>


        <label>Product</label>

        <select id="demandCrop"
          class="form-card-input">

          <option>Tomato</option>
          <option>Onion</option>
          <option>Potato</option>
          <option>Banana</option>

        </select>


        <label
          style="display:block;margin-top:12px">
          Required Quantity (kg)
        </label>

        <input
          id="demandQty"
          type="number"
          value="20"
          style="
            width:100%;
            padding:14px;
            margin-top:7px;
            border:1px solid var(--border);
            border-radius:13px;
          "
        >


        <button
          class="primary-btn"
          onclick="createDemand()">

          ⚡ Add to PowerPool

        </button>

      </section>


      <!-- POWERPOOL -->

      <section
        class="powerpool-panel"
        style="margin-top:20px">

        <div class="powerpool-head">

          <div class="powerpool-logo">
            ⚡
          </div>

          <div>
            <span>COLLECTIVE DEMAND</span>
            <h2>PowerPool</h2>
          </div>

          <div class="active-pill">
            ● ACTIVE
          </div>

        </div>


        <div class="power-flow">

          <div class="flow-node">
            👨‍👩‍👧
            <small>Consumers</small>
          </div>

          <div class="flow-line"></div>

          <div class="flow-node power-node">
            ⚡
            <small>PowerPool</small>
          </div>

          <div class="flow-line"></div>

          <div class="flow-node">
            👨‍🌾
            <small>Farmers</small>
          </div>

        </div>


        <p>
          20 consumers → 500 kg demand →
          Multiple farmers
        </p>

      </section>


      <!-- AI -->

      <div class="feature-dashboard">

        <div class="feature-card ai-forecast">

          <div class="feature-card-header">
            <h3>🤖 AI Forecast</h3>
            <span>📈</span>
          </div>

          <div class="forecast-number">
            620 kg
          </div>

          <div class="forecast-up">
            ↑ 24% next week
          </div>

          <p>
            Predicted tomato demand.
          </p>

        </div>


        <div class="feature-card">

          <div class="feature-card-header">
            <h3>📍 Smart Location</h3>
            <span>🗺️</span>
          </div>

          <h2>
            3 Farmers Nearby
          </h2>

          <p>
            Matching based on location,
            price and availability.
          </p>

          <button
            class="small-btn"
            onclick="startMatching()"
            style="margin-top:12px">

            🎯 Find Best Match

          </button>

        </div>


        <div class="feature-card full">

          <div class="feature-card-header">

            <div>
              <h3>🔐 QR Produce Traceability</h3>

              <small>
                Know where your food came from
              </small>
            </div>

            <span>▣</span>

          </div>


          <div class="qr-trace">

            <div class="qr-code"></div>

            <div>

              <strong>
                Tomato Batch #FS-2026-001
              </strong>

              <p>
                Farmer: Arun Kumar<br>
                Location: Pollachi<br>
                Harvest: Fresh<br>
                Supply: PowerPool
              </p>

              <button
                class="small-btn"
                onclick="showTrace()">

                View Journey

              </button>

            </div>

          </div>

        </div>


        <div class="feature-card full">

          <div class="feature-card-header">
            <h3>🚚 Delivery Tracking</h3>
            <span>📍</span>
          </div>

          <div class="delivery-steps">

            <div class="delivery-step">

              <div class="delivery-step-icon">
                👨‍🌾
              </div>

              <strong>Farmer</strong>

              <small>Confirmed</small>

            </div>


            <div class="delivery-line"></div>


            <div class="delivery-step">

              <div class="delivery-step-icon">
                🚚
              </div>

              <strong>Transit</strong>

              <small>On the way</small>

            </div>


            <div class="delivery-line"></div>


            <div class="delivery-step">

              <div class="delivery-step-icon">
                🏠
              </div>

              <strong>Delivered</strong>

              <small>Pending</small>

            </div>

          </div>

        </div>

      </div>

    </main>
  `;
}


/* =========================================
   PRODUCTS
========================================= */

function renderProducts(list = farmers) {

  return list.map((f, index) => `

    <div class="product-card">

      <div class="product-main">

        <div class="product-icon">
          🍅
        </div>

        <div class="product-info">

          <div class="card-title-row">

            <h3>${f.crop}</h3>

            <span class="match-badge">
              ${f.match}% MATCH
            </span>

          </div>

          <p>
            👨‍🌾 ${f.name}
          </p>

          <p>
            📍 ${f.location}
          </p>

        </div>

        <div class="product-price">

          <strong>
            ₹${f.price}
          </strong>

          <small>/kg</small>

        </div>

      </div>


      <div class="product-meta">

        <span>
          📦 ${f.quantity} kg
        </span>

        <span>
          🌱 Fresh
        </span>

        <span>
          📍 Nearby
        </span>

      </div>


      <div class="match-progress">

        <div>
          <span>Smart Match</span>

          <strong>
            ${f.match}%
          </strong>
        </div>

        <div class="progress-track">

          <div
            class="progress-fill"
            style="width:${f.match}%">
          </div>

        </div>

      </div>


      <div class="product-actions">

        <button
          class="outline-btn"
          onclick="showTrace()">

          🔐 Trace

        </button>

        <button
          class="primary-small"
          onclick="startMatching(${index})">

          🎯 Match

        </button>

      </div>

    </div>

  `).join("");

}


/* =========================================
   SEARCH
========================================= */

function filterProducts() {

  const value =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered =
    farmers.filter(f =>
      f.crop.toLowerCase().includes(value) ||
      f.name.toLowerCase().includes(value) ||
      f.location.toLowerCase().includes(value)
    );

  document.getElementById("productGrid")
    .innerHTML =
    filtered.length
      ? renderProducts(filtered)
      : `
        <div class="empty-state">
          <div style="font-size:40px">🔎</div>
          <h3>No produce found</h3>
          <p>Try another crop or location.</p>
        </div>
      `;
}


/* =========================================
   CREATE DEMAND
========================================= */

function createDemand() {

  const crop =
    document.getElementById("demandCrop").value;

  const qty =
    document.getElementById("demandQty").value;

  showToast(
    `${qty} kg ${crop} added to PowerPool ⚡`
  );

  setTimeout(() => {

    startMatching();

  }, 900);

}


/* =========================================
   MATCHING
========================================= */

function startMatching(index = 0) {

  const farmer =
    farmers[index] || farmers[0];

  app.innerHTML = `

    <main class="matching-screen">

      <div class="matching-orbit">

        <span>🛒</span>

        <div class="orbit-ring">
          ⚡
        </div>

        <span>👨‍🌾</span>

      </div>


      <div class="live-label">
        POWERPOOL ENGINE
      </div>

      <h1>
        Finding Smart Match...
      </h1>

      <p>
        Analysing location, price,
        quantity and demand.
      </p>


      <div class="big-progress">
        <div></div>
      </div>


      <div class="matching-steps">

        <div class="matching-step active">
          <span>✓</span>
          Collecting consumer demand
        </div>

        <div class="matching-step active">
          <span>✓</span>
          Checking farmer supply
        </div>

        <div class="matching-step active">
          <span>✓</span>
          Comparing location
        </div>

        <div class="matching-step active">
          <span>✓</span>
          Calculating match score
        </div>

      </div>


      <small>
        PowerPool is creating the best supply combination...
      </small>

    </main>
  `;


  setTimeout(() => {

    showMatchResult(farmer);

  }, 3200);

}


/* =========================================
   MATCH RESULT
========================================= */

function showMatchResult(farmer) {

  app.innerHTML = `

    <main class="success-screen">

      <div class="success-check">
        ✓
      </div>

      <div class="live-label">
        POWERPOOL MATCH FOUND
      </div>

      <h1>
        Smart Match Successful
      </h1>

      <p>
        Consumer demand successfully connected
        with farmer supply.
      </p>


      <div class="match-result-card">

        <div class="match-person">

          <div class="person-icon">
            🛒
          </div>

          <strong>
            Consumer Pool
          </strong>

          <span>
            20 Consumers
          </span>

        </div>


        <div class="connection-pulse">
          ⚡
        </div>


        <div class="match-person">

          <div class="person-icon">
            👨‍🌾
          </div>

          <strong>
            ${farmer.name}
          </strong>

          <span>
            📍 ${farmer.location}
          </span>

        </div>

      </div>


      <div class="match-stats">

        <div>
          <strong>
            ${farmer.match}%
          </strong>

          <small>
            Match Score
          </small>
        </div>

        <div>
          <strong>
            ${farmer.quantity} kg
          </strong>

          <small>
            Supply
          </small>
        </div>

        <div>
          <strong>
            ₹${farmer.price}
          </strong>

          <small>
            /kg
          </small>
        </div>

      </div>


      <button
        class="primary-btn"
        onclick="showToast('Order confirmed successfully!')">

        ✅ Confirm Connection

      </button>


      <button
        class="secondary-btn"
        onclick="openConsumer()">

        ← Back to Consumer

      </button>

    </main>
  `;

}


/* =========================================
   TRACEABILITY
========================================= */

function showTrace() {

  app.innerHTML = `

    <main class="dashboard">

      <div class="topbar">

        <button
          class="back-btn"
          onclick="openConsumer()">
          ←
        </button>

        <div class="topbar-title">

          <div class="topbar-icon">
            🔐
          </div>

          <div>
            <h2>Produce Traceability</h2>
            <small>
              Transparent supply journey
            </small>
          </div>

        </div>

      </div>


      <div class="trace-card">

        <div class="trace-product">

          <div class="trace-icon">
            🍅
          </div>

          <div>

            <div class="live-label">
              VERIFIED BATCH
            </div>

            <h2>
              Tomato Batch #FS-2026-001
            </h2>

            <p>
              Fresh farm produce
            </p>

          </div>

        </div>


        <div class="trace-line">

          <div class="trace-point">

            <span>👨‍🌾</span>

            <strong>Farm</strong>

            <small>
              Pollachi
            </small>

          </div>


          <div class="trace-connector"></div>


          <div class="trace-point">

            <span>⚡</span>

            <strong>PowerPool</strong>

            <small>
              Matched
            </small>

          </div>


          <div class="trace-connector"></div>


          <div class="trace-point">

            <span>🏠</span>

            <strong>Family</strong>

            <small>
              Destination
            </small>

          </div>

        </div>


        <div class="trace-details">

          <div>
            <span>Farmer</span>
            <strong>Arun Kumar</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Pollachi</strong>
          </div>

          <div>
            <span>Crop</span>
            <strong>Tomato</strong>
          </div>

          <div>
            <span>Quantity</span>
            <strong>200 kg</strong>
          </div>

          <div>
            <span>Price</span>
            <strong>₹27/kg</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Verified ✓</strong>
          </div>

        </div>


        <div class="qr-box">

          <div class="fake-qr">
            ▦
          </div>

          <div>

            <strong>
              Digital Trace ID
            </strong>

            <p>
              FS-TOM-2026-001
            </p>

          </div>

        </div>

      </div>

    </main>
  `;
}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2500);

}
