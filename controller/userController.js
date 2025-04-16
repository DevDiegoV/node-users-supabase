const UserService = require('../services/userService');

const UserController = {
  async create(req, res) {
    try {
      const { nome, email, data_nascimento } = req.body;
      const newUser = await UserService.createUser({ nome, email, data_nascimento });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async findOne(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const updatedUser = await UserService.updateUser(
        req.params.id,
        req.body
      );
      if (!updatedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deletedUser = await UserService.deleteUser(req.params.id);
      if (!deletedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
      return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;