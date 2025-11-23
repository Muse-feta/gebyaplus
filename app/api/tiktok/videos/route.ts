export const dynamic = "force-dynamic";

import { auth } from "@/lib/auth";
import { PrismaClient } from "@/lib/generated/prisma";
import { headers } from "next/headers";
import axios from "axios";

// NOTE: Use a persistent connection if possible, but for a single endpoint this is fine.
const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    // 1. Authentication and User Check
    const session = await auth.api.getSession({ headers: await headers() });
    const userId = session?.user?.id;

    // console.log("userId from /api/videos:", userId);

    if (!userId) {
      return Response.json({
        success: false,
        message: "User not authenticated",
      });
    }

    // 2. Retrieve TikTok Access Token
    const account = await prisma.account.findFirst({
      where: {
        userId: userId,
        providerId: "tiktok",
      },
    });

    if (!account?.accessToken) {
      return Response.json({
        success: false,
        message: "TikTok account not linked or token missing",
      });
    }

    const accessToken = account.accessToken;
    console.log("accessToken:", accessToken);

    // 3. Define the fields and construct the API URL
    const videoFields = [
      "id",
      "title",
      "video_description", // Use the field names available in the V2 Video Object (you'll need to confirm these)
      "create_time",
      "duration",
      "cover_image_url",
      "share_url",
      "width",
      "height",
      "like_count",
      "comment_count",
      "share_count",
      "view_count",
      "create_time",
      // Include any statistics fields you need, like 'like_count'
      // NOTE: You must confirm the exact field names available in the V2 Video Object
    ];

    // **KEY CHANGE 1: FIELDS in Query Parameter**
    const fieldsQuery = videoFields.join(",");

    // **KEY CHANGE 2: V2 URL**
    const TIKTOK_VIDEO_LIST_URL = `https://open.tiktokapis.com/v2/video/list/?fields=${fieldsQuery}`;

    // 4. Construct the Request Body (only cursor and max_count)
    const requestBody = {
      cursor: 0,
      max_count: 10,
    };

    // 5. Make the API Call
    const res = await axios.post(TIKTOK_VIDEO_LIST_URL, requestBody, {
      headers: {
        // **KEY CHANGE 3: Authorization Header**
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // 6. Check for API-specific errors in the response body
    // The V2 documentation shows the error object is named 'error'
    if (res.data?.error?.code && res.data.error.code !== "ok") {
      const errorMessage =
        res.data.error.message ||
        `TikTok API Error Code: ${res.data.error.code}`;
      console.error("TikTok API returned an error:", errorMessage);
      return Response.json({
        success: false,
        message: errorMessage,
      });
    }

    return Response.json({
      success: true,
      data: res.data.data, // Returning the specific 'data' object from the API response
    });
  } catch (error: any) {
    console.error(
      "Error fetching TikTok videos:",
      error.response?.data || error.message
    );
    return Response.json({
      success: false,
      message: error.response?.data || error.message,
    });
  }
};
