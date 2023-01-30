// const express = require("express");
// const oracledb = require("oracledb");

// const app = express();

// async function run() {
//   let connection;

//   try {
//     // Connect to the database
//     connection = await oracledb.getConnection({
//       user: "system",
//       password: "oracle",
//       connectString: "localhost:1521/XE",
//     });

//     app.get("/", async (req, res) => {
//       // Execute a simple SQL statement
//       const result = await connection.execute("SELECT * FROM employees");

//       res.send(result.rows);
//     });

//     app.listen(3000, () => {
//       console.log("Listening on port 3000!");
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// run();

const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("XE", "system", "oracle", {
  host: "oracle",
  dialect: "oracle",
  port: 1521,
  dialectOptions: {
    connectString: "oracle:1521/XE",
  },
});

const person = sequelize.define("person", {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AGE: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  HEIGHT: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

const app = express();

app.get("/", async (req, res) => {
  // get date from oracle

  const people = await sequelize.query("SELECT CURRENT_DATE FROM DUAL");
  res.send(people);
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
