# 📚 Library Management Client

A minimal **Library Management System frontend** built with **React**, **Redux Toolkit Query**, **TypeScript**, and **Tailwind CSS**. This application allows users to view, manage, and borrow books from a RESTful API—demonstrating state management and clean UI architecture.

> 🔗 **Live App:** [library-management-client-app.vercel.app](https://library-management-client-app.vercel.app/)  
> 🛠️ **Backend API Repo:** [Library-management-api-with-express-typescript-mongoose](https://github.com/younus-always/Library-management-api-with-express-typescript-mongoose)

---

## 🧩 Tech Stack

- **React 19**
- **Redux Toolkit Query (RTK Query)**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI** components
- **Zod** for form validation
- **Vite** for development and builds

---

## ✨ Features

- 📚 View all books from API
- ➕ Create, 📝 Update, ❌ Delete books
- 📖 Borrow books (with simple borrow tracking)
- 🔄 Optimistic UI updates via RTK Query
- 💅 Dark mode and styled components with Radix UI
- 🧩 Modular, component-based architecture

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/younus-always/library-management-client.git
cd library-management-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env file in the client/ directory:

```bash
VITE_API_URL=https://library-management-backend-api.vercel.app/api
```

Replace with your actual backend API base URL.

### 4. Run the app in development mode

```bash
npm run dev
```

## 🔗 API Integration

This client app connects to a RESTful API powered by:

Express + TypeScript + MongoDB
Backend Repo: Library-management-api-with-express-typescript-mongoose

### Example API Endpoints Used

| Method   | Endpoint     | Description        |
| -------- | ------------ | ------------------ |
| `GET`    | `/books`     | Get all books      |
| `POST`   | `/books`     | Create new book    |
| `PUT`    | `/books/:id` | Update a book      |
| `DELETE` | `/books/:id` | Delete a book      |
| `POST`   | `/borrow`    | Borrow a book      |
| `GET`    | `/borrow`    | Get borrow summary |

## 🧪 Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Run app in dev mode (Vite)   |
| `npm run build`   | Build the app for production |
| `npm run preview` | Preview built app locally    |
| `npm run lint`    | Run ESLint for code linting  |

## 🚀 Deployment

This project is deployed on Vercel.

### 🟢 Live Site

https://library-management-client-app.vercel.app

To deploy your own version:

```bash
npm install -g vercel
vercel --prod
```

Make sure your .env file is properly configured before deploying.

## 📄 License

This project is open-source and available under the MIT License.

## ✍️ Author

**Younus**

- [GitHub](https://github.com/younus-always)
