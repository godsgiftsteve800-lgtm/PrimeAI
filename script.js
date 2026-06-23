const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearChat = document.getElementById("clearChat");

function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function addMessage(text, type) {

    const message = document.createElement("div");
    message.className = type;

    message.innerHTML = `
        ${text}
        <br>
        <small style="opacity:.6;">${getTime()}</small>
    `;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {

    const text = userInput.value.trim();

    if(text==="") return;

    addMessage(text,"user");

    userInput.value="";

    const typing=document.createElement("div");
    typing.className="bot";
    typing.innerHTML="🤖 PrimeAI is thinking...";
    chatBox.appendChild(typing);

    chatBox.scrollTop=chatBox.scrollHeight;

    setTimeout(()=>{

        typing.remove();

        let reply="I'm still learning. Soon I'll answer using real AI! 🚀";

        if(text.toLowerCase().includes("hello") || text.toLowerCase().includes("hi")){
            reply="👋 Hello! Nice to meet you. How can I help today?";
        }

        if(text.toLowerCase().includes("name")){
            reply="🤖 My name is PrimeAI.";
        }

        if(text.toLowerCase().includes("who made you")){
            reply="💙 I was created by Godsgift Steve.";
        }

        addMessage(reply,"bot");

    },1500);

}

sendBtn.addEventListener("click",sendMessage);

userInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){
        sendMessage();
    }

});

clearChat.addEventListener("click",()=>{

chatBox.innerHTML=`
<div class="bot">

👋 Hello again!

How can I help you today?

<br><br>

<small>${getTime()}</small>

</div>
`;

});