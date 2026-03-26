# Scissors — URL Shortener

A full-stack URL shortening web app built with React, TypeScript, and Firebase. Shorten links, create custom aliases, generate QR codes, and track click analytics — all in one place.

![Scissors](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript) ![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat&logo=firebase)

---

## Demo video
Watch here: https://youtu.be/VDjq-MyY8Rc

## Features

- **URL Shortening** — Paste any long URL and get a clean short link via the TinyURL API
- **Custom Aliases** — Set a custom slug (e.g. `scsr.io/my-brand`) for any link
- **QR Code Generator** — Generate downloadable PNG QR codes with custom colors
- **Click Analytics** — Track total clicks per link with a 7-day bar chart
- **Link Management** — View, copy, and delete your links from a personal dashboard
- **User Authentication** — Email/password sign up & login with Firebase Auth
- **Password Reset** — Forgot password flow via Firebase email reset
- **Protected Dashboard** — Authenticated-only routes with redirect on logout
- **Responsive Design** — Mobile-friendly layout with hamburger nav

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Routing | React Router v6 |
| Auth | Firebase Authentication |
| Database | Cloud Firestore |
| URL Shortening | TinyURL API |
| QR Codes | qrcode.react |
| Styling | CSS Modules (custom design system) |
| Fonts | Syne + DM Sans (Google Fonts) |

---

## Project Structure

```
src/
├── context/
│   └── AuthContext.tsx          # Global auth state via Firebase onAuthStateChanged
├── hooks/
│   └── useUrlShortener.ts       # Shortening logic, history state, loadHistory
├── services/
│   ├── firebase.ts              # Firebase app init (reads from .env)
│   ├── authService.ts           # signUp, signIn, signOut, resetPassword
│   └── urlService.ts            # Firestore CRUD + TinyURL API calls
├── components/
│   ├── layout/
│   │   ├── Header.tsx / .css    # Sticky nav, user avatar dropdown, mobile menu
│   │   └── Footer.tsx / .css    # Footer with CTA section
│   ├── ui/
│   │   ├── Accordion.tsx        # Reusable FAQ accordion
│   │   └── ProtectedRoute.tsx   # Redirects to /login if not authenticated
│   └── features/
│       ├── UrlShortener.tsx     # URL + alias form, result card with copy button
│       ├── QrGenerator.tsx      # QR preview, color pickers, PNG download
│       └── Analytics.tsx        # Stats cards, 7-day chart, links table with delete
├── pages/
│   ├── Home.tsx / .css          # Landing page: hero, stats, features, pricing, FAQ
│   ├── Dashboard.tsx / .css     # Tabbed dashboard: My Links / Shorten / QR Code
│   ├── Login.tsx                # Email/password login form
│   ├── Signup.tsx               # Registration with password strength indicator
│   ├── ForgotPassword.tsx       # Password reset email flow
│   ├── Contact.tsx / .css       # Contact form page
│   └── Auth.css                 # Shared auth page styles
├── styles/
│   └── global.css               # Design tokens (colors, shadows, radii, fonts)
└── types/
    └── index.ts                 # ShortenedLink interface
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with **Firestore** and **Authentication** enabled

### 1. Clone and install

```bash
git clone https://github.com/your-username/scissors.git
cd scissors
npm install
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

> Never commit your `.env` file. It's already in `.gitignore`.

### 3. Configure Firebase

**Enable Authentication:**
1. Go to Firebase Console → Authentication → Sign-in method
2. Enable **Email/Password**

**Set Firestore Rules:**
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /links/{linkId} {
      allow read, write: if true;
    }
  }
}
```

### 4. Run the app

```bash
npm start
```

Visit `http://localhost:3000`

---

## Environment Variables

| Variable | Description |
|---|---|
| `REACT_APP_FIREBASE_API_KEY` | Firebase project API key |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `REACT_APP_FIREBASE_PROJECT_ID` | Firestore project ID |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `REACT_APP_FIREBASE_APP_ID` | Firebase app ID |

---

## Key Design Decisions

**Why no composite Firestore index?**
The `getLinksFromFirestore` query uses only `where("userId")` without `orderBy` to avoid requiring a manually created composite index. Results are sorted by `createdAt` in JavaScript instead.

**Why is history state in Dashboard and not Analytics?**
`useUrlShortener` is a regular React hook — each component that calls it gets isolated state. History is owned by `Dashboard` and passed down as props so it persists across tab switches and isn't re-fetched every time you switch to the "My Links" tab.

**Why is userId passed explicitly instead of reading `auth.currentUser`?**
Firebase Auth restores session asynchronously on page load. Reading `auth.currentUser` directly inside a service can return `null` during that window. By passing `user.uid` from `AuthContext` (which waits for `onAuthStateChanged` to resolve), we guarantee the correct user ID is always used.

---

## Available Scripts

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

---

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```
Add your `.env` variables in the Vercel dashboard under Project → Settings → Environment Variables.

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## Roadmap

- [ ] Email verification after signup
- [ ] Account settings (change name, change password)
- [ ] Link expiration dates
- [ ] Detailed analytics (referrers, devices, locations)
- [ ] Custom branded domains
- [ ] Link editing (update alias or destination)
- [ ] Pagination for large link lists
- [ ] API access for Teams plan

---

## License

MIT © Scissors
