export default class Api {
    constructor({baseUrl, headers}) {
      this._url = baseUrl;
      this._header = headers;
    }
    _checkData(res) {
      return res.ok? res.json(): Promise.reject(`Ошибка: ${res.status}`);
    }
    async getLikes(method, cardId) {
      return fetch(`${this._url}cards/${cardId}/likes`, {
        method: method,
        headers: this._header
      })
      .then((res) => {
         return this._checkData(res);
      });
    }
    
    async getInitialCards() {
        return fetch(this._url + 'cards', {
            headers: this._header
          })
          .then(res => {
            return this._checkData(res);
          });
    }

    async addNewCard(data) {
      return fetch(this._url + 'cards ', {
        method: 'POST',
        headers: this._header,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
      .then((res) => {
        return this._checkData(res);
      });
    }

    async getUserData() {
      return fetch(this._url +'/users/me', {
        method: 'GET',
        headers: this._header
      })
      .then(res => {
        return this._checkData(res);
      });
    }

    async editUser(name, about) {
      fetch(this._url +'/users/me', {
        method: 'PATCH',
        headers: this._header,
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then((res) => {
        return this._checkData(res);
      });  
    }

    async setUserLogo(link) {
      fetch(this._url +'/users/me/avatar', {
        method: 'PATCH',
        headers: this._header,
        body: JSON.stringify({
          avatar: link
        })
      })
      .then((res) => {
        return this._checkData(res);
      });  
    }

    async deleteCard(id) {
       fetch(this._url + 'cards/' + id, {
        method: 'DELETE',
        headers: this._header
      })
      .then((res) => {
        return this._checkData(res);
      });
    }
}
