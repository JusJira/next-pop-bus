/** @type {import('next').NextConfig} */

process.env.TZ = "UTC";
console.log(
  `Running with timezone ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
);

const nextConfig = {
    swcMinify: true,
}

module.exports = nextConfig
