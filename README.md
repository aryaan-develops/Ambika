# Ambika - Artisan Bakery & Cafe

> **Production-grade Next.js web application for Ambika Artisan Bakery & Cafe.**  
> Crafted with Next.js 16 (App Router), TypeScript, Tailwind CSS, Lucide React, and Framer Motion micro-interactions.

---

## 🏛️ Session State & Architecture Ledger

### 1. Project Specifications
- **Brand Name:** Ambika
- **Design Aesthetic:** Warm artisanal luxury bakery (Deep cocoa `#22130C`, golden honey `#E5A83B`, warm vanilla cream `#FAF5EE`, pastel card accents).
- **Core Visual Flow:**
  1. Sticky navigation header with Brand, Nav links, Live Search trigger, Shopping Bag count badge, and "Book a table" CTA.
  2. Hero Section featuring the 4-tier decadent chocolate cookie tower, quick email/location contact chips, "Order Now" action, floating cookie doodles, and organic SVG wave cutout.
  3. "Explore Our Delicious Creations" horizontal interactive category carousel with pastel backdrops (Cupcakes, Peanut Cookies, Doughnuts, Pastries, Hearth Sourdough).
  4. "Our Story, [Baked] with Love" fluid editorial typography featuring embedded inline photo chips and quality pillar cards.
  5. "Crafted Menus for Every [Moment]" with vibrant 3-stack doughnut tower centerpiece, interactive meal categories, and live item selection.
  6. "Baking with Passion & Purpose" craft spotlight banner featuring slow cold-fermented sourdough.
  7. "Sweet Deals, Fresh Savings" weekend 10% discount ticket voucher with 1-click code copying (`AMBIKA10`).
  8. "Sweet Words from Our [Community]" customer reviews with verified purchaser badges.
  9. Warm footer with signature Ambika branding, artisan cupcake visual, quick links, and newsletter subscription.

### 2. Interactive Production Features
- **Cart Context (`src/context/CartContext.tsx`):**
  - Persistent state in `localStorage`
  - Slide-out Cart Drawer with quantity adjustment, removal, free delivery progress meter, and checkout celebration confetti.
- **Table Reservation Modal (`src/components/ReservationModal.tsx`):**
  - Real booking form with party size, date, preferred time slots, contact info, and confirmation state machine.
- **Product Quick-View Modal (`src/components/ProductModal.tsx`):**
  - Detailed modal with nutritional calorie counts, weight, ingredients breakdown, allergen tags, and dynamic quantity adding.
- **Live Search Modal (`src/components/SearchModal.tsx`):**
  - Instant client-side search across all bakery creations and menu items with keyword suggestion pills.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live website.

```bash
# Production Build & Typecheck
npm run build
```
