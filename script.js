// ==========================================
// FARMSYNC - FARM TO FAMILY
// Full Demo JavaScript
// ==========================================

const app = document.getElementById("app");

let currentRole = "";
let cart = [];
let farmerListings = [
  {
    id: 1,
    name: "Arun Kumar",
    location: "Pollachi",
    crop: "Tomato",
    quantity: 100,
    price: 27,
    harvest: "Today",
    icon: "🍅"
  },
  {
    id: 2,
    name: "Suresh",
    location: "Mettupalayam",
    crop: "Onion",
    quantity: 80,
    price: 32,
    harvest: "Yesterday",
    icon: "🧅"
  },
  {
    id: 3,
    name: "Manoj",
    location: "Udumalpet",
    crop: "Banana",
    quantity: 150,
    price: 38,
    harvest: "Today",
    icon: "🍌"
  },
  {
    id: 4,
    name: "Karthik",
    location: "Kinathukadavu",
    crop: "Coconut",
    quantity: 200,
    price: 45,
    harvest: "Today",
    icon: "🥥"
  },
  {
    id: 5,
    name: "Vijay",
    location: "Annur",
    crop: "Carrot",
    quantity: 70,
    price: 40,
    harvest: "Yesterday",
    icon: "🥕"
  }
];

let consumerDemand = [
  {
    name: "Rahul",
    location: "Coimbatore",
    crop: "Tomato",
    quantity: 25
  },
  {
    name: "Priya",
    location: "Tiruppur",
    crop: "Tomato",
    quantity: 30
  },
  {
    name: "Ajay",
    location: "Erode",
    crop: "Tomato",
    quantity: 20
  }
];


// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

    showHome();

  }, 1200);

});


// ==========================================
// HOME
// ==========================================

function showHome() {

  currentRole = "";

  app.innerHTML = `

    <section class="home">

      <div class="digital-orbit">
        <div class="orbit-dot">🌱</div>
      </div>

      <div class="brand-icon">🌾</div>

      <h1 class="brand-title">
        FARM<span>SYNC</span>
      </h1>

      <p class="brand-subtitle">
        Farm to Family
      </p>

      <p class="brand-description">
        Connecting farmer supply with consumer demand
      </p>


      <div class="role-grid">

        <button
          class="role-card"
          onclick="selectRole('farmer')">

          <div class="role-icon">
            👨‍🌾
          </div>

          <h2>Farmer</h2>

          <p>
            List and sell your fresh produce
          </p>

          <span class="arrow">
            →
          </span>

        </button>


        <button
          class="role-card"
          onclick="selectRole('consumer')">

          <div class="role-icon">
            🛒
          </div>

          <h2>Consumer</h2>

          <p>
            Find fresh produce directly
          </p>

          <span class="arrow">
            →
          </span>

        </button>

      </div>


      <div class="feature-strip">

        <span>⚡ PowerPool</span>
        <span>🤖 AI Forecast</span>
        <span>📍 Smart Match</span>
        <span>🌱 Traceability</span>

      </div>

    </section>

  `;

}


// ==========================================
// ROLE
// ==========================================

function selectRole(role) {

  currentRole = role;

  if (role === "farmer") {
    showFarmerDashboard();
  } else {
    showConsumerDashboard();
  }

}


// ==========================================
// FARMER DASHBOARD
// ==========================================

