const ClientError = require("../../exceptions/ClientError");

class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postUserHandler(request, h) {
    this._validator.validateUserPayload(request.payload);
    const { username, password, fullname } = request.payload;

    const userId = await this._service.addUser({
      username,
      password,
      fullname,
    });

    const response = h.response({
      status: "success",
      message: "User berhasil ditambahkan",
      data: {
        userId,
      },
    });
    response.code(201);

    return response;
  }

  async getUserByIdHandler(request, h) {
    const { id } = request.params;
    const user = await this._service.getUserById(id);

    const response = h.response({
      status: "success",
      data: {
        user,
      },
    });
    response.code(200);

    return response;
  }

  async getUsersByUsernameHandler(request, h) {
    let response;

    try {
      const { username = "" } = request.query;
      const users = await this._service.getUserByUsername(username);

      response = h.response({
        status: "success",
        data: {
          users,
        },
      });
      response.code(200);

      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        response = h.response({
          status: "fail",
          message: error.message,
        });
        response.code(error.statusCode);

        return response;
      }
    }
  }
}

module.exports = UsersHandler;
