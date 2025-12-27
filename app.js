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
<<<<<<< HEAD

function removeCurrentActives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
}
=======
}

let request = new XMLHttpRequest();
request.open("GET","https://fakestoreapi.com/products");
request.send();
request.onload=() =>{
    console.log(JSON.parse(request.response));
}
>>>>>>> 14ce3b3041bb122d0b81fa18f5dd873537c30a24
