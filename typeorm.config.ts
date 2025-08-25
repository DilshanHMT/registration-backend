import { ConnectionOptions } from 'typeorm';
import { DatabaseConfig } from './src/config/database';

const config: ConnectionOptions = {
  type: 'mysql',
  host: DatabaseConfig.host,
  port: DatabaseConfig.port,
  username: DatabaseConfig.user,
  password: DatabaseConfig.password,
  database: DatabaseConfig.database,
  entities: [__dirname + '/src/entities/*{.ts,.js}'], // Path to your entity files
  synchronize: true, // Set to false in production
};

export default config;


