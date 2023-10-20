const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    const connection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexión a la base de datos exitosa");

    return connection;
  } catch (error) {
    console.log("Error al conectar a la base de datos:", error);
    throw error;
  }
};

module.exports = connectDB;

