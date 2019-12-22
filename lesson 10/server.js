var WebSocket = new require('ws');

var clients = [[], [], []];

var wss = new WebSocket.Server({port: 8081});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const msg = JSON.parse(message);
        console.log('Received new message ' + message);
        if (msg.type === 'connect') {
            const id = Math.random();
            clients[msg.room].push({ id, name: msg.name, ws: ws });

            clients[msg.room].forEach(client => {
                client.ws.send(JSON.stringify({
                    type: 'connect',
                    name: msg.name,
                    id,
                    room: msg.room,
                }));
                if (client.id === id) {
                    client.ws.send(JSON.stringify({
                        type: 'users',
                        users: clients[msg.room],
                        room: msg.room,
                    }));  
                }
            });
            return;
        }

        if (msg.type === 'disconnect') {
            let idOfClosedClient;
            clients[msg.room] = clients[msg.room].filter(({ id, name }) => {
                const isClosed = name === msg.name;
                idOfClosedClient = id;
                return !isClosed;
            });

            clients[msg.room].forEach(({ ws }) => {
                ws.send(JSON.stringify({
                    type: 'disconnect',
                    id: idOfClosedClient,
                }));
            });
        }

        clients[msg.room].forEach(({ ws }) => {
            ws.send(JSON.stringify(msg));
        });        
    });

    ws.on('close', (connection) => {
        let idOfClosedClient;
        let room;
        clients.forEach((roomClients, index) => {
            if (roomClients.find(client => client.ws.readyState === 3)) {
                room = index;
            }
        });
        clients[room] = clients[room].filter(({ id, ws }) => {
            const isClosed = ws.readyState === 3;
            idOfClosedClient = id;
            return !isClosed;
        });

        clients[room].forEach(({ ws }) => {
            ws.send(JSON.stringify({
                type: 'disconnect',
                id: idOfClosedClient,
            }));
        });
    });

});

