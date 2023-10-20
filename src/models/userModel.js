const mongoose = require("mongoose");

// Define un esquema para la colección 'users'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Crea el modelo 'users' basado en el esquema
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
