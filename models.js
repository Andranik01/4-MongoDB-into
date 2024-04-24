const mongoose = require('mongoose');

// Определяем схему данных для сущности "Пользователь"
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

// Создаем модель на основе схемы данных
const User = mongoose.model('User', userSchema);

// Экспортируем модель, чтобы она была доступна из других файлов
module.exports = { User };
