export const db = {
    DB: process.env.DBNAME,
    USER: process.env.DBUSERNAME,
    PASSWORD: process.env.DBPASSWORD,
    HOST: process.env.CONTAINER,
    PORT: process.env.DBPORT,
    DIALECT: 'oracle',
    CONNECTSTRING: `${process.env.DBNAME}:${process.env.DBPORT}/${process.env.DBNAME}`,
  };