# Demo Feature Consumer – MS2

This project is a demo microservice (`MS2`) that **consumes feature flags from the main Feature Flag Service (MS1)** to dynamically alter its behavior in real time, with no need for redeployment or client restarts.

## 🔍 Purpose

To demonstrate how a consumer application can fetch and respond to **live feature flag configurations** scoped by name, region, or customer.

## ⚙️ Tech Stack

- Backend: Node.js + Express
- Frontend: React (Vite)
- Communication: REST API using Axios
- Deployment: Render (separate from MS1)

## 📦 Features

- `bootdata` endpoint: returns which flags are currently enabled.
- Live flag resolution using MS1's API.
- React UI that changes style/content based on flag values.
- Shows a practical example of **dark mode toggle**, and **conditional feature rendering** (e.g., "Contact Us" or "Hola Mundo" routes).

## 🌐 Deployed URLs

| Service      | Render URL                                 |
| ------------ | ------------------------------------------ |
| MS2 Frontend | https://your-demo-frontend.onrender.com    |
| MS2 Backend  | https://your-demo-backend.onrender.com/api |

## 📁 Project Structure
