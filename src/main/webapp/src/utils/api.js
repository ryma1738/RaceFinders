export const getUser = (username) => {
    return fetch(`/api/user/${username}`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    });
}

export const login = (email, password) => {
    return fetch('/api/v1/user/login', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
};

export const signup = (username, email, password) => {
    return fetch(`/api/v1/user/signup`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password
        })
    });
}