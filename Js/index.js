const prevBtn = document.querySelector("#btnPrev");
const nextBtn = document.querySelector("#btnNext");

const firstContent = document.querySelector("#firstContent");
const secondContent = document.querySelector("#secondContent");
const thirdContent = document.querySelector("#thirdContent");

var fadeInInterval;
var fadeOutInterval;

let block = "block";
let none = "none";
firstContent.style.display = block;

//when nextBtn is clicked
nextBtn.addEventListener("click", function () {
  if (firstContent.style.display == block) {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    firstContent.fadeIn(10);
  } else if (secondContent.style.display == block) {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    secondContent.fadeIn(10);
  } else if (thirdContent.style.display == block) {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    thirdContent.fadeIn(10);
  }
});

//when prevBtn is clicked
prevBtn.addEventListener("click", function () {
  if (firstContent.style.display == block) {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    firstContent.fadeIn(10);
  } else if (secondContent.style.display == block) {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    secondContent.fadeIn(10);
  } else if (thirdContent.style.display == block) {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    thirdContent.fadeIn(10);
  }
});

//To return first Image Div
firstContent.fadeIn = function (timing) {
  var newValue = 0;

  firstContent.style.display = none;
  secondContent.style.display = block;
  thirdContent.style.display = none;
  firstContent.style.opacity = 0;
  secondContent.style.opacity = 0;
  thirdContent.style.opacity = 0;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    firstContent.style.opacity = newValue;
    secondContent.style.opacity = newValue;
    thirdContent.style.opacity = newValue;
  }, timing);
};

//To return second Image Div
secondContent.fadeIn = function (timing) {
  var newValue = 0;

  firstContent.style.display = none;
  secondContent.style.display = none;
  thirdContent.style.display = block;
  firstContent.style.opacity = 0;
  secondContent.style.opacity = 0;
  thirdContent.style.opacity = 0;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    firstContent.style.opacity = newValue;
    secondContent.style.opacity = newValue;
    thirdContent.style.opacity = newValue;
  }, timing);
};

//To return third Image Div
thirdContent.fadeIn = function (timing) {
  var newValue = 0;

  firstContent.style.display = block;
  secondContent.style.display = none;
  thirdContent.style.display = none;
  firstContent.style.opacity = 0;
  secondContent.style.opacity = 0;
  thirdContent.style.opacity = 0;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    firstContent.style.opacity = newValue;
    secondContent.style.opacity = newValue;
    thirdContent.style.opacity = newValue;
  }, timing);
};
