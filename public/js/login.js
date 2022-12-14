const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(email)
  console.log(password)

  if (email && password) {
    console.log(email, '*****')
    console.log(password, '*****')
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password}),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    console.log(email)
    console.log(password)
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


