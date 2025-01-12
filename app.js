const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const adviceButton = document.getElementById("advice-button");
async function fetchData() {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`, {
      cache: "no-cache",
    });
    const data = await response.json();
    console.log(data);
    let returnedAdviceNumber = data.slip.id;
    let returnedAdviceText = data.slip.advice;
    adviceNumber.textContent = returnedAdviceNumber;
    adviceText.textContent = returnedAdviceText;
    if (!response.ok) {
      throw new Error("Could not fetch username");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
