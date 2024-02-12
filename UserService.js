import axios from "axios";


//Artist Api
export async function register(creditials){
    const response = await axios.post(`http://localhost:8080/register-artist`,creditials);
    return response.data;
}

export async function artistlogin(creditials){
    console.log("Request Payload:", creditials);

    try {
        const response = await axios.post(`http://localhost:8080/login-artist`, creditials);
        console.log("Response Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function getArtists(){
    try {
       const response = await axios.get("http://localhost:8080/all-artists");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteArtist(id){
    try {
        const response = await axios.delete(`http://localhost:8080/delete-artist/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



//User Api
export async function login(creditials){
    const response =await axios.post(`http://localhost:8080/login-user`,creditials);
    return response.data;
}

export async function signup(creditials){
    const response = await axios.post(`http://localhost:8080/register-user`,creditials);
    return response.data;
}

export async function getUsers(){
    try {
       const response = await axios.get("http://localhost:8080/all-users");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(userId) {
    try {
        const response = await axios.delete(`http://localhost:8080/delete-user/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



export async function fetchData(){
    const response = await axios.get(`http://127.0.0.1:5800/user/details`);
    return response.data;
}

//watch morning lecture from 19 mi



export async function SaveUsers(userData){
    try {
       const response = await axios.post("http://127.0.0.1:5800/user",userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export async function fetchUser(email){
    try {
        const response = await axios.get(`http://127.0.0.1:5800/user/${email}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(updatedData,email){
    try {
        const response=await axios.put(`http://127.0.0.1:5800/user/${email}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}