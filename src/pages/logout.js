import { logout } from "../auth.js";

export function renderLogout() {
    logout();
    alert('You are logged out!');
}