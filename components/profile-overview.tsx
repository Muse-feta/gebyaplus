import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Clock } from "lucide-react";

interface ProfileData {
  avatar_url: string;
  display_name: string;
  follower_count: number;
  following_count: number;
  likes_count: number;
  video_count: number;
  totalViews: number;
  averageEngagementRate: number;
}

interface ProfileOverviewProps {
  profile: ProfileData;
  isLoading?: boolean;
  lastSynced?: Date;
  isConnected?: boolean;
}

export function ProfileOverview({
  profile,
  isLoading = false,
  lastSynced,
  isConnected = true,
}: ProfileOverviewProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };

  const formatLastSynced = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="w-full bg-card border border-border rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            </div>
          </div>
          <div className="h-10 w-32 bg-muted rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-muted rounded-lg p-4 animate-pulse">
              <div className="h-8 w-16 bg-background rounded mb-2" />
              <div className="h-4 w-20 bg-background rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <Card className="w-full bg-card border border-border p-6 mb-8">
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            Connect your TikTok account to view profile data
          </div>
          <p className="text-sm text-muted-foreground">
            Click "Login with TikTok" in the header to get started
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-card border border-border p-6 mb-8">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-tiktok-red">
            <AvatarImage
              src={profile.avatar_url || "/placeholder.svg"}
              alt={profile.display_name}
            />
            <AvatarFallback className="bg-tiktok-red text-white font-bold text-lg">
              {profile.display_name}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              @{profile.display_name}
            </h1>
            <p className="text-muted-foreground">TikTok Creator</p>
            {lastSynced && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Clock className="w-3 h-3" />
                <span>Last synced: {formatLastSynced(lastSynced)}</span>
              </div>
            )}
          </div>
        </div>
        {/* <Button
          variant="outline"
          className="border-tiktok-red text-tiktok-red hover:bg-tiktok-red hover:text-white bg-transparent"
        >
          <Download className="w-4 h-4 mr-2" />
          Export Profile Stats
        </Button> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-secondary border border-border p-4 text-center hover:border-tiktok-red transition-colors">
          <div className="text-2xl font-bold text-foreground mb-1">
            {formatNumber(profile.follower_count)}
          </div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </Card>

        <Card className="bg-secondary border border-border p-4 text-center hover:border-tiktok-blue transition-colors">
          <div className="text-2xl font-bold text-foreground mb-1">
            {formatNumber(profile.following_count)}
          </div>
          <div className="text-sm text-muted-foreground">Following</div>
        </Card>

        <Card className="bg-secondary border border-tiktok-red p-4 text-center">
          <div className="text-2xl font-bold text-tiktok-red mb-1">
            {formatNumber(profile.likes_count)}
          </div>
          <div className="text-sm text-muted-foreground">Total Likes</div>
        </Card>

        <Card className="bg-secondary border border-border p-4 text-center hover:border-tiktok-pink transition-colors">
          <div className="text-2xl font-bold text-foreground mb-1">
            {formatNumber(profile.video_count)}
          </div>
          <div className="text-sm text-muted-foreground">Videos</div>
        </Card>

        {/* <Card className="bg-secondary border border-border p-4 text-center hover:border-tiktok-blue transition-colors">
          <div className="text-2xl font-bold text-foreground mb-1">
            {formatNumber(profile.totalViews) || 400}
          </div>
          <div className="text-sm text-muted-foreground">Total Views</div>
        </Card>

        <Card className="bg-secondary border border-tiktok-pink p-4 text-center">
          <div className="text-2xl font-bold text-tiktok-pink mb-1">
            7%
          </div>
          <div className="text-sm text-muted-foreground">Avg Engagement</div>
        </Card> */}
      </div>
    </Card>
  );
}
