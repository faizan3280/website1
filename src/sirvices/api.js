import axios from "axios";

export const signup = async (firstName, lastName, email, mobile, password) => {
    const response = await axios.post(`http://localhost:5000/api/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mob: mobile,
        password: password
    });

    return response;
}

export const login = async (email, password) => {
    const response = await axios.post(`http://localhost:5000/api/login`, {
        email: email,
        password: password
    });

    return response;
}
