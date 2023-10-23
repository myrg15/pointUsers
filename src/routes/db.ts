import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1698093336836 } from "../migration/1698093336836-users";
 
 

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "",
 database: "test",
 migrations:[Users1698093336836],
 entities: [],
 synchronize: false,
 logging: false,
});

