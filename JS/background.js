const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const chosenImg =images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
//Element에는 존재하지 않음 
bgImage.src =`IMG/${chosenImg}`

document.body.appendChild(bgImage);