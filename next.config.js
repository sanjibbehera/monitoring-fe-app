/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  env: {
    REACT_APP_LOCAL_BASE_URL: process.env.REACT_APP_LOCAL_BASE_URL,
  },
};

module.exports = nextConfig;
