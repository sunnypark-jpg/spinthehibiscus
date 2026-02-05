//Run page when page is fully loaded
window.onload = function () {
//HOME BUTTOM POP-UP MESSAGE
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");

//SHOW POPUP
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });
//CLOSE POPUP
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

    
//FLOWER SPIN TO RANDOMISED HIBISCUS PROFILE
    var flowerbutton = document.getElementById("bigflower");
    var pressbutton = document.getElementById("press");
//LISTEN TO CLICK BUTTON
    pressbutton.onclick = function () {
        flowerbutton.classList.add("spinflower");
//WAIT FOR SPIN TO FINISH - SPIT OUT RANDOM NUMBER
        flowerbutton.addEventListener("animationend", () => {
            const randomNumber = getRandomInt(6);
            console.log(randomNumber);

            if (randomNumber == 0) {
                window.location.href = "hibiscus01.html";
            } else if (randomNumber == 1) {
                window.location.href = "hibiscus02.html";
            } else if (randomNumber == 2) {
                window.location.href = "hibiscus03.html";
            } else if (randomNumber == 3) {
                window.location.href = "hibiscus04.html";
            } else if (randomNumber == 4) {
                window.location.href = "hibiscus05.html";
            } else {
                window.location.href = "hibiscus06.html";
            }
        });
//RANDOM INTEGER GENERATOR
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    };
};


