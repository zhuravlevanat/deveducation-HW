mocha.setup('bdd');

const assert = chai.assert;

describe('onAuthorizationFormSubmit', function() {
  let sandbox;
  
  before(() => {
    sandbox = sinon.createSandbox();
  });
  
  afterEach(() => {
    sandbox.restore();
  });

  it('should call isValid function', function() {
    const stub = sandbox.stub(window, 'isFieldValid');
                  
	  document.querySelector('.enter-btn').click();
  
    sandbox.assert.calledOnce(stub);        
  });   
});  

describe('onChatFormSubmit', function() {
  let sandbox;
  
  before(() => {
    sandbox = sinon.createSandbox();
  });
  
  afterEach(() => {
    sandbox.restore();
  });

  it('should call sendMessage function', function() {
    const stub = sandbox.stub(window, 'sendMessage');
                  
	  document.querySelector('.send-btn').click();
  
    sandbox.assert.calledOnce(stub);        
  });   
});   

describe('showChat', function() {
  let sandbox;
  
  before(() => {
    sandbox = sinon.createSandbox();
  });
  
  afterEach(() => {
    sandbox.restore();
    authorizationForm.parentElement.classList.remove('hidden');
    chatContainer.classList.add('hidden');
  });

  it('should call method focus on input field', function() {
    const stub = sandbox.stub(chatFormInput, 'focus');
                  
	  showChat();
  
    sandbox.assert.calledOnce(stub);        
  });   
});  

describe('sendMessage', function() {
  let sandbox;
  
  before(() => {
    sandbox = sinon.createSandbox();
  });
  
  afterEach(() => {
    sandbox.restore();
    
  });

  it('should call sendMessage function', function() {
    const stub = sandbox.stub(socket, 'send');
                  
	  sendMessage();
  
    sandbox.assert.calledOnce(stub);        
  });   
});   

describe('isFieldValid', function() {
  it('should return false if value doesn`t match reg exp', function() {
    const elem = document.createElement('input');
    elem.value = '$5';
        
    const actual = isFieldValid(elem);

    const expected = false;
    assert.deepEqual(actual, expected);     
  });
  
  it('should return true if value matches reg exp', function() {
    const elem = document.createElement('input');
    elem.value = 'a';
        
    const actual = isFieldValid(elem);

    const expected = true;
    assert.deepEqual(actual, expected);     
  }); 
  
  it('should return false if value doesn`t match reg exp', function() {
    const elem = document.createElement('input');
    elem.value = '%';
        
    const actual = isFieldValid(elem);

    const expected = false;
    assert.deepEqual(actual, expected);     
  }); 

  it('should return false if value is empty', function() {
    const elem = document.createElement('input');
    elem.value = '';
        
    const actual = isFieldValid(elem);

    const expected = false;
    assert.deepEqual(actual, expected);     
  });  
});

describe('addUserData', function() {
  it('should add element to array', function() {
    users = [[{id: "4", name: "Jonh"}], [], []];
    const user = {id: "5", name: "Harry"};
    const room = 0;

    addUser(user, room);
    const actual = users[room].length;

    const expected = 2;
    assert.deepEqual(actual, expected);
  })
});

describe('showMessage', function() {
  afterEach(() => {
    messageContainer.innerHTML = '';
  });

  it('should add div with message to message container', function() {   
    messageContainer.innerHTML = ''; 
    const message = {name: "Harry", message: "Hello, world"};

    showMessage(message);
    const actual = messageContainer.innerHTML;

    const elem = document.createElement('div');
    elem.innerHTML = `${message.name}: ${message.message}`;
    const expected = elem.outerHTML;
    assert.deepEqual(actual, expected);    
  }) 
});   

describe('updateUsersPanel', function() {
  afterEach(() => {
    usersList.innerHTML = '';
  });

  it('should add user name to users panel', function() {   
    users = [[{id: "4", name: "Jonh", isActive: true}], [], []];
    const room = 0;
    
    updateUsersPanel(room);
    const actual = usersList.innerHTML;

    const user = document.createElement('li');
    user.className ='users-list__item';
    user.innerHTML = users[room][room].name;
    const expected = user.outerHTML;
    assert.deepEqual(actual, expected);    
  }) 
});   

describe('updateMessagesPanel', function() {
  afterEach(() => {
    messageContainer.innerHTML = '';
    history = [[], [], []];
  });

  it('should add message to message container', function() {   
    history = [[{name: 'John', text: 'Hi'}], [], []];
    const room = 0;
    
    updateMessagesPanel(room);
    const actual = messageContainer.innerHTML;

    const msg = document.createElement('div');
    msg.innerHTML = `${history[room][room].name}: ${history[room][room].text}`;
    const expected = msg.outerHTML;
    assert.deepEqual(actual, expected);    
  }) 
}); 

mocha.run();