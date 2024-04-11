let state = ["", "", ""];
const OPTION_LIST = ["🀢", "🀤", "🀥", "🀣", "🀧", "🀨", "🀩"];
const randomIndexReel = () => {
  const randomIndex = Math.floor(Math.random() * OPTION_LIST.length);
  return OPTION_LIST[randomIndex];
};
const getFirstReel = () => {
  return randomIndexReel();
};
const getSecondReel = () => {
  return randomIndexReel();
};
const getThirdReel = () => {
  return randomIndexReel();
};
const setState = (firstReel, secondReel, thirdReel) => {
  state = [firstReel, secondReel, thirdReel];
  const getUpdate = (position, value) => {
    document.querySelector(`.${position}`).innerHTML = value;
  };
  getUpdate("firstReel", state[0]);
  getUpdate("secondReel", state[1]);
  getUpdate("thirdReel", state[2]);
};
const isWinnerOrLoser = () => {
  const isPlayerWinner = (state[0] === state[1]) === state[2];
  if (isPlayerWinner) {
    alert("Congrats! You win!🥳🎉🎊");
    return;
  }
  alert("Sorry buddy! 🥺");
};
const playGame = () => {
  const firstReel = getFirstReel();
  const secondReel = getSecondReel();
  const thirdReel = getThirdReel();
  setState(firstReel, secondReel, thirdReel);
  setTimeout(isWinnerOrLoser, 300);
};
