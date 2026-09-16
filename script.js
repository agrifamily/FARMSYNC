/* =====================================================
   FARMSYNC
   SMART AGRICULTURE DEMO ENGINE
===================================================== */


/* =====================================================
   RANDOM DEMO DATA
===================================================== */

const farmerNames = [
  "Arun Kumar",
  "Suresh",
  "Ravi",
  "Manikandan",
  "Prakash",
  "Karthik",
  "Selvam",
  "Dinesh",
  "Vignesh",
  "Mohan"
];


const locations = [
  "Pollachi",
  "Coimbatore",
  "Erode",
  "Tiruppur",
  "Salem",
  "Mettupalayam",
  "Udumalpet",
  "Annur",
  "Avinashi",
  "Dharapuram"
];


const crops = [
  {
    name: "Tomato",
    emoji: "🍅",
    price: 28
  },

  {
    name: "Onion",
    emoji: "🧅",
    price: 32
  },

  {
    name: "Banana",
    emoji: "🍌",
    price: 35
  },

  {
    name: "Carrot",
    emoji: "🥕",
    price: 42
  },

  {
    name: "Potato",
    emoji: "🥔",
    price: 30
  },

  {
    name: "Cabbage",
    emoji: "🥬",
    price: 25
  }
];


/* =====================================================
   STORAGE
===================================================== */

let produceList =
  JSON.parse(
    localStorage.getItem("farmsyncProduce")
  ) || [

    {
      id: 1,
      farmer: "Arun Kumar",
      location: "Pollachi",
      crop: "Tomato",
      quantity: 120,
      price: 28,
      emoji: "🍅"
    },

    {
      id: 2,
      farmer: "Suresh",
      location: "Coimbatore",
      crop: "Onion",
      quantity: 180,
      price: 32,
      emoji: "🧅"
    },

    {
      id: 3,
      farmer: "Ravi",
      location: "Erode",
      crop: "Banana",
      quantity: 250,
      price: 35,
      emoji: "🍌"
    },

    {
      id: 4,
      farmer: "Manikandan",
      location: "Tiruppur",
      crop: "Carrot",
      quantity: 90,
      price: 42,
      emoji: "🥕"
    },

    {
      id: 5,
      farmer: "Prakash",
      location: "Salem",
      crop: "Potato",
      quantity: 160,
      price: 30,
      emoji: "🥔"
    },

    {
      id: 6,
      farmer: "Selvam",
      location: "Mettupalayam",
      crop: "Cabbage",
      quantity: 110,
      price: 25,
      emoji: "🥬"
    }
  ];


let demandList =
  JSON.parse(
    localStorage.getItem("farmsyncDemand")
  ) || [

    {
      id: 1,
      consumer: "Priya",
      location: "Coimbatore",
      crop: "Tomato",
      quantity: 100,
      price: 35
    },

    {
      id: 2,
      consumer: "Rahul",
      location: "Pollachi",
      crop: "Tomato",
      quantity: 150,
      price: 34
    },

    {
      id: 3,
      consumer: "Meena",
      location: "Erode",
      crop: "Onion",
      quantity: 80,
      price: 38
    }
  ];


/* =====================================================
   SAVE
===================================================== */

function saveData() {

  localStorage.setItem(
    "farmsyncProduce",
    JSON.stringify(produceList)
  );

  localStorage.setItem(
    "farmsyncDemand",
    JSON.stringify(demandList)
  );
}


/* =====================================================
   APP START
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(() => {

      const intro =
        document.getElementById(
          "introScreen"
        );

      if (
        intro &&
        !intro.classList.contains("hide")
      ) {

        intro.classList.add("hide");

        setTimeout(() => {

          intro.style.display =
            "none";

          showApp();

        }, 800);

      }

    }, 2500);

    updateEverything();

  }
);


/* =====================================================
   ENTER FARMSYNC
===================================================== */

function enterFarmSync() {

  const intro =
    document.getElementById(
      "introScreen"
    );

  intro.classList.add("hide");

  setTimeout(() => {

    intro.style.display =
      "none";

    showApp();

  }, 800);
}


/* =====================================================
   SHOW APP
===================================================== */

function showApp() {

  const app =
    document.getElementById("app");

  if (app) {

    app.classList.remove("hidden");

  }

  updateEverything();
}


