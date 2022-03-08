
export class User {
    username = '';
    email = '';
    password = '';
    avatar = '';
    is_admin = false;
    registration_date = ''

    constructor(username, email, password, avatar, is_admin,registration_date){
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.is_admin = is_admin;
        this.registration_date = registration_date;
    }


}