import { registerSchema } from "../model/auth.schema.js";
import UserModel from "../model/user.model.js";
import { apiResponse, apiResponseValidation } from "../utils/response.js";
import { PasswordHelper } from "../utils/password.helper.js";

class AuthController {
    static async register(req, res) {
        const result = registerSchema.safeParse(req.body);

        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error,
            });
        }

        const { name, email, password } = result.data;

        const newUser = await UserModel.create({
            name,
            email,
            password: await PasswordHelper.hash(password),
        });

        return apiResponse({
            res,
            status: 201,
            message: "Register berhasil",
            data: null,
        });
    }

    static async login(req, res) {}
}

export default AuthController;