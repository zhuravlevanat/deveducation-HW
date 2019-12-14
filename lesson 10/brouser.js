const tabsetElem = document.querySelector('.tabset');
const authorizationForm = document.getElementById('authorizationForm');
const userLoginInput = document.getElementById('userLogin');
const chatContainer = document.getElementById('chatContainer');
const chatForm = document.getElementById('chatForm');
const usersList = document.getElementById('usersList');
const chatFormInput = document.getElementById('chatFormInput');
const messageContainer = document.getElementById('chatDisplay');

let usersLogins = [];
let currentLogin;

tabsetElem.addEventListener('click', onTabsetElemsClick);
authorizationForm.addEventListener('submit', onAuthorizationFormSubmit);
chatForm.addEventListener('submit', onChatFormSubmit);

var socket = new WebSocket('ws://localhost:8081');

function onTabsetElemsClick(event) {

}

function onAuthorizationFormSubmit(event) {
  event.preventDefault();
  if (isFieldValid(userLoginInput)) {
    currentLogin = userLoginInput.value;
    showChat();
  }  
}

function addUserLogin(login) {
    usersLogins.push(login);
}

function onChatFormSubmit(event) {
    event.preventDefault();
    sendMessage('message', currentLogin, chatFormInput.value);
    chatForm.reset();
}

function sendMessage(type, name, message) {
    socket.send(
        JSON.stringify ({
          type,
          name,
          message  
    }));
  }

socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    if (data.type === 'disconnect') {
        usersList.children[data.name].classList.add('offline');
        return;

    }
    showMessage(data);
    if (!isUserInList(data.name)) {
        addUserLogin(data.name);
        updateUsersPanel();
    }
};

socket.onclose = function(event) {
    console.log("WebSocket is closed now." + event);
    changeUserState();
}

function showMessage(message) {
    const messageElem = document.createElement('div');
    messageElem.innerHTML = `${message.name}: ${message.message}`;
    messageContainer.append(messageElem);
    
    
}

function isUserInList(name) {
    console.log(usersLogins, name)
    return usersLogins.find(login => login == name)? true : false
}

function isFieldValid(elem){
    var regName = /^[a-zA-Z]+$/;
    elem.value = elem.value.trim();
    if (elem.value && regName.test(elem.value)){
        elem.classList.remove('invalid');
        return true;
    } else {
        elem.classList.add('invalid');
        return false;
    }
}

function updateUsersPanel() {
    usersList.innerHTML = '';
    usersLogins.forEach(login => {
    const user = document.createElement('li');
    user.className ='users-list__item';
    user.innerHTML = login;
    usersList.append(user);
    })
    
}

function changeUserState() {
    console.log('done');
}

function showChat() {
  authorizationForm.parentElement.classList.add('hidden');
  chatContainer.classList.remove('hidden');
  chatFormInput.focus();
}

