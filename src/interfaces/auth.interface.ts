interface ISignin {
    // contactNumber: string,
    email: string,
    password: string
}

interface IAccessToken {
    refreshToken: string,
}

export { ISignin, IAccessToken }