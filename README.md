<img width="944" height="796" alt="image" src="https://github.com/user-attachments/assets/4f16781f-1ee1-426e-b9ca-f4ab70f73dc1" /><div align="center">

# 🍳 Cookify — AI Recipe Platform

### Your Smart Kitchen — Cook Smarter, Waste Less, Eat Better

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![Strapi](https://img.shields.io/badge/Strapi-CMS-8E75FF?style=flat-square&logo=strapi)](https://strapi.io/)
[![PostgreSQL](https://img.shields.io/badge/NEON-PostgreSQL-336791?style=flat-square&logo=postgresql)](https://neon.tech/)
[![Gemini AI](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square)](https://clerk.com/)
[![Arcjet](https://img.shields.io/badge/Arcjet-Security-FF5733?style=flat-square)](https://arcjet.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> ⚠️ **Note:** This is a free-tier deployment. If you encounter any error while using the app, please **reload the page** — it usually resolves the issue instantly (often caused by cold starts on free hosting tiers).

[Live Demo](https://cookify-ai-recipes-platform.vercel.app/) · [Report Bug](https://github.com/soham-88/Cookify---AI-Recipes-Platform/issues) · [Request Feature](https://github.com/soham-88/Cookify---AI-Recipes-Platform/issues)

</div>

---

## 📖 About The Project

**Cookify** is a full-stack, AI-powered recipe platform that solves a problem everyone faces — *"What do I cook with what I already have?"*

Snap a photo of your pantry or fridge, and Cookify's AI instantly identifies your ingredients and generates personalized recipe suggestions with match percentages. Explore thousands of recipes across 37 world cuisines and 14 categories, generate detailed AI recipes for any dish, save your favorites, and download them as PDFs — all in one clean, modern platform.

This isn't just a wrapper around a chatbot. Cookify is a production-ready application with real authentication, a persistent database, bot protection, rate limiting, and a freemium subscription model — built to demonstrate real-world full-stack engineering.

---

> 📱 **Best Experience:** For the full experience — especially the **AI Pantry Scan with camera** — open Cookify on your **smartphone/mobile browser**. Desktop works too, but mobile lets you use the live camera to scan ingredients directly.

## ✨ Features

- 📸 **AI Pantry Scanning** — Take a photo of your ingredients, Gemini AI identifies them instantly
- 🧑‍🍳 **AI Recipe Suggestions** — Get personalized recipe recommendations based on what's in your pantry, with match percentage scoring
- 🌍 **Explore World Cuisines** — Browse recipes across 37 countries with flag-based navigation
- 🍽️ **Browse by Category** — 14 categories from breakfast to dessert, seafood to vegan
- 🤖 **Generate Any Recipe** — Type any dish name and get a complete AI-generated recipe with ingredients, step-by-step instructions, and nutrition info
- 📚 **Digital Cookbook** — Save your favorite recipes and access them anytime
- 📄 **PDF Export** — Download any recipe as a clean, printable PDF
- 🔐 **Secure Authentication** — Sign up/sign in powered by Clerk
- 🛡️ **Enterprise-Grade Security** — Bot protection and rate limiting via Arcjet
- 💳 **Freemium Model** — Free tier with usage limits, Pro tier with unlimited access + premium features (nutrition analysis, chef tips, substitutions)

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)** — React framework with App Router & Server Actions
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[ShadcnUI](https://ui.shadcn.com/)** — Accessible, customizable UI components
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[React PDF](https://react-pdf.org/)** — PDF generation
- **[Sonner](https://sonner.emilkowal.ski/)** — Toast notifications

### Backend & Database
- **[Strapi](https://strapi.io/)** — Headless CMS for content management
- **[NEON](https://neon.tech/)** — Serverless PostgreSQL database

### AI & External APIs
- **[Google Gemini API](https://ai.google.dev/)** — Ingredient recognition & recipe generation
- **[TheMealDB](https://www.themealdb.com/api.php)** — Recipe database for cuisine/category browsing
- **[Unsplash API](https://unsplash.com/developers)** — Dynamic food imagery

### Auth & Security
- **[Clerk](https://clerk.com/)** — Authentication, session management & billing
- **[Arcjet](https://arcjet.com/)** — Bot protection, shield & rate limiting

### Deployment
- **[Vercel](https://vercel.com/)** — Frontend hosting
- **Strapi Cloud** — Backend hosting

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────┐
│              USER (Browser)                 │
└───────────────────┬───────────────────────────┘
                    │
┌───────────────────▼───────────────────────────┐
│         NEXT.JS FRONTEND (Vercel)            │
│   App Router · Server Actions · ShadcnUI     │
└─────┬─────────────┬─────────────┬─────────────┘
      │             │             │
┌─────▼─────┐ ┌─────▼─────┐ ┌─────▼─────────┐
│  STRAPI   │ │  GEMINI   │ │  EXTERNAL     │
│   CMS     │ │    AI     │ │  APIs         │
└─────┬─────┘ └───────────┘ │  TheMealDB    │
      │                     │  Unsplash     │
┌─────▼─────┐               │  Clerk        │
│   NEON    │               │  Arcjet       │
│PostgreSQL │               └───────────────┘
└───────────┘
```

---

## 📂 Project Structure

```
Cookify/
├── frontend/
│   ├── actions/          # Server Actions (mealdb, pantry, recipe)
│   ├── app/
│   │   ├── (auth)/       # Sign in / Sign up (Clerk)
│   │   └── (main)/       # Dashboard, Pantry, Recipes
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom hooks (use-fetch)
│   ├── lib/               # Arcjet, Clerk helpers, utils
│   └── proxy.js          # Auth & security middleware
│
└── backend/               # Strapi CMS
    ├── config/            # Database, server, plugin config
    ├── src/api/           # Content types (recipes, pantry, users)
    └── database/           # Migrations
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Accounts for: [NEON](https://neon.tech), [Clerk](https://clerk.com), [Google AI Studio](https://aistudio.google.com), [Unsplash](https://unsplash.com/developers), [Arcjet](https://arcjet.com)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/soham-88/Cookify---AI-Recipes-Platform.git
cd Cookify---AI-Recipes-Platform
```

**2. Setup the Backend (Strapi)**
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
JWT_SECRET=your_jwt_secret
DATABASE_CLIENT=postgres
DATABASE_URL=your_neon_postgresql_connection_string
```

Start Strapi:
```bash
npm run develop
```
Strapi admin will be available at `http://localhost:1337/admin`

**3. Setup the Frontend**
```bash
cd ../frontend
npm install
```

Create a `.env.local` file in `frontend/`:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token
GEMINI_API_KEY=your_gemini_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
NEXT_PUBLIC_ARCJET_KEY=your_arcjet_key
```

Start the frontend:
```bash
npm run dev
```

**4. Open the app**

Visit `http://localhost:3000` 🎉

---

## 💳 Plans

| Feature | Free | Pro |
|---|:---:|:---:|
| Pantry Scans | 10/month | Unlimited |
| AI Meal Recommendations | 5/month | Unlimited |
| Recipe Generation | Standard | Unlimited |
| Nutrition Info | ❌ | ✅ |
| Chef's Tips & Tricks | ❌ | ✅ |
| Ingredient Substitutions | ❌ | ✅ |
| PDF Download | ✅ | ✅ |
| **Price** | **$0** | **$1/month** |

---

## 🗺️ Roadmap

- [ ] Meal planning with weekly calendar
- [ ] Auto-generated shopping lists from missing ingredients
- [ ] Dietary restriction filters (vegan, gluten-free, keto)
- [ ] Recipe ratings & reviews
- [ ] Dark mode
- [ ] Mobile app (React Native)
- [ ] Social recipe sharing

---

## 🐛 Known Limitations

- TheMealDB free tier has inconsistent cuisine naming (handled via fallback resolution)
- Gemini API free tier limited to 1,500 requests/day
- Unsplash API free tier limited to 50 requests/hour
- Billing currently in test/development mode via Clerk

---

## 👤 Author

**Soham Pawar**

- GitHub: [@soham-88](https://github.com/soham-88)
- LinkedIn: https://www.linkedin.com/in/soham-pawar-984b32319/

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for the recipe database
- [Google Gemini](https://ai.google.dev/) for AI capabilities
- [Unsplash](https://unsplash.com/) for beautiful food imagery
- [Clerk](https://clerk.com/) for seamless authentication
- [Arcjet](https://arcjet.com/) for security infrastructure

---

<div align="center">

**⭐ If you found this project interesting, consider giving it a star!**

</div>
