// --- 8 Campus Events with Context-Accurate High-Res Photography ---
const EVENTS_DATA = [
  {
    id: "evt-01",
    code: "001",
    title: "KIIT National Hackathon 2026",
    category: "Tech",
    date: "2026-11-20T09:00:00",
    dateFormatted: "Nov 20, 2026 • 09:00 AM",
    venue: "Auditorium Campus 3, Bhubaneswar",
    shortDesc: "36-hour sprint: decentralized protocols, autonomous agent systems, and edge infrastructure.",
    fullDesc: "Gathering 500 developers nationwide. Tackle real-world problem statements spanning AI infrastructure, open-source dev tools, and fintech algorithms. Food, mentor guidance, and hardware labs provided.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    id: "evt-02",
    code: "012",
    title: "K-Rhythms Cultural Night",
    category: "Cultural",
    date: "2026-11-28T18:00:00",
    dateFormatted: "Nov 28, 2026 • 06:00 PM",
    venue: "Main Amphitheatre, Campus 6",
    shortDesc: "Alternative rock showcase, live beatbox battles, and custom synchronized lighting rigs.",
    fullDesc: "An evening featuring university bands, headlining indie performers, and an artisan food truck alley. Free entry for registered university ID cardholders.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
    featured: false
  },
  {
    id: "evt-03",
    code: "024",
    title: "Zero-Knowledge Cryptography Lab",
    category: "Workshop",
    date: "2026-12-05T10:30:00",
    dateFormatted: "Dec 05, 2026 • 10:30 AM",
    venue: "Lab Complex 2, Room 402",
    shortDesc: "Hands-on audit workshop: zk-SNARKs proofs, circuit design, and smart contract fuzz testing.",
    fullDesc: "Master the mathematics and code behind next-generation privacy protocols. Audit contracts, patch vulnerabilities, and generate cryptographic validity proofs. Bring your laptop with Rust installed.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    featured: false
  },
  {
    id: "evt-04",
    code: "034",
    title: "Campus Valorant Championship",
    category: "Sports",
    date: "2026-12-12T14:00:00",
    dateFormatted: "Dec 12, 2026 • 02:00 PM",
    venue: "Student Activity Center Arena",
    shortDesc: "5v5 esports championship broadcasted live on LAN with a ₹1,00,000 tournament prize pool.",
    fullDesc: "Team captains can register full 5-player rosters or enter solo for squad drafting. High-refresh 240Hz gaming monitors and low-latency LAN rigs provided on stage.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    featured: false
  },
  {
    id: "evt-05",
    code: "005",
    title: "Computer Vision & Matting Summit",
    category: "Tech",
    date: "2026-12-18T11:00:00",
    dateFormatted: "Dec 18, 2026 • 11:00 AM",
    venue: "Computer Science Block, Hall B",
    shortDesc: "High-resolution background separation, 2D frequency analysis, and Apple Silicon MPS acceleration.",
    fullDesc: "Exploration of bilateral reference networks (BiRefNet), log-chromaticity separation, and real-time neural inference deployed on Apple Silicon unified memory architectures.",
    // Context-accurate AI & computer vision circuitry image (no puppy!)
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    featured: false
  },
  {
    id: "evt-06",
    code: "016",
    title: "UI/UX & Design Systems Masterclass",
    category: "Workshop",
    date: "2026-12-24T15:00:00",
    dateFormatted: "Dec 24, 2026 • 03:00 PM",
    venue: "Virtual Design Studio",
    shortDesc: "Design token hierarchies, Figma component auto-layouts, and responsive micro-interactions.",
    fullDesc: "Industry design mentors critique live student portfolios and illustrate production workflows moving from Figma design tokens straight to Tailwind CSS utility architectures.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
    featured: false
  },
  {
    id: "evt-07",
    code: "018",
    title: "Independent Film & Montage Festival",
    category: "Cultural",
    date: "2026-12-30T19:00:00",
    dateFormatted: "Dec 30, 2026 • 07:00 PM",
    venue: "Screening Room 1, Media Wing",
    shortDesc: "Indie student short screenings, live sound design panels, and analog color grading masterclasses.",
    fullDesc: "A curated evening of narrative fiction, experimental documentary shorts, and discussions on analog grain emulation, color theory, and Foley sound design.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    featured: false
  },
  {
    id: "evt-08",
    code: "054",
    title: "Autonomous Robotics & Rover Trials",
    category: "Tech",
    date: "2027-01-08T10:00:00",
    dateFormatted: "Jan 08, 2027 • 10:00 AM",
    venue: "Robotics Innovation Lab, Campus 11",
    shortDesc: "Live obstacle trials: LiDAR rovers, quadrupeds, and vision-guided optical flow drone flights.",
    fullDesc: "Live real-time testing of SLAM localization algorithms, custom brushless motor tuning, and edge AI obstacle navigation demonstrated by university engineering teams.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    featured: false
  }
];