/* =====================================================
   ROLE SWITCH
===================================================== */

let currentRole = "farmer";


function switchRole() {

  if (currentRole === "farmer") {

    currentRole = "consumer";

  } else {

    currentRole = "farmer";

  }

  const farmerPage =
    document.getElementById(
      "farmerPage"
    );

  const consumerPage =
    document.getElementById(
      "consumerPage"
    );

  const roleButton =
    document.getElementById(
      "roleButton"
    );


  if (currentRole === "farmer") {

    farmerPage.classList.remove(
      "hidden"
    );

    consumerPage.classList.add(
      "hidden"
    );

    roleButton.innerHTML =
      "👨‍🌾 Farmer";

  } else {

    farmerPage.classList.add(
      "hidden"
    );

    consumerPage.classList.remove(
      "hidden"
    );

    roleButton.innerHTML =
      "👨‍👩‍👧 Consumer";

  }

  updateEverything();
}


/* =====================================================
   PRODUCE MODAL
===================================================== */

function openProduceModal() {

  document
    .getElementById("produceModal")
    .classList.add("active");

}


function closeProduceModal() {

  document
    .getElementById("produceModal")
    .classList.remove("active");

}


/* =====================================================
   DEMAND MODAL
===================================================== */

function openDemandModal() {

  document
    .getElementById("demandModal")
    .classList.add("active");

}


function closeDemandModal() {

  document
    .getElementById("demandModal")
    .classList.remove("active");

}


/* =====================================================
   PRODUCE FORM
===================================================== */

document
  .getElementById("produceForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const farmer =
        document
          .getElementById(
            "farmerName"
          )
          .value
          .trim();


      const location =
        document
          .getElementById(
            "farmerLocation"
          )
          .value
          .trim();


      const crop =
        document
          .getElementById(
            "cropName"
          )
          .value
          .trim();


      const quantity =
        Number(
          document
            .getElementById(
              "cropQuantity"
            )
            .value
        );


      const price =
        Number(
          document
            .getElementById(
              "cropPrice"
            )
            .value
        );


      const cropData =
        crops.find(
          item =>
            item.name.toLowerCase() ===
            crop.toLowerCase()
        );


      const newProduce = {

        id:
          Date.now(),

        farmer,

        location,

        crop,

        quantity,

        price,

        emoji:
          cropData
            ? cropData.emoji
            : "🌱"

      };


      produceList.unshift(
        newProduce
      );


      saveData();

      renderProduce();

      renderConsumerProducts();

      updateEverything();

      closeProduceModal();

      this.reset();

      showToast(
        "🌱 Produce added successfully!"
      );

      runMatchingAnimation();

    }
  );


/* =====================================================
   DEMAND FORM
===================================================== */

document
  .getElementById("demandForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const consumer =
        document
          .getElementById(
            "consumerName"
          )
          .value
          .trim();


      const location =
        document
          .getElementById(
            "consumerLocation"
          )
          .value
          .trim();


      const crop =
        document
          .getElementById(
            "demandCrop"
          )
          .value
          .trim();


      const quantity =
        Number(
          document
            .getElementById(
              "demandQuantity"
            )
            .value
        );


      const price =
        Number(
          document
            .getElementById(
              "demandPrice"
            )
            .value
        );


      const newDemand = {

        id:
          Date.now(),

        consumer,

        location,

        crop,

        quantity,

        price

      };


      demandList.unshift(
        newDemand
      );


      saveData();

      renderDemands();

      updateEverything();

      closeDemandModal();

      this.reset();


      showToast(
        "⚡ Demand added to PowerPool!"
      );


      runMatchingAnimation();

    }
  );


/* =====================================================
   RENDER FARMER PRODUCE
===================================================== */

function renderProduce() {

  const grid =
    document.getElementById(
      "produceGrid"
    );


  if (!grid) return;


  grid.innerHTML = "";


  produceList.forEach(
    product => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "produce-card";


      card.innerHTML = `

        <div class="crop-image">
          ${product.emoji}
        </div>

        <div class="produce-info">

          <div class="crop-title">
            ${escapeHTML(product.crop)}
          </div>

          <div class="farmer-info">
            👨‍🌾
            ${escapeHTML(product.farmer)}
          </div>

          <div class="location">
            📍 ${escapeHTML(product.location)}
          </div>

          <div class="product-bottom">

            <div class="price">
              ₹${product.price}/kg
            </div>

            <div class="quantity">
              ${product.quantity} kg
            </div>

          </div>

        </div>
      `;


      grid.appendChild(card);

    }
  );
}


