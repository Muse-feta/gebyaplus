import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {PrismaClient} from "./generated/prisma"
import { nextCookies} from "better-auth/next-js"

const prisma = new PrismaClient
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    tiktok: {
      clientSecret: process.env.TIKTOK_CLIENT_SECRET as string,
      clientKey: process.env.TIKTOK_CLIENT_ID as string,
      scope: ["user.info.basic", "user.info.stats", "video.list"],
      disableDefaultScope: true,
    },
  },
  plugins: [nextCookies()],
});

// import { betterAuth } from "better-auth";
// import { prismaAdapter } from "better-auth/adapters/prisma";
// import { PrismaClient } from "./generated/prisma";
// import { nextCookies } from "better-auth/next-js";
// import { genericOAuth } from "better-auth/plugins";

// const prisma = new PrismaClient();

// export const auth = betterAuth({
//   database: prismaAdapter(prisma, { provider: "postgresql" }),
//   emailAndPassword: { enabled: true },
//   plugins: [
//     nextCookies(),
//     genericOAuth({
//       config: [
//         {
//           providerId: "tiktok",
//           clientId: process.env.TIKTOK_CLIENT_KEY!, // rename to KEY if you can
//           clientSecret: process.env.TIKTOK_CLIENT_SECRET!,
//           authorizationUrl: "https://www.tiktok.com/v2/auth/authorize/",
//           tokenUrl: "https://open.tiktokapis.com/v2/oauth/token/",
//           userInfoUrl: "https://open.tiktokapis.com/v2/user/info/",
//           scopes: ["user.info.basic", "user.info.stats", "video.list"],
//           authorizationUrlParams: {
//             response_type: "code",
//             redirect_uri:
//               "https://engagex‑et.vercel.app/api/auth/callback/tiktok",
//             disable_auto_auth: "1",
//             client_key: process.env.TIKTOK_CLIENT_KEY!, // explicitly include
//           },
//           // Map TikTok user response to your app's user model
//           mapProfileToUser: async (profile: any) => {
//             const user = profile.data?.user || {};
//             return {
//               id: user.open_id,
//               email: `${user.open_id}@tiktok.user`,
//               name: user.display_name || `TikToker-${user.open_id}`,
//               image: user.avatar_url_100 || user.avatar_url,
//             };
//           },
//         },
//       ],
//     }),
//   ],
// });
