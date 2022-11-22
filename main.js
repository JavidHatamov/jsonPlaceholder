let maindiv = document.querySelector(".someData");
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      let div = `
       <div class="user-message">
       <p class="title">userId: ${item.userId}"</p>
       <p class="user-email">id: ${item.id}"</p>
       <p class="user-comment">title: ${item.title}"</p>
     </div>
     `;
      maindiv.innerHTML += div;
    })
  );
