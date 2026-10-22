/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy WordPress posts and feeds that Google indexed on the old site
      { source: "/the-camera-was-offline-for-three-weeks-and-nobody-noticed", destination: "/insights/the-camera-was-offline-for-three-weeks-and-nobody-noticed", permanent: true },
      { source: "/standardize-the-platform-localize-the-experience", destination: "/insights/standardize-the-platform-localize-the-experience", permanent: true },
      { source: "/office-relocation-is-a-talent-decision-most-companies-treat-it-like-real-estate", destination: "/insights/a-relocation-is-not-a-leasing-decision", permanent: true },
      { source: "/by-the-time-youre-negotiating-your-lease-youve-already-lost", destination: "/before-you-sign-a-lease", permanent: true },
      { source: "/workplace-standards-dont-matter-until-cost-cutting-turns-into-operational-risk", destination: "/when-standards-and-costs-need-governance", permanent: true },
      { source: "/the-office-has-to-earn-the-commute", destination: "/insights/mandate-first-math-later", permanent: true },
      { source: "/remote-first-is-a-strategy-not-a-real-estate-decision", destination: "/insights/mandate-first-math-later", permanent: true },
      { source: "/your-workplace-project-is-already-failing-heres-why", destination: "/offerings/workplace-direction-alignment", permanent: true },
      { source: "/you-dont-have-a-workplace-problem-you-have-a-leadership-problem", destination: "/offerings/workplace-direction-alignment", permanent: true },
      { source: "/feed", destination: "/insights", permanent: true },
      { source: "/home/feed", destination: "/insights", permanent: true },
      { source: "/home", destination: "/", permanent: true },
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