function showFarmerDashboard() {

  app.innerHTML = `

    <div class="dashboard">

      ${topBar(
        "Farmer Dashboard",
        "Manage your farm produce",
        "showHome()",
        "👨‍🌾"
      )}


      <div class="welcome-card">

        <div>

          <span class="live-label">
            ● LIVE FARMER MODE
          </span>

          <h2>
            Sell directly to consumers
          </h2>

          <p>
            List your produce with price,
            quantity and location.
          </p>

        </div>

        <div class="welcome-icon">
          🌾
        </div>

      </div>


      <div class="dashboard-grid">

        <div class="stat-card">

          <span>🌱</span>

          <div>
            <small>My Listings</small>
            <strong>${farmerListings.length}</strong>
          </div>

        </div>


        <div class="stat-card">

          <span>📦</span>

          <div>
            <small>Total Supply</small>
            <strong>
              ${getTotalSupply()} kg
            </strong>
          </div>

        </div>


        <div class="stat-card">

          <span>⚡</span>

          <div>
            <small>PowerPool Demand</small>
            <strong>
              ${getTotalDemand()} kg
            </strong>
          </div>

        </div>

      </div>


      <button
        class="primary-btn"
        onclick="showAddProduce()">

        ＋ Add New Produce

      </button>


      <div class="section-heading">

        <div>
          <h2>My Produce</h2>
          <p>Active farmer listings</p>
        </div>

        <span class="count-badge">
          ${farmerListings.length}
        </span>

      </div>


      <div class="listing-grid">

        ${renderFarmerListings()}

      </div>


      <div class="ai-card">

        <div class="ai-icon">
          🤖
        </div>

        <div>

          <span>AI DEMAND FORECAST</span>

          <h3>
            Tomato demand may increase next week
          </h3>

          <p>
            Current: 420 kg
            → Predicted: 510 kg
          </p>

        </div>

        <strong class="trend">
          ↑ 21%
        </strong>

      </div>

    </div>

  `;

}


// ==========================================
// FARMER LISTINGS
// ==========================================

function renderFarmerListings() {

  return farmerListings.map(item => `

    <div class="produce-card">

      <div class="produce-image">
        ${item.icon}
      </div>

      <div class="produce-details">

        <div class="card-title-row">

          <h3>
            ${item.crop}
          </h3>

          <span class="fresh-badge">
            FRESH
          </span>

        </div>

        <p>
          👨‍🌾 ${item.name}
        </p>

        <p>
          📍 ${item.location}
        </p>

        <div class="produce-bottom">

          <span>
            📦 ${item.quantity} kg
          </span>

          <strong>
            ₹${item.price}/kg
          </strong>

        </div>

      </div>

    </div>

  `).join("");

}


// ==========================================
// ADD PRODUCE
// ==========================================

function showAddProduce() {

  app.innerHTML = `

    <div class="dashboard">

      ${topBar(
        "Add Produce",
        "Create a farmer listing",
        "showFarmerDashboard()",
        "🌱"
      )}


      <div class="form-card">

        <div class="form-header">

          <div>
            <span>FARMER LISTING</span>
            <h2>Add your produce</h2>
          </div>

          <div class="form-icon">
            🌾
          </div>

        </div>


        <label>Farmer Name</label>

        <input
          id="farmerName"
          type="text"
          placeholder="Enter farmer name"
        />


        <label>Location</label>

        <input
          id="farmerLocation"
          type="text"
          placeholder="Enter farm location"
        />


        <label>Crop</label>

        <select id="crop">

          <option value="Tomato">🍅 Tomato</option>
          <option value="Onion">🧅 Onion</option>
          <option value="Banana">🍌 Banana</option>
          <option value="Coconut">🥥 Coconut</option>
          <option value="Carrot">🥕 Carrot</option>
          <option value="Potato">🥔 Potato</option>

        </select>


        <label>Quantity (kg)</label>

        <input
          id="quantity"
          type="number"
          placeholder="100"
        />


        <label>Price per kg (₹)</label>

        <input
          id="price"
          type="number"
          placeholder="30"
        />


        <button
          class="primary-btn"
          onclick="addProduce()">

          🚀 List My Produce

        </button>

      </div>

    </div>

  `;

}


// ==========================================
// ADD PRODUCE FUNCTION
// ==========================================

