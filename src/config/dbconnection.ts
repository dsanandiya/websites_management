const Sequelize = require("sequelize");
const config = require("../../config/config.json");
import * as dotenv from "dotenv";
dotenv.config({});
export class Database {
  private Dbcreds = config[process.env.ENV];
  public connect() {
    const conn = new Sequelize(
      this.Dbcreds.database,
      this.Dbcreds.username,
      this.Dbcreds.password,
      {
        host: this.Dbcreds.host,
        dialect: this.Dbcreds.dialect,
        operatorsAliases: 0,
        port: 5432,
        logging: false,
        define: {
          timestamps: false,
        },
      },
      { query: { raw: true, plain: true } }
    );
    conn.sync({ force: 0, alter: 1 });
    return conn;
  }
}
