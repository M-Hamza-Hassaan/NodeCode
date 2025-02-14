const express = require("express");
// const fs = require("fs");
const mongoose = require("mongoose");
// const users = require("./Restful 12-18/MOCK_DATA.json");
// const { type } = require("os");
const app = express();
const PORT = 8000;


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected Successfully"))
.catch((err) => console.log("MongoDB Connection Error:", err));

// Define Schema & Model
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String },
});
const User = mongoose.model("User", userSchema);

// Middleware to parse JSON body
app.use(express.json());


// Get all users
app.get("/api/users", async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json({status: "error", message:"Error Fetching Users"})
    }
});


// Add a new user
app.post("/api/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ status: "success", message: "User added successfully" });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error adding user" });
    }
});


// Get user by ID
app.get("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ status: "error", message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error fetching user" });
    }
});


// Update user by ID
app.patch("/api/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ status: "error", message: "User not found" });
        res.json({ status: "success", message: "User updated successfully" });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error updating user" });
    }
});


// Delete user by ID
app.delete("/api/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ status: "error", message: "User not found" });
        res.json({ status: "success", message: "User removed successfully" });
    } catch (err) {
        res.status(500).json({ status: "error", message: "Error deleting user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
