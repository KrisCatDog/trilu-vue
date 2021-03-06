class ApiService {
  constructor() {
    this.API_URL = process.env.VUE_APP_API_URL;
    this.API_PREFIX = process.env.VUE_APP_API_VERSION;
  }

  get(url) {
    return fetch(
      `${this.API_URL}${this.API_PREFIX}${url}?token=${localStorage.getItem(
        "token"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res);
  }

  post(url, data) {
    return fetch(
      `${this.API_URL}${this.API_PREFIX}${url}?token=${localStorage.getItem(
        "token"
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res);
  }

  put(url, data) {
    return fetch(
      `${this.API_URL}${this.API_PREFIX}${url}?token=${localStorage.getItem(
        "token"
      )}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res);
  }

  delete(url) {
    return fetch(
      `${this.API_URL}${this.API_PREFIX}${url}?token=${localStorage.getItem(
        "token"
      )}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res);
  }
}

export default new ApiService();
