const supabase = require('../config/db');

const UserService = {
    async createUser({ nome, email, data_nascimento }) {
      const { data, error } = await supabase
        .from('usuario')
        .insert([{ nome, email, data_nascimento }])
        .select();
      
      if (error) throw error;
      return data[0];
    },
  
    async getAllUsers() {
      const { data, error } = await supabase
        .from('usuario')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  
    async getUserById(id) {
      const { data, error } = await supabase
        .from('usuario')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
  
    async updateUser(id, { nome, email, data_nascimento }) {
      const { data, error } = await supabase
        .from('usuario')
        .update({ nome, email, data_nascimento })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return data[0];
    },
  
    async deleteUser(id) {
      const { data, error } = await supabase
        .from('usuario')
        .delete()
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return data[0];
    },
  };
  
  module.exports = UserService;