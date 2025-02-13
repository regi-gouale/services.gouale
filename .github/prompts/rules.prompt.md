## Context

You are an AI embedded in a project that uses the following technologies:

- **TypeScript**
- **Node.js with Next.js**
- **React**
- **TailwindCSS** and **Shadcn UI**

---

## Style and Structure

- **Conciseness & Clarity:** Write concise, technical TypeScript code following functional and declarative programming patterns.
- **Avoid Classes:** Do not use classes; prefer modular functions and iterative patterns to minimize code duplication.
- **Descriptive Naming:** Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- **File Organization:** Structure your files into:
  - Exported components
  - Subcomponents
  - Helpers
  - Static content
  - Types

---

## Naming Conventions

- **Directories:** Use lowercase with dashes (e.g., `components/auth-wizard`).
- **Exports:** Favor named exports for components.

---

## TypeScript Usage

- **Type Safety:** Write all code in TypeScript; prefer using **types** over interfaces.
- **Avoid Enums:** Instead of enums, use maps or plain objects.
- **Functional Components:** Create components as functions with props defined directly as an object type.

---

## Syntax and Formatting

- **Concise Conditionals:** Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- **Declarative JSX:** Write clear, declarative JSX that mirrors the intended UI structure.

---

## UI and Styling

- **Component Libraries:** Utilize Shadcn UI, Radix, and Tailwind CSS for building and styling components.
- **Responsive Design:** Implement a mobile-first responsive design using Tailwind’s utility classes.

---

## Performance Optimization

- **Server Components:** Minimize the use of `use client`, `useEffect`, and `setState` by favoring React Server Components (RSC) and Next.js SSR.
- **Suspense & Dynamic Loading:** Wrap client components with `Suspense` (with fallback UI) and load non-critical components dynamically.
- **Image Optimization:** Optimize images by using WebP format, specifying dimensions, and enabling lazy loading to improve Web Vitals (LCP, CLS, FID).

---

## Database Querying and Data Modeling

- **Prisma Usage:** Use the Prisma SDK for database queries.
- **Data Models:** Define and maintain data models in your `.prisma` files.

---

## Key Conventions

- **URL State Management:** Use the `nuqs` convention for managing URL search parameters.
- **Web Vitals:** Always optimize for Core Web Vitals (LCP, CLS, FID).
- **Client vs. Server:**
  - Use server components and Next.js SSR for data fetching and state management.
  - Restrict `use client` to small components focused solely on Web API interactions.

---

## PostgreSQL Guidelines

- **Syntax:** Write valid PostgreSQL syntax, using proper quotation (guillemets) for table and column names.

---

## Next.js v15 and React 19 Guidelines

- **Server Components:** Utilize React 19 with Server Components. Implement Prisma queries and backend logic inside `page` or `layout` files. For example:

  ```tsx
  // Use "async" for server components
  export default async function Page() {
    // Await asynchronous operations
    const result = await prisma.user.findMany();
    return (
      <div>
        {result.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
  ```

- **Hooks Limitation:** Avoid using React hooks within server components.

---

## Creating a Component

- **Component Declaration:** Always create components using `export function` without default exports.
- **Props as Object:** Accept an object named `props` as the first argument, and define its type inline. For example:

  ```tsx
  export function MyComponent(props: { prop1: string; prop2: number }) {
    return <div>{props.prop1}</div>;
  }
  ```

---

## Toast Notifications Example

If you need to display toast notifications, use the following pattern:

```ts
import { toast } from "sonner";

toast.success("Success message");
toast.error("Error message");
```

---

## Form Example

When creating forms, follow this example:

```tsx
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input"; // Ensure Input component is imported

const Schema = z.object({
  name: z.string(),
});

export function MyForm() {
  const form = useZodForm({
    schema: Schema,
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof Schema>) => {
    console.log(data);
  };

  return (
    <Form form={form} onSubmit={async (data) => onSubmit(data)}>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
```

---

## Server Action Usage

Server Actions allow you to run server-side code (e.g., mutating the database) without an API endpoint. Follow these steps:

1. **Create a Server Action File:**

   Use the naming convention `server-action-name.action.ts` and include `"use server"` at the top to indicate server-side execution.

   ```ts
   "use server";

   import { orgAction } from "@/lib/actions/safe-actions";

   export const demoAction = orgAction
     .metadata({
       roles: ["OWNER", "ADMIN"], // Limit action to specific roles
     })
     .schema(DatabaseFormSchema) // Validate input using schema
     .action(async ({ parsedInput: input, ctx }) => {
       const database = await prisma.database.create({
         data: {
           name: input.name,
           schema: input.schema,
           organizationId: ctx.org.id,
         },
       });
       return database;
     });
   ```

2. **Use the Server Action in a Client Component:**

   ```tsx
   import { demoAction } from "./server-action-name.action";
   import { useMutation } from "@tanstack/react-query";
   import { resolveActionResult } from "@/lib/actions/actions-utils";

   export function MyFormComponent() {
     const mutation = useMutation({
       mutationFn: async (data: FormData) =>
         resolveActionResult(demoAction(data)),
       onError: (error) => toast.error(error.message),
       onSuccess: () => toast.success("Demo Action executed!"),
     });

     // ...render form and call mutation on submission
   }
   ```

---

## Safe Route Creation

Use `next-zod-route` to create safe API routes. For example:

```ts
// File: app/api/org/[orgId]/route.ts
import { prisma } from "@/lib/prisma";
import { orgRoute } from "@/lib/safe-route";
import { z } from "zod";

export const POST = orgRoute
  .params(
    z.object({
      orgId: z.string(),
    })
  )
  .body(z.object({ name: z.string() }))
  .query(z.object({ query: z.string() }))
  .handler(async (req, { params, body, query, context }) => {
    await prisma.organization.update({
      where: { id: params.orgId },
      data: { name: body.name },
    });
  });
```

- **Org Routes:** Always create organization-related routes under `/api/org/[orgId]/*` using `orgRoute`.
- **Non-Org Routes:** For routes not related to organizations, use `authRoute`.

---

## Authentication

Retrieve the current user using the `auth` functions:

```ts
import { auth, requiredAuth } from "@/lib/auth/helper";

const user = await auth();
// Or, for required authentication:
const user = await requiredAuth();
```

---

## Organization Handling

- **Resource Linking:** Always associate resources with an organization rather than an individual user.
- **Retrieving Organization:** Use `getCurrentOrgCache` or `getRequiredCurrentOrgCache` to obtain the current organization.

```ts
import { getCurrentOrgCache } from "@/lib/react/cache";

const org = await getCurrentOrgCache();
```

---

## Commit Conventions

Follow the Commitizen convention for your commits. Examples:

- `feat(sidebar): add sidebar user button`
- `fix(sidebar): fix sidebar user button`
- `refactor(sidebar): refactor sidebar user button`
- `docs(sidebar): add docs for sidebar user button`
- `style(sidebar): style sidebar user button`
- `test(sidebar): add tests for sidebar user button`
- `chore(sidebar): add chore for sidebar user button`

**Rules:**

- **Subject Length:** Keep the subject short (ideally under 50 characters).
- **Content:** Explain what and why, not how.
- **Formatting:** Separate subject and body with a blank line. Use a body only for larger commits.

---
