* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --green: #16a34a;
  --dark: #14532d;
  --dark2: #052e16;
  --light: #f0fdf4;
  --border: #dbe7de;
  --text: #17251b;
  --muted: #6b7b70;
  --white: #ffffff;
  --orange: #ea580c;
  --blue: #2563eb;
  --shadow: 0 10px 30px rgba(20, 83, 45, 0.08);
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f5faf6;
  color: var(--text);
}

button,
input,
select {
  font-family: inherit;
}

button {
  cursor: pointer;
}


/* =========================
   LOADER
========================= */

#loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #f0fdf4;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

#loader.hide {
  opacity: 0;
  pointer-events: none;
}

.loader-box {
  text-align: center;
}

.loader-logo {
  width: 75px;
  height: 75px;
  margin: auto;
  border-radius: 22px;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
}

.loader-box h1 {
  margin-top: 18px;
  font-size: 34px;
  color: var(--dark);
}

.loader-box h1 span {
  color: var(--green);
}

.loader-box p {
  color: var(--muted);
  margin-top: 5px;
}

.loader-progress {
  width: 220px;
  height: 6px;
  background: #dcfce7;
  border-radius: 20px;
  margin: 22px auto 10px;
  overflow: hidden;
}

.loader-progress span {
  display: block;
  width: 0;
  height: 100%;
  background: var(--green);
  animation: loading 1.3s forwards;
}

@keyframes loading {
  to {
    width: 100%;
  }
}


/* =========================
   HOME
========================= */

