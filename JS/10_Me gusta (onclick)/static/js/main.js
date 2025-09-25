let YORN = false;

function login() {
    const loginBtn = document.getElementById('login-btn');
    
    if (YORN) {
        loginBtn.textContent = 'Login';
        YORN = false;
    } else {
        loginBtn.textContent = 'Logout';
        YORN = true;
    }
}

function like(this) {
    const elementoLike = document.getElementById(`btn-lik${this === 1 ? '' : this}`);
    let currentLikes = parseInt(elementoLike.textContent);
    elementoLike.textContent = currentLikes + 1;
}