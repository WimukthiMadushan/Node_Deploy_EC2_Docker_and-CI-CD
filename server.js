import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connacting database', err);
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
}, { collection: 'user' })

const User = mongoose.model('User', userSchema);


app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find();  
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err });
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
