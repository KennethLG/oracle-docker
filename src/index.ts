import App from "./main";
import UsersRepository from "./repositories/users";

const app = new App();
const db = new UsersRepository();

db.initDB();
app.init();
