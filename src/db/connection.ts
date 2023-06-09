// put these lines in a separate file
import config from "config";
import { createConnection } from "typeorm";
import winston from "winston";
import { Logger } from "../logger/logger";
import { LoadData } from "../pre-load-data/scripts/load-data";

const logger: winston.Logger = Logger.getLogger;

const ormConfig: any = Object.assign({}, config.get("db"));

createConnection(ormConfig).then(() => {
  logger.info("DB Connected", { timestamp: Date.now() });
  new LoadData();
});
