// var and const

const chatbotContainer = document.getElementById("chatbot-container")
const container = document.getElementById("chat-flex-container")

const interactions = [
    { question: "What are you?", answer: "Experiment 626."},
    { question: "What is your purpose?", answer: "ʻOhana" },
    { question: "Status Error", answer: "System logs recorded." },
    { question: "The Emperor requests your services.", answer: "Royal members pay a higher fee."},
    { question: "We've got a job to do.", answer: "😉"}
]

const chatButton = document.getElementById("chatbot-icon")


let restart = false

let userChoice = ""


// functions

window.addEventListener("load", () => {
    console.log("Doc loaded...")
    newChat()
})


// only for static UI elements that don't get a listener attached dynamically
chatButton.addEventListener('click', openChat())


function openChat() {
        if (container.style.display === "none") {
            container.style.display = "flex"
        } else {
            container.style.display = "none"
        }
}

async function newChat() {
    
    if (restart) {
        await delay(1000)
    }

    const menuLabel = document.createElement("p")
    menuLabel.textContent = "Menu"
    chatbotContainer.append(menuLabel)

    interactions.forEach( item => {
        restart = false

        displayQuestions(item.question, item.answer)
    });
}

function displayQuestions(chosenQuestion, response) {

    const chatbotMessageContainer = document.createElement("div");
    chatbotMessageContainer.classList.add("user-message");

    chatbotContainer.appendChild(chatbotMessageContainer);

    const chatbotMessageContent = document.createElement("div");
    chatbotMessageContent.classList.add("message-content");
    chatbotMessageContent.classList.add("user-message-content");


    chatbotMessageContainer.appendChild(chatbotMessageContent);

    // Adding the FAQ's to the message bubbles
    const chatbotText = document.createElement("p");
    chatbotText.classList.add("chatbot-text")
    chatbotText.textContent = chosenQuestion;
    chatbotMessageContent.appendChild(chatbotText);

    // OnClick functionality
    chatbotMessageContainer.addEventListener("click", () => {
        newChatbotMessage(response)
    })

    chatbotText.scrollIntoView({ behavior: "smooth" });
}

async function newChatbotMessage(chatbotResponse) {
    const chatbotMessageContainer = document.createElement("div");
    chatbotMessageContainer.classList.add("chatbot-message");

    chatbotContainer.appendChild(chatbotMessageContainer);

    const supportLabel = document.createElement("p")
    supportLabel.textContent = "Support"
    chatbotMessageContainer.append(supportLabel)

    const userMessageContent = document.createElement("div");
    userMessageContent.classList.add("message-content");
    userMessageContent.classList.add("chatbot-message-content");


    chatbotMessageContainer.appendChild(userMessageContent);

    const chatbotText = document.createElement("p");
    chatbotText.textContent = chatbotResponse;
    userMessageContent.appendChild(chatbotText);
    

    if (chatbotResponse === "Royal members pay a higher fee.") {
        delay(1000)
        routeToContact()
    } else {
        restartChat()
    }

    chatbotText.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
}

function routeToContact() {
    window.location.href = "contact.html"
}

function restartChat() {
    if (restart === false) {
        restart = true
        newChat()
    }
}

function endChat() {
    container.style.display = "none"
}


// function to delay execution

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}