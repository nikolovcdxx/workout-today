import * as request from './requester';

const baseUrl = 'http://localhost:3005/users';

export const login = (username, password) => 
    request.post(`${baseUrl}/login`, { username, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (username, password) =>
    request.post(`${baseUrl}/register`, {username, password});
