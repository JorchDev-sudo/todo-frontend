import { initAuthFlow } from './controllers/authController.js'
import { initDashboard } from './controllers/dashboardController.js'

const token = localStorage.getItem("token");

if (token) {
    initDashboard();
} else {
    initAuthFlow();
}