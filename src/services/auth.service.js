import axios from "axios";

const API_URL = "https://localhost:44387/api/Users/";

class AuthService {
  login(Username, Password,) {
    return axios
      .post(API_URL + "authenticate", {
        Username,
        Password
      })
      .then(response => {
        if (response.data.JwtToken!=null) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("Username");
  }

  register(Username,Password,Email,Mobile_no) {
    return axios.post(API_URL + "Register", {
      Username,
      Password,
      Email,
      Mobile_no
    }); 
  }

  getCurrentUser() {
    console.log(localStorage.getItem('user'));

    return JSON.parse(localStorage.getItem('user'));

  }
}

export default new AuthService();
