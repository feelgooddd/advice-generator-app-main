const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const adviceButton = document.getElementById("advice-button");
async function fetchData() {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`, {
      cache: "no-cache",
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Could not fetch username");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function useData() {
  let data = await fetchData();
  adviceNumber.textContent = data.slip.id;
  adviceText.textContent = data.slip.advice;
}

useData();
