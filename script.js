/* =====================================================
   FARMSYNC
   Farm to Family
   Complete Frontend Demo
===================================================== */


/* ================= RANDOM DATA ================= */

const farmerNames = [
  "Ravi Kumar",
  "Arun Prakash",
  "Selvam",
  "Karthik",
  "Murugan",
  "Suresh",
  "Prakash",
  "Manoj",
  "Rajesh",
  "Vignesh",
  "Dinesh",
  "Saravanan"
];

const farmerLocations = [
  "Pollachi",
  "Coimbatore",
  "Tiruppur",
  "Erode",
  "Mettupalayam",
  "Udumalpet",
  "Annur",
  "Sulur",
  "Kinathukadavu",
  "Palladam"
];

const consumerNames = [
  "Arun Kumar",
  "Priya",
  "Divya",
  "Kavin",
  "Anitha",
  "Sanjay",
  "Harini",
  "Vijay",
  "Keerthana",
  "Rahul",
  "Swetha",
  "Naveen"
];

const consumerLocations = [
  "Coimbatore",
  "Tiruppur",
  "Erode",
  "Pollachi",
  "Sulur",
  "Mettupalayam",
  "Gandhipuram",
  "RS Puram",
  "Peelamedu",
  "Singanallur"
];

const crops = {
  Tomato:"🍅",
  Onion:"🧅",
  Potato:"🥔",
  Banana:"🍌",
  Carrot:"🥕",
  Brinjal:"🍆",
  Chilli:"🌶️"
};


/* ================= INITIAL DATA ================= */

let listings = JSON.parse(localStorage.getItem("farmsyncListings")) || [

  {
    id:1,
    farmer:"Ravi Kumar",
    location:"Pollachi",
    crop:"Tomato",
    quantity:220,
    price:27
  },

  {
    id:2,
    farmer:"Arun Prakash",
    location:"Coimbatore",
    crop:"Tomato",
    quantity:150,
    price:26
  },

  {
    id:3,
    farmer:"Selvam",
    location:"Tiruppur",
    crop:"Tomato",
    quantity:130,
    price:28
  },

  {
    id:4,
    farmer:"Karthik",
    location:"Erode",
    crop:"Onion",
    quantity:180,
    price:32
  },

  {
    id:5,
    farmer:"Murugan",
    location:"Udumalpet",
    crop:"Banana",
    quantity:250,
    price:35
  },

  {
    id:6,
    farmer:"Suresh",
    location:"Mettupalayam",
    crop:"Carrot",
    quantity:100,
    price:40
  }

];


let consumerDemands =
  JSON.parse(localStorage.getItem("farmsyncDemands")) || [

    {
      name:"Arun Kumar",
      location:"Coimbatore",
      crop:"Tomato",
      quantity:80
    },

    {
      name:"Priya",
      location:"Tiruppur",
      crop:"Tomato",
      quantity:120
    },

    {
      name:"Kavin",
      location:"Pollachi",
      crop:"Tomato",
      quantity:100
    },

    {
      name:"Divya",
      location:"Erode",
      crop:"Tomato",
      quantity:200
    }

  ];


/* ================= START ================= */

document.addEventListener("DOMContentLoaded",function(){

  setTimeout(function(){

    document.getElementById("splashScreen")
      .classList.add("hide");

    document.getElementById("app")
      .classList.remove("hidden");

    renderAll();

  },2300);

});


/* ================= PAGE NAVIGATION ================= */

function hidePages(){

  document
    .querySelectorAll(".page")
    .forEach(page=>{
      page.classList.add("hidden");
    });

}


