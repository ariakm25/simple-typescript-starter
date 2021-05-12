import dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  env: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development = {
  env: NODE_ENV,
};

const production = {
  env: NODE_ENV,
};

const config: {
  [name: string]: IConfig;
} = {
  development,
  production,
};

export default config[NODE_ENV];
