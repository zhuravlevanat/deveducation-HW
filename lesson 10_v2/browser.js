const tabsetElem = document.querySelector('.tabset');
const authorizationForm = document.getElementById('authorizationForm');
const userLoginInput = document.getElementById('userLogin');
const chatContainer = document.getElementById('chatContainer');
const chatForm = document.getElementById('chatForm');
const usersList = document.getElementById('usersList');
const chatFormInput = document.getElementById('chatFormInput');
const messageContainer = document.getElementById('chatDisplay');
const addTabsetBtn = document.getElementById('addTabsetBtn');
const tabsetItemTemplate = document.getElementById('tabsetItemTemplate').innerHTML;
const addUserBtn = document.getElementById('addUserBtn');
const addUserForm = document.getElementById('addUserForm');
const userNameInput = document.getElementById('userNameInput');
const messageItem = document.querySelector('.message-item');
const deleteMsgBtn = document.getElementById('deleteBtn');
const editMsgBtn = document.getElementById('editBtn');


let currentRoom = 0;
let users = [];
let history = [[]];
let currentUser;
let edited = false;
let editedId;

tabsetElem.addEventListener('click', onTabsetElemsClick);
authorizationForm.addEventListener('submit', onAuthorizationFormSubmit);
chatForm.addEventListener('submit', onChatFormSubmit);
addTabsetBtn.addEventListener('click', onAddTabsetBtnClick);
addUserBtn.addEventListener('click', onAddUserBtnClick);
addUserForm.addEventListener('submit', onAddUserFormSubmit);
messageContainer.addEventListener('click', onMessageContainerClick);

var socket = new WebSocket('ws://localhost:8081');

function onAuthorizationFormSubmit(event) {
  event.preventDefault();
  if (isFieldValid(userLoginInput)) {
   currentUser = userLoginInput.value;
    socket.send(JSON.stringify({ type: 'authentification', name: currentUser, state: 'online', room: currentRoom, isActive: false }));
  }  
}

function onTabsetElemsClick(event) {
  if (event.target.classList.contains('delete-btn')) {
    socket.send(JSON.stringify({ type: 'deleteRoom', name: currentUser, room: event.target.parentElement.dataset.id }));
    currentRoom = 0;
    return
  }  
  currentRoom = event.target.dataset.id;
  makeRoomActive();
  socket.send(JSON.stringify({ type: 'connectRoom', name: currentUser, state: 'online', room: currentRoom}));       
}

function onChatFormSubmit(event) {
  event.preventDefault();
  if (edited) {
    socket.send(JSON.stringify({ type: 'editMessage', message: chatFormInput.value, id: editedId, room: currentRoom}));
    edited = false;
  } else {
    sendMessage('message', currentUser, chatFormInput.value, currentRoom);
  }
  chatForm.reset();
}

function onAddTabsetBtnClick() {
  socket.send(JSON.stringify({ type: 'createRoom', name: currentUser, state: 'online', isActive: true, room: tabsetElem.children.length}))
}

function onAddUserBtnClick() {
  addUserForm.classList.remove('hidden');
  userNameInput.focus();  
}

function onAddUserFormSubmit(event) {
  event.preventDefault();
  const newUser = userNameInput.value;
  if (users.find(elem => elem.name == newUser)) {
    userNameInput.classList.remove('invalid');
    socket.send(JSON.stringify({ type: 'addUserToRoom', name: newUser, state: 'online', room: currentRoom}));     
  } else {
    userNameInput.classList.add('invalid');
  }
  addUserForm.reset();
  addUserForm.classList.add('hidden');
}

function onMessageContainerClick(event) {
  if (event.target.classList.contains('delete-btn')) {
    socket.send(JSON.stringify({ type: 'deleteMessage', name: currentUser, room: currentRoom, messageId: event.target.parentElement.dataset.id})); 
  } else if (event.target.classList.contains('edit-btn')) {
    edited = true;
    editedId = event.target.parentElement.dataset.id;
    chatFormInput.value = getSubstring(event.target.parentElement.innerHTML);
    chatFormInput.focus();
  } else return;
}

function getSubstring(str) {
  const from = str.indexOf(':');
  const to = str.indexOf('<');
  return str.slice(from+1, to).trim();
}

function isFieldValid(elem){
  const regName = /^[a-zA-Z0-9]+$/;
  elem.value = elem.value.trim();
  if (elem.value && regName.test(elem.value)){
    elem.classList.remove('invalid');
    return true;
  } else {
    elem.classList.add('invalid');
    return false;
  }
}

