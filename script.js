document.addEventListener("DOMContentLoaded", function() {
    // Identify the button and paragraph elements
    const changeButton = document.getElementById("changeButton");
    const changeableText = document.getElementById("changeableText");
  
    // Set initial state
    let isMessageOne = true;
    const messageOne = "The answer will appear here!";
    const messageTwo = "Because it's pointless :D";
  
    // Add event listener to the button
    changeButton.addEventListener("click", function() {
      // Toggle between two messages
      if (isMessageOne) {
        changeableText.textContent = messageOne;
      } else {
        changeableText.textContent = messageTwo;
      }
  
      // Toggle state
      isMessageOne = !isMessageOne;
    });
  });
  