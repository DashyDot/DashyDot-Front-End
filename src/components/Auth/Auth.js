document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = document.getElementById('user-input');
    const password = document.getElementById('password-input');
    const res = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user,
        password
    })
    });
    if(!res.ok) {
        console.error('Error logging in');
    } else {
        window.location.href = '/popo';
    }
    
});