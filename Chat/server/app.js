const express = require('express')
const http  = require('http')
const Server  = require("socket.io").Server
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const server  = http.createServer(app)
const io = new Server(server , {
    cors:{
        origin:"*"
    }
})


// Connect to MongoDB
mongoose
  .connect('mongodb+srv://admin:admin@jewellery.svrwtnq.mongodb.net/ecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


  // Define a schema for chat messages
const chatSchema = new mongoose.Schema({
    message: String,
  });
  
  // Define a model for chat messages
  const ChatMessage = mongoose.model('ChatMessage', chatSchema);
  
  // Middleware for parsing JSON data
  app.use(bodyParser.json());
  
  // Save chat message to MongoDB
  app.post('/chat', (req, res) => {
    const { message } = req.body;
  
    const newChatMessage = new ChatMessage({ message });
    newChatMessage
      .save()
      .then(() => {
        console.log('Chat message saved to MongoDB');
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error('Error saving chat message to MongoDB:', error);
        res.sendStatus(500);
      });
  });

io.on("connection" , (socket) => {
    console.log('We are connected')
 
    socket.on("chat" , chat => {
       io.emit('chat' , chat)
    } )
 
    socket.on('disconnect' , ()=> {
     console.log('disconnected')
    })
 })

server.listen(5001 , () => console.log('Listening to port 5001'))