const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.body,
};

let timerId = null;

refs.start.addEventListener('click', onClickBtnChangeColor);
refs.stop.addEventListener('click', onClickBtnStopChangeColor);
refs.stop.setAttribute('disabled', 'disabled');

function onClickBtnChangeColor() {
  timerId = setInterval(setBodyColor, 1000);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
}

function onClickBtnStopChangeColor() {
  clearInterval(timerId);
  timerId = 0;
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'disabled');
}

function setBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
