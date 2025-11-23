import { auth } from "@/lib/auth";
import { PrismaClient } from "@/lib/generated/prisma";
import { headers } from "next/headers";
import axios from 'axios'

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  

  try {
    const session = await auth.api.getSession({ headers: await headers() });
    const userId = session?.user?.id;
    console.log("userId from line 14 api/stats", userId)
    if (!userId) {
      return Response.json({
        success: false,
        message: "user not authenticated",
      });
    }
    // find tiktok account linked to this user
    const account = await prisma.account.findFirst({
      where: {
        userId: userId,
        providerId: "tiktok",
      },
    });

    if (!account?.accessToken) {
      return Response.json({
        success: false,
        message: "user not authenticated",
      });
    }

    const accessToken = account?.accessToken;
    console.log("accessToken from line 37 api/stats", accessToken);


    //fetch user stats from tiktok api
    const res = await axios.get("https://open.tiktokapis.com/v2/user/info/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        fields:
          "open_id,union_id,avatar_url,display_name,follower_count,following_count,likes_count,video_count",
      },
    });

    return Response.json({ success: true, data: res.data });
  } catch (error) {
    return Response.json({ success: false, message: error });
  }
  


};
