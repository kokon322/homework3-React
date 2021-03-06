export class UserService{
    _url = 'https://jsonplaceholder.typicode.com';

    getUserById(id) {
        return fetch(`${this._url}/users?id=${id}`).then(value => value.json());
    };

    getAllUsers(){
        return fetch(`${this._url}/users`).then(value => value.json());
    }
}