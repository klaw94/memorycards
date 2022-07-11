let images = [
  {
    name: "dali",
    src: "Src_and_img\\dali.jpg",
  },
  {
    name: "dali",
    src: "Src_and_img\\dali.jpg",
  },
  {
    name: "durero",
    src: "Src_and_img\\durero.jpg",
  },
  {
    name: "durero",
    src: "Src_and_img\\durero.jpg",
  },
  {
    name: "frida",
    src: "Src_and_img\\kahlo_frida_1.jpg",
  },
  {
    name: "frida",
    src: "Src_and_img\\kahlo_frida_1.jpg",
  },
  {
    name: "picasso",
    src: "Src_and_img\\picasso.jpg",
  },
  {
    name: "picasso",
    src: "Src_and_img\\picasso.jpg",
  },
  {
    name: "rembrandt",
    src: "Src_and_img\\rembrandt.jpg",
  },
  {
    name: "rembrandt",
    src: "Src_and_img\\rembrandt.jpg",
  },
  {
    name: "vanGogh",
    src: "Src_and_img\\van-gogh.jpg",
  },
  {
    name: "vanGogh",
    src: "Src_and_img\\van-gogh.jpg",
  },
];

//images.sort(() => 0.5 - Math.random())

function shuffle(images) {
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * images.length);
    let location2 = Math.floor(Math.random() * images.length);
    let tmp = images[location1];

    images[location1] = images[location2];
    images[location2] = tmp;
  }
}
let memoryGame = {
  info: {
    firstClassId: "",
    secondClassId: "",
    firstCardTurned: false,
  },
};
let cardSpaces = document.querySelectorAll(".cardDiv");
shuffle(images);
setCards(images, cardSpaces);
const INFO = memoryGame["info"];

function setCards(images, cardSpaces) {
  for (i = 0; i < cardSpaces.length; i++) {
    cardSpaces[i].setAttribute("id", images[i].name);
    cardSpaces[i].classList.add(images[i].name);
  }
}

function playGame(yourChoice) {
  console.log(yourChoice);
  flipCard(yourChoice, INFO);
}

function flipCard(yourChoice, info) {
  if (info["firstCardTurned"] === false) {
    for (i = 0; i < images.length; i++) {
      if (yourChoice.id === images[i].name) {
        let imageText = images[i].src;
        yourChoice.innerHTML = "<img src=' " + imageText + "'/>";
        info["firstCardTurned"] = true;
        info["firstClassId"] = yourChoice.id;
        console.log(info["firstClassId"]);
        yourChoice.setAttribute("onclick", "nothingHappens()");
      }
    }
  } else {
    for (i = 0; i < images.length; i++) {
      if (yourChoice.id === images[i].name) {
        let imageText = images[i].src;
        yourChoice.innerHTML = "<img src=' " + imageText + "' />";
        info["secondClassId"] = yourChoice.id;
        console.log(info["secondClassId"]);
        yourChoice.setAttribute("onclick", "nothingHappens()");
      }
    }
    info["firstCardTurned"] = false;
    if (info["secondClassId"] === info["firstClassId"]) {
      setTimeout(takeAwayTheCouple, 400, info, cardSpaces, images);
    } else {
      setTimeout(turnCardsBack, 400, info);
    }
  }
}

function takeAwayTheCouple(info, cardSpaces, images) {
  for (i = 0; i < 2; i++) {
    let flippedCards = document.getElementById(info["firstClassId"]);
    flippedCards.setAttribute("id", "disappeared");
    flippedCards.innerHTML = "";
  }
  checkIfYouWon(cardSpaces, images);
}

function turnCardsBack(info) {
  //   yourChoice.innerHTML =
  //     "<img src='D:\\Users\\Claudia\\Desktop\\Claudia\\Nuevo proyecto\\Programming\\Java Crash Course\\Memory Game\\Src_and_img\\black-white-hypnotic.webp' />";
  //   yourChoice.setAttribute("onclick", "playGame(this)");

  let flippedCardOne = document.getElementsByClassName(info["firstClassId"]);
  for (i = 0; i < 2; i++) {
    flippedCardOne[i].innerHTML =
      "<img src='https://img.freepik.com/free-vector/black-white-hypnotic-background-abstract-seamless-pattern-illustration_118124-3765.jpg?w=2000' />";
    flippedCardOne[i].setAttribute("onclick", "playGame(this)");
  }

  let flippedCardTwo = document.getElementsByClassName(info["secondClassId"]);
  for (i = 0; i < 2; i++) {
    flippedCardTwo[i].innerHTML =
      "<img src='https://img.freepik.com/free-vector/black-white-hypnotic-background-abstract-seamless-pattern-illustration_118124-3765.jpg?w=2000' />";
    flippedCardTwo[i].setAttribute("onclick", "playGame(this)");
  }
}

function nothingHappens() {
  console.log("nothing is happening");
}

function checkIfYouWon(cardSpaces, images) {
  console.log("checking");
  for (i = 0; i < cardSpaces.length; i++) {
    let card = cardSpaces[i].id;
    for (x = 0; x < images.length; x++) {
      if (card === images[x].name) {
        console.log(card + "and" + images[x].name + " is the same");
        return false;
      }
    }
  }
  alert("You won");
}
