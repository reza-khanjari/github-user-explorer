# 🔍 GitHub User Explorer

A modern web application for searching and exploring GitHub users.  
View user profiles, repositories, and repository analytics in a clean, responsive UI — built with **React + TypeScript** and a **feature-based architecture**.

---

## 🚀 Features

- 🔎 Search GitHub users by username
- 🧠 Persistent search history stored in `localStorage`
- 👤 User profile overview
- 📦 Repositories list (Desktop & Mobile layouts)
- 📊 Repository analytics (stars, forks, languages, watchers.)
- ♻️ Paginated & infinite repository fetching
- 📱 Fully responsive UI
- 🚨 Error handling with retry support
- 🧪 Unit & integration testing with mocked APIs

---

## 🧱 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit (RTK)
- React Query
- React Router
- MSW (Mock Service Worker)
- Vitest + Testing Library

---

## 🗂️ Project Structure

```txt
src/
├─ api/                # GitHub API logic
├─ features/           # Feature-based modules
│  ├─ home/
│  ├─ repositories/
│  └─ user/
├─ pages/              # App Pages
├─ router/             # router,routing and main layout
├─ shared/
│  ├─ hooks/           # Shared custom hooks
│  ├─ types/           # Global types & interfaces
│  ├─ ui/              # Reusable UI components
│  └─ utils/           # Pure utility functions
├─ test/               # Setup mocks
├─ store/              # Redux store (RTK)
├─ App.tsx
└─ main.tsx
```

## ⚙️ Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🚀 Run the development server

```bash
npm run dev
```

### 🧪 Run tests

```bash
npm run test
```

or

```bash
npm run test:ui
```

## 🔐 Environment Variables

⚠️ Do NOT commit your GitHub token to the repository
1️⃣ Create a .env file in the project root

```bash
VITE_GITHUB_TOKEN=your_github_token
```

2️⃣ Usage example

```bash
Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
```

## 📸 Preview

### Desktop view

<p align="center">
  <img src="./public/screenshots/Macbook-Pro-16-1728x1862.png" alt="Desktop Screenshot 1" width="800" style="max-width: 100%; margin: 10px 0;">
    <br>
    <br>
  <img src="./public/screenshots/Macbook-Pro-16-1728x1862.png" alt="Desktop Screenshot " width="800" style="max-width: 100%; margin: 10px 0;">
    <br>
    <br>
  <img src="./public/screenshots/Full-HD-1920x1878.png" alt="Desktop Screenshot " width="800" style="max-width: 100%; margin: 10px 0;">
</p>

### Mobile view

<p align="center">
  <img src="./public/screenshots/iPhone-13-Pro-Max-428x926.png" alt="iPhone Screenshot" width="400" style="max-width: 45%; margin:20px  20px 20px 0;">
    <br>
    <br>
  <img src="./public/screenshots/iPhone-13-Pro-Max-428x926(1).png" alt="iPhone Screenshot" width="400" style="max-width: 45%; margin:20px  20px 20px 0;">
    <br>
    <br>
  <img src="./public/screenshots/iPhone-13-Pro-Max-428x926(2).png" alt="iPhone Screenshot" width="400" style="max-width: 45%; margin:20px  20px 20px 0;">
    <br>
    <br>
  <img src="./public/screenshots/iPad-Pro-11-581x832.png" alt="iPad Screenshot" width="500" style="max-width: 45%; margin:20px  20px 20px 0;">
    <br>
    <br>
  <img src="./public/screenshots/Galaxy-A50-372x800.png" alt="A50 Screenshot" width="350" style="max-width: 45%; margin:20px  20px 20px 0;">
    <br>
    <br>
</p>




