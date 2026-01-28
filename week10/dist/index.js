import { Client } from 'pg';
const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_A2FlniXBoU0H@ep-wandering-sound-ad8s17bq-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});
async function createUsersTable() {
    await client.connect();
    const result = await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`);
    console.log(result);
}
createUsersTable();
//# sourceMappingURL=index.js.map