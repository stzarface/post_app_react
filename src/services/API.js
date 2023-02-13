// Ovo su podaci, tagovi sa githaba
class API {

    static getAllTags = async () => {
        return await fetch("https://raw.githubusercontent.com/zile028/fake-db/main/tags")
        .then((res) => res.json())
    }

    static getAllPosts = () => { 
        return fetch('https://raw.githubusercontent.com/zile028/fake-db/main/posts')
        .then((res) =>  res.json())
     }

}


export default API;