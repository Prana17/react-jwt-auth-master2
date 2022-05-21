import axios from "axios";

const API_URL = "https://localhost:44325/api/User/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "Authenticate", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password) {
    return axios.post(API_URL + "Register", {
      username,
      password
    }); 
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
    console.log(localStorage.getItem('user'));

  }
}

export default new AuthService();
