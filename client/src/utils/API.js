import axios from 'axios';

class API {
  async getMessages(from, to) {
    return await axios.get('/api/messages/from/' + from + "/to/" + to);
  }

  async createMessage(data) {
    return await axios.post('/api/messages', data);
  }
  
  async getFriends(id) {
    return await axios.get('/api/friends/' + id);
  }

  async createFriendship(user_id, friend_id) {
    return await axios.post('/api/friends', { user_id, friend_id });
  }

  async removeFriendship(user_id, friend_id) {
    return await axios.delete(`/api/friends/${user_id}/${friend_id}`);
  }

  async getLoggedIn() {
    return await axios.get('/api/logged_in');
  }

  async getUser(id) {
    return await axios.get('/api/users/' + id);
  }

  async getUsers() {
    return await axios.get('/api/users');
  }

  async getProfile(id) {
    return await axios.get('/api/profile/' + id);
  }

  async login(data) {
    return await axios.post('/api/login', data);
  }

  async signup(data) {
    if(data.password == data.password2) {
      return await axios.post('/api/users', { username: data.username, password: data.password });
    }
  }

  async logout() {
    return await axios.post('/api/logout');
  }
}

export default API;