// --- Reactive State Management ---
const state = {
  activeCategory: "All",
  searchQuery: "",
  selectedEvent: null,
  registrations: JSON.parse(localStorage.getItem("kexplore_passes") || "[]")
};

// --- DOM Cache ---
const elements = {
  eventsGrid: document.getElementById("events-grid"),
  emptyState: document.getElementById("empty-state"),
  searchInput: document.getElementById("search-input"),
  categoryButtons: document.querySelectorAll(".category-pill"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  modal: document.getElementById("event-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalImg: document.getElementById("modal-img"),
  modalCode: document.getElementById("modal-code"),
  modalCategory: document.getElementById("modal-category"),
  modalTitle: document.getElementById("modal-title"),
  modalDate: document.getElementById("modal-date"),
  modalVenue: document.getElementById("modal-venue"),
  modalDesc: document.getElementById("modal-desc"),
  regForm: document.getElementById("registration-form"),
  regEventId: document.getElementById("reg-event-id"),
  regEventName: document.getElementById("reg-event-name"),
  regEventDisplay: document.getElementById("reg-event-display"),
  regName: document.getElementById("reg-name"),
  regEmail: document.getElementById("reg-email"),
  regPhone: document.getElementById("reg-phone"),
  themeToggle: document.getElementById("theme-toggle"),
  themeText: document.getElementById("theme-text"),
  ticketBadge: document.getElementById("ticket-badge"),
  ticketCountBadge: document.getElementById("ticket-count-badge"),
  dockTicketsBtn: document.getElementById("dock-tickets-btn"),
  viewTicketsHeaderBtn: document.getElementById("view-tickets-header-btn"),
  ticketsModal: document.getElementById("tickets-modal"),
  ticketsCloseBtn: document.getElementById("tickets-close-btn"),
  ticketsList: document.getElementById("tickets-list"),
  featuredRegisterTrigger: document.getElementById("featured-register-trigger"),
  heroQuickBtn: document.getElementById("hero-quick-btn")
};

// --- Theme Management ---
function initTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  elements.themeText.textContent = isDark ? "LIGHT" : "DARK";

  elements.themeToggle.addEventListener("click", () => {
    const willBeDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", willBeDark);
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
    elements.themeText.textContent = willBeDark ? "LIGHT" : "DARK";
  });
}

// --- Live Countdown Engine ---
function initCountdown() {
  const featured = EVENTS_DATA.find((e) => e.featured) || EVENTS_DATA[0];
  const targetDate = new Date(featured.date).getTime();

  function tick() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("timer-days").textContent = "00";
      document.getElementById("timer-hours").textContent = "00";
      document.getElementById("timer-minutes").textContent = "00";
      document.getElementById("timer-seconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-days").textContent = String(days).padStart(2, "0");
    document.getElementById("timer-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("timer-minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("timer-seconds").textContent = String(seconds).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);

  const openFeatured = () => openModal(featured.id);
  elements.featuredRegisterTrigger.addEventListener("click", openFeatured);
  elements.heroQuickBtn.addEventListener("click", openFeatured);
}

// --- Card Grid Renderer ---
function renderEvents() {
  const query = state.searchQuery.toLowerCase().trim();
  const category = state.activeCategory;

  const filtered = EVENTS_DATA.filter((evt) => {
    const matchesCategory = category === "All" || evt.category === category;
    const matchesSearch =
      evt.title.toLowerCase().includes(query) ||
      evt.venue.toLowerCase().includes(query) ||
      evt.shortDesc.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  elements.eventsGrid.innerHTML = "";

  if (filtered.length === 0) {
    elements.eventsGrid.classList.add("hidden");
    elements.emptyState.classList.remove("hidden");
    return;
  }

  elements.eventsGrid.classList.remove("hidden");
  elements.emptyState.classList.add("hidden");

  filtered.forEach((evt) => {
    const isRegistered = state.registrations.some((r) => r.eventId === evt.id);
    const card = document.createElement("article");
    card.className = "screenprint-card flex flex-col group cursor-pointer";
    card.onclick = () => openModal(evt.id);

    card.innerHTML = `
      <div class="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <img 
          src="${evt.image}" 
          alt="${evt.title}" 
          loading="lazy" 
          class="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-all duration-500 ease-out" 
        />
        
        <span class="absolute top-2.5 left-2.5 font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-black/80 text-white backdrop-blur-sm">
          #${evt.code}
        </span>

        <span class="absolute top-2.5 right-2.5 font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-black/80 text-white backdrop-blur-sm">
          ${evt.category}
        </span>

        ${
          isRegistered
            ? `<span class="absolute bottom-2.5 right-2.5 font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">● Registered</span>`
            : ''
        }
      </div>

      <div class="p-4 flex flex-col flex-grow">
        <div class="flex justify-between items-baseline font-mono text-[10px] text-zinc-500 mb-1">
          <span class="font-bold text-neon">${evt.dateFormatted}</span>
          <span class="truncate max-w-[120px]">${evt.venue.split(",")[0]}</span>
        </div>

        <h3 class="font-display text-xl uppercase tracking-wide text-ink dark:text-white leading-tight group-hover:text-neon transition">
          ${evt.title}
        </h3>

        <p class="font-sans text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed flex-grow">
          ${evt.shortDesc}
        </p>

        <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between font-mono text-[11px]">
          <span class="font-bold text-ink dark:text-zinc-200 group-hover:text-neon transition">
            ${isRegistered ? "View Pass Details →" : "Register →"}
          </span>
          <span class="text-[10px] text-zinc-400">Available</span>
        </div>
      </div>
    `;

    elements.eventsGrid.appendChild(card);
  });
}

// --- Filtering & Search Listeners ---
elements.categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    elements.categoryButtons.forEach((b) => b.classList.remove("active-category"));
    btn.classList.add("active-category");
    state.activeCategory = btn.dataset.category;
    renderEvents();
  });
});

