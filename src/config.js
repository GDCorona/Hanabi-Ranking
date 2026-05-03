export const CONFIG = {
    // If you are running locally, use the local backend. Otherwise, use your live Render backend.
    API_BASE_URL: window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1")
        ? "http://localhost:3000" 
        : "https://hanabi-backend-3oqr.onrender.com"
};