function addProduce() {

  const name =
    document.getElementById("farmerName").value.trim();

  const location =
    document.getElementById("farmerLocation").value.trim();

  const crop =
    document.getElementById("crop").value;

  const quantity =
    Number(document.getElementById("quantity").value);

  const price =
    Number(document.getElementById("price").value);


  if (
    !name ||
    !location ||
    !crop ||
    quantity <= 0 ||
    price <= 0
  ) {

    showToast("Please fill all details");

    return;

  }


  const icons = {
    Tomato: "🍅",
    Onion: "🧅",
    Banana: "🍌",
    Coconut: "🥥",
    Carrot: "🥕",
    Potato: "🥔"
  };


  farmerListings.unshift({

    id: Date.now(),

    name,

    location,

    crop,

    quantity,

    price,

    harvest: "Today",

    icon: icons[crop]

  });


  showToast("Produce listed successfully 🌱");


  setTimeout(() => {
    showFarmerDashboard();
  }, 700);

}


// ==========================================
// CONSUMER DASHBOARD
// ==========================================

function showConsumerDashboard() {

  app.innerHTML = `

    <div class="dashboard">

      ${topBar(
        "Consumer Marketplace",
        "Fresh produce from farmers",
        "showHome()",
        "🛒"
      )}


      <div class="consumer-hero">

        <div>

          <span class="live-label">
            ● POWERPOOL ACTIVE
          </span>

          <h1>
            Fresh From Farmers
          </h1>

          <p>
            Discover produce and connect directly
            with farmers.
          </p>

        </div>

        <div class="hero-network">

          <span>👨‍🌾</span>
          <b>⚡</b>
          <span>🛒</span>

        </div>

      </div>


      <div class="consumer-stats">

        <div>
          <strong>
            ${getTotalSupply()}
          </strong>
          <small>kg supply</small>
        </div>

        <div>
          <strong>
            ${getTotalDemand()}
          </strong>
          <small>kg demand</small>
        </div>

        <div>
          <strong>
            ${farmerListings.length}
          </strong>
          <small>farmers</small>
        </div>

      </div>


      <div class="powerpool-panel">

        <div class="powerpool-head">

          <div class="powerpool-logo">
            ⚡
          </div>

          <div>

            <span>SMART MATCHING ENGINE</span>

            <h2>
              PowerPool
            </h2>

          </div>

          <span class="active-pill">
            ACTIVE
          </span>

        </div>


        <div class="power-flow">

          <div class="flow-node">
            🛒
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
          Aggregating consumer demand and
          matching suitable farmer supply.
        </p>

      </div>


      <div class="search-wrapper">

        <span>🔎</span>

        <input
          id="searchInput"
          type="text"
          placeholder="Search tomato, onion, banana..."
          oninput="searchProduce()"
        />

      </div>


      <div class="section-heading">

        <div>
          <h2>Available Produce</h2>
          <p>Direct farmer listings</p>
        </div>

        <button
          class="small-btn"
          onclick="showDemandForm()">

          ＋ Request

        </button>

      </div>


      <div id="consumer-products"
           class="product-grid">

        ${renderConsumerProducts()}

      </div>


      <div class="forecast-card">

        <div class="forecast-icon">
          🤖
        </div>

        <div>

          <span>AI DEMAND FORECAST</span>

          <h3>
            Tomato demand
          </h3>

          <p>
            420 kg current → 510 kg predicted
          </p>

        </div>

        <div class="forecast-value">
          +21%
        </div>

      </div>


      <div class="delivery-card">

        <div class="delivery-icon">
          🚚
        </div>

        <div>

          <span>SMART DELIVERY POOL</span>

          <h3>
            Group nearby orders
          </h3>

          <p>
            Same-area orders can be grouped
            into an efficient delivery route.
          </p>

        </div>

      </div>

    </div>

  `;

}


// ==========================================
// CONSUMER PRODUCTS
// ==========================================