elements.searchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderEvents();
});

elements.resetFiltersBtn.addEventListener("click", () => {
  state.searchQuery = "";
  state.activeCategory = "All";
  elements.searchInput.value = "";
  elements.categoryButtons.forEach((b) => {
    b.classList.toggle("active-category", b.dataset.category === "All");
  });
  renderEvents();
});

// --- Modal Logic ---
function openModal(eventId) {
  const evt = EVENTS_DATA.find((e) => e.id === eventId);
  if (!evt) return;

  state.selectedEvent = evt;
  elements.modalImg.src = evt.image;
  elements.modalImg.alt = evt.title;
  elements.modalCode.textContent = `Event Code #${evt.code}`;
  elements.modalCategory.textContent = evt.category;
  elements.modalTitle.textContent = evt.title;
  elements.modalDate.textContent = `📅 ${evt.dateFormatted}`;
  elements.modalVenue.textContent = `📍 ${evt.venue}`;
  elements.modalDesc.textContent = evt.fullDesc;

  elements.regEventId.value = evt.id;
  elements.regEventName.value = evt.title;
  elements.regEventDisplay.value = evt.title; // Explicitly populates visible Selected Event field

  clearFormErrors();
  elements.modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  elements.modal.classList.add("hidden");
  document.body.style.overflow = "";
}

