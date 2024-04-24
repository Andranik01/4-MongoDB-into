const mongoose = require('mongoose');

//Визначте схему даних для сутності User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

//Створення моделі на основі схеми даних
const User = mongoose.model('User', userSchema);

//Експортуйте модель, щоб вона була доступна з інших файлів
module.exports = { User };