function renderConsumerProducts(list = farmerListings) {

  if (!list.length) {

    return `

      <div class="empty-state">

        🌱

        <h3>
          No produce found
        </h3>

        <p>
          Try another crop name.
        </p>

      </div>

    `;

  }


  return list.map(item => {

    const match = calculateMatch(item);

    const distance = calculateDistance(item.location);

    return `

      <div class="product-card">

        <div class="product-main">

          <div class="product-icon">
            ${item.icon}
          </div>


          <div class="product-info">

            <div class="card-title-row">

              <h3>
                ${item.crop}
              </h3>

              <span class="match-badge">
                ${match}% Match
              </span>

            </div>


            <p>
              👨‍🌾 ${item.name}
            </p>

            <p>
              📍 ${item.location}
              • ${distance} km away
            </p>

          </div>


          <div class="product-price">

            <strong>
              ₹${item.price}
            </strong>

            <small>
              /kg
            </small>

          </div>

        </div>


        <div class="product-meta">

          <span>
            📦 ${item.quantity} kg available
          </span>

          <span>
            🌱 Harvest: ${item.harvest}
          </span>

        </div>


        <div class="match-progress">

          <div>

            <span>
              ⚡ PowerPool Match
            </span>

            <strong>
              ${match}%
            </strong>

          </div>

          <div class="progress-track">

            <div
              class="progress-fill"
              style="width:${match}%">
            </div>

          </div>

        </div>


        <div class="product-actions">

          <button
            class="outline-btn"
            onclick="showTraceability(${item.id})">

            🌱 Trace

          </button>


          <button
            class="outline-btn"
            onclick="showPriceBreakdown(${item.id})">

            💰 Price

          </button>


          <button
            class="primary-small"
            onclick="requestProduce(${item.id})">

            ⚡ Request

          </button>

        </div>

      </div>

    `;

  }).join("");

}


// ==========================================
// SEARCH
// ==========================================

function searchProduce() {

  const input =
    document.getElementById("searchInput");

  if (!input) return;


  const value =
    input.value.toLowerCase();


  const filtered =
    farmerListings.filter(item =>

      item.crop.toLowerCase().includes(value) ||

      item.name.toLowerCase().includes(value) ||

      item.location.toLowerCase().includes(value)

    );


  document.getElementById("consumer-products")
    .innerHTML =
    renderConsumerProducts(filtered);

}


// ==========================================
// DEMAND FORM
// ==========================================

function showDemandForm() {

  app.innerHTML = `

    <div class="dashboard">

      ${topBar(
        "Create Demand",
        "Add your requirement to PowerPool",
        "showConsumerDashboard()",
        "⚡"
      )}


      <div class="form-card">

        <div class="form-header">

          <div>

            <span>POWERPOOL DEMAND</span>

            <h2>
              What do you need?
            </h2>

          </div>

          <div class="form-icon">
            ⚡
          </div>

        </div>


        <label>Your Name</label>

        <input
          id="consumerName"
          placeholder="Enter your name"
        />


        <label>Location</label>

        <input
          id="consumerLocation"
          placeholder="Enter your location"
        />


        <label>Required Crop</label>

        <select id="demandCrop">

          <option>Tomato</option>
          <option>Onion</option>
          <option>Banana</option>
          <option>Coconut</option>
          <option>Carrot</option>

        </select>


        <label>Required Quantity (kg)</label>

        <input
          id="demandQuantity"
          type="number"
          placeholder="20"
        />


        <button
          class="primary-btn"
          onclick="addDemand()">

          ⚡ Add to PowerPool

        </button>

      </div>

    </div>

  `;

}


// ==========================================
// ADD DEMAND
// ==========================================

function addDemand() {

  const name =
    document.getElementById("consumerName").value.trim();

  const location =
    document.getElementById("consumerLocation").value.trim();

  const crop =
    document.getElementById("demandCrop").value;

  const quantity =
    Number(document.getElementById("demandQuantity").value);


  if (
    !name ||
    !location ||
    quantity <= 0
  ) {

    showToast("Please fill all details");

    return;

  }


  consumerDemand.push({

    name,
    location,
    crop,
    quantity

  });


  showToast(
    "Demand added to PowerPool ⚡"
  );


  setTimeout(() => {

    showConsumerDashboard();

  }, 800);

}


// ==========================================
// REQUEST PRODUCE
// ==========================================

function requestProduce(id) {

  const item =
    farmerListings.find(
      x => x.id === id
    );


  if (!item) return;


  cart.push(item);


  showToast(
    `${item.crop} added to PowerPool ⚡`
  );


  setTimeout(() => {

    showMatchingAnimation(item);

  }, 700);

}


