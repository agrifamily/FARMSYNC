/* =========================================================
   FARMSYNC
   Farm to Family
   Firebase NOT required
   Works directly on GitHub Pages
========================================================= */


/* ================= DATA ================= */

const farmerNames = [
  "Arun Kumar",
  "Suresh",
  "Karthik",
  "Ramesh",
  "Prakash",
  "Manoj",
  "Vijay",
  "Selvam",
  "Mohan",
  "Rajesh"
];


const consumerNames = [
  "Ananya",
  "Priya",
  "Rahul",
  "Divya",
  "Arjun",
  "Nithya",
  "Kavin",
  "Meena",
  "Harish",
  "Keerthana"
];


const locations = [
  "Pollachi",
  "Erode",
  "Udumalpet",
  "Coimbatore",
  "Tiruppur",
  "Salem",
  "Namakkal",
  "Karur",
  "Trichy",
  "Madurai"
];


const produceData = [

  {
    name: "Tomato",
    emoji: "🍅",
    price: 28,
    category: "vegetable"
  },

  {
    name: "Onion",
    emoji: "🧅",
    price: 32,
    category: "vegetable"
  },

  {
    name: "Potato",
    emoji: "🥔",
    price: 30,
    category: "vegetable"
  },

  {
    name: "Carrot",
    emoji: "🥕",
    price: 42,
    category: "vegetable"
  },

  {
    name: "Banana",
    emoji: "🍌",
    price: 35,
    category: "fruit"
  },

  {
    name: "Coconut",
    emoji: "🥥",
    price: 38,
    category: "fruit"
  },

  {
    name: "Brinjal",
    emoji: "🍆",
    price: 36,
    category: "vegetable"
  },

  {
    name: "Chilli",
    emoji: "🌶️",
    price: 48,
    category: "vegetable"
  },

  {
    name: "Lady Finger",
    emoji: "🥬",
    price: 40,
    category: "vegetable"
  }

];


/* ================= STORAGE ================= */

let listings =
  JSON.parse(localStorage.getItem("farmsyncListings")) || [];

let requests =
  JSON.parse(localStorage.getItem("farmsyncRequests")) || [];


/* ================= CURRENT USER ================= */

let currentFarmer = null;
let currentConsumer = null;

let selectedProduct = null;

let currentFilter = "all";


/* ================= RANDOM FUNCTIONS ================= */

function randomItem(array) {

  return array[
    Math.floor(Math.random() * array.length)
  ];

}


function randomNumber(min, max) {

  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;

}


function generateId() {

  return Date.now().toString() +
    Math.random().toString(36).substring(2);

}


/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {

    document
      .getElementById("splashScreen")
      .classList.add("hidden");

    document
      .getElementById("homeScreen")
      .classList.remove("hidden");

  }, 1800);


  /*
    First-time prototype data.
    This makes Consumer immediately show farmers.
  */

  if (listings.length === 0) {

    createDemoListings();

  }

});


/* ================= DEMO FARMERS ================= */

function createDemoListings() {

  const demo = [

    ["Arun Kumar", "Pollachi", "Tomato", 100, 28],

    ["Suresh", "Erode", "Onion", 80, 32],

    ["Karthik", "Udumalpet", "Banana", 120, 35],

    ["Ramesh", "Coimbatore", "Carrot", 65, 42],

    ["Prakash", "Tiruppur", "Potato", 90, 30],

    ["Manoj", "Salem", "Brinjal", 75, 36],

    ["Vijay", "Namakkal", "Chilli", 50, 48],

    ["Selvam", "Karur", "Coconut", 150, 38]

  ];


  demo.forEach(item => {

    const [farmer, location, produce, quantity, price] = item;

    const info = produceData.find(
      p => p.name === produce
    );


    listings.push({

      id: generateId(),

      farmerName: farmer,

      location: location,

      produce: produce,

      emoji: info ? info.emoji : "🌱",

      category: info ? info.category : "vegetable",

      quantity: quantity,

      price: price,

      createdAt: Date.now()

    });

  });


  saveData();

}


