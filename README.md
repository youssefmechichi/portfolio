# Portfolio Website

A responsive React portfolio website built with Vite, Tailwind CSS, and reusable UI components.

Live Demo: https://youssefmechichi.vercel.app

## Tech Stack
- React
- Vite
- TypeScript
- TailwindCSS

## Features
- Responsive design
- Modern UI
- Fast deployment with Vercel

## Project structure

- `portfolio/web/` — frontend application source
- `portfolio/web/src/` — React pages, components, hooks, and utilities
- `portfolio/web/src/pages/` — main page views (`HomePage`, `ProjectsPage`, `ContactPage`)
- `portfolio/web/src/components/` — shared UI and layout components
- `portfolio/web/src/hooks/` — custom hooks for behavior and state
- `portfolio/web/src/lib/` — utility functions

## Features

- Responsive portfolio layout for desktop and mobile
- Project cards with expandable details
- Contact page with form support
- Dark/light theme support and smooth animations
- Tailwind-driven styling with a modular component structure

## Installation

From the repository root:

```bash
cd portfolio/web
npm install
```

## Development

```bash
cd portfolio/web
npm run dev
```

Open the local preview URL shown in the terminal, usually `http://127.0.0.1:5173`.

## Build

```bash
cd portfolio/web
npm run build
```

The production build is generated in `portfolio/web/dist/`.

## Contact Form

The contact form posts to `/api/contact` by default. On Vercel, configure these environment variables:

```bash
RESEND_API_KEY=your-resend-api-key
CONTACT_TO_EMAIL=youssefmechichi@outlook.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

`RESEND_API_KEY` is a secret key from Resend. Create it in the Resend dashboard:

1. Sign in at `https://resend.com`.
2. Open **API Keys**.
3. Click **Create API Key**.
4. Copy the generated key. It usually starts with `re_`.
5. Add it to the Vercel project environment variables as `RESEND_API_KEY`.

Do not commit the real `RESEND_API_KEY` value to GitHub, `.env.example`, or any frontend file. Keep the real key only in Vercel environment variables or a local ignored `.env.local` file.

For production sending, verify a domain in Resend and replace `CONTACT_FROM_EMAIL` with an address on that domain. You can also point `VITE_CONTACT_ENDPOINT` at a different form service or backend that accepts JSON.

Plain `npm run dev` only starts Vite and does not run the `/api/contact` serverless function. Test the full mail flow on Vercel, or run the app through Vercel's local dev server.

## Preview production build

```bash
cd portfolio/web
npm run start
```

Then open `http://127.0.0.1:4173`.

## Notes

- The app is built with Vite and Tailwind CSS.
- Reusable UI components live in `portfolio/web/src/components/`.
- Page content is defined in `portfolio/web/src/pages/`.
- Use `npm run lint` in `portfolio/web/` if you add ESLint checks later.

## Commit workflow

1. Add one feature at a time.
2. Stage only the changed files for that feature.
3. Use descriptive commit messages such as:
   - `feat: add homepage layout`
   - `feat: add project cards`
   - `fix: update contact form styling`

## License

This repository is available under the terms of the project owner.
