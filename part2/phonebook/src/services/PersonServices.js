import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
};
const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const deleting = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => {
        response.data = id;
        return response.data;
    });
}
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data);
};
const spreadElements = {create, getAll, deleting,update};
export default spreadElements