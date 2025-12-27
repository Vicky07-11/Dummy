const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeCurrentActives();
    slide.classList.add("active");
  });
});

function removeCurrentActives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

let request = new XMLHttpRequest();
request.open("GET","https://fakestoreapi.com/products");
request.send();
request.onload=() =>{
    console.log(JSON.parse(request.response));
}
