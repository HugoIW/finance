class AuthService {
    constructor() { }

    async login({ user, pass }) {
        //
    }

    async getToken({ email }) {
        //
    }

    async refreshToken({ token }) {
        //
    }

    async forgotPass({ email }) {
        //
    }

    async addNewPassword({ email, key }) {
        //
    }
}

module.exports = AuthService;