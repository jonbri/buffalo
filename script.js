const go = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (year !== 2023 || month !== 8) {
    console.log("time has past");
    return;
  }

  const dayElement = document.querySelector(`[data-day="${day}"]`);
  dayElement.classList.add("today");
};

setTimeout(go, 0);
