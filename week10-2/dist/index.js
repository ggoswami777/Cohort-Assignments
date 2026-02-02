import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName) {
    const response = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true
        }
    });
    console.log(response);
}
insertUser("gaurav@gmail.com", "password", "firstname", "lastname");
//# sourceMappingURL=index.js.map