function showHome(){

  hidePages();

  document
    .getElementById("homePage")
    .classList.remove("hidden");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function showFarmer(){

  hidePages();

  document
    .getElementById("farmerPage")
    .classList.remove("hidden");

  renderFarmer();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function showConsumer(){

  hidePages();

  document
    .getElementById("consumerPage")
    .classList.remove("hidden");

  renderConsumer();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function showPowerPool(){

  hidePages();

  document
    .getElementById("powerPage")
    .classList.remove("hidden");

  renderPowerPool();

  setTimeout(runMatching,600);

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* ================= SAVE ================= */

function saveData(){

  localStorage.setItem(
    "farmsyncListings",
    JSON.stringify(listings)
  );

  localStorage.setItem(
    "farmsyncDemands",
    JSON.stringify(consumerDemands)
  );

}


/* ================= RANDOM ================= */

function randomItem(array){

  return array[
    Math.floor(Math.random()*array.length)
  ];

}


/* ================= RENDER ALL ================= */

function renderAll(){

  renderFarmer();

  renderConsumer();

  renderPowerPool();

  updateHomeStats();

}


/* ================= HOME ================= */

function updateHomeStats(){

  const farmers =
    new Set(listings.map(x=>x.farmer)).size;

  document.getElementById("homeFarmers")
    .textContent = farmers;

  document.getElementById("homeConsumers")
    .textContent = 28 + consumerDemands.length;

}


/* ================= FARMER ================= */

function renderFarmer(){

  const container =
    document.getElementById("farmerListings");

  if(!container) return;

  container.innerHTML = "";

  listings.forEach(item=>{

    const card =
      document.createElement("div");

    card.className = "produce-card";

    card.innerHTML = `

      <div class="produce-top">

        <div class="crop-icon">
          ${crops[item.crop] || "🌱"}
        </div>

        <span class="match-badge">
          ${Math.floor(88+Math.random()*11)}% MATCH
        </span>

      </div>

      <h3>${item.crop}</h3>

      <div class="location">
        📍 ${item.location}
      </div>

      <div class="produce-bottom">

        <div>
          <small>Quantity</small>
          <strong>${item.quantity} kg</strong>
        </div>

        <div>
          <small>Price</small>
          <strong>₹${item.price}/kg</strong>
        </div>

      </div>

    `;

    container.appendChild(card);

  });


  document.getElementById("produceCount")
    .textContent = listings.length;

  const tomatoDemand =
    getDemand("Tomato");

  document.getElementById("farmerDemand")
    .textContent = tomatoDemand + " kg";

  document.getElementById("demandValue")
    .textContent = tomatoDemand;

  document.getElementById("demandBar")
    .style.width =
      Math.min(tomatoDemand / 10,100) + "%";

  const sales =
    listings
      .filter(x=>x.crop==="Tomato")
      .reduce((sum,x)=>sum+x.quantity*x.price,0);

  document.getElementById("potentialSales")
    .textContent =
      "₹" + formatMoney(sales);

  renderFarmerMatches();

}


/* ================= ADD PRODUCE ================= */

document.addEventListener("submit",function(event){

  if(event.target.id !== "produceForm") return;

  event.preventDefault();

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


  if(!name || !location || !quantity || !price){

    showToast(
      "Please fill all details",
      "warning"
    );

    return;

  }


  listings.unshift({

    id:Date.now(),

    farmer:name,

    location:location,

    crop:crop,

    quantity:quantity,

    price:price

  });


  saveData();

  event.target.reset();

  document.getElementById("farmerProfileName")
    .textContent = name;


  showToast(
    "Produce listed successfully!"
  );

  renderAll();

});


/* ================= FARMER MATCH ================= */

function renderFarmerMatches(){

  const container =
    document.getElementById("farmerMatches");

  if(!container) return;

  const tomatoFarmers =
    listings.filter(x=>x.crop==="Tomato");

  container.innerHTML = "";

  tomatoFarmers.forEach(item=>{

    const score =
      calculateMatch(item);

    const row =
      document.createElement("div");

    row.className = "match-row";

    row.innerHTML = `

      <strong>
        👨‍🌾 ${item.farmer}
      </strong>

      <span>
        📍 ${item.location}
      </span>

      <span>
        ${item.quantity} kg
      </span>

      <span class="score">
        ${score}% Match
      </span>

    `;

    container.appendChild(row);

  });

}


/* ================= CONSUMER ================= */

function renderConsumer(){

  const container =
    document.getElementById("consumerListings");

  if(!container) return;

  renderConsumerListings(listings);

  const randomFarmer =
    randomItem(farmerNames);

  document.getElementById("farmerProfileName")
    .textContent = randomFarmer;

  const randomConsumer =
    randomItem(consumerNames);

  document.getElementById("consumerProfileName")
    .textContent = randomConsumer;

}


/* ================= CONSUMER LISTINGS ================= */

function renderConsumerListings(data){

  const container =
    document.getElementById("consumerListings");

  if(!container) return;

  container.innerHTML = "";

  document.getElementById("resultCount")
    .textContent =
      data.length + " farmers found";


  if(data.length===0){

    container.innerHTML = `

      <div style="
        grid-column:1/-1;
        padding:35px;
        text-align:center;
        color:#718078;
      ">

        🌱 No matching produce found.

      </div>

    `;

    return;

  }


  data.forEach(item=>{

    const score =
      calculateMatch(item);

    const card =
      document.createElement("div");

    card.className = "consumer-card";

    card.innerHTML = `

      <div class="farmer-info">

        <div class="avatar">
          👨‍🌾
        </div>

        <div>

          <strong>${item.farmer}</strong>

          <small>
            📍 ${item.location}
          </small>

        </div>

      </div>


      <div class="consumer-product">

        <div>

          <strong style="color:#162b1c">
            ${crops[item.crop] || "🌱"}
            ${item.crop}
          </strong>

          <small style="
            display:block;
            color:#7a877e;
            margin-top:5px;
          ">
            ${item.quantity} kg available
          </small>

        </div>

        <strong>
          ₹${item.price}
        </strong>

      </div>


      <div style="
        display:flex;
        justify-content:space-between;
        font-size:10px;
        color:#718078;
      ">

        <span>
          🎯 ${score}% Smart Match
        </span>

        <span>
          📍 Location Match
        </span>

      </div>


      <button
        class="connect-btn"
        onclick="connectFarmer('${item.farmer}')"
      >
        🤝 Connect with Farmer
      </button>

    `;

    container.appendChild(card);

  });

}


/* ================= SEARCH ================= */

function searchProduce(){

  const search =
    document.getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();


  const filtered =
    listings.filter(item=>{

      return (

        item.crop.toLowerCase()
          .includes(search)

        ||

        item.farmer.toLowerCase()
          .includes(search)

        ||

        item.location.toLowerCase()
          .includes(search)

      );

    });


  renderConsumerListings(filtered);

}


/* ================= POWERPOOL DEMAND ================= */

function getDemand(crop){

  return consumerDemands

    .filter(x=>x.crop===crop)

    .reduce(
      (sum,x)=>sum+Number(x.quantity),
      0
    );

}


function joinPowerPool(){

  const crop =
    document.getElementById("consumerCrop").value;

  const quantity =
    Number(
      document.getElementById("consumerQty").value
    );

  const location =
    document.getElementById("consumerLocation").value
      .trim();


  if(!quantity || !location){

    showToast(
      "Enter quantity and location",
      "warning"
    );

    return;

  }


  const demand = {

    name:randomItem(consumerNames),

    location:location,

    crop:crop,

    quantity:quantity

  };


  consumerDemands.push(demand);

  saveData();


  document
    .getElementById("consumerSuccess")
    .classList.remove("hidden");


  showToast(
    quantity +
    " kg demand added to PowerPool!"
  );


  renderAll();


  setTimeout(()=>{

    document
      .getElementById("consumerSuccess")
      .classList.add("hidden");

  },3000);

}


/* ================= POWERPOOL ================= */

function renderPowerPool(){

  const total =
    getDemand("Tomato");

  const tomatoSupply =
    listings
      .filter(x=>x.crop==="Tomato")
      .reduce(
        (sum,x)=>sum+x.quantity,
        0
      );

  const gap =
    Math.max(total - tomatoSupply,0);


  document.getElementById("poolTotal")
    .textContent =
      total + " KG";


  document.getElementById("supplyGap")
    .textContent =
      gap + " KG";


  renderPowerMatches();

}


/* ================= SMART MATCH SCORE ================= */

function calculateMatch(farmer){

  let score = 60;

  const demand =
    getDemand(farmer.crop);

  if(demand > 0)
    score += 15;

  if(farmer.quantity >= demand / 2)
    score += 10;

  if(farmer.price <= 30)
    score += 7;

  if(farmer.location)
    score += 5;

  return Math.min(score,99);

}


/* ================= POWER MATCHES ================= */

function renderPowerMatches(){

  const container =
    document.getElementById("powerMatches");

  if(!container) return;

  const tomatoFarmers =
    listings.filter(x=>x.crop==="Tomato");

  container.innerHTML = "";


  tomatoFarmers.forEach(item=>{

    const score =
      calculateMatch(item);


    const row =
      document.createElement("div");

    row.className = "power-match";

    row.innerHTML = `

      <div class="farmer-name">

        👨‍🌾 ${item.farmer}

        <small>
          📍 ${item.location}
        </small>

      </div>

      <div>
        <small>Supply</small>
        <strong>${item.quantity} kg</strong>
      </div>

      <div>
        <small>Price</small>
        <strong>₹${item.price}/kg</strong>
      </div>

      <div class="match-percent">
        ${score}%
      </div>

    `;

    container.appendChild(row);

  });

}


/* ================= MATCHING ANIMATION ================= */

function runMatching(){

  const animation =
    document.getElementById("matchingAnimation");

  if(!animation) return;


  animation.classList.remove("matching-run");

  void animation.offsetWidth;

  animation.classList.add("matching-run");


  showToast(
    "PowerPool matching farmers..."
  );


  setTimeout(()=>{

    showToast(
      "Multiple farmer supply matched!"
    );

  },1800);

}


/* ================= CONNECT FARMER ================= */

function connectFarmer(name){

  showToast(
    "Connection request sent to " + name
  );

}


/* ================= QR ================= */

function showQRInfo(){

  alert(

`FARMSYNC TRACEABILITY

Produce: Tomato
Farmer: Ravi Kumar
Location: Pollachi
Quantity: 220 kg
Price: ₹27/kg

Status:
✓ Farmer Verified
✓ Produce Listed
✓ PowerPool Matched
✓ Delivery Tracking Active`

  );

}


/* ================= TOAST ================= */

function showToast(
  message,
  type="success"
){

  const toast =
    document.getElementById("toast");

  const text =
    document.getElementById("toastText");


  text.textContent = message;

  toast.classList.add("show");


  clearTimeout(window.toastTimer);


  window.toastTimer =
    setTimeout(()=>{

      toast.classList.remove("show");

    },3000);

}


/* ================= FORMAT MONEY ================= */

function formatMoney(number){

  if(number >= 100000){

    return (
      number / 100000
    ).toFixed(1) + "L";

  }

  if(number >= 1000){

    return (
      number / 1000
    ).toFixed(1) + "K";

  }

  return number;

}


/* ================= DEMO LIVE UPDATE ================= */

setInterval(()=>{

  const bar =
    document.getElementById("demandBar");

  if(!bar) return;

  const demand =
    getDemand("Tomato");

  const animatedValue =
    demand +
    Math.floor(Math.random()*10);

  document.getElementById("demandValue")
    .textContent = animatedValue;

  bar.style.width =
    Math.min(animatedValue/10,100) + "%";

},4000);


/* ================= RANDOM DEMO PROFILES ================= */

function setRandomProfiles(){

  const farmer =
    randomItem(farmerNames);

  const consumer =
    randomItem(consumerNames);


  const farmerElement =
    document.getElementById("farmerProfileName");

  const consumerElement =
    document.getElementById("consumerProfileName");


  if(farmerElement)
    farmerElement.textContent = farmer;

  if(consumerElement)
    consumerElement.textContent = consumer;

}


/* ================= START RANDOM PROFILES ================= */

setTimeout(
  setRandomProfiles,
  1000
);
