import getConnection from '../libs/postgres';

class UserService {
  async create(data) {
    return data;
  }

  async find() {
    this.client = await getConnection();
    const response = await this.client.query('SELECT * FROM task');
    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

export default UserService;
