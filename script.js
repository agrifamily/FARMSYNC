/* =====================================================
   FARMSYNC
   Farm to Family
   Frontend Demo
===================================================== */


/* ================= DATA ================= */

const farmerNames = [
  "Arun Kumar",
  "Suresh",
  "Karthik",
  "Ramesh",
  "Manoj",
  "Vignesh",
  "Prakash",
  "Selvam",
  "Mohan",
  "Dinesh",
  "Rajesh",
  "Bala"
];

const consumerNames = [
  "Ananya",
  "Priya",
  "Rahul",
  "Arjun",
  "Nithya",
  "Divya",
  "Kavin",
  "Meena",
  "Harish",
  "Asha",
  "Vijay",
  "Keerthi"
];

const locations = [
  "Coimbatore",
  "Salem",
  "Erode",
  "Tiruppur",
  "Namakkal",
  "Karur",
  "Madurai",
  "Trichy",
  "Dindigul",
  "Dharmapuri",
  "Hosur",
  "Pollachi"
];

const crops = [
  {
    name:"Tomato",
    icon:"🍅",
    price:28
  },
  {
    name:"Onion",
    icon:"🧅",
    price:32
  },
  {
    name:"Potato",
    icon:"🥔",
    price:30
  },
  {
    name:"Carrot",
    icon:"🥕",
    price:42
  },
  {
    name:"Banana",
    icon:"🍌",
    price:35
  },
  {
    name:"Brinjal",
    icon:"🍆",
    price:38
  }
];


/* ================= LOCAL STORAGE ================= */

let produces =
  JSON.parse(localStorage.getItem("farmsyncProduces")) || [];

let demands =
  JSON.parse(localStorage.getItem("farmsyncDemands")) || [];

let orders =
  JSON.parse(localStorage.getItem("farmsyncOrders")) || [];


/* ================= HELPERS ================= */

function randomItem(array){
  return array[Math.floor(Math.random()*array.length)];
}

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function saveData(){
  localStorage.setItem(
    "farmsyncProduces",
    JSON.stringify(produces)
  );

  localStorage.setItem(
    "farmsyncDemands",
    JSON.stringify(demands)
  );

  localStorage.setItem(
    "farmsyncOrders",
    JSON.stringify(orders)
  );
}

