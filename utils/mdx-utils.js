import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data){

        return data;
    }
    
    return []
}

export const getPostBySlug = async (e) => {
    const {data} = await api.get(`/posts?id=eq.${e}`);

    if(data){
       return data;
    }

    return []
}

export const addPost = async (data) => {
    if(data){
        await api.post('/posts', data); 
    }
}

export const delPost = async (data) => {
    if(data){
        await api.delete(`/posts?id=eq.${data}`); 
    }

    document.getElementById("" + data).style.display = "none";
    alert("Post deletado com sucesso!")

    return []
}