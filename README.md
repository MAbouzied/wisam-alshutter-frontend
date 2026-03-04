This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Portfolio Gallery Downloader

The `/our-work` page displays a portfolio gallery. Images are downloaded locally from [el-shutter.com/أعمالنا/](https://el-shutter.com/أعمالنا/).

### How to run the downloader

```bash
npm run portfolio:download
```

This script:
1. Fetches the gallery page HTML
2. Extracts all unique image URLs (WhatsApp images, etc.)
3. Converts thumbnail URLs to full-resolution (removes `-150x150` etc.)
4. Downloads images to `public/portfolio/` as `portfolio-001.jpg`, `portfolio-002.jpg`, ...
5. Generates `src/data/portfolio.local.ts` with metadata

### Idempotent behavior

- If a file already exists, it is skipped (no re-download)
- Progress is logged: count, downloaded, skipped

### Re-run when needed

Re-run the script when the source gallery updates:

```bash
npm run portfolio:download
```

The script will skip existing files and only download new images.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
