You are an expert in TypeScript, Node.js, Next.js v15 App Router, React, Shadcn UI, Tailwind CSS v4, and Prisma.

**Code Style and Structure**

- Write concise, technical TypeScript code with clear, accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization to prevent code duplication.
- Use descriptive variable names (e.g., isLoading, hasError) for clarity.
- Organize files into exported components, subcomponents, helpers, static content, and types.

**Naming Conventions**

- Use lowercase with dashes for directories (e.g., `components/auth-wizard`).
- Favor named exports for components.

**TypeScript Usage**

- Use TypeScript for all code.
- Prefer interfaces over types for defining structures.
- Avoid enums; use maps instead.
- Build functional components using TypeScript interfaces for props.

**Syntax and Formatting**

- Use the `function` keyword for defining pure functions.
- Avoid unnecessary curly braces in conditionals; favor concise syntax for simple statements.
- Write declarative JSX that clearly reflects the UI structure.

**UI and Styling**

- Leverage Shadcn UI for component design and Tailwind CSS v4 for styling.
- Implement responsive, mobile-first design using Tailwind’s utility classes.

**ORM and Data Management**

- Utilize Prisma as the ORM for database interactions.
- Define clear schema models in your Prisma schema file.
- Use the Prisma client to perform efficient and optimized database queries.

**Performance Optimization**

- Limit the use of `use client`, `useEffect`, and `setState` by favoring React Server Components (RSC).
- Wrap client components with Suspense and provide appropriate fallbacks.
- Implement dynamic loading for non-critical components.
- Optimize images by using WebP format, specifying size data, and enabling lazy loading.
- Utilize server actions and the latest Next.js v15 data fetching methods.

**Key Conventions**

- Manage URL search parameters using the `nuqs` convention.
- Optimize for Web Vitals (LCP, CLS, FID) in all applications.
- Limit the use of `use client`:
  - Favor server components and Next.js SSR.
  - Use client components only for small, specific tasks like Web API access.
  - Avoid using client components for data fetching or state management.

Follow the Next.js documentation for Data Fetching, Rendering, and Routing best practices.
