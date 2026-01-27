// import betterauth_prisma from "../../assets/login.webp";
// import lucia_drizzle from "../../assets/register.webp";
// import tasks from "../../assets/tasks.webp";
// import todos from "../../assets/todos.webp";
// import lucia_prisma from "../../assets/user.webp";
// import betterauth_drizzle from "../../assets/users.webp";

const slides = [
  {
    title: "Sveltekit-Lucia-Drizzle",
    url: "https://github.com/emil-devel/sveltekit-lucia-drizzle",
    link: "sveltekit-lucia-drizzle code on github",
    // src: lucia_drizzle,
    content: `
    <p>User management with Lucia-Auth authentication and Roles (User, Redacteur, Admin).</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Drizzle.</p>
    <p>Postgres Database.</p>
    `,
  },
  {
    title: "Sveltekit-Lucia-Prisma",
    url: "https://github.com/emil-devel/sveltekit-lucia-prisma",
    link: "sveltekit-lucia-prisma code on github",
    // src: lucia_prisma,
    content: `
    <p>User management with Lucia-Auth authentication and Roles (User, Redacteur, Admin).</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Prisma.</p>
    <p>Postgres Database.</p>
    `,
  },
  {
    title: "Sveltekit-BetterAuth-Drizzle",
    url: "https://github.com/emil-devel/sveltekit-betterauth-drizzle",
    link: "sveltekit-betterauth-drizzle code on github",
    // src: betterauth_drizzle,
    content: `
    <p>User management with Better-Auth authentication and Roles (User, Redacteur, Admin).</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Prisma.</p>
    <p>Postgres Database.</p>
    `,
  },
  {
    title: "Sveltekit-BetterAuth-Prisma",
    url: "https://github.com/emil-devel/sveltekit-betterauth-prisma",
    link: "sveltekit-betterauth-prisma code on github",
    // src: betterauth_prisma,
    content: `
    <p>User management with Better-Auth authentication and Roles (User, Redacteur, Admin).</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Prisma.</p>
    <p>Postgres Database.</p>
    `,
  },

  {
    title: "Tasks",
    url: "https://github.com/ewdnet/tasks",
    link: "tasks code on github",
    // src: tasks,
    content: `
    <p>Tasks with categories and progress bar.</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Drizzle.</p>
    <p>SQLite Database.</p>
    `,
  },
  {
    title: "Todos",
    url: "https://github.com/ewdnet/todos",
    link: "todo code on github",
    // src: todos,
    content: `
    <p>Tasks with categories and progress bar.</p>
    <p>Realized with: Sveltekit (remote functions), Skeleton UI, Valibot, Prisma.</p>
    <p>SQLite Database.</p>
    `,
  },
];

export default slides;
