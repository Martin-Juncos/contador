document.addEventListener("DOMContentLoaded", () => {
  const displayCount = document.getElementById("display-count");
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");
  const resetBtn = document.getElementById("reset-btn");

  let count = parseInt(displayCount.innerText);

  incrementBtn.addEventListener("click", () => {
    count += 1;
    displayCount.innerText = count.toString();
  });

  decrementBtn.addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
      displayCount.innerText = count.toString();
    }
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    displayCount.innerText = "0";
  });
});