/* =====================================================
   CONSUMER PRODUCTS
===================================================== */

function renderConsumerProducts() {

  const grid =
    document.getElementById(
      "consumerProductGrid"
    );


  if (!grid) return;


  const search =
    (
      document
        .getElementById(
          "searchInput"
        )
        ?.value || ""
    )
    .toLowerCase();


  const location =
    document
      .getElementById(
        "locationFilter"
      )
      ?.value || "all";


  const filtered =
    produceList.filter(
      product => {

        const matchesSearch =
          product.crop
            .toLowerCase()
            .includes(search) ||

          product.farmer
            .toLowerCase()
            .includes(search);


        const matchesLocation =
          location === "all" ||
          product.location === location;


        return (
          matchesSearch &&
          matchesLocation
        );

      }
    );


  grid.innerHTML = "";


  if (
    filtered.length === 0
  ) {

    grid.innerHTML = `

      <div class="empty-state">

        🌱

        <h3>
          No produce found
        </h3>

        <p>
          Try another search.
        </p>

      </div>

    `;

    return;

  }


  filtered.forEach(
    product => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "produce-card";


      card.innerHTML = `

        <div class="crop-image">
          ${product.emoji}
        </div>

        <div class="produce-info">

          <div class="crop-title">
            ${escapeHTML(product.crop)}
          </div>

          <div class="farmer-info">
            👨‍🌾
            ${escapeHTML(product.farmer)}
          </div>

          <div class="location">
            📍 ${escapeHTML(product.location)}
          </div>

          <div class="product-bottom">

            <div class="price">
              ₹${product.price}/kg
            </div>

            <div class="quantity">
              ${product.quantity} kg
            </div>

          </div>

          <button
            class="primary-btn full-btn"
            onclick="connectFarmer('${product.id}')">

            Connect with Farmer

          </button>

        </div>

      `;


      grid.appendChild(card);

    }
  );

}


/* =====================================================
   LOCATION FILTER
===================================================== */

function updateLocationFilter() {

  const select =
    document.getElementById(
      "locationFilter"
    );


  if (!select) return;


  const current =
    select.value;


  const uniqueLocations =
    [
      ...new Set(
        produceList.map(
          item => item.location
        )
      )
    ];


  select.innerHTML = `

    <option value="all">
      All Locations
    </option>

  `;


  uniqueLocations.forEach(
    location => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        location;

      option.textContent =
        "📍 " + location;

      select.appendChild(
        option
      );

    }
  );


  if (
    uniqueLocations.includes(
      current
    )
  ) {

    select.value =
      current;

  }

}


/* =====================================================
   DEMANDS
===================================================== */

function renderDemands() {

  const grid =
    document.getElementById(
      "demandGrid"
    );


  if (!grid) return;


  grid.innerHTML = "";


  demandList.forEach(
    demand => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "demand-card";


      card.innerHTML = `

        <div class="demand-header">

          <strong>
            ${escapeHTML(
              demand.crop
            )}
          </strong>

          <span class="demand-status">
            ACTIVE
          </span>

        </div>


        <div class="farmer-info">

          👤
          ${escapeHTML(
            demand.consumer
          )}

        </div>


        <div class="location">

          📍
          ${escapeHTML(
            demand.location
          )}

        </div>


        <div class="demand-details">

          <div>

            <span>
              Required
            </span>

            <b>
              ${demand.quantity} kg
            </b>

          </div>


          <div>

            <span>
              Max Price
            </span>

            <b>
              ₹${demand.price}/kg
            </b>

          </div>

        </div>

      `;


      grid.appendChild(card);

    }
  );

}


/* =====================================================
   STATS
===================================================== */

