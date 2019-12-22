const WebSocket = new require('ws');

let clients = [];
let messages = [[]];

const wss = new WebSocket.Server({port: 8081});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const msg = JSON.parse(message);
    console.log('Received new message ' + message);
    const currentUser = clients.find(client => client.name == msg.name);
    if (msg.type === 'authentification') {
      if (!currentUser) {
        clients.push({ name: msg.name, ws: ws, state: msg.state, isActive: msg.isActive, rooms: []});
        ws.send(JSON.stringify({
          type: 'Success',                                                               
        }));         
      } else {    
        if (currentUser.state == 'online') {
          ws.send(JSON.stringify({
            type: 'Error',                                                               
          })); 
          return
        } else {
          clients = clients.map(client => client.name === msg.name
            ? { ...client, ws: ws, state: 'online', isActive: false }
            : client)
          ws.send(JSON.stringify({
            type: 'Success',                                                                        
          })); 
        }              
      }
    }
    
    if (msg.type === 'connectRoom') {
      clients = clients.map(client => client.name == msg.name
        ? { ...client, rooms: [...client.rooms, msg.room]}
        : client);
      const roomClients = clients.filter(client => client.rooms.includes(msg.room));
      ws.send(JSON.stringify({
        type: 'connectRoom',
        users: roomClients,
        messages: messages[msg.room],
        room: msg.room,                                             
      })); 
    } 
    
    if (msg.type == 'createRoom') {
      clients = clients.map(client => client.name == msg.name
        ? { ...client, rooms: [...client.rooms, msg.room]}
        : client)
      messages.push([]);
      ws.send(JSON.stringify({
        type: 'createRoom',
        users: clients,
        room: msg.room
      }));      
    }

    if (msg.type === 'deleteRoom') {
      clients.forEach(client => {
        if (client.name == msg.name) {
          client.rooms = client.rooms.filter(room => room != msg.room);
        }         
      });
      const roomClients = clients.filter(client => client.rooms.includes(msg.room));
      roomClients.forEach(client => {
        client.ws.send(JSON.stringify({
        type: 'deleteUser',
        users: clients,
        room: msg.room                  
      }));
    })

      ws.send(JSON.stringify({
        type: 'deleteRoom',
        users: clients,
        room: msg.room
      }));
   }

    if (msg.type == 'deleteMessage') {
      messages[msg.room] = messages[msg.room].filter(elem => elem.id != msg.messageId);
      const roomClients = clients.filter(client => client.rooms.includes(msg.room));
      roomClients.forEach(client => {
        client.ws.send(JSON.stringify({
          type: 'deleteMessage',
          messages: messages[msg.room],
          room: msg.room                  
        }));
      })
    }

    if (msg.type == 'editMessage') {
      messages[msg.room] = messages[msg.room].map(message => message.id == msg.id 
        ? {...message, message: msg.message}
        : message);
      const roomClients = clients.filter(client => client.rooms.includes(msg.room));
      roomClients.forEach(client => {
        client.ws.send(JSON.stringify({
          type: 'editMessage',
          messages: messages[msg.room],
          room: msg.room                  
        }));
      })
    }

    if (msg.type == 'addUserToRoom') {
      clients = clients.map(client => client.name == msg.name
        ? { ...client, isActive: true, rooms: [...client.rooms, msg.room]}
        : client)
      const newCurrentUser = clients.find(client => client.name == msg.name);
      newCurrentUser.ws.send(JSON.stringify({
        type: 'createRoom',
        users: clients,
        room: msg.room
      }));
      
      const roomClients = clients.filter(client => client.rooms.includes(msg.room));
      newCurrentUser.ws.send(JSON.stringify({
        type: 'connectRoom',
        users: clients,
        messages: messages[msg.room],
        room: msg.room,                                             
      })); 

      roomClients.forEach(client => {
        client.ws.send(JSON.stringify({
          type: 'connectUser',
          users: clients,
          room: msg.room                  
        }));
      })     
    }

    if (msg.type == 'message') {
      const roomClients = clients.filter(client => client.rooms.includes(msg.room));
      if (!currentUser.isActive) {
        clients = clients.map(client => client.name === msg.name && !client.isActive
          ? { ...client, isActive: true }
          : client);
        roomClients.forEach(client => {
          client.ws.send(JSON.stringify({
            type: 'connectUser',
            users: clients,
            room: msg.room                  
          }));
        }) 
      }           
      const newMsg = {name: msg.name, message: msg.message, id: Date.now()}    
      messages[msg.room].push(newMsg);
            
      roomClients.forEach(({ ws }) => {                
        ws.send(JSON.stringify({
          type: 'message',
          message: newMsg, 
          room: msg.room
        }));
      });
      // clients = clients.map(client => {
      //   if (client.rooms.includes(msg.room) && client.activeRoom !== msg.room) {
      //     const unreadRooms = client.unreadRooms.map(room => room.id === msg.room ? { id: room.id, unread: room.unread++ } : room );
      //     client.ws.send(JSON.stringify({
      //       type: 'unreadMessages',
      //       unreadRooms: client.unreadRooms,
      //       user: client.name,
      //     }));
      //     return {...client, unreadRooms };
      //   }
      //   return client;
      // });      
    }
  });  

  ws.on('close', () => {
    let userToDisconnect;
    clients.forEach(client => {
      if (client.ws.readyState == 3) {
        client.state = 'offline';
        userToDisconnect = client;
      }
    });        
    clients.forEach(({ ws }) => {
      ws.send(JSON.stringify({
        type: 'disconnect',
        name: userToDisconnect.name
      }));
    });
   });
});



