window.addEventListener("load", () => {
    console.log("Doc loaded...");
    newChat();
})

const chatbotContainer = document.getElementById("chatbot-container");

const interactions = [
    { question: "What are you?", answer: "Experiment 626."},
    { question: "What is your purpose?", answer: "Invalid input. Please try again." },
    { question: "Status Error", answer: "System logs recorded." }
]

let restart = false;

let userChoice = "";

async function newChat() {
    
    if (restart) {
        await delay(2000)
    }

    interactions.forEach( item => {
        restart = false

        displayQuestions(item.question, item.answer)
    });
}

function displayQuestions(chosenQuestion, response) {
    const chatbotMessageContainer = document.createElement("div");
    chatbotMessageContainer.classList.add("chatbot-message");

    chatbotContainer.appendChild(chatbotMessageContainer);

    const chatbotMessageContent = document.createElement("div");
    chatbotMessageContent.classList.add("message-content");
    chatbotMessageContent.classList.add("chatbot-message-content");


    chatbotMessageContainer.appendChild(chatbotMessageContent);

    // Adding the FAQ's to the message bubbles
    const chatbotText = document.createElement("p");
    chatbotText.classList.add("chatbot-text")
    chatbotText.textContent = chosenQuestion;
    chatbotMessageContent.appendChild(chatbotText);

    // OnClick functionality
    chatbotMessageContainer.addEventListener("click", () => {
        console.log(`${response} tapped`);
        newUserMessage(response)
    })

    chatbotText.scrollIntoView({ behavior: "smooth" });
}

function newUserMessage(clickedMessage) {
    const userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("user-message");

    chatbotContainer.appendChild(userMessageContainer);

    const userMessageContent = document.createElement("div");
    userMessageContent.classList.add("message-content");
    userMessageContent.classList.add("user-message-content");


    userMessageContainer.appendChild(userMessageContent);

    const userText = document.createElement("p");
    userText.textContent = clickedMessage;
    userMessageContent.appendChild(userText);

    if (clickedMessage === "System logs recorded.") {
        restartChat()
    }

    userText.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
}

function restartChat() {
    if (restart === false) {
        restart = true
        newChat()
    }
}

function closeChat() {
    const container = document.getElementById("container")
    container.style.display = "none"
}


// function to delay execution

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}