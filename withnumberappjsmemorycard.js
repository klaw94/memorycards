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
      firstName: "",
      secondClassId: "",
      secondName: "",
      firstCardTurned: false,
    },
  };
  let cardSpaces = document.querySelectorAll(".cardDiv");
  shuffle(images);
  setIds();
  const INFO = memoryGame["info"];
  
  function setIds() {
    for (i = 0; i < cardSpaces.length; i++) {
      cardSpaces[i].setAttribute("id", i);
      cardSpaces[i].classList.add(i);
    }
  }
  
  function playGame(yourChoice) {
    console.log(yourChoice);
    flipCard(yourChoice, INFO);
  }
  
  function flipCard(yourChoice, info) {
    if (info["firstCardTurned"] === false) {     
        console.log(yourChoice.id);
        let choiceId = Number(yourChoice.id);    
        yourChoice.innerHTML = "<img src=' " + images[choiceId].src + "'/>";
        info["firstCardTurned"] = true;
        info["firstClassId"] = yourChoice.id;
        info["firstName"] = images[choiceId].name;
        yourChoice.setAttribute("onclick", "nothingHappens()");
    } else {   
        let choiceId = Number(yourChoice.id);  
        yourChoice.innerHTML = "<img src=' " + images[choiceId].src + "' />";
        info["secondClassId"] =yourChoice.id;
        info["secondName"] = images[choiceId].name;
        console.log(info["secondClassId"]);
        yourChoice.setAttribute("onclick", "nothingHappens()");
        info["firstCardTurned"] = false;
        if (info["secondName"] === info["firstName"]) {
            setTimeout(takeAwayTheCouple, 400, info, cardSpaces, images);
          } else {
            setTimeout(turnCardsBack, 400, info);
          }
        
    }
     
  }
  
  function takeAwayTheCouple(info, cardSpaces, images) {
    let flippedCard = document.getElementById(info["firstClassId"]);
    let flippedCardTwo = document.getElementById(info["secondClassId"]);
    flippedCard.setAttribute("id", "disappeared");
    flippedCard.innerHTML = "";
    flippedCardTwo.setAttribute("id", "disappeared");
    flippedCardTwo.innerHTML = "";
    checkIfYouWon(cardSpaces, images);
  }
  
  function turnCardsBack(info) {
    //   yourChoice.innerHTML =
    //     "<img src='D:\\Users\\Claudia\\Desktop\\Claudia\\Nuevo proyecto\\Programming\\Java Crash Course\\Memory Game\\Src_and_img\\black-white-hypnotic.webp' />";
    //   yourChoice.setAttribute("onclick", "playGame(this)");
  
    let flippedCardOne = document.getElementById(info["firstClassId"]);
    console.log(flippedCardOne);
    flippedCardOne.innerHTML =
        "<img src='https://img.freepik.com/free-vector/black-white-hypnotic-background-abstract-seamless-pattern-illustration_118124-3765.jpg?w=2000' />";
     flippedCardOne.setAttribute("onclick", "playGame(this)");
  
    let flippedCardTwo = document.getElementById(info["secondClassId"]);
    flippedCardTwo.innerHTML =
        "<img src='https://img.freepik.com/free-vector/black-white-hypnotic-background-abstract-seamless-pattern-illustration_118124-3765.jpg?w=2000' />";
    flippedCardTwo.setAttribute("onclick", "playGame(this)");
  }
  
  function nothingHappens() {
    console.log("nothing is happening");
  }
  
  function checkIfYouWon(cardSpaces, images) {
    console.log("checking");
    for (i = 0; i < cardSpaces.length; i++) {
        let card = cardSpaces[i].id;      
        if (card != "disappeared") {
          return false;
      }
    }
    document.querySelector("h1").innerHTML = "You won! ✨😃";
  }
  