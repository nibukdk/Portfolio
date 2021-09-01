import axios from 'axios';

const baseUrl = "/api/blogs"


const getAllBlog = () => {
    const data = axios.get(baseUrl)
        .then(response => response.data)

    return data
}

const update = (id, newBlog) => {
    const updatedBlog = axios.put(`${baseUrl}/${id}`, newBlog)
        .then(res => res.data)

    return updatedBlog
}


export default { getAllBlog, update };