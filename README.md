# Nxt Watch

Nxt Watch is a YouTube-inspired video streaming web application built using React.
It features secure authentication, protected routes, theme switching, video discovery, and stateful user interactions like saving and liking videos.

---

## Live Demo

**Live App:** [https://swapnilnxtwatch.ccbp.tech/](https://swapnilnxtwatch.ccbp.tech/)

**Demo Login**

```
Username: rahul
Password: rahul@2021
```

---
## Project Preview

**Success View** <br/>

<div style="text-align: center;">
     <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>

**Failure View** <br/>

<div style="text-align: center;">
    <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-failure-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>

---

## Features

* JWT-based authentication with protected routes
* Light and Dark theme toggle
* Home, Trending, Gaming, and Saved Videos sections
* Video search and category-based filtering
* Video details page with like, dislike, and save actions
* Persistent saved videos using global state
* Responsive UI for mobile, tablet, and desktop
* Graceful handling of loading and error states

---

## Application Flow

* Unauthenticated users are redirected to the Login page
* Authenticated users can browse videos across multiple categories
* Clicking a video opens a detailed view with player and interactions
* Users can like, dislike, or save videos
* Saved videos persist across navigation
* Theme preference is applied across all routes

---

## Tech Stack

* **Frontend:** React JS
* **Styling:** Styled Components
* **Routing:** React Router
* **State Management:** React Context API
* **Authentication:** JWT
* **APIs:** REST APIs
* **Video Player:** react-player

---

## Project Structure

```
src/
├── components/
│   ├── LoginRoute/
│   ├── Home/
│   ├── Trending/
│   ├── Gaming/
│   ├── VideoItemDetails/
│   ├── SavedVideos/
│   ├── Header/
│   ├── VideoItemTrending/
│   ├── NotFound/
│   ├── ProtectedRoute/
│   ├── VideoItem/
│   ├── VideoItemGaming/
│   └── Sidebar/
├── context/
│   └── DarkThemeContext.js
├── App.js
└── index.js
```

---

## API Overview

* **Login API** – User authentication
* **Home Videos API** – Fetch all videos with search
* **Trending Videos API** – Fetch trending videos
* **Gaming Videos API** – Fetch gaming videos
* **Video Details API** – Fetch individual video data

All requests require a valid JWT token.

---

## Setup Instructions

1. Clone the repository

   ```
   git clone https://github.com/swapnil-s-h/nxt-watch.git
   ```
2. Install dependencies

   ```
   npm install
   ```
3. Start the development server

   ```
   npm start
   ```
4. Open `http://localhost:3000` in your browser

---

## Key Highlights

* Clean component-based architecture
* Scalable routing and state management
* User-centric UI with theme customization
* Real-world API integration and error handling
