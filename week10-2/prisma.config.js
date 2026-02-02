import { defineConfig } from "prisma/config";
import "dotenv/config";
export default defineConfig({
    schema: "prisma/schema.prisma",
    datasource: {
        url: "",
    },
    migrations: {
        path: "prisma/migrations",
    },
});
//# sourceMappingURL=prisma.config.js.map