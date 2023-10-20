const UserModel = require("./src//models/userModel"); // Asegúrate de que la ruta sea correcta

// Resto del código sin cambios...

// Función asincrónica para crear un nuevo usuario
const createUser = async (user) => {
  try {
    // Crear una instancia del modelo UserModel con los datos del usuario
    const newUser = new UserModel(user);

    // Guardar el nuevo usuario en la base de datos
    const result = await newUser.save();

    return result;
  } catch (error) {
    throw error; // Lanza el error en caso de que ocurra
  }
};

// Función asincrónica para buscar todos los usuarios
const findUsers = async () => {
  try {
    const users = await UserModel.find(); // Utiliza el método find del modelo

    return users;
  } catch (error) {
    throw error;
  }
};

// Función asincrónica para buscar un usuario por ID
const findUserById = async (id) => {
  try {
    const user = await UserModel.findById(id); // Utiliza el método findById del modelo

    return user;
  } catch (error) {
    throw error;
  }
};

// Función asincrónica para eliminar un usuario por ID
const deleteUserById = async (id) => {
  const result = await UserModel.deleteOne(id);
  return result;
};

// Función asincrónica para actualizar un usuario por ID y datos nuevos
const updateUser = async (id, data) => {
  const result = await UserModel.updateMany({ _id: id }, { ...data });
  return result;
};

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;
