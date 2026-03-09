const WebSocket = require('ws');
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const clients = new Map();

const broadcast = (data, excludeClient = null) => {
  const message = JSON.stringify(data);
  clients.forEach((client, ws) => {
    if (ws !== excludeClient && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  });
};

const broadcastUsersList = () => {
  const users = Array.from(clients.values());
  const data = { type: "users", users };
  clients.forEach((username, ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === 'join') {
        clients.set(ws, data.username);
        console.log(`${data.username} joined the chat`);
        
        broadcast({ 
          type: "system", 
          message: `${data.username} приєднався до чату` 
        }, ws);
        
        broadcastUsersList();
      } else if (data.type === 'message') {
        console.log(`${data.sender}: ${data.message}`);
        
        broadcast({
          type: "message",
          sender: data.sender,
          message: data.message,
          timestamp: new Date().toISOString()
        });
      }
    } catch (err) {
      console.error('Error handling message:', err);
    }
  });

  ws.on('close', () => {
    const username = clients.get(ws);
    if (username) {
      console.log(`${username} disconnected`);
      clients.delete(ws);
      
      broadcast({ 
        type: "system", 
        message: `${username} покинув чат` 
      });
      
      broadcastUsersList();
    }
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
  console.log(`Connect clients to: ws://localhost:${PORT}`);
});
