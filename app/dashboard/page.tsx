"use client";

import { useState, useEffect } from "react";
import { ProfileOverview } from "@/components/profile-overview";
import { VideoPerformanceList } from "@/components/video-performance-list";
import "../globals2.css";
import { redirect, useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";
import axios from "axios";

// Mock data - in real implementation, this would come from TikTok API
// const mockProfileData = {
//   avatar: "/tiktok-profile-avatar.jpg",
//   display_name: "engagex_user",
//   followers: 125400,
//   following: 892,
//   totalLikes: 2340000,
//   totalVideos: 156,
//   totalViews: 8750000,
//   averageEngagementRate: 7.2,
// };

// const mockVideoData = [
//   {
//     id: "1",
//     thumbnail: "/tiktok-video-thumbnail-dancing.jpg",
//     caption:
//       "Just dropped my latest dance routine! What do you think? 💃 #dance #viral #fyp",
//     views: 1200000,
//     likes: 89500,
//     comments: 12400,
//     shares: 8900,
//     createdAt: "2024-01-15T10:30:00Z",
//   },
//   {
//     id: "2",
//     thumbnail: "/tiktok-video-thumbnail-cooking.jpg",
//     caption:
//       "Easy 5-minute pasta recipe that will change your life! 🍝 #cooking #recipe #foodhack",
//     views: 850000,
//     likes: 67200,
//     comments: 8900,
//     shares: 5600,
//     createdAt: "2024-01-12T14:20:00Z",
//   },
//   {
//     id: "3",
//     thumbnail: "/tiktok-video-thumbnail-comedy.jpg",
//     caption:
//       "When you realize it's Monday again... 😭 #monday #mood #relatable",
//     views: 2100000,
//     likes: 156000,
//     comments: 18700,
//     shares: 12300,
//     createdAt: "2024-01-10T09:15:00Z",
//   },
//   {
//     id: "4",
//     thumbnail: "/tiktok-video-thumbnail-fashion.jpg",
//     caption:
//       "Outfit of the day! Thrifted this entire look for under $30 ✨ #ootd #thrift #fashion",
//     views: 650000,
//     likes: 45300,
//     comments: 6700,
//     shares: 3400,
//     createdAt: "2024-01-08T16:45:00Z",
//   },
//   {
//     id: "5",
//     thumbnail: "/tiktok-video-thumbnail-pets.jpg",
//     caption:
//       "My cat's reaction to the new toy is everything 😸 #cats #pets #funny",
//     views: 980000,
//     likes: 78900,
//     comments: 9800,
//     shares: 6700,
//     createdAt: "2024-01-05T11:30:00Z",
//   },
//   {
//     id: "6",
//     thumbnail: "/tiktok-video-thumbnail-travel.jpg",
//     caption:
//       "Hidden gem in Bali that tourists don't know about 🏝️ #travel #bali #hidden",
//     views: 1450000,
//     likes: 112000,
//     comments: 15600,
//     shares: 9800,
//     createdAt: "2024-01-03T08:20:00Z",
//   },
// ];

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState([] as any);
  const [videoData, setVideoData] = useState([] as any);
  const [isConnected, setIsConnected] = useState(true);
  const [lastSynced, setLastSynced] = useState(new Date());
  const [clientTime, setClientTime] = useState("");

  const router = useRouter();

  useEffect(() => {
    setClientTime(new Date().toLocaleTimeString());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("/api/tiktok/stats");

        console.log(res.data.data.data.user);
        setProfileData(res.data.data.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchVideos = async () => {
      try {
        const res = await axios.get("/api/tiktok/videos");

        console.log("videos",res.data.data.videos);
        setVideoData(res.data.data.videos);
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserData();
    fetchVideos();
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <div className="w-8 h-8 bg-tiktok-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div> */}
              <h1 className="text-2xl font-bold text-foreground">EngageX</h1>
              
            </div>
            <div className="flex items-center gap-4">
              {isConnected ? (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Connected as @{profileData.display_name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button className="bg-tiktok-red hover:bg-tiktok-red/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Login with TikTok
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Overview Section */}
        <ProfileOverview
          profile={profileData}
          isLoading={isLoading}
          lastSynced={lastSynced}
          isConnected={isConnected}
        />

        {/* Video Performance Section */}
        <VideoPerformanceList videos={videoData} isLoading={isLoading} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>© 2025 EngageX. Powered by TikTok API.</div>
            <div className="flex items-center gap-4">
              <span>Last updated: {clientTime}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
