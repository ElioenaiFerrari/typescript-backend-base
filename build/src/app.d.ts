import 'dotenv/config';
import 'module-alias/register';
import '@config/database';
declare const app: import("express-serve-static-core").Express;
export default app;
