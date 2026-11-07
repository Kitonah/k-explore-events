# K-EXPLORE — Campus Event Management Portal

A modern, responsive event discovery and registration web application developed for the Web Designing Assignment. Built with semantic HTML5, modern CSS3, Tailwind CSS, and Vanilla JavaScript (ES6+).

## 🌐 Project Links
- **Live Deployment:** [https://kitonah.github.io/k-explore-events/](https://kitonah.github.io/k-explore-events/)
- **GitHub Repository:** [https://github.com/Kitonah/k-explore-events](https://github.com/Kitonah/k-explore-events)
- **Project Report (PDF):** [Download k_explore_project_report.pdf](./k_explore_project_report.pdf)

---

## 🚀 Features Implemented

### Core Requirements
1. **Hero Section & Flagship Spotlight:** Introduces campus life activities with quick-action navigation and an interactive spotlight card featuring a live countdown for the flagship summit.
2. **Dynamic Event Roster:** A responsive multi-card catalog (1 column mobile, 2 columns tablet, 4 columns desktop) displaying verified event photography, reference codes, category tags, schedules, venues, and descriptions.
3. **Live Search & Category Filtering:** Instant multi-parameter keyword search across titles, venues, and descriptions paired with category filter pills (Tech & Coding, Cultural & Arts, Workshops, Sports & Gaming) and an empty-state reset fallback.
4. **Detailed Modal & Verification Form:** A responsive 2-column modal displaying full agendas and an access pass registration form with client-side JavaScript validation:
   - **Attendee Legal Name:** Length check (minimum 3 characters).
   - **Email Address:** RFC 5322 regex pattern validation.
   - **Phone Number:** Strict 10-digit mobile number pattern (`^[6-9]\d{9}$`).
   - **Selected Event:** Automatically populated and verified.
5. **Double-Booking Guard:** Prevents duplicate registrations under the same email address for an individual event.
6. **Toast Confirmation Messaging:** Custom non-intrusive animated toast alert providing instant feedback upon registration with a unique pass ID.

### Bonus Challenges
- **Dark / Light Mode Toggle:** System-synced theme switcher with a synchronous head script to eliminate Flash of Unstyled Content (FOUC).
- **Synchronous Event Countdown:** Live countdown timer calculating Days, Hours, Minutes, and Seconds every 1,000 ms with a zero-floor clamp.
- **LocalStorage State Persistence:** Registrations are saved in browser storage. Users can inspect their passes or cancel individual bookings via the "My Passes" drawer.
- **Micro-Interactions & Transitions:** Continuous ticker marquee tape, card hover elevations, smooth modal backdrop blur, and accessible escape-key handlers.

---

## 🛠️ Tech Stack & Architecture

- **Markup:** Semantic HTML5 (WAI-ARIA accessible modal dialog patterns)
- **Styling:** Modern CSS3 & Tailwind CSS (CDN integration)
- **Scripting:** Modular Vanilla JavaScript (ES6+)
- **Storage:** Web Storage API (`localStorage`)
- **Hosting & CI/CD:** GitHub Pages

```text
k-explore-events/
├── index.html       # Application shell, navigation, hero, dialog modal, dock
├── style.css        # Custom component classes, marquee animations, scrollbars
├── app.js           # Reactive state, countdown engine, form validation, localStorage
├── README.md        # Project documentation and submission specifications
└── .gitignore       # System file exclusions (.DS_Store)
```

---

## 💻 Local Setup & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/Kitonah/k-explore-events.git
   cd k-explore-events
   ```

2. Open `index.html` in any web browser:
   ```bash
   open index.html
   ```

---

## 📋 Evaluation Checklist Compliance

- [x] Modern, visually appealing Hero Section introducing the platform
- [x] Responsive layout across Mobile, Tablet, and Desktop screens
- [x] Event cards showing name, date, venue, image, and description
- [x] Real-time search and category filtering logic
- [x] Detailed event modal with registration form
- [x] Client-side form validation (name, email, phone, selected event)
- [x] Submission confirmation message (custom toast system)
- [x] Bonus: Dark / Light theme toggle with persistence
- [x] Bonus: Live real-time countdown timer
- [x] Bonus: Interactive micro-animations and marquee
- [x] Bonus: Local Storage-based pass management (create, view, cancel)
- [x] Production deployment on GitHub Pages