// ==========================================
// MATCHING ANIMATION
// ==========================================

function showMatchingAnimation(item) {

  app.innerHTML = `

    <div class="matching-screen">

      <div class="matching-orbit">

        <span>🛒</span>

        <div class="orbit-ring">
          ⚡
        </div>

        <span>👨‍🌾</span>

      </div>


      <span class="live-label">
        POWERPOOL ENGINE
      </span>


      <h1>
        Finding Smart Match
      </h1>


      <p>
        Analyzing demand and farmer supply...
      </p>


      <div class="matching-steps">

        <div class="matching-step active">
          <span>✓</span>
          Crop verified
        </div>

        <div class="matching-step active">
          <span>✓</span>
          Quantity analyzed
        </div>

        <div class="matching-step">
          <span>⚡</span>
          Comparing price
        </div>

        <div class="matching-step">
          <span>📍</span>
          Checking distance
        </div>

      </div>


      <div class="big-progress">

        <div></div>

      </div>


      <small>
        PowerPool is calculating the suitable connection
      </small>

    </div>

  `;


  setTimeout(() => {

    showMatchResult(item);

  }, 3000);

}


// ==========================================
// MATCH RESULT
// ==========================================

function showMatchResult(item) {

  const match =
    calculateMatch(item);

  const distance =
    calculateDistance(item.location);


  app.innerHTML = `

    <div class="success-screen">

      <div class="success-check">
        ✓
      </div>


      <span class="live-label">
        POWERPOOL MATCH FOUND
      </span>


      <h1>
        Smart Match Successful
      </h1>


      <p>
        A suitable farmer supply has been identified.
      </p>


      <div class="match-result-card">

        <div class="match-person">

          <div class="person-icon">
            👨‍🌾
          </div>

          <strong>
            ${item.name}
          </strong>

          <span>
            ${item.location}
          </span>

        </div>


        <div class="connection-pulse">
          ⚡
        </div>


        <div class="match-person">

          <div class="person-icon">
            🛒
          </div>

          <strong>
            Consumer
          </strong>

          <span>
            Demand matched
          </span>

        </div>

      </div>


      <div class="match-stats">

        <div>
          <strong>
            ${match}%
          </strong>
          <small>Match</small>
        </div>

        <div>
          <strong>
            ${distance} km
          </strong>
          <small>Distance</small>
        </div>

        <div>
          <strong>
            ₹${item.price}
          </strong>
          <small>Farmer Price</small>
        </div>

      </div>


      <button
        class="primary-btn"
        onclick="showTraceability(${item.id})">

        🌱 View Farm Traceability

      </button>


      <button
        class="secondary-btn"
        onclick="showConsumerDashboard()">

        ← Back to Marketplace

      </button>

    </div>

  `;

}


// ==========================================
// TRACEABILITY
// ==========================================

function showTraceability(id) {

  const item =
    farmerListings.find(
      x => x.id === id
    );


  if (!item) return;


  app.innerHTML = `

    <div class="dashboard">

      ${topBar(
        "Farm Traceability",
        "Know where your produce comes from",
        "showConsumerDashboard()",
        "🌱"
      )}


      <div class="trace-card">

        <div class="trace-product">

          <div class="trace-icon">
            ${item.icon}
          </div>

          <div>

            <span>TRACEABLE PRODUCE</span>

            <h1>
              ${item.crop}
            </h1>

          </div>

        </div>


        <div class="trace-line">

          <div class="trace-point">
            <span>🌱</span>
            <strong>Farm</strong>
            <small>
              ${item.location}
            </small>
          </div>

          <div class="trace-connector"></div>

          <div class="trace-point">
            <span>📅</span>
            <strong>Harvest</strong>
            <small>
              ${item.harvest}
            </small>
          </div>

          <div class="trace-connector"></div>

          <div class="trace-point">
            <span>🛒</span>
            <strong>Family</strong>
            <small>
              Direct connection
            </small>
          </div>

        </div>


        <div class="trace-details">

          <div>
            <span>Farmer</span>
            <strong>${item.name}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>${item.location}</strong>
          </div>

          <div>
            <span>Quantity</span>
            <strong>${item.quantity} kg</strong>
          </div>

          <div>
            <span>Price</span>
            <strong>₹${item.price}/kg</strong>
          </div>

        </div>


        <div class="qr-box">

          <div class="fake-qr">
            ▦
          </div>

          <div>

            <strong>
              Digital Farm Record
            </strong>

            <p>
              QR-based traceability can be
              integrated in the production version.
            </p>

          </div>

        </div>

      </div>

    </div>

  `;

}


