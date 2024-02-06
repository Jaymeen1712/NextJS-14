# NextJS-14

-- npx create-next-app@latest

## Caching

-- Time, On demand and no caching
-- revalidatePath()
-- export const generateStaticParams = async() => {};

---

# Prisma

npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider sqlite
(default postgres - npx prisma init)
npx prisma migrate dev --name init

-- add {prisma generate && } in build script in package.json

[https://ethanmick.com/how-to-set-up-prisma-with-next-js-postgres/]
[https://www.youtube.com/watch?v=_ER9jHiylAo&t=174s]

# NextUI

-- npm i @nextui-org/react framer-motion

---

# Zod(validation library)
