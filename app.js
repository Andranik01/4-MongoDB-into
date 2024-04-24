// app.js

const mongoose = require('mongoose');
const { User } = require('./models'); // Імпорт моделі користувача з файлу models.js

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Перевірка з'єднання
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async function() {
  console.log('Connected to MongoDB');

  try {
    // Створення нового користувача
    const newUser = new User({
      username: 'JohnDoe',
      email: 'john@example.com',
      age: 30
    });

    // Збереження користувача в базі даних
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);

    // Знайдемо користувача на ім'я
    const foundUser = await User.findOne({ username: 'JohnDoe' });
    console.log('Found user:', foundUser);

    // Оновимо вік користувача
    foundUser.age += 1;
    const updatedUser = await foundUser.save();
    console.log('Updated user:', updatedUser);

    // Видалити користувача
const deletedUser = await User.findOneAndDelete({ _id: updatedUser._id });
console.log('User deleted:', deletedUser);

    // Закриття з'єднання з базою даних
    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
});
