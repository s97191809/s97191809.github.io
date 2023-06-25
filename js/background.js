const body = document.querySelector("body");

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = new Image();
image.src = `background/${chosenImage}`; // 가져올 image경로 지정
image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
body.appendChild(image);
