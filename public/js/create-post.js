const createPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name: "post-title"]').value;
  const content = document.querySelector('textarea[name: "post-content"]').value;

  const response = await fetch('/api/posts', {
    method: 'POST', 
    body: JSON.stringify({
      title, 
      content,
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed.');
  }
};

document
  .querySelector('#create-post')
  .addEventListener('submit', createPostHandler);