function updateStats() {

  const totalDemand =
    demandList.reduce(
      (sum, item) =>
        sum + Number(item.quantity),
      0
    );


  const totalSupply =
    produceList.reduce(
      (sum, item) =>
        sum + Number(item.quantity),
      0
    );


  const potentialSales =
    produceList.reduce(
      (sum, item) =>
        sum +
        Number(item.quantity) *
        Number(item.price),
      0
    );


  const consumers =
    new Set(
      demandList.map(
        item => item.consumer
      )
    ).size;


  const locations =
    new Set(
      produceList.map(
        item => item.location
      )
    ).size;


  setText(
    "activeProduce",
    produceList.length
  );


  setText(
    "poolDemand",
    totalDemand + " kg"
  );


  setText(
    "consumerCount",
    consumers
  );


  setText(
    "potentialSales",
    "₹" +
    potentialSales.toLocaleString(
      "en-IN"
    )
  );


  setText(
    "poolVisualDemand",
    totalDemand + " kg"
  );


  setText(
    "poolVisualSupply",
    totalSupply + " kg"
  );


  setText(
    "consumerProducts",
    produceList.length
  );


  setText(
    "consumerPool",
    totalDemand + " kg"
  );


  setText(
    "locationCount",
    locations
  );


  setText(
    "connectionCount",
    Math.min(
      produceList.length,
      demandList.length
    )
  );

}


/* =====================================================
   MATCHING ENGINE
===================================================== */

function calculateMatches() {

  let matched =
    0;

  let totalDemand =
    0;

  demandList.forEach(
    demand => {

      totalDemand +=
        Number(
          demand.quantity
        );


      const crop =
        demand.crop
          .toLowerCase();


      const available =
        produceList.filter(
          product =>

            product.crop
              .toLowerCase() ===
            crop &&

            Number(
              product.price
            ) <=
            Number(
              demand.price
            )
        );


      if (
        available.length > 0
      ) {

        matched++;

      }

    }
  );


  return {
    matched,
    totalDemand
  };

}


/* =====================================================
   MATCHING ANIMATION
===================================================== */

function runMatchingAnimation() {

  const result =
    document.getElementById(
      "matchResult"
    );


  if (!result) return;


  result.innerHTML = `

    <span>
      🤖
    </span>

    <div>

      <strong>
        PowerPool is matching...
      </strong>

      <p>
        Analysing crop, quantity, price and location.
      </p>

    </div>

  `;


  result.style.borderColor =
    "#f0d58b";


  setTimeout(
    () => {

      const matches =
        calculateMatches();


      result.innerHTML = `

        <span>
          ⚡
        </span>

        <div>

          <strong>
            ${matches.matched}
            smart match(es) found
          </strong>

          <p>
            Demand has been connected with
            available farmer supply.
          </p>

        </div>

      `;


      result.style.borderColor =
        "#b9dfc2";

    },
    1800
  );

}


/* =====================================================
   CONNECT FARMER
===================================================== */

function connectFarmer(
  productId
) {

  const product =
    produceList.find(
      item =>
        String(item.id) ===
        String(productId)
    );


  if (!product) return;


  showToast(
    "🔗 Connected with " +
    product.farmer
  );


  setTimeout(
    () => {

      runMatchingAnimation();

    },
    500
  );

}


/* =====================================================
   UPDATE EVERYTHING
===================================================== */

function updateEverything() {

  renderProduce();

  renderConsumerProducts();

  renderDemands();

  updateLocationFilter();

  updateStats();

  runMatchingAnimation();

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(
  message
) {

  const toast =
    document.getElementById(
      "toast"
    );


  const text =
    document.getElementById(
      "toastMessage"
    );


  text.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      3000
    );

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(
  value
) {

  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


/* =====================================================
   CLOSE MODALS ON BACKGROUND CLICK
===================================================== */

window.addEventListener(
  "click",
  function(event) {

    const produceModal =
      document.getElementById(
        "produceModal"
      );

    const demandModal =
      document.getElementById(
        "demandModal"
      );


    if (
      event.target ===
      produceModal
    ) {

      closeProduceModal();

    }


    if (
      event.target ===
      demandModal
    ) {

      closeDemandModal();

    }

  }
);


/* =====================================================
   KEYBOARD ESCAPE
===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key ===
      "Escape"
    ) {

      closeProduceModal();

      closeDemandModal();

    }

  }
);
