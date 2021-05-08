import axios from 'axios';

export default { 
  getLoggedIn: function() {
    return axios.get('/api/logged_in');
  },
  getProfile: function(id) {
    return axios.get('/api/profile/' + id);
  },
  login: function (data) {
    return axios.post('/api/login', data);
  },
  signup: function(data) {
    if(data.password == data.password2) {
      axios.get(`/api/users/${data.username}`)
      .then(res => {
        if (res.length == 0) {
          return axios.post('/api/users', { username: data.username, password: data.password });
        }
      }).catch(err => {
        return axios.post('/api/users', { username: data.username, password: data.password });
      });
    }
  },
  logout: function () {
    return axios.post('/api/logout');
  }
}