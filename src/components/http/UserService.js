import http from "./http-common";

const getAll = () => {
    return http.get("/users");
};

const get = id => {
    return http.get(`/tutorials/${id}`);
};

const login = data => {
    return http.post("/auth/login", data);
};

const update = (id, data) => {
    return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
    return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return http.delete(`/tutorials`);
};

const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
};

export default {
    getAll,
    get,
    login,
    update,
    remove,
    removeAll,
    findByTitle
};
