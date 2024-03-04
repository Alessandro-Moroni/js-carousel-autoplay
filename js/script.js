const imgWrapper = document.querySelector('.img-wrapper');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const imagesList = document.querySelector('.list-img')
const caroulse = document.querySelector('.carousel')

let counterImg = 0;
let stopScroll = setInterval(scrollDown , 3000);

const images = [
  'consegna/img/01.webp',
  'consegna/img/02.webp',
  'consegna/img/03.webp',
  'consegna/img/04.webp',
  'consegna/img/05.webp',
]

for(let i = 0; i < images.length; i++){
  const img = images[i];
  imgWrapper.innerHTML += `<img class="img hide" src="${img}" >`;
  
  imagesList.innerHTML += `<img class="images-list opacity" src="${img}" >`;

}

const itemsCollection = document.getElementsByClassName('img');
itemsCollection[counterImg].classList.remove('hide');


const smallImages = document.getElementsByClassName('images-list');
smallImages[0].classList.remove('opacity');

// tatso up
up.addEventListener('click', function(){
  scrollUp();
})

// tasto down
down.addEventListener('click', function(){
  scrollDown()
})

function scrollUp(){
  smallImages[counterImg].classList.add('opacity');

  itemsCollection[counterImg--].classList.add('hide');
  
  if(counterImg < 0){
    counterImg = images.length - 1;
  }

  itemsCollection[counterImg].classList.remove('hide');

  smallImages[counterImg].classList.remove('opacity');
  
  down.classList.remove('hide');
}

function scrollDown(){
  up.classList.remove('hide');

  smallImages[counterImg].classList.add('opacity');
  
  itemsCollection[counterImg++].classList.add('hide');
  
 if(counterImg === images.length){
  counterImg = 0;
 }
  itemsCollection[counterImg].classList.remove('hide');
  
  smallImages[counterImg].classList.remove('opacity');
}

caroulse.addEventListener('mouseout', function(){
 stopScroll = setInterval(scrollDown , 3000);
 
})

caroulse.addEventListener('mouseover', function(){
 clearInterval(stopScroll);
})