/* ================= SAVE ================= */

function saveData() {

  localStorage.setItem(
    "farmsyncListings",
    JSON.stringify(listings)
  );

  localStorage.setItem(
    "farmsyncRequests",
    JSON.stringify(requests)
  );

}


/* ================= SCREEN NAVIGATION ================= */

function hideAllScreens() {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.add("hidden");

    });

}


function showHome() {

  hideAllScreens();

  document
    .getElementById("homeScreen")
    .classList.remove("hidden");

}


function openFarmer() {

  hideAllScreens();

  document
    .getElementById("farmerScreen")
    .classList.remove("hidden");


  if (!currentFarmer) {

    currentFarmer = {

      name: randomItem(farmerNames),

      location: randomItem(locations)

    };

  }


  document
    .getElementById("farmerWelcome")
    .textContent =
    Welcome, ${currentFarmer.name};


  renderFarmerListings();

  renderFarmerRequests();

  updateFarmerStats();

}


function openConsumer() {

  hideAllScreens();

  document
    .getElementById("consumerScreen")
    .classList.remove("hidden");


  generateConsumerProfile();

  renderConsumerListings();

  startMatchingAnimation();

}


/* ================= CONSUMER PROFILE ================= */

function generateConsumerProfile() {

  currentConsumer = {

    name: randomItem(consumerNames),

    location: randomItem(locations)

  };


  document
    .getElementById("consumerName")
    .textContent =
    currentConsumer.name;


  document
    .getElementById("consumerLocation")
    .textContent =
    📍 ${currentConsumer.location};

}


/* ================= FARMER ADD PRODUCE ================= */

document
  .getElementById("produceForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();


    if (!currentFarmer) {

      currentFarmer = {

        name: randomItem(farmerNames),

        location: randomItem(locations)

      };

    }


    const produceName =
      document.getElementById("produceName").value;


    const quantity =
      Number(
        document.getElementById("produceQuantity").value
      );


    const price =
      Number(
        document.getElementById("producePrice").value
      );


    const location =
      document.getElementById("farmerLocation").value;


    const info =
      produceData.find(
        p => p.name === produceName
      );


    const newListing = {

      id: generateId(),

      farmerName: currentFarmer.name,

      location: location,

      produce: produceName,

      emoji: info ? info.emoji : "🌱",

      category: info ? info.category : "vegetable",

      quantity: quantity,

      price: price,

      createdAt: Date.now()

    };


    listings.unshift(newListing);

    saveData();


    this.reset();


    renderFarmerListings();

    renderConsumerListings();

    updateFarmerStats();


    showToast(
      "✓",
      ${produceName} successfully listed
    );

  });


/* ================= FARMER LISTINGS ================= */

function renderFarmerListings() {

  const container =
    document.getElementById("farmerListings");


  if (!currentFarmer) {

    container.innerHTML = "";

    return;

  }


  const myListings =
    listings.filter(
      item =>
        item.farmerName === currentFarmer.name
    );


  if (myListings.length === 0) {

    container.innerHTML = `

      <div class="empty-state">

        <div>🌱</div>

        <strong>No produce listed yet</strong>

        <p>Add your first farm produce above.</p>

      </div>

    `;

    return;

  }


  container.innerHTML =
    myListings.map(item => `

      <div class="produce-card">

        <div class="produce-top">

          <div class="produce-image">
            ${item.emoji}
          </div>

          <div>

            <div class="produce-name">
              ${item.produce}
            </div>

            <div class="produce-meta">
              📍 ${item.location}
            </div>

          </div>

          <div class="price-tag">
            ₹${item.price}
          </div>

        </div>


        <div class="produce-bottom">

          <div class="quantity">
            📦 ${item.quantity} Kg available
          </div>

          <button
            class="delete-btn"
            onclick="deleteListing('${item.id}')">

            Delete

          </button>

        </div>

      </div>

    `).join("");

}


/* ================= DELETE LISTING ================= */

function deleteListing(id) {

  listings =
    listings.filter(
      item => item.id !== id
    );


  saveData();

  renderFarmerListings();

  renderConsumerListings();

  updateFarmerStats();

  showToast("✓", "Listing removed");

}


