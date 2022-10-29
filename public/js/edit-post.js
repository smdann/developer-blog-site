const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name: "post-title"]').value;
  const content = document.querySelector('textarea[name: "post-content"]').value;
  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];


  const response = await fetch('/api/posts/${:id}', {
    method: 'PUT', 
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};


document.querySelector('.edit-post').addEventListener('submit', editFormHandler);