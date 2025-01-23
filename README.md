# URL Shortener Frontend

This is a modern, responsive frontend for a URL Shortener service, built with React, Vite, Material UI, Redux Toolkit, and TypeScript. This application connects to the backend API to allow users to shorten URLs, track analytics, and manage their shortened URLs.

## Features

*   User Authentication: Sign up, log in, and manage authentication using JWT tokens.
*   URL Shortening: Shorten long URLs by connecting to the backend API.
*   URL Management: View and delete your shortened URLs.
*   Analytics: Display click analytics, including visit count, browser, device, and location.
*   Expiration Date: Set expiration dates for shortened URLs.

## Tech Stack

*   React (Frontend Framework)
*   Vite (Build Tool)
*   Material UI (Component Library)
*   Redux Toolkit (State Management)
*   TypeScript (Static Typing)

## Installation

1.  Clone the repository

    ```bash
    git clone [https://github.com/abhayrana1701/url-shortener-frontend.git](https://github.com/abhayrana1701/url-shortener-frontend.git)
    cd url-shortener-frontend
    ```

2.  Install dependencies

    ```bash
    npm install
    ```

3.  Set up environment variables

    Create a `.env` file in the root directory of the project with the following content:

    ```bash
    REACT_APP_API_BASE_URL=http://localhost:3000/api
    ```

    Replace `http://localhost:3000/api` with the URL of your backend service if it's hosted elsewhere.

    **Backend Setup:** Ensure the backend is properly set up and running. If you haven't done so, follow the setup instructions in the [Backend README](https://github.com/abhayrana1701/url-shortener-project.git) to get the backend up and running before starting the frontend.

4.  Run the development server

    ```bash
    npm run dev
    ```

    The frontend application will start on `http://localhost:5173` (default Vite port).

## API Integration

This frontend connects to the backend API for user authentication and URL management. Below are the key endpoints that the frontend interacts with:

**Authentication Endpoints**

*   Sign up: `POST /api/user/signup`
*   Login: `POST /api/user/login`

**URL Management Endpoints**

*   Shorten URL: `POST /api/url/shorten`
*   Manage URLs: `GET /api/manage/urls`
*   Delete URL: `DELETE /api/manage/:hash`
*   Get Analytics: `GET /api/url/analytics/:hash`

