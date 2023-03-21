const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const dbURI = 'mongodb+srv://wmdd4936_demo:IPl9vDT1QKdJ6M9W@cluster0.ne4efwn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