.home {
  min-height: 100vh;
  padding: 45px 20px;
  text-align: center;
  background:
    radial-gradient(circle at top, #dcfce7, transparent 45%),
    #f5faf6;
}

.brand-icon {
  width: 75px;
  height: 75px;
  margin: 10px auto;
  border-radius: 25px;
  background: white;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

.brand-title {
  margin-top: 18px;
  font-size: 48px;
  color: var(--dark);
  letter-spacing: -2px;
}

.brand-title span {
  color: var(--green);
}

.brand-subtitle {
  color: var(--green);
  font-weight: bold;
  font-size: 19px;
}

.brand-description {
  margin-top: 10px;
  color: var(--muted);
}

.role-grid {
  max-width: 850px;
  margin: 45px auto 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.role-card {
  position: relative;
  text-align: left;
  padding: 30px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 25px;
  box-shadow: var(--shadow);
  transition: .25s;
}

.role-card:hover {
  transform: translateY(-5px);
}

.role-icon {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.role-card h2 {
  margin-top: 20px;
}

.role-card p {
  color: var(--muted);
  margin-top: 8px;
  line-height: 1.5;
}

.arrow {
  position: absolute;
  right: 25px;
  bottom: 25px;
  font-size: 28px;
  color: var(--green);
}

.feature-strip {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-strip span {
  padding: 9px 14px;
  border-radius: 30px;
  background: white;
  border: 1px solid var(--border);
  font-size: 12px;
}


/* =========================
   DASHBOARD
========================= */

.dashboard {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.back-btn {
  border: none;
  background: white;
  box-shadow: var(--shadow);
  width: 45px;
  height: 45px;
  border-radius: 14px;
  font-size: 20px;
}

.topbar-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar-icon {
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.topbar-title h2 {
  font-size: 20px;
}

.topbar-title small {
  color: var(--muted);
}

.status-dot {
  color: var(--green);
}


/* =========================
   HERO
========================= */

.welcome-card,
.consumer-hero {
  background:
    linear-gradient(120deg, #14532d, #166534);
  color: white;
  border-radius: 25px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.consumer-hero {
  background:
    linear-gradient(120deg, #064e3b, #047857);
}

.welcome-card p,
.consumer-hero p {
  opacity: .8;
  margin-top: 8px;
}

.welcome-icon {
  font-size: 60px;
}

.live-label {
  font-size: 10px;
  letter-spacing: 1.5px;
  opacity: .75;
  font-weight: bold;
}


/* =========================
   STATS
========================= */

.dashboard-grid,
.consumer-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 20px 0;
}

.stat-card,
.consumer-stats > div {
  background: white;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-card > span {
  font-size: 28px;
}

.stat-card small,
.consumer-stats small {
  display: block;
  color: var(--muted);
  font-size: 11px;
}

.stat-card strong,
.consumer-stats strong {
  display: block;
  margin-top: 5px;
  font-size: 20px;
}


/* =========================
   BUTTONS
========================= */

.primary-btn {
  width: 100%;
  border: none;
  border-radius: 15px;
  padding: 15px;
  background: var(--green);
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 0;
}

.primary-btn:hover {
  background: #15803d;
}

.secondary-btn {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 15px;
  padding: 14px;
  background: white;
}

.small-btn,
.primary-small,
.outline-btn {
  border: none;
  padding: 9px 13px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: bold;
}

.small-btn,
.primary-small {
  background: var(--green);
  color: white;
}

.outline-btn {
  background: white;
  border: 1px solid var(--border);
}


/* =========================
   POWERPOOL
========================= */

.powerpool-panel {
  margin-top: 20px;
  padding: 25px;
  border-radius: 24px;
  background: var(--dark2);
  color: white;
  overflow: hidden;
}

.powerpool-head {
  display: flex;
  align-items: center;
  gap: 13px;
}

.powerpool-logo {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: #166534;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.powerpool-head span {
  font-size: 9px;
  color: #86efac;
  letter-spacing: 1px;
}

.powerpool-head h2 {
  margin-top: 3px;
}

.active-pill {
  margin-left: auto;
  background: rgba(34,197,94,.15);
  color: #86efac !important;
  padding: 8px 10px;
  border-radius: 20px;
}

.power-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0 25px;
}

.flow-node {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(134,239,172,.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.flow-node small {
  font-size: 9px;
  color: #bbf7d0;
  margin-top: 5px;
}

.power-node {
  border-color: #4ade80;
  box-shadow: 0 0 30px rgba(74,222,128,.2);
  animation: pulse 1.7s infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.1);
  }
}

.flow-line {
  width: 100px;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    #4ade80,
    transparent
  );
  animation: flow 1.5s infinite;
}

@keyframes flow {
  50% {
    opacity: .3;
  }
}

.powerpool-panel > p {
  text-align: center;
  color: #bbf7d0;
  font-size: 12px;
}


/* =========================
   FEATURES
========================= */

.feature-dashboard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-top: 20px;
}

.feature-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.feature-card.full {
  grid-column: 1 / -1;
}

.feature-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}

.feature-card-header h3 {
  font-size: 17px;
}

.feature-card-header small {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}


/* Demand */

.demand-top {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.demand-top strong {
  color: var(--green);
}

.demand-track {
  height: 12px;
  margin: 10px 0;
  border-radius: 20px;
  background: #e5eee7;
  overflow: hidden;
}

.demand-fill {
  width: 84%;
  height: 100%;
  background: var(--green);
  border-radius: inherit;
  animation: demand 1s;
}

@keyframes demand {
  from {
    width: 0;
  }
}


/* Supply gap */

.gap-box {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 8px;
  margin-top: 15px;
}

.gap-box div {
  background: #fff7ed;
  border-radius: 13px;
  padding: 12px;
}

.gap-box small {
  display: block;
  color: #9a3412;
  font-size: 9px;
}

.gap-box strong {
  display: block;
  color: var(--orange);
  margin-top: 4px;
}


/* Farmer Pool */

.pool-list {
  display: grid;
  gap: 10px;
}

.pool-farmer {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fbf9;
  padding: 12px;
  border-radius: 14px;
}

.pool-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pool-info {
  flex: 1;
}

.pool-info strong {
  display: block;
  font-size: 13px;
}

.pool-info small {
  color: var(--muted);
  font-size: 10px;
}

.pool-quantity {
  color: var(--green);
  font-weight: bold;
}


/* Match */

.farmer-match {
  background: #f8fbf9;
  padding: 13px;
  border-radius: 13px;
  margin-bottom: 10px;
}

.farmer-match-top {
  display: flex;
  justify-content: space-between;
}

.match-score {
  color: var(--green);
  font-weight: bold;
}

.farmer-match small {
  color: var(--muted);
  font-size: 10px;
}

.match-bar {
  height: 6px;
  background: #e5eee7;
  border-radius: 20px;
  margin-top: 7px;
}

.match-bar span {
  display: block;
  height: 100%;
  background: var(--green);
  border-radius: inherit;
}


/* AI */

.ai-forecast {
  background: linear-gradient(135deg,#f0fdf4,#ecfdf5);
  border-color: #bbf7d0;
}

.forecast-number {
  font-size: 35px;
  font-weight: 900;
  color: var(--dark);
}

.forecast-up {
  color: var(--green);
  font-weight: bold;
  font-size: 12px;
}


/* Delivery */

.delivery-steps {
  display: flex;
  align-items: center;
}

.delivery-step {
  flex: 1;
  text-align: center;
}

.delivery-step-icon {
  width: 48px;
  height: 48px;
  margin: auto;
  border-radius: 50%;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.delivery-step strong {
  display: block;
  margin-top: 7px;
  font-size: 11px;
}

.delivery-step small {
  color: var(--muted);
  font-size: 9px;
}

.delivery-line {
  height: 3px;
  flex: .5;
  background: #22c55e;
}


/* QR */

.qr-trace {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 17px;
  border-radius: 16px;
  background: #f8fbf9;
}

.qr-code {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border: 7px solid white;
  background:
    repeating-linear-gradient(
      45deg,
      #111 0px,
      #111 3px,
      white 3px,
      white 7px
    );
}

.qr-trace strong {
  font-size: 13px;
}

.qr-trace p {
  color: var(--muted);
  font-size: 10px;
  line-height: 1.6;
  margin: 5px 0 10px;
}


/* Network */

.network {
  position: relative;
  height: 210px;
  border-radius: 18px;
  background: #052e16;
  overflow: hidden;
}

.network-title {
  position: absolute;
  left: 18px;
  top: 15px;
  color: #86efac;
  font-size: 9px;
  letter-spacing: 1px;
}

.network-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #166534;
  border: 2px solid #4ade80;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  animation: pulse 2s infinite;
}

.network-node {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255,255,255,.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  animation: node 2s infinite;
}

.n1 { left: 15%; top: 35%; }
.n2 { right: 15%; top: 35%; }
.n3 { left: 27%; bottom: 15%; }
.n4 { right: 27%; bottom: 15%; }

@keyframes node {
  50% {
    transform: scale(1.12);
  }
}


/* =========================
   SEARCH
========================= */

.search-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 15px;
  margin: 20px 0;
}

.search-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-heading p {
  color: var(--muted);
  font-size: 11px;
  margin-top: 4px;
}

.count-badge,
.match-badge {
  background: #dcfce7;
  color: #166534;
  border-radius: 20px;
  padding: 6px 9px;
  font-size: 9px;
  font-weight: bold;
}


/* =========================
   PRODUCTS
========================= */

.product-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
  margin-top: 15px;
}

.product-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 17px;
  box-shadow: var(--shadow);
}

.product-main {
  display: flex;
  gap: 12px;
  align-items: center;
}

.product-icon {
  width: 55px;
  height: 55px;
  border-radius: 16px;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.product-info {
  flex: 1;
}

.card-title-row {
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
}

.product-info h3 {
  font-size: 16px;
}

.product-info p {
  color: var(--muted);
  font-size: 10px;
  margin-top: 4px;
}

.product-price {
  text-align: right;
}

.product-price strong {
  font-size: 20px;
  color: var(--green);
}

.product-price small {
  color: var(--muted);
}

.product-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.product-meta span {
  background: #f5faf6;
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 9px;
}

.match-progress {
  margin-top: 13px;
}

.match-progress > div:first-child {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
}

.progress-track {
  height: 5px;
  background: #e5eee7;
  margin-top: 5px;
  border-radius: 20px;
}

.progress-fill {
  height: 100%;
  background: var(--green);
  border-radius: inherit;
}

.product-actions {
  display: flex;
  gap: 8px;
  margin-top: 13px;
}

.product-actions button {
  flex: 1;
}


/* =========================
   FORM
========================= */

.form-card {
  max-width: 650px;
  margin: 25px auto;
  padding: 25px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.form-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.form-header span {
  font-size: 9px;
  color: var(--green);
  letter-spacing: 1px;
}

.form-header h2 {
  margin-top: 5px;
}

.form-icon {
  font-size: 40px;
}

.form-card label {
  display: block;
  font-size: 11px;
  font-weight: bold;
  margin: 14px 0 6px;
}

.form-card input,
.form-card select {
  width: 100%;
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 12px;
  outline: none;
}


/* =========================
   MATCHING SCREEN
========================= */

.matching-screen,
.success-screen {
  min-height: 100vh;
  padding: 45px 20px;
  text-align: center;
  background:
    radial-gradient(circle,#dcfce7,transparent 45%),
    #f5faf6;
}

.matching-orbit {
  width: 170px;
  height: 170px;
  margin: 30px auto;
  border-radius: 50%;
  border: 2px dashed #86efac;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 35px;
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.matching-screen h1,
.success-screen h1 {
  margin-top: 15px;
  color: var(--dark);
}

.matching-screen p,
.success-screen p {
  color: var(--muted);
  margin-top: 8px;
}

.big-progress {
  max-width: 450px;
  height: 10px;
  background: #dcfce7;
  border-radius: 20px;
  margin: 30px auto;
  overflow: hidden;
}

.big-progress div {
  height: 100%;
  width: 0;
  background: var(--green);
  animation: matching 3s forwards;
}

@keyframes matching {
  to {
    width: 100%;
  }
}

.matching-steps {
  max-width: 400px;
  margin: auto;
  text-align: left;
}

.matching-step {
  padding: 12px;
  background: white;
  border-radius: 12px;
  margin: 8px;
  font-size: 12px;
  box-shadow: var(--shadow);
}

.matching-step span {
  color: var(--green);
  margin-right: 8px;
}


/* =========================
   SUCCESS
========================= */

.success-check {
  width: 85px;
  height: 85px;
  margin: 40px auto 20px;
  border-radius: 50%;
  background: #dcfce7;
  color: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  animation: pop .5s;
}

@keyframes pop {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.match-result-card {
  max-width: 650px;
  margin: 30px auto 15px;
  background: white;
  padding: 25px;
  border-radius: 22px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.match-person {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.person-icon {
  font-size: 35px;
}

.match-person span {
  color: var(--muted);
  font-size: 10px;
}

.connection-pulse {
  font-size: 28px;
  color: var(--green);
  animation: pulse 1s infinite;
}

.match-stats {
  max-width: 650px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}

.match-stats div {
  background: white;
  border-radius: 15px;
  padding: 15px;
  box-shadow: var(--shadow);
}

.match-stats strong {
  display: block;
  color: var(--green);
}

.match-stats small {
  color: var(--muted);
  font-size: 9px;
}


/* =========================
   TRACEABILITY
========================= */

.trace-card {
  background: white;
  padding: 25px;
  border-radius: 25px;
  box-shadow: var(--shadow);
}

.trace-product {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--border);
}

.trace-icon {
  width: 65px;
  height: 65px;
  background: #fff7ed;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
}

.trace-product p {
  color: var(--muted);
  font-size: 11px;
  margin-top: 5px;
}

.trace-line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
}

.trace-point {
  text-align: center;
}

.trace-point span {
  display: flex;
  width: 55px;
  height: 55px;
  margin: auto;
  border-radius: 50%;
  background: #dcfce7;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.trace-point strong {
  display: block;
  font-size: 11px;
  margin-top: 7px;
}

.trace-point small {
  color: var(--muted);
  font-size: 9px;
}

.trace-connector {
  width: 80px;
  height: 3px;
  background: var(--green);
}

.trace-details {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}

.trace-details div {
  padding: 13px;
  border-radius: 12px;
  background: #f8fbf9;
}

.trace-details span {
  display: block;
  color: var(--muted);
  font-size: 9px;
}

.trace-details strong {
  display: block;
  margin-top: 5px;
  font-size: 11px;
}

.qr-box {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  padding: 15px;
  background: #f8fbf9;
  border-radius: 15px;
}

.fake-qr {
  width: 70px;
  height: 70px;
  border: 5px solid white;
  background: #111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
}


/* =========================
   TOAST
========================= */

#toast {
  position: fixed;
  left: 50%;
  bottom: 25px;
  transform: translate(-50%,120px);
  background: #14532d;
  color: white;
  padding: 13px 18px;
  border-radius: 12px;
  font-size: 12px;
  z-index: 10000;
  transition: .3s;
  box-shadow: var(--shadow);
}

#toast.show {
  transform: translate(-50%,0);
}


/* =========================
   EMPTY
========================= */

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 20px;
}


/* =========================
   MOBILE
========================= */

@media(max-width:700px) {

  .brand-title {
    font-size: 38px;
  }

  .role-grid,
  .feature-dashboard,
  .product-grid {
    grid-template-columns: 1fr;
  }

  .feature-card.full {
    grid-column: auto;
  }

  .dashboard-grid,
  .consumer-stats {
    grid-template-columns: 1fr;
  }

  .welcome-card,
  .consumer-hero {
    padding: 22px;
  }

  .welcome-icon {
    font-size: 40px;
  }

  .power-flow {
    margin: 25px 0;
  }

  .flow-node {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }

  .flow-line {
    width: 45px;
  }

  .gap-box {
    grid-template-columns: 1fr;
  }

  .match-result-card {
    flex-direction: column;
    gap: 18px;
  }

  .match-stats {
    grid-template-columns: 1fr;
  }

  .trace-line {
    flex-direction: column;
    gap: 10px;
  }

  .trace-connector {
    width: 3px;
    height: 35px;
  }

  .trace-details {
    grid-template-columns: repeat(2,1fr);
  }

  .qr-trace {
    align-items: flex-start;
  }

}
