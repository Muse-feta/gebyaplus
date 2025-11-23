"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Play, Heart, Eye, MessageCircle, Share } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface VideoData {
  id: string;
  cover_image_url: string;
  title: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  share_count: number;
  create_time: string | number;
}

interface VideoPerformanceListProps {
  videos: VideoData[]
  isLoading?: boolean
}

export function VideoPerformanceList({ videos, isLoading = false }: VideoPerformanceListProps) {
  const [sortBy, setSortBy] = useState("newest")

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num
  }

const formatDate = (timestamp: number | string) => {
  // Convert seconds to milliseconds if needed
  const time = typeof timestamp === "string" ? parseInt(timestamp) : timestamp;
  const date = new Date(time * 1000);

  return date.toLocaleDateString("en-US", {
    month: "short", // e.g., Oct
    day: "numeric", // e.g., 19
    year: "numeric", // e.g., 2025
  });
};


  const sortedVideos = [...videos].sort((a, b) => {
    switch (sortBy) {
      case "most-views":
        return b.view_count - a.view_count;
      case "most-likes":
        return b.like_count - a.like_count;
      case "newest":
      default:
        return (
          new Date(b.create_time).getTime() - new Date(a.create_time).getTime()
        );
    }
  })

  if (isLoading) {
    return (
      <Card className="w-full bg-card border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="h-8 w-48 bg-muted rounded animate-pulse" />
          <div className="flex gap-2">
            <div className="h-10 w-32 bg-muted rounded animate-pulse" />
            <div className="h-10 w-32 bg-muted rounded animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-secondary rounded-lg p-4 animate-pulse">
              <div className="aspect-[9/16] bg-muted rounded-lg mb-3" />
              <div className="h-4 w-full bg-muted rounded mb-2" />
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-muted rounded" />
                <div className="h-4 w-16 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full bg-card border border-border p-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          Video Performance
        </h2>
        {/* <div className="flex items-center gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="most-views">Most Views</SelectItem>
              <SelectItem value="most-likes">Most Likes</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="border-tiktok-blue text-tiktok-blue hover:bg-tiktok-blue hover:text-white bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Video Stats
          </Button>
        </div> */}
      </div>

      {/* Videos Grid */}
      {sortedVideos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No videos found</div>
          <p className="text-sm text-muted-foreground">
            Your TikTok videos will appear here once connected
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedVideos.map((video) => (
            <Card
              key={video.id}
              className="bg-secondary border border-border overflow-hidden group hover:border-tiktok-red transition-all duration-300 hover:shadow-lg hover:shadow-tiktok-red/20"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] bg-muted">
                <Image
                  src={video.cover_image_url || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" fill="white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <div className="grid grid-cols-2 gap-2 text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{formatNumber(video.view_count)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart
                        className="w-3 h-3 text-tiktok-red"
                        fill="currentColor"
                      />
                      <span>{formatNumber(video.like_count)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-tiktok-blue" />
                      <span>{formatNumber(video.comment_count)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share className="w-3 h-3 text-tiktok-pink" />
                      <span>{formatNumber(video.share_count)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <p className="text-sm text-foreground line-clamp-2 mb-2">
                  {video.title || "No caption"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(video.create_time)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Card>
  );
}
