// app.js

const mongoose = require('mongoose');
const { User } = require('./models'); // Импортируем модель пользователя из файла models.js

// Подключаемся к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Проверяем соединение
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async function() {
  console.log('Connected to MongoDB');

  try {
    // Создаем нового пользователя
    const newUser = new User({
      username: 'JohnDoe',
      email: 'john@example.com',
      age: 30
    });

    // Сохраняем пользователя в базе данных
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);

    // Найдем пользователя по имени
    const foundUser = await User.findOne({ username: 'JohnDoe' });
    console.log('Found user:', foundUser);

    // Обновим возраст пользователя
    foundUser.age += 1;
    const updatedUser = await foundUser.save();
    console.log('Updated user:', updatedUser);

    // Удалим пользователя
const deletedUser = await User.findOneAndDelete({ _id: updatedUser._id });
console.log('User deleted:', deletedUser);

    // Закрываем соединение с базой данных
    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
});