elements.modalCloseBtn.addEventListener("click", closeModal);
elements.modal.addEventListener("click", (e) => {
  if (e.target === elements.modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    elements.ticketsModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
});

// --- Form Validation Engine ---
function validateInput(value, type) {
  if (type === "name") return value.trim().length >= 3;
  if (type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value.trim());
  }
  if (type === "phone") {
    const cleaned = value.replace(/[\s-]/g, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(cleaned);
  }
  return false;
}

function clearFormErrors() {
  document.getElementById("err-name").classList.add("hidden");
  document.getElementById("err-email").classList.add("hidden");
  document.getElementById("err-phone").classList.add("hidden");
}

elements.regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearFormErrors();

  const nameVal = elements.regName.value;
  const emailVal = elements.regEmail.value;
  const phoneVal = elements.regPhone.value;
  const eventId = elements.regEventId.value;

  let isValid = true;

  if (!validateInput(nameVal, "name")) {
    document.getElementById("err-name").classList.remove("hidden");
    isValid = false;
  }
  if (!validateInput(emailVal, "email")) {
    document.getElementById("err-email").classList.remove("hidden");
    isValid = false;
  }
  if (!validateInput(phoneVal, "phone")) {
    document.getElementById("err-phone").classList.remove("hidden");
    isValid = false;
  }

  if (!isValid) return;

  // Duplicate Check
  const alreadyRegistered = state.registrations.some(
    (item) => item.eventId === eventId && item.email.toLowerCase() === emailVal.toLowerCase().trim()
  );

  if (alreadyRegistered) {
    showToast("This email is already registered for this event.", "warning");
    return;
  }

  const record = {
    id: "KEX-" + Math.floor(100000 + Math.random() * 900000),
    eventId: eventId,
    eventTitle: state.selectedEvent.title,
    eventDate: state.selectedEvent.dateFormatted,
    name: nameVal.trim(),
    email: emailVal.toLowerCase().trim(),
    phone: phoneVal.trim(),
    registeredAt: new Date().toLocaleDateString()
  };

  state.registrations.push(record);
  localStorage.setItem("kexplore_passes", JSON.stringify(state.registrations));

  updateTicketCount();
  elements.regForm.reset();
  closeModal();
  renderEvents();
  showToast(`Seat confirmed: Pass ${record.id}`, "success");
});

// --- LocalStorage Ticket Management ---
function updateTicketCount() {
  const count = state.registrations.length;
  elements.ticketBadge.textContent = count;
  elements.ticketCountBadge.textContent = count;
}

function renderTickets() {
  elements.ticketsList.innerHTML = "";
  if (state.registrations.length === 0) {
    elements.ticketsList.innerHTML = `<p class="font-sans text-xs text-zinc-400 py-6 text-center">No active passes registered in your vault yet.</p>`;
    return;
  }

  state.registrations.forEach((ticket) => {
    const box = document.createElement("div");
    box.className = "p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 flex items-center justify-between font-sans";
    box.innerHTML = `
      <div>
        <p class="text-xs uppercase font-bold text-ink dark:text-white font-display">${ticket.eventTitle}</p>
        <p class="text-[10px] text-zinc-500 font-mono">${ticket.eventDate}</p>
        <p class="text-[10px] text-neon font-bold mt-0.5 font-mono">ID: ${ticket.id} • ${ticket.name}</p>
      </div>
      <button onclick="cancelRegistration('${ticket.id}')" class="text-xs text-rose-500 hover:text-rose-600 font-medium underline p-1 font-mono">
        Cancel
      </button>
    `;
    elements.ticketsList.appendChild(box);
  });
}

function cancelRegistration(ticketId) {
  state.registrations = state.registrations.filter((t) => t.id !== ticketId);
  localStorage.setItem("kexplore_passes", JSON.stringify(state.registrations));
  updateTicketCount();
  renderTickets();
  renderEvents();
  showToast("Registration cancelled.", "info");
}

const openTickets = () => {
  renderTickets();
  elements.ticketsModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

elements.dockTicketsBtn.addEventListener("click", openTickets);
elements.viewTicketsHeaderBtn.addEventListener("click", openTickets);

elements.ticketsCloseBtn.addEventListener("click", () => {
  elements.ticketsModal.classList.add("hidden");
  document.body.style.overflow = "";
});

// --- Toast Alerts ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");

  toast.className = `pointer-events-auto px-4 py-2.5 rounded-xl border font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 transform translate-y-2 opacity-0 flex items-center gap-3 shadow-xl ${
    type === "warning"
      ? "bg-amber-500 text-black border-amber-600"
      : "bg-ink text-white dark:bg-white dark:text-ink border-zinc-800"
  }`;
  toast.innerHTML = `<span class="text-neon">●</span><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => toast.classList.remove("translate-y-2", "opacity-0"), 10);
  setTimeout(() => {
    toast.classList.add("opacity-0", "-translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Bootstrap ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCountdown();
  renderEvents();
  updateTicketCount();
});