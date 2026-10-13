/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy WordPress slug for the Fractional Head offering
      {
        source: "/offerings/fractional-head-of-real-estate-workplace-services-2",
        destination: "/offerings/fractional-head-of-real-estate-workplace",
        permanent: true,
      },
      {
        source: "/fractional-head-of-real-estate-workplace-services-2",
        destination: "/offerings/fractional-head-of-real-estate-workplace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
