import { NextRequest } from "next/server";
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

export async function GET() {
    const data = await client.user.findFirst() ;
    // console.log(data)
    return Response.json({
        data
    })
}

export async function POST(req:NextRequest){
    //extract the body
    const body = await req.json() ;
    //store in db
    await client.user.create({
        data: {
            username:body.username,
            password:body.password
        }
    })
    return Response.json({
        message:"You are logged in!"
    })
}