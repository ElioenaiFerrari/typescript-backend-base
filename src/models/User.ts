import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { BCRYPT_SALTS } = process.env;

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
    set(password: string) {
      const hashSalts = bcrypt.genSaltSync(Number(BCRYPT_SALTS));
      const hashPassword = bcrypt.hashSync(password, hashSalts);

      password = hashPassword;

      return password;
    },
  },
});

export default mongoose.model('User', schema);
