const development = {
  port: 8000,
  name: 'development',
  api_v: process.env.AUTH_API_V,
  base_url: process.env.AUTH_BASE_URL,
  // front_base_url: process.env.FRONT_BASE_URL || 'http://localhost:3000',
  db_name: 'ecom_search_dev',
  db_user: process.env.ECOM_USER,
  db_pass: process.env.ECOM_PASS,
};

const production = {
  port: 80,
  name: process.env.CODEIAL_ENVIRONMENT,
  api_v: process.env.AUTH_API_V,
  base_url: process.env.AUTH_BASE_URL,
  // front_base_url: process.env.FRONT_BASE_URL,
  db_name: process.env.ECOM_DB,
  db_user: process.env.ECOM_USER,
  db_pass: process.env.ECOM_PASS,
};

module.exports =
  eval(process.env.ECOM_ENV) == undefined
    ? development
    : eval(process.env.ECOM_ENV);
