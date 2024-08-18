function increaseCounter(id) {
    const counter = document.getElementById(id);
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
  }
  