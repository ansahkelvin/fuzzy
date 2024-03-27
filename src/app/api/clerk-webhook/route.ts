import {NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {id, email_addresses, first_name, image_url} = body?.data;
        const email = email_addresses[0]?.email_address
        console.log(body)
        await db.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                email: email,
                name: first_name,
                profileImage: image_url,

            },
            create: {
                clerkId: id,
                email: email,
                name: first_name || '',
                profileImage: image_url || '',
            }
        })
        return new NextResponse("User has been updated in database successfully", {
            status: 200
        })
    } catch (e) {
        console.log("Error updating database : ", e)
        return new NextResponse("Error updating the database", {
            status: 500
        })
    }
}