const { EnvironmentPlugin } = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...
    webpack(config) {
        config.plugins.push(new EnvironmentPlugin(process.env));

        return config;
    },
};