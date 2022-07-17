import axios from "axios";

class ContactService {
    constructor() {
        this.api = axios.create({
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
    }

    async getAll() {
        return (await this.api.get("http://localhost:3000/api/contacts")).data;
    }

    async create(data) {
        return (await this.api.post("http://localhost:3000/api/contacts", data)).data;
    }

    async deleteAll() {
        return (await this.api.delete("http://localhost:3000/api/contacts")).data;
    }

    async get(id) {
        return (await this.api.get(`http://localhost:3000/api/contacts/${id}`)).data;
    }

    async update(id, data) {
        return (await this.api.put(`http://localhost:3000/api/contacts/${id}`, data)).data;
    }

    async delete(id) {
        return (await this.api.delete(`http://localhost:3000/api/contacts/${id}`)).data;
    }
}

export default new ContactService();