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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Public events calendar

1. In Google Calendar, create **IEEE Rwanda Subsection Events** under the Subsection’s account. Set its timezone to **Africa/Kigali** and make it public with **See all event details**.
2. Share the calendar with the designated committee publishers and give them **Make changes to events** (or **Make changes and see event details** if shown). Editors can change events across the shared calendar.
3. When publishing an event, select **IEEE Rwanda Subsection Events** and enter the title, date and time, venue or online location, and event details. Put the registration link in the description.
4. If the calendar is replaced, update its Google Calendar shareable link and public iCal address in `app/events/page.tsx`.

Events published on the shared calendar reach subscribers as their calendar apps refresh. The site’s event directory uses `content/events.json` and is maintained separately.

## Next.js resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
