const tokenName = "accessToken";

const token = {
  get token() {
    if (typeof window !== "undefined") {
      return localStorage.getItem(tokenName);
    }
    return "";
  },
  set token(newToken) {
    if (typeof window !== "undefined") {
      localStorage.setItem(tokenName, newToken);
    }
  },
};

export default token;
