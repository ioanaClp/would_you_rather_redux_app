


export const removeLoginToLocalStorage = () => {
    localStorage.removeItem("login")
}

export const saveLoginToLocalStorage = (userId) => {
    localStorage.setItem("login", userId)
}

export const getLoginFromLocalStorage = () => {
    return localStorage.getItem("login")
}