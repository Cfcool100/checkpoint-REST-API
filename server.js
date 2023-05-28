const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config({ path: './config/.env' });

const app = express();
app.use(express.json());
const User = require('./Models/User');

// Se connecter à la base de données MongoDB

(async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Connecté à la base de données');

      // let user = new User({
      //   firstName: 'John',
      //   lastName: 'Doe',
      //   email: 'john@example.com',
      //   password: 'password'
      // });

      // user.save()
      //       .then(user => {
      //           console.log('Person created:', user);
      //       })
      //       .catch(err => {
      //           console.log(err.message);
      //       });
  
  // Récupérer tous les utilisateurs
  // app.get('/users', async (req, res) => {
  //   try {
  //     const users = await User.find({ firstName: "John" });
  //     res.json(users);
  //     console.log(users);
  //   } catch (err) {
  //     console.error('Erreur lors de la récupération des utilisateurs', err);
  //     res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  //   }
  // });
  
  
  // Ajouter un nouvel utilisateur
  // app.post('/users', async (req, res) => {
  //   try {
  //     const { firstName, lastName, email, password } = req.body;
  //     const newUser = new User({ firstName: "Will", lastName: 'Smith', email: 'willSmith@example.com', password: 'qwerty123' });
  //     const savedUser = await newUser.save();
  //     res.json(savedUser);
  //   } catch (err) {
  //     console.error('Erreur lors de l\'ajout de l\'utilisateur', err);
  //     res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
  //   }
  // });
  
  let Id = "6473bf423f41c5ddc6de1dba"
  // Modifier un utilisateur par ID
  // app.put('/users/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { firstName, lastName, email, password } = req.body;
  //     const updatedUser = await User.findByIdAndUpdate({_id: Id}, { firstName: "Chris", lastName: 'Cross', email: "Cross123@example.com", password:'Azerty098' }, { new: true });
  //     res.json(updatedUser);
  //   } catch (err) {
  //     console.error('Erreur lors de la modification de l\'utilisateur', err);
  //     res.status(500).json({ error: 'Erreur lors de la modification de l\'utilisateur' });
  //   }
  // });
  
  
  // Supprimer un utilisateur par ID
  // app.delete('/users/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     await User.findByIdAndDelete({_id: Id});
  //     res.json({ message: 'User successfully deleted' });
  //   } catch (err) {
  //     console.error('Error deleting user', err);
  //     res.status(500).json({ error: 'Error deleting user' });
  //   }
  // });
  
  
  app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
  });
  } catch (error) {
    console.error(error.message);
  }

})();
