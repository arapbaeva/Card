// window.addEventListener('load', function () {
//     const body = this.document.querySelector('body')
//     body.className = "body";
//     body.style.margin = "0px";
//     body.style.padding = "0px";
//     body.style.backgroundColor = "#0D1A2D";



// const title = this.document.createElement('h3')
// title.innerText = ('Equilibrium #3429');
// title.className = 'h3';
// h3.style.color = 'white';
// document.body.appendChild(wrapper)
// wrapper.appendChild = (title)

// const pText = this.document.createElement('p');
// pText.append('Our Equilibrium collection promotes balance and calm.');
// pText.className = 'pText';
// pText.style.color = '#667B98';
// pText.style.fontSize = '18px';

// const pethWallet = this.document.createElement('p')
// pethWallet.append('0.041 ETH');
// pethWallet.className = 'pethWallet';
// pethWallet.style.color = "#25F8F2";
// // pethWallet.style.backgroundImage = '/img/icon-ethereum.svg'

// const pdays = this.document.createElement('p');
// pdays.append('3 days left');
// pdays.className = 'pdays';
// pdays.style.color = "#667B98";
// // pdays.style.backgroundImage = '/img/icon-clock.svg'

// const pAuthor = this.document.createElement('p');
// pAuthor.append('--- Creation of Aiym Arapbaeva');
// pAuthor.className = 'pAuthor';
// pAuthor.style.color = "#667B98";
// pAuthor.style.margin= "-18px 0 0 0";
// // pAuthor.style.backgroundImage = URL('/img/image-avatar.png');

// const connect_wallet_days = this.document.createElement('div');
// connect_wallet_days.append(pethWallet, pdays);
// connect_wallet_days.className = 'connect_wallet_days';
// connect_wallet_days.style.display = 'flex';
// connect_wallet_days.style.justifyContent = "space-between";
// connect_wallet_days.style.borderBottom = "solid #1F3149";
// connect_wallet_days.style.width = "100%";




// const divImg = this.document.createElement('div');
//     divImg.className = "card__img";
//     divImg.style.backgroundImage = "url('/img/image-equilibrium.jpg)";
//     divImg.style.width= "100%";
//     divImg.style.size= "cover";
//     divImg.style.borderRadius= "15px";
//     divImg.style.height= "200px";
//     divImg.style.backgroundRepeat= "no-repeat";

//     const AvImg = this.document.createElement('div');
//     AvImg.className = "card__avimg";
//     AvImg.style.backgroundImage = "url('./img/image-avatar.png')";
//     AvImg.style.width= "20px";
//     AvImg.style.size= "cover";
//     AvImg.style.borderRadius= "50%";
//     AvImg.style.height= "23px";
//     AvImg.style.zIndex= "2";
//     AvImg.style.margin= "20px 0 0 0";


// const wrapper = this.document.createElement('div');
// wrapper.id = "wrapper"; // ID WRAPPER IS HERE

// wrapper.style.margin = "80px auto";
// wrapper.style.display = "flex";
// wrapper.style.justifyContent = "space-around";

// const divItem = this.document.createElement('div');
// divItem.className = "card__item";
// divItem.style.width = "250px";
// divItem.style.height= "400px";
// divItem.style.display= "flex";
// divItem.style.flexDirection = "column";
// divItem.style.justifyContent= "center";
// divItem.style.borderRadius= "15px";
// divItem.style.boxShadow= "0 0 15px 30px #0E1629";
// divItem.style.backgroundColor= "#15273F";
// divItem.style.padding= "20px";

// const elementsList = [card__img, h3, pText, p, connect_wallet_days,card__img, card_avimg, pAuthor ];
// divItem.setAttribute('class', 'card__item');
// for (let i = 0; i < elementsList.length; i++) {
//     divItem.append(elementsList[i]);
// }

// wrapper.append(divItem);
// body.append(wrapper);

// alert("Я оцениваю свою работу на 110 баллов" )
// })


document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

//Wrapper
let wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.marginTop = "100px";

//card
let card = document.createElement("div");
card.className = "card";
card.style.padding = "20px 20px";
card.style.borderRadius = "20px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxShadow = 
"3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";

//img
let cardImg = document.createElement("img");
cardImg.className = "card-image";
cardImg.src = "./img/image-equilibrium.jpg";
cardImg.style.maxWidth = "300px";
cardImg.style.borderRadius = "10px";
cardImg.style.marginBottom = "17px";


//MAIN-TITLE
let title = document.createElement("h3");
title.className = "card-title";
title.innerText = "Equilibrium #3429";
title.style.margin = "0";
title.style.color = "hsl(0, 0%, 100%)";
title.style.marginBottom = "17px";
// SUBTITLE
let subtitle = document.createElement("p");
subtitle.className = "card-subtitle";
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.margin = "0";
subtitle.style.maxWidth = "300px";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "300";
subtitle.style.lineHeight = "25px";
subtitle.style.marginBottom = "17px";

//
let items = document.createElement("div");
items.style.display = "flex";
items.style.justifyContent = "space-between";

let value = document.createElement("div");
value.className = "card-value";

let psevdoItem = document.createElement("img");
psevdoItem.className = "value-icon";
psevdoItem.src = "./img/icon-ethereum.svg";
psevdoItem.style.marginRight = "5px";

let valueText = document.createElement("p");
valueText.className = "value-text";
valueText.innerText = "0.041 ETH";
value.style.margin = "0";
valueText.style.display = "inline-block";
valueText.style.color = "hsl(178, 100%, 50%)";
valueText.style.fontWeight = "bold";

let timeItems = document.createElement("div");
timeItems.className = "time";
timeItems.style.display = "flex";
timeItems.style.alignItems = "center";
timeItems.style.marginBottom = "17px";


let timeImage = document.createElement("img");
timeImage.className = "time-img";
timeImage.src = "./img/icon-clock.svg";
timeImage.style.marginRight = "5px";


let timeItem = document.createElement("time");
timeItem.className = "time-item";
timeItem.innerText = "3 days left";
timeItem.style.color = "hsl(215, 51%, 70%)";

let line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%)";

let user = document.createElement("div");
user.className = "user";
user.style.marginTop = "22px";
user.style.display = "flex";
user.style.alignItems = "center";

let userImg = document.createElement("img");
userImg.className = "avatar";
userImg.src = "./img/image-avatar.png";
userImg.style.maxWidth = "45px";
userImg.style.marginRight = "15px";
userImg.style.border = "2px solid white";
userImg.style.borderRadius = "50%";

let userText = document.createElement("span");
userText.className = "user-txt";
userText.innerHTML = "Creation of";
userText.style.color = "hsl(215, 51%, 70%)";
userText.style.textAlign = "center";

let userName = document.createElement("span");
userName.className = "userName";
userName.innerHTML = "Jules Wyvern";
userName.style.color = "white";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(cardImg);
card.appendChild(title);
card.appendChild(subtitle);
card.appendChild(items);
items.appendChild(value);
value.appendChild(psevdoItem);
value.appendChild(valueText);
items.appendChild(timeItems);
timeItems.appendChild(timeImage);
timeItems.appendChild(timeItem);//
card.appendChild(line);
card.appendChild(user);
user.appendChild(userImg);
user.appendChild(userText);
user.appendChild(userName);

console.log(card);
alert("Я оцениваю свою работу на 110 баллов");