/* ================= CONSUMER LISTINGS ================= */

function renderConsumerListings() {

  const container =
    document.getElementById("consumerListings");


  const search =
    (
      document
        .getElementById("searchProduce")
        ?.value || ""
    )
    .toLowerCase()
    .trim();


  let filtered =
    listings.filter(item => {

      const matchesSearch =
        item.produce
          .toLowerCase()
          .includes(search) ||

        item.farmerName
          .toLowerCase()
          .includes(search) ||

        item.location
          .toLowerCase()
          .includes(search);


      const matchesFilter =
        currentFilter === "all" ||

        item.category === currentFilter;


      return matchesSearch && matchesFilter;

    });


  document
    .getElementById("listingCount")
    .textContent =
    ${filtered.length} fresh listing${filtered.length !== 1 ? "s" : ""} available;


  if (filtered.length === 0) {

    container.innerHTML = `

      <div class="empty-state">

        <div>🔎</div>

        <strong>No matching produce</strong>

        <p>Try another produce or location.</p>

      </div>

    `;

    return;

  }


  container.innerHTML =
    filtered.map(item => `

      <div class="consumer-card">

        <div class="farmer-info">

          <div class="farmer-avatar">
            👨‍🌾
          </div>

          <div>

            <strong>
              ${item.farmerName}
            </strong>

            <small>
              📍 ${item.location}
            </small>

          </div>

          <span class="fresh-badge">
            FRESH
          </span>

        </div>


        <div class="consumer-card-main">

          <div class="big-produce-icon">
            ${item.emoji}
          </div>


          <div>

            <h3>
              ${item.produce}
            </h3>

            <div class="location">
              Direct from farmer
            </div>

          </div>


          <div class="consumer-price">

            <strong>
              ₹${item.price}
            </strong>

            <small>/ Kg</small>

          </div>

        </div>


        <div class="consumer-card-bottom">

          <div class="available">
            📦 ${item.quantity} Kg available
          </div>

          <button
            class="request-btn"
            onclick="openRequestModal('${item.id}')">

            Request

          </button>

        </div>

      </div>

    `).join("");

}


/* ================= FILTER ================= */

function filterProduce(category, button) {

  currentFilter = category;


  document
    .querySelectorAll(".filter")
    .forEach(btn => {

      btn.classList.remove("active");

    });


  button.classList.add("active");


  renderConsumerListings();

}


/* ================= REQUEST MODAL ================= */

function openRequestModal(id) {

  selectedProduct =
    listings.find(
      item => item.id === id
    );


  if (!selectedProduct) return;


  document
    .getElementById("requestProductInfo")
    .innerHTML = `

      You are requesting

      <strong>
        ${selectedProduct.emoji}
        ${selectedProduct.produce}
      </strong>

      from

      <strong>
        ${selectedProduct.farmerName}
      </strong>

      in ${selectedProduct.location}.

    `;


  document
    .getElementById("requestQuantity")
    .max =
    selectedProduct.quantity;


  document
    .getElementById("requestQuantity")
    .value =
    Math.min(10, selectedProduct.quantity);


  document
    .getElementById("requestModal")
    .classList.remove("hidden");

}


function closeModal() {

  document
    .getElementById("requestModal")
    .classList.add("hidden");

  selectedProduct = null;

}


/* ================= SEND REQUEST ================= */

function sendRequest() {

  if (!selectedProduct) return;


  const quantity =
    Number(
      document.getElementById("requestQuantity").value
    );


  if (
    quantity <= 0 ||
    quantity > selectedProduct.quantity
  ) {

    showToast(
      "!",
      "Please enter a valid quantity"
    );

    return;

  }


  const request = {

    id: generateId(),

    productId: selectedProduct.id,

    farmerName: selectedProduct.farmerName,

    farmerLocation: selectedProduct.location,

    consumerName:
      currentConsumer?.name || "Consumer",

    consumerLocation:
      currentConsumer?.location || "Nearby",

    produce: selectedProduct.produce,

    emoji: selectedProduct.emoji,

    quantity: quantity,

    price: selectedProduct.price,

    status: "Pending",

    createdAt: Date.now()

  };


  requests.unshift(request);

  saveData();


  closeModal();


  showToast(
    "⚡",
    "Demand matched! Request sent to farmer."
  );


  /*
    PowerPool visual update
  */

  const status =
    document.getElementById("matchStatus");

  status.textContent =
    "✓ Demand matched with " +
    selectedProduct.farmerName;


  setTimeout(() => {

    status.textContent =
      "⚡ PowerPool continuously matching demand...";

  }, 3500);

}


/* ================= FARMER REQUESTS ================= */

function renderFarmerRequests() {

  const container =
    document.getElementById("farmerRequests");


  if (!currentFarmer) return;


  const myRequests =
    requests.filter(
      request =>
        request.farmerName === currentFarmer.name
    );


  if (myRequests.length === 0) {

    container.innerHTML = `

      <div class="empty-state">

        <div>🛒</div>

        <strong>No consumer requests yet</strong>

        <p>
          Consumer demand will appear here.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML =
    myRequests.map(request => `

      <div class="produce-card">

        <div class="produce-top">

          <div class="produce-image">
            ${request.emoji}
          </div>

          <div>

            <div class="produce-name">
              ${request.produce}
            </div>

            <div class="produce-meta">
              Consumer: ${request.consumerName}
            </div>

          </div>

          <div class="price-tag">
            ${request.status}
          </div>

        </div>


        <div class="produce-bottom">

          <div class="quantity">
            ⚡ ${request.quantity} Kg demand
          </div>

          <button
            class="request-btn"
            onclick="acceptRequest('${request.id}')">

            Accept

          </button>

        </div>

      </div>

    `).join("");

}


/* ================= ACCEPT REQUEST ================= */

function acceptRequest(id) {

  const request =
    requests.find(
      item => item.id === id
    );


  if (!request) return;


  request.status = "Accepted";


  saveData();


  renderFarmerRequests();

  updateFarmerStats();


  showToast(
    "✓",
    Order accepted from ${request.consumerName}
  );

}


/* ================= FARMER STATS ================= */

function updateFarmerStats() {

  if (!currentFarmer) return;


  const myListings =
    listings.filter(
      item =>
        item.farmerName === currentFarmer.name
    );


  const myRequests =
    requests.filter(
      item =>
        item.farmerName === currentFarmer.name
    );


  const totalQuantity =
    myListings.reduce(
      (total, item) =>
        total + Number(item.quantity),
      0
    );


  document
    .getElementById("farmerProductsCount")
    .textContent =
    myListings.length;


  document
    .getElementById("farmerTotalQuantity")
    .textContent =
    totalQuantity;


  document
    .getElementById("farmerRequestsCount")
    .textContent =
    myRequests.length;

}


/* ================= POWERPOOL ================= */

function startMatchingAnimation() {

  const status =
    document.getElementById("matchStatus");


  const messages = [

    "Finding nearby farm supply...",

    "Scanning farmer listings...",

    "Comparing price & quantity...",

    "Matching consumer demand...",

    "⚡ PowerPool match ready"

  ];


  let index = 0;


  setInterval(() => {

    if (
      document
        .getElementById("consumerScreen")
        .classList
        .contains("hidden")
    ) return;


    status.textContent =
      messages[index];


    index =
      (index + 1) % messages.length;

  }, 2200);

}


/* ================= TOAST ================= */

let toastTimer;


function showToast(icon, message) {

  const toast =
    document.getElementById("toast");


  document
    .getElementById("toastIcon")
    .textContent =
    icon;


  document
    .getElementById("toastMessage")
    .textContent =
    message;


  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 3000);

}


/* ================= DEMO RESET ================= */

function resetDemoData() {

  localStorage.removeItem(
    "farmsyncListings"
  );

  localStorage.removeItem(
    "farmsyncRequests"
  );


  location.reload();

}


/* =========================================================
   END FARMSYNC
========================================================= */
