import axios from "axios";
const baseUrl = '/api'

const getAll = () => {
    return axios.get(`${baseUrl}/persons`)
}

const create = newPerson => {
    return axios.post(`${baseUrl}/create-person`, newPerson)
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/persons/${id}`, newPerson)
}

const remove = id => {
    return axios.delete(`${baseUrl}/persons/${id}`)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    remove: remove
}
