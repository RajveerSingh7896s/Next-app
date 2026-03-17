
// import { PrismaClient } from "@/app/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import "dotenv/config";
// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// }); 

// const client = new PrismaClient({
//   adapter,
// });

import client from "@/lib/prisma"
 
async function fetchData(){
    const user = await client.user.findFirst() ;
    return {
        username:user?.username,
        password:user?.password
    }
}

export default async function() {
    const data = await fetchData();
    return (<div>
        {data.username}
        {data.password}
    </div>)
}