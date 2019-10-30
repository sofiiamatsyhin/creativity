const counters = document.querySelectorAll('.counter');

function updater(counter) {
  const counterEnd = +counter.dataset.value;
  let counterValue = 0;
  let id = setInterval(tik, 100);

  function tik() {
    if (counterValue >= counterEnd) {
      clearInterval(id);
    } else {
      counterValue++;
      counter.innerHTML = counterValue;
    }
  }
}

const moveDetect = () => {
  let isShown = false;

  return () => {
    if (!isShown) {
      counters.forEach(counter => {
        console.log('counter.dataset.value', counter.dataset.value);
        updater(counter);
      })
      isShown = true;
    } else {
      console.log('isShown', isShown);
    }
  }
}

const moveOn = moveDetect();

function checkPosition() {
  const isVisible = counters[0].getBoundingClientRect().top < window.innerHeight;
  console.log('isVisible', isVisible);

  if (isVisible) moveOn();
}

document.addEventListener('scroll', checkPosition);