function isDefined(login) {
  return users[0].some(user => user.name == login);
}

function isUserOnline(login) {
  const user = users[0].find(user => user.name == login);
  return (user.state == 'online') ? true : false
}

function showChat() {
  authorizationForm.parentElement.classList.add('hidden');
  chatContainer.classList.remove('hidden');
  chatFormInput.focus();
}

function hideChat() {
  authorizationForm.parentElement.classList.remove('hidden');
  chatContainer.classList.add('hidden');
  userLoginInput.classList.add('invalid');
}

function sendMessage(type, name, message, room) {
  socket.send(
    JSON.stringify ({
      type,
      name,
      message,
      room
    }));
}

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);

  if (data.type === 'Error') {
    hideChat(); 
  }

  if (data.type === 'Success') {
    socket.send(JSON.stringify({ type: 'connectRoom', name: currentUser, state: 'online', isActive: false, room: currentRoom }));    
  }

  if (data.type === 'connectRoom') {
    showChat();
    users = data.users;
    history[data.room] = data.messages;
    updateUsersPanel();
    updateMessagesPanel();
  }

  if (data.type === 'deleteRoom'|| data.type === 'deleteUser') {
    users = data.users;
    updateRoomsPanel();
    updateMessagesPanel();
    updateUsersPanel();
  }

  if (data.type === 'createRoom') {
    users = data.users;
    history.push([]);
    currentRoom = data.room;
    updateRoomsPanel();
    updateMessagesPanel();
    updateUsersPanel ();
  }  

  if (data.type === 'message') {
    showMessage(data.message);
    updateUsersPanel();   
  }

  if (data.type === 'deleteMessage' || data.type === 'editMessage') {
    history[data.room] = data.messages;
    updateMessagesPanel(data.room);
  }

  if (data.type === 'connectUser') {
    users = data.users;
    updateUsersPanel();    
  }

  if (data.type === 'disconnect') {
    users.forEach(user => {
      if (user.name == data.name) {
        user.state = 'offline';
      }
    });
    for (let i = 0; i < usersList.children.length; i++) {
      if (usersList.children[i].innerHTML == data.name) {
        usersList.children[i].classList.add('offline');
        return;
      }
    }
  }
};

function showMessage(message) {
  const messageElem = document.createElement('div');
  messageElem.className = 'message-item';
  if (message.name == currentUser) {
    messageElem.innerHTML = `${message.name}: ${message.message} <span id="deleteBtn" class="delete-btn">✘</span><span id="editBtn" class="edit-btn">✎</span`;
    messageElem.setAttribute('data-id', message.id);
  } else {
    messageElem.innerHTML = `${message.name}: ${message.message}`;
  }
  messageContainer.append(messageElem);    
}

function updateUsersPanel() {
  usersList.innerHTML = '';
  users.forEach(elem => {
    if (elem.rooms.includes(currentRoom) && elem.isActive) {    
      const user = document.createElement('li');
      user.className ='users-list__item';
      user.innerHTML = elem.name;
      usersList.append(user);
      if (elem.state == 'offline') {
        user.classList.add('offline');
      }
      makeUserActive();
    }  
  });    
}

function makeUserActive() {
  for (let i = 0; i < usersList.children.length; i++) {
    usersList.children[i].classList.remove('active');
    if (usersList.children[i].innerHTML == currentUser) {
      usersList.children[i].classList.add('active');
    }
  }
  }

function updateMessagesPanel() {
  messageContainer.innerHTML = '';
  history[currentRoom].forEach(elem => {
    showMessage(elem);
  })
}

function updateRoomsPanel() {
  const user = users.find(user => user.name === currentUser);
  if (user.rooms.length > 1) {
    for(let i = user.rooms.length -1; i < user.rooms.length; i++) {
      createRoom(user.rooms[i]);
    }
  } else {
    tabsetElem.innerHTML = '';
    createRoom(0);
  } 
  makeRoomActive();
}

function makeRoomActive() {
  for (let i = 0; i < tabsetElem.children.length; i++) {
    tabsetElem.children[i].classList.remove('active');
    if (tabsetElem.children[i].firstElementChild.dataset.id == currentRoom){
      tabsetElem.children[i].classList.add('active');
    }
  }
}

function createRoom(room) {
  const chat = tabsetItemTemplate
              .replace('{{name}}', `Room ${room+1}`)
              .replace('{{id}}', room)
              .replace('{{del}}', room > 0 ? '<span class="delete-btn">✘</span>' : '')
  tabsetElem.insertAdjacentHTML('beforeend', chat);  
}






