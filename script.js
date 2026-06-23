const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function sendMessage() {

    const message = userInput.value.trim();

    if(message === "") return;

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = message;
    chatBox.appendChild(userDiv);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    userInput.value = "";

    // Fake AI reply
    setTimeout(() => {

        const botDiv = document.createElement("div");
        botDiv.className = "bot-message";
        botDiv.textContent =
        "🤖 PrimeAI: I'm still under development, but soon I'll be able to answer your questions using real AI!";

        chatBox.appendChild(botDiv);

        chatBox.scrollTop = chatBox.scrollHeight;

    },800);

}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        sendMessage();
    }

});