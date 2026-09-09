# Lemonade Stand

A marketplace for kid-made goods, with a subscriber ledger for tracking
material costs, prices, and profit.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Put it on the live web

**Option A — Vercel (easiest)**
1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, click "New Project," pick the repo.
3. Leave the defaults (Vite is auto-detected) and click Deploy.
4. You'll get a live `*.vercel.app` URL in about a minute. Add a custom
   domain under Project Settings → Domains if you have one.

**Option B — Netlify**
1. Push this folder to a GitHub repo.
2. Go to netlify.com → "Add new site" → "Import an existing project."
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy — you'll get a `*.netlify.app` URL.

**Option C — build and drag-and-drop**
```bash
npm run build
```
This creates a `dist/` folder. Netlify and many other static hosts let you
drag that folder straight into their dashboard with no GitHub step at all.

## What's real vs. what's a stand-in right now

- The ledger saves to your browser's local storage, so it survives a
  reload on your device — but it isn't shared across devices or people,
  and it's not backed up anywhere.
- The marketplace "basket" isn't connected to real payments yet.
- There's no real login system — the portal is unlocked by a button, not
  an account.

To make this a real multi-family product, the next step is a backend
(e.g. Supabase or Firebase) for accounts and a shared database, and a
payments provider (e.g. Stripe) for actual checkout. Happy to help wire
either of those up when you're ready.