// ==========================================
// PRICE TRANSPARENCY
// ==========================================

function showPriceBreakdown(id) {

  const item =
    farmerListings.find(
      x => x.id === id
    );


  if (!item) return;


  const platformCost = 2;

  const deliveryCost = 1;

  const consumerPrice =
    item.price +
    platformCost +
    deliveryCost;


  app.innerHTML = `

    <div class="dashboard">

      ${topBar(
        "Price Transparency",
        "Simple and visible pricing",
        "showConsumerDashboard()",
        "💰"
      )}


      <div class="price-card">

        <div class="price-product">

          <span>
            ${item.icon}
          </span>

          <div>

            <h2>
              ${item.crop}
            </h2>

            <p>
              From ${item.name}
            </p>

          </div>

        </div>


        <div class="price-row">

          <span>
            🌱 Farmer Price
          </span>

          <strong>
            ₹${item.price}
          </strong>

        </div>


        <div class="price-row">

          <span>
            ⚙ Platform / Service
          </span>

          <strong>
            ₹${platformCost}
          </strong>

        </div>


        <div class="price-row">

          <span>
            🚚 Delivery Estimate
          </span>

          <strong>
            ₹${deliveryCost}
          </strong>

        </div>


        <div class="price-total">

          <span>
            Consumer Price
          </span>

          <strong>
            ₹${consumerPrice}/kg
          </strong>

        </div>


        <p class="demo-note">
          *Demo calculation. Actual platform and
          delivery charges can be configured later.
        </p>

      </div>

    </div>

  `;

}


// ==========================================
// MATCH CALCULATION
// ==========================================

function calculateMatch(item) {

  let score = 70;


  const matchingDemand =
    consumerDemand.find(
      d => d.crop === item.crop
    );


  if (matchingDemand) {

    score += 10;

    if (
      item.quantity >=
      matchingDemand.quantity
    ) {

      score += 8;

    }

  }


  if (item.price <= 35) {
    score += 5;
  }


  return Math.min(score, 98);

}


// ==========================================
// DISTANCE SIMULATION
// ==========================================

function calculateDistance(location) {

  const distances = {

    Pollachi: 35,
    Mettupalayam: 38,
    Udumalpet: 70,
    Kinathukadavu: 25,
    Annur: 40

  };


  return distances[location] || 20;

}


// ==========================================
// TOTAL SUPPLY
// ==========================================

function getTotalSupply() {

  return farmerListings.reduce(
    (total, item) =>
      total + Number(item.quantity),
    0
  );

}


// ==========================================
// TOTAL DEMAND
// ==========================================

function getTotalDemand() {

  return consumerDemand.reduce(
    (total, item) =>
      total + Number(item.quantity),
    0
  );

}


// ==========================================
// TOP BAR
// ==========================================

function topBar(
  title,
  subtitle,
  backFunction,
  icon
) {

  return `

    <div class="topbar">

      <button
        class="back-btn"
        onclick="${backFunction}">

        ←

      </button>


      <div class="topbar-title">

        <div class="topbar-icon">
          ${icon}
        </div>

        <div>

          <h2>
            ${title}
          </h2>

          <small>
            ${subtitle}
          </small>

        </div>

      </div>


      <div class="status-dot">
        ●
      </div>

    </div>

  `;

}


// ==========================================
// TOAST
// ==========================================

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
