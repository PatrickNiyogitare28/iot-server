require('dotenv').config();
const env = process.env.NODE_ENV;
const DB_URL =
  (env === 'prod')
    ? process.env.PROD_DB_URL
    : (env == 'test')
    ? process.env.TEST_DB_URL
    : (env == 'dev')
    ? process.env.DEV_DB_URL
    : process.env.TEST_DB_URL;
console.log("DB: "+DB_URL)
export { DB_URL }