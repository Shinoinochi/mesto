export default class UserInfo {
    constructor({userNameSelector, userAboutSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userAbout = document.querySelector(userAboutSelector);;
    }
    getUserInfo() {
        return {
        name: this._userName.textContent,
        about: this._userAbout.textContent
        }
    }
    setUserInfo({ userName, userAbout }) {
        if(userName && userAbout) {
            this._userName.textContent = userName;
            this._userAbout.textContent = userAbout
        }
    }
} 