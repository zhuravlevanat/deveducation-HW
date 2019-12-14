var WebSocket = new require('ws');

var clients = {};

var wss = new WebSocket.Server({port: 8081});

wss.on('connection', (ws) => {
    // clients.push(ws);
    const id = Math.random();
    clients[id] = ws;

    ws.on('message', (message) => {
        console.log('Received new message ' + message);

        for(let key in clients) {
            clients[key].send(JSON.stringify({
                ...message,
                key,
            }));
        }

        
    });

    ws.on('close', (connection) => {
        console.log(connection);
        let idOfClosedClient;
        for(let key in clients) {
            if(clients[key].readyState === 3) {
                idOfClosedClient = key;
                delete clients[key];
            }
        }

        for(let client of clients) {
            client.send(JSON.stringify({
                type: 'disconnect',
                name: idOfClosedClient,
                message: '',
            }));
        }
    });

});

