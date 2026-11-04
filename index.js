document.getElementById("Button").addEventListener("click", () => {
  // Code to execute when the button is clicked
  const wahrscheinlichkeitFuerEins = 0.7; // 70 % Chance auf eine 1
  const number = Math.random() < wahrscheinlichkeitFuerEins ? 1 : 2;

  if (number === 1) {
    alert("You gona be a Femboy");
    console.log("Zahl eins wurde Generiert");
  }

  if (number === 2) {
    alert("You won't be a Femboy");
    console.log("Zahl zwei wurde Generiert");
    console.log("Don't listen to me, become a femboy.");
  }
});
