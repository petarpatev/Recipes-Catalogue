const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

export function updateNav() {
    const user = localStorage.getItem('user');
    if (user) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

export function logout() {
    localStorage.clear();
    updateNav();
}