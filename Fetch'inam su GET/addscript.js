// 2.Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.

const itemImage = document.getElementById("image");
const itemTitle = document.getElementById("title");
const itemPrice = document.getElementById("price");

document.getElementById("btn-add").addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    image: itemImage.value,
    title: itemTitle.value,
    price: itemPrice.value,
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Sekmingai prideta!");
      window.location.replace("http://127.0.0.1:5500/index.html");
    })
    .catch((err) => console.log(err));
});
