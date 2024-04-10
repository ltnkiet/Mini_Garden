import request from "@/utils/request";

class AuthService {

  static auth(accessToken) {
    return request.get("user", accessToken);
  }
  static register(payload) {
    return request.post("auth/register", payload);
  }
  static login(payload) {
    return request.post("auth/login", payload);
  }
  static refreshToken() {
    return request.post("auth/refresh-token");
  }
  static logout(payload) {
    return request.delete("auth/logout", payload);
  }
}

export default AuthService;
