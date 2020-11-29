import User from '@models/User';
import IAuthController from '@controllers/iauth';

const AuthController: IAuthController = {
  async recovery(req, res, next) {
    try {
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async signin(req, res, next) {
    try {
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async signout(req, res, next) {
    return res.status(200).send();

    try {
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async signup(req, res, next) {
    try {
      const user = await User.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};

export default AuthController;
