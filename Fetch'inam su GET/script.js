// 1.Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę):

fetch("https://golden-whispering-show.glitch.me")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((result) => {
      document.querySelector(".item-list").innerHTML += `<div class="item-card">
        <img src="${result.image}" alt="Item photo" class="img" />
        <p class="item-title">${result.title}</p>
        <h2 class="text-red">${result.price} Eur</h2>
        <button id="${result.id}">Delete</button>
      </div>`;
    });
  })
  .catch((e) => console.log(e.message));
