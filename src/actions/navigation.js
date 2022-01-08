export const AFTER_LOGIN_REDIRECT = 'AFTER_LOGIN_REDIRECT'

export function redirectAfterLogin(toPath) {
    return {
        type: AFTER_LOGIN_REDIRECT,
        toPath,
    }
}