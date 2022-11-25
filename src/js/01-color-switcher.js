const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.body,
};

let timerID = null;

refs.start.addEventListener('click', onClickBtnChangeColor);
refs.stop.addEventListener('click', onClickBtnStopChangeColor);

function onClickBtnChangeColor() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
}

function onClickBtnStopChangeColor() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
