export default class UserInfo {
    constructor({userNameSelector, userAboutSelector}) {
        this._userName = userNameSelector;
        this._userAbout = userAboutSelector;
    }
    getUserInfo() {
        this._userData = {};
        this._userData.name = this._userName.textContent;
        this._userData.about = this._userAbout.textContent;
        return this._userData;
    }
    setUserInfo({ userName, userAbout }) {
        this._userName.textContent = userName;
        this._userAbout.textContent = userAbout
    }
} 