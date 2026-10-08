# AM Masons Advisory - Website

This is a Next.js (App Router) project built for AM Masons Advisory.

## Tech Stack
- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

- `/src/app`: Contains all pages and routing.
- `/src/components`: Reusable UI components (buttons, cards, layout).
- `/src/data`: Data files for offerings, insights, situations, FAQs, and business facts. Update content here.
- `/public/images`: Image assets.

## How to Edit Content

Most of the content is data-driven. You can update the text by modifying the files in `/src/data/`:
- `business.ts`: Edit founder info, links, and company details.
- `offerings.ts`: Edit the 8 service offerings.
- `situations.ts`: Edit the 7 "When Do We Get Involved" situations.
- `insights.ts`: Edit the blog posts/articles metadata.
- `faqs.ts`: Edit the Contact page FAQ items.

For full-page text changes (like the Home or About page), edit the respective `page.tsx` files in `/src/app/`.

### Articles and Legal Pages

- **Articles**: The article body placeholders are in `/src/app/insights/[slug]/page.tsx`. Currently, they use a shared template. If you want unique content per post, you can convert them to MDX or pull from a CMS.
- **Legal Pages**: The legal pages (Terms, Privacy, etc.) are placeholders handled in `/src/app/[slug]/page.tsx`. You will need to replace the placeholder block with your actual legal text provided by your counsel.

## Deployment (Vercel)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Log into Vercel and click "Add New Project".
3. Import your GitHub repository.
4. Leave all build settings as default (Next.js is automatically detected).
5. Click "Deploy".

## Items Owner Must Supply

Before launching the site, the owner needs to provide:
1. **Final Copy**: Replace the placeholder text in the Offering detail pages and Insight articles.
2. **Logo Files**: Place the final logo files in `/public/images/` and update `Header.tsx` and `Footer.tsx` to use them.
3. **Licensed Photos**: Replace the placeholder images in `/public/images/` with properly licensed stock or original photos. Update the paths in `/src/data/` files if filenames change.
4. **Legal Text**: Supply the actual legal documents (Terms, Privacy Policy, etc.).
