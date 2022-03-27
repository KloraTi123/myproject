let phrases = [
  { text: 'лайкнуть', image: 'https://cdn-icons-png.flaticon.com/512/3515/3515393.png' },
  { text: 'звонить по телефону', image: 'https://cdn-icons.flaticon.com/png/512/5585/premium/5585305.png?token=exp=1648380045~hmac=12cbe16643bea3440e6f95e61cf7294c' },
  { text: 'поесть еды', image: 'https://cdn-icons.flaticon.com/png/512/5029/premium/5029077.png?token=exp=1648379936~hmac=0d4c8da61485cfa898d430c4f82fd900' },
  { text: 'играть с котом', image: 'https://cdn-icons.flaticon.com/png/512/5310/premium/5310541.png?token=exp=1648379830~hmac=e603710183946e9f67c4c6ecb9c05e96' },
  { text: 'играть в компьютер', image: 'https://cdn-icons.flaticon.com/png/512/2704/premium/2704234.png?token=exp=1648380090~hmac=5514b3eab52924848bddcf6b3cfce50c' },
  { text: 'читать интересную книгу', image: 'https://cdn-icons-png.flaticon.com/512/167/167755.png' },
  { text: 'быть коровой', image: 'https://cdn-icons.flaticon.com/png/512/2097/premium/2097848.png?token=exp=1648380207~hmac=2fa64abebf02fe33e318280016271f12' },
  { text: 'пить теплое молоко', image: 'https://cdn-icons.flaticon.com/png/512/3414/premium/3414351.png?token=exp=1648380250~hmac=d2392d0d1cb1c39e07878ad0badd56ad' },
  { text: 'купить штаны к весне', image: 'https://cdn-icons.flaticon.com/png/512/2346/premium/2346855.png?token=exp=1648380292~hmac=0796a70184cb4526769f78bc9975f575' },
  { text: 'быть свиньей', image: 'https://cdn-icons.flaticon.com/png/512/1549/premium/1549241.png?token=exp=1648380328~hmac=ccedeaada11d9d641ee508b94ea3d8c9' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 