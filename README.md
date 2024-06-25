## Reasoning, steps, observations and conclusions

Reasoning:
    So this is a test towards chatGPT generated code. I am curious about the state
    of the chatGPT-generated code and how it my affect everyday work.

I followed this steps:
    1. configured environment with next, tailwind and shadcn documentations.
    2. I generated all the code per component
    3. I played around changing how the style feels doing ping-pong with chatGPT
    4. I added validation, way to present state of the page component.

Observations:
    1. creating code with chatGPT feels more design centric than code centric
    2. chatGPT makes developing faster, but still requires architectural knowledge
    3. chatGPT lies about configuration steps (it messes up URLs, libraries names)

Conclusions:
    ChatGPT speeds up the development time significantly, but still requires 
    architectural knowledge. Also the creator's input into understanding how 
    the application should feel and work is still needed. 

## Further steps

This application still needs refactor. I am thinking about types management mostly. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