function showToast(message){

  let toast = document.getElementById("toast");

  if(!toast){
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(()=>{
    toast.classList.remove("show");
  },2500);
}


/* ================= INITIAL DATA ================= */

function createInitialFarmers(){

  if(produces.length > 0) return;

  for(let i=0;i<12;i++){

    const crop = randomItem(crops);

    produces.push({

      id:Date.now()+i,

      farmer:randomItem(farmerNames),

      location:randomItem(locations),

      crop:crop.name,

      icon:crop.icon,

      quantity:randomNumber(80,500),

      price:crop.price + randomNumber(-4,5)

    });

  }

  saveData();
}


/* ================= ENTRY ================= */

document.addEventListener("DOMContentLoaded",()=>{

  createInitialFarmers();

  const enterBtn =
    document.getElementById("enterBtn");

  if(enterBtn){

    enterBtn.addEventListener("click",()=>{

      document
        .getElementById("entryScreen")
        .classList.add("hidden");

      document
        .getElementById("app")
        .classList.remove("hidden");

      showHome();

    });

  }

});


/* ================= HOME ================= */

function showHome(){

  const home =
    document.getElementById("homePage");

  if(!home) return;

  home.innerHTML = `

    <section class="hero">

      <span class="hero-badge">
        🌾 SMART AGRICULTURE PLATFORM
      </span>

      <h1>
        From <span>Farm</span><br>
        to <span>Family</span>
      </h1>

      <p>
        FARMSYNC connects agricultural supply
        with real consumer demand through
        PowerPool intelligent matching.
      </p>

      <div class="hero-buttons">

        <button
          class="primary-btn"
          onclick="openRole('farmer')">
          👨‍🌾 Farmer Dashboard
        </button>

        <button
          class="secondary-btn"
          onclick="openRole('consumer')">
          🛒 Consumer Dashboard
        </button>

      </div>

    </section>


    <section class="network-card">

      <div>

        <small>LIVE FARM NETWORK</small>

        <h2>
          <span id="farmerCount">
            ${produces.length}
          </span>
          Farmers Connected
        </h2>

      </div>

      <div class="network-visual">

        <div>👨‍🌾</div>

        <div class="pulse-line"></div>

        <div class="power-icon">⚡</div>

        <div class="pulse-line"></div>

        <div>🛒</div>

      </div>

    </section>


    <section class="power-preview">

      <div class="section-title">

        <span>⚡</span>

        <div>
          <small>SMART DEMAND ENGINE</small>
          <h2>PowerPool</h2>
        </div>

      </div>

      <div class="demand-box">

        <div class="demand-head">

          <div>
            <small>LIVE CONSUMER DEMAND</small>
            <div class="demand-number">
              <span id="liveDemand">500</span> KG
            </div>
          </div>

          <div>
            <b id="demandPercent">72%</b>
          </div>

        </div>

        <div class="meter">
          <div
            id="meterFill"
            class="meter-fill">
          </div>
        </div>

      </div>

    </section>


    <section class="features-grid">

      ${feature(
        "⚡",
        "PowerPool",
        "Aggregate consumer demand into one smart pool."
      )}

      ${feature(
        "🔗",
        "Multiple Farmer Matching",
        "Match one demand with multiple suitable farmers."
      )}

      ${feature(
        "🎯",
        "Smart Match Score",
        "Calculate matching using crop, quantity, price and location."
      )}

      ${feature(
        "🤖",
        "AI Demand Forecast",
        "Demo forecast for future agricultural demand."
      )}

      ${feature(
        "📍",
        "Location Matching",
        "Connect nearby supply and demand."
      )}

      ${feature(
        "🚚",
        "Delivery Tracking",
        "Track produce from farm to family."
      )}

      ${feature(
        "🔐",
        "QR Traceability",
        "Demo traceability for every produce batch."
      )}

      ${feature(
        "📈",
        "Price Trend",
        "Visualize current and predicted price movement."
      )}

    </section>

  `;

  startLiveDemand();

}


/* ================= FEATURE CARD ================= */

function feature(icon,title,text){

  return `

    <div class="feature-card">

      <div class="feature-icon">${icon}</div>

      <h3>${title}</h3>

      <p>${text}</p>

    </div>

  `;

}


/* ================= ROLE ================= */

function openRole(role){

  if(role === "farmer"){
    showFarmerDashboard();
  }

  if(role === "consumer"){
    showConsumerDashboard();
  }

}


/* ================= FARMER DASHBOARD ================= */

function showFarmerDashboard(){

  const page =
    document.getElementById("homePage");

  page.innerHTML = `

    <div class="dashboard">

      <div class="dashboard-header">

        <div>
          <small>👨‍🌾 FARMER MODE</small>
          <h1>Farmer Dashboard</h1>
        </div>

        <button
          class="back-btn"
          onclick="showHome()">
          ← Home
        </button>

      </div>


      <div class="stats-grid">

        <div class="stat-card">
          <small>My Produce</small>
          <div class="stat-value">
            ${produces.length}
          </div>
        </div>

        <div class="stat-card">
          <small>Total Supply</small>
          <div class="stat-value">
            ${totalSupply()} KG
          </div>
        </div>

        <div class="stat-card">
          <small>PowerPool Demand</small>
          <div class="stat-value">
            <span id="farmerDemand">500</span> KG
          </div>
        </div>

        <div class="stat-card">
          <small>Live Status</small>
          <div class="stat-value">
            🟢 LIVE
          </div>
        </div>

      </div>


      <!-- ADD PRODUCE -->

      <div class="form-card">

        <h2>➕ Add Produce</h2>

        <div class="form-grid">

          <div class="input-group">
            <label>Farmer Name</label>
            <input
              id="farmerName"
              placeholder="Enter farmer name"
              value="${randomItem(farmerNames)}">
          </div>

          <div class="input-group">
            <label>Location</label>
            <input
              id="farmerLocation"
              placeholder="Enter location"
              value="${randomItem(locations)}">
          </div>

          <div class="input-group">

            <label>Crop</label>

            <select id="farmerCrop">

              ${crops.map(c=>
                `<option value="${c.name}">
                  ${c.icon} ${c.name}
                </option>`
              ).join("")}

            </select>

          </div>

          <div class="input-group">

            <label>Quantity (KG)</label>

            <input
              id="farmerQuantity"
              type="number"
              value="100">

          </div>

          <div class="input-group">

            <label>Price / KG</label>

            <input
              id="farmerPrice"
              type="number"
              value="28">

          </div>

        </div>

        <button
          class="add-btn"
          onclick="addProduce()">
          + List My Produce
        </button>

      </div>


      <!-- MY PRODUCE -->

      <div class="form-card">

        <h2>🌾 Live Farmer Supply</h2>

        <div class="produce-grid"
             id="farmerProduceList">

          ${renderProduceCards(produces)}

        </div>

      </div>


      <!-- MATCHING -->

      <div class="powerpool">

        <small>⚡ DEMAND AGGREGATION ENGINE</small>

        <h2>PowerPool</h2>

        <p>
          Consumer demand is continuously aggregated
          and matched with farmer supply.
        </p>

        <div class="pool-demand">

          <div>
            <div class="pool-number"
                 id="poolDemand">
              500 KG
            </div>
            <div class="pool-label">
              TOTAL DEMAND
            </div>
          </div>

          <div>
            <div class="pool-number"
                 id="poolFarmers">
              ${produces.length}
            </div>
            <div class="pool-label">
              POTENTIAL FARMERS
            </div>
          </div>

          <div>
            <div class="pool-number">
              86%
            </div>
            <div class="pool-label">
              MATCH EFFICIENCY
            </div>
          </div>

        </div>

      </div>


      <div class="form-card">

        <h2>🔗 Multiple Farmer Matching</h2>

        <div class="matching-animation">

          <div class="match-node">👥</div>

          <div class="match-arrow">→</div>

          <div class="match-node">⚡</div>

          <div class="match-arrow">→</div>

          <div class="match-node">👨‍🌾</div>

        </div>

        <div class="match-grid">

          ${renderMatches()}

        </div>

      </div>


      <!-- FORECAST -->

      ${forecastSection()}

      ${priceSection()}

    </div>

  `;

}


/* ================= CONSUMER DASHBOARD ================= */

function showConsumerDashboard(){

  const page =
    document.getElementById("homePage");

  page.innerHTML = `

    <div class="dashboard">

      <div class="dashboard-header">

        <div>
          <small>🛒 CONSUMER MODE</small>
          <h1>Consumer Dashboard</h1>
        </div>

        <button
          class="back-btn"
          onclick="showHome()">
          ← Home
        </button>

      </div>


      <div class="stats-grid">

        <div class="stat-card">
          <small>My Demand</small>
          <div class="stat-value">
            100 KG
          </div>
        </div>

        <div class="stat-card">
          <small>PowerPool</small>
          <div class="stat-value">
            <span id="consumerDemand">
              500
            </span> KG
          </div>
        </div>

        <div class="stat-card">
          <small>Farmers Available</small>
          <div class="stat-value">
            ${produces.length}
          </div>
        </div>

        <div class="stat-card">
          <small>Match Status</small>
          <div class="stat-value">
            🟢 ACTIVE
          </div>
        </div>

      </div>


      <!-- DEMAND -->

      <div class="form-card">

        <h2>⚡ Create Demand</h2>

        <div class="form-grid">

          <div class="input-group">

            <label>Consumer Name</label>

            <input
              id="consumerName"
              value="${randomItem(consumerNames)}">

          </div>

          <div class="input-group">

            <label>Location</label>

            <input
              id="consumerLocation"
              value="${randomItem(locations)}">

          </div>

          <div class="input-group">

            <label>Required Crop</label>

            <select id="consumerCrop">

              ${crops.map(c=>
                `<option value="${c.name}">
                  ${c.icon} ${c.name}
                </option>`
              ).join("")}

            </select>

          </div>

          <div class="input-group">

            <label>Required Quantity KG</label>

            <input
              id="consumerQuantity"
              type="number"
              value="100">

          </div>

        </div>

        <button
          class="add-btn"
          onclick="createDemand()">
          ⚡ Add to PowerPool
        </button>

      </div>


      <!-- POWERPOOL -->

      <div class="powerpool">

        <small>LIVE DEMAND AGGREGATION</small>

        <h2>⚡ PowerPool</h2>

        <div class="pool-demand">

          <div>
            <div
              class="pool-number"
              id="consumerPool">
              500 KG
            </div>
            <div class="pool-label">
              TOTAL DEMAND
            </div>
          </div>

          <div>
            <div class="pool-number">
              ${produces.length}
            </div>
            <div class="pool-label">
              FARMERS
            </div>
          </div>

          <div>
            <div class="pool-number">
              86%
            </div>
            <div class="pool-label">
              MATCH SCORE
            </div>
          </div>

        </div>

      </div>


      <!-- SEARCH -->

      <div class="form-card">

        <h2>🔎 Find Produce</h2>

        <div class="search-box">

          <input
            id="searchInput"
            placeholder="Search tomato, onion, farmer, location..."
            oninput="searchProduce()">

          <button onclick="searchProduce()">
            Search
          </button>

        </div>

        <div
          class="produce-grid"
          id="consumerProduceList">

          ${renderProduceCards(produces,true)}

        </div>

      </div>


      <!-- MULTIPLE MATCH -->

      <div class="form-card">

        <h2>🎯 Smart Multiple Farmer Matching</h2>

        <p style="color:#70877b;margin-top:7px;font-size:13px">

          PowerPool combines multiple farmers
          when one farmer cannot fulfil the complete demand.

        </p>

        <div class="matching-animation">

          <div class="match-node">🛒</div>

          <div class="match-arrow">→</div>

          <div class="match-node">⚡</div>

          <div class="match-arrow">→</div>

          <div class="match-node">👨‍🌾</div>

          <div class="match-arrow">→</div>

          <div class="match-node">👨‍🌾</div>

        </div>

        <div class="match-grid">

          ${renderMatches()}

        </div>

      </div>


      ${trackingSection()}

      ${qrSection()}

      ${forecastSection()}

      ${priceSection()}

    </div>

  `;

}


/* ================= PRODUCE CARDS ================= */

function renderProduceCards(list,consumer=false){

  if(list.length===0){

    return `
      <p style="grid-column:1/-1;color:#70877b">
        No produce found.
      </p>
    `;

  }

  return list.map(item=>`

    <div class="produce-card">

      <div class="produce-top">

        <div class="crop-icon">
          ${item.icon}
        </div>

        <div class="price">
          ₹${item.price}
        </div>

      </div>

      <div class="farmer-name">
        👨‍🌾 ${item.farmer}
      </div>

      <div class="location">
        📍 ${item.location}
      </div>

      <div class="produce-info">

        <span>
          📦 ${item.quantity} KG
        </span>

        <span>
          🟢 Available
        </span>

      </div>

      ${
        consumer
        ?
        `<button
          class="match-btn"
          onclick="requestProduce(${item.id})">
          ⚡ Match with Farmer
        </button>`
        :
        ""
      }

    </div>

  `).join("");

}


/* ================= ADD PRODUCE ================= */

function addProduce(){

  const name =
    document.getElementById("farmerName").value ||
    randomItem(farmerNames);

  const location =
    document.getElementById("farmerLocation").value ||
    randomItem(locations);

  const cropName =
    document.getElementById("farmerCrop").value;

  const quantity =
    Number(document.getElementById("farmerQuantity").value);

  const price =
    Number(document.getElementById("farmerPrice").value);

  const crop =
    crops.find(c=>c.name===cropName);

  if(!quantity || !price){

    showToast("Please enter quantity and price");
    return;

  }

  produces.unshift({

    id:Date.now(),

    farmer:name,

    location:location,

    crop:cropName,

    icon:crop.icon,

    quantity:quantity,

    price:price

  });

  saveData();

  showToast(
    "🌾 Produce successfully added!"
  );

  showFarmerDashboard();

}


/* ================= CREATE DEMAND ================= */

function createDemand(){

  const consumer =
    document.getElementById("consumerName").value ||
    randomItem(consumerNames);

  const location =
    document.getElementById("consumerLocation").value ||
    randomItem(locations);

  const crop =
    document.getElementById("consumerCrop").value;

  const quantity =
    Number(document.getElementById("consumerQuantity").value);

  if(!quantity){

    showToast("Enter required quantity");
    return;

  }

  demands.push({

    id:Date.now(),

    consumer,

    location,

    crop,

    quantity

  });

  saveData();

  showToast(
    `⚡ ${quantity} KG added to PowerPool`
  );

  showConsumerDashboard();

}


/* ================= REQUEST PRODUCE ================= */

function requestProduce(id){

  const item =
    produces.find(p=>p.id===id);

  if(!item) return;

  orders.push({

    id:Date.now(),

    farmer:item.farmer,

    crop:item.crop,

    quantity:100,

    status:"Confirmed"

  });

  saveData();

  showToast(
    `⚡ ${item.farmer} matched successfully!`
  );

  setTimeout(()=>{

    showConsumerDashboard();

  },700);

}


/* ================= SEARCH ================= */

function searchProduce(){

  const input =
    document
      .getElementById("searchInput")
      ?.value
      .toLowerCase()
      .trim();

  if(!input){

    document.getElementById(
      "consumerProduceList"
    ).innerHTML =
      renderProduceCards(produces,true);

    return;

  }

  const filtered =
    produces.filter(item=>

      item.crop.toLowerCase().includes(input) ||

      item.farmer.toLowerCase().includes(input) ||

      item.location.toLowerCase().includes(input)

    );

  document.getElementById(
    "consumerProduceList"
  ).innerHTML =
    renderProduceCards(filtered,true);

}


/* ================= SMART MATCH ================= */

function calculateMatch(item){

  let score =
    randomNumber(75,98);

  return score;

}

function renderMatches(){

  const selected =
    produces.slice(0,6);

  return selected.map(item=>{

    const score =
      calculateMatch(item);

    return `

      <div class="match-card">

        <span class="match-score">
          ${score}% MATCH
        </span>

        <div style="font-size:25px">
          ${item.icon}
        </div>

        <h3 style="margin-top:8px">
          ${item.farmer}
        </h3>

        <div class="location">
          📍 ${item.location}
        </div>

        <div style="
          margin-top:10px;
          font-size:12px;
        ">

          ${item.crop}
          • ${item.quantity} KG
          • ₹${item.price}/KG

        </div>

        <div class="match-bar">

          <div style="
            width:${score}%;
          "></div>

        </div>

      </div>

    `;

  }).join("");

}


/* ================= FORECAST ================= */

function forecastSection(){

  const values =
    [35,55,45,70,60,82,95];

  return `

    <div class="two-column">

      <div class="forecast-card">

        <small>🤖 AI DEMAND FORECAST</small>

        <h2 style="margin-top:6px">
          Next 7 Days
        </h2>

        <span class="forecast-tag">
          ↑ 18% Expected Demand
        </span>

        <div class="chart">

          ${values.map(v=>
            `<div
              class="bar"
              style="height:${v}%">
            </div>`
          ).join("")}

        </div>

      </div>


      <div class="forecast-card">

        <small>🧠 AI DEMO INSIGHT</small>

        <h2 style="margin-top:6px">
          Tomato Demand
        </h2>

        <p style="
          margin-top:15px;
          color:#70877b;
          font-size:13px;
          line-height:1.7;
        ">

          Based on the demo demand pattern,
          tomato requirement is projected to
          increase during the upcoming period.

        </p>

        <span class="forecast-tag">
          Prediction Demo
        </span>

      </div>

    </div>

  `;

}


/* ================= PRICE TREND ================= */

function priceSection(){

  return `

    <div class="two-column">

      <div class="price-card">

        <small>📈 MARKET PRICE TREND</small>

        <h2 style="margin-top:6px">
          Tomato ₹28 / KG
        </h2>

        <div class="chart">

          <div class="bar" style="height:35%"></div>
          <div class="bar" style="height:45%"></div>
          <div class="bar" style="height:40%"></div>
          <div class="bar" style="height:60%"></div>
          <div class="bar" style="height:55%"></div>
          <div class="bar" style="height:75%"></div>
          <div class="bar" style="height:82%"></div>

        </div>

      </div>


      <div class="price-card">

        <small>💡 DIGITAL PRICE INSIGHT</small>

        <h2 style="margin-top:6px">
          Transparent Pricing
        </h2>

        <p style="
          margin-top:14px;
          color:#70877b;
          line-height:1.7;
          font-size:13px;
        ">

          Farmers can list their expected price
          while consumers can compare available
          supply before creating demand.

        </p>

      </div>

    </div>

  `;

}


/* ================= DELIVERY ================= */

function trackingSection(){

  return `

    <div class="tracking-card" style="margin-top:20px">

      <small>🚚 LIVE DELIVERY TRACKING</small>

      <h2 style="margin-top:6px">
        Order #FS${randomNumber(1000,9999)}
      </h2>

      <div class="tracking-line">

        <div class="track-step">

          <div class="track-circle">✓</div>
          Farm

        </div>

        <div class="track-step">

          <div class="track-circle">✓</div>
          Pickup

        </div>

        <div class="track-step">

          <div class="track-circle">🚚</div>
          Transit

        </div>

        <div class="track-step">

          <div class="track-circle">🏠</div>
          Delivered

        </div>

      </div>

    </div>

  `;

}


/* ================= QR TRACEABILITY ================= */

function qrSection(){

  let pattern = "";

  for(let i=0;i<81;i++){

    const active =
      Math.random()>.48;

    pattern +=
      `<span style="opacity:${active?1:0}"></span>`;

  }

  return `

    <div class="form-card">

      <small>🔐 DIGITAL TRACEABILITY</small>

      <h2 style="margin-top:6px">
        QR Produce Certificate
      </h2>

      <div class="qr-box">

        ${pattern}

      </div>

      <div class="qr-info">

        Batch ID:
        <b>FS-${randomNumber(10000,99999)}</b>
        <br><br>

        Farmer → Collection → Delivery

      </div>

    </div>

  `;

}


/* ================= TOTAL SUPPLY ================= */

function totalSupply(){

  return produces.reduce(
    (sum,item)=>
      sum + Number(item.quantity || 0),
    0
  );

}


/* ================= LIVE DEMAND ================= */

let currentDemand = 500;

function startLiveDemand(){

  clearInterval(
    window.farmsyncDemandTimer
  );

  window.farmsyncDemandTimer =
    setInterval(()=>{

      currentDemand +=
        randomNumber(-8,15);

      if(currentDemand < 300)
        currentDemand = 300;

      if(currentDemand > 900)
        currentDemand = 900;

      const demand =
        document.getElementById("liveDemand");

      if(demand)
        demand.textContent =
          currentDemand;

      const farmerDemand =
        document.getElementById("farmerDemand");

      if(farmerDemand)
        farmerDemand.textContent =
          currentDemand;

      const poolDemand =
        document.getElementById("poolDemand");

      if(poolDemand)
        poolDemand.textContent =
          currentDemand+" KG";

      const consumerPool =
        document.getElementById("consumerPool");

      if(consumerPool)
        consumerPool.textContent =
          currentDemand+" KG";

      const consumerDemand =
        document.getElementById("consumerDemand");

      if(consumerDemand)
        consumerDemand.textContent =
          currentDemand;

      const percent =
        Math.min(
          95,
          Math.floor(currentDemand/10)
        );

      const meter =
        document.getElementById("meterFill");

      if(meter)
        meter.style.width =
          percent+"%";

      const percentText =
        document.getElementById("demandPercent");

      if(percentText)
        percentText.textContent =
          percent+"%";

    },2500);

}


/* ================= LIVE MATCHING ================= */

setInterval(()=>{

  const bars =
    document.querySelectorAll(
      ".match-bar div"
    );

  bars.forEach(bar=>{

    const score =
      randomNumber(75,98);

    bar.style.width =
      score+"%";

  });

  const scores =
    document.querySelectorAll(
      ".match-score"
    );

  scores.forEach(score=>{

    const value =
      randomNumber(75,98);

    score.textContent =
      value+"% MATCH";

  });

},3000);


/* ================= RANDOM LIVE FARMERS ================= */

setInterval(()=>{

  const count =
    document.getElementById("farmerCount");

  if(count){

    const value =
      produces.length +
      randomNumber(0,4);

    count.textContent = value;

  }

},4000);


/* ================= DEMO AUTO DEMAND ================= */

setInterval(()=>{

  if(Math.random()>.45){

    const crop =
      randomItem(crops);

    const demand = {

      id:Date.now(),

      consumer:randomItem(consumerNames),

      location:randomItem(locations),

      crop:crop.name,

      quantity:randomNumber(20,100)

    };

    demands.push(demand);

    if(demands.length>30)
      demands.shift();

    saveData();

  }

},7000);
