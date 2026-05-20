import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DashboardLoading() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 animate-pulse">
          
          {/* 1. Header Row Skeleton */}
          <header className="flex h-[--header-height] shrink-0 items-center gap-2">
            <div className="flex w-full items-center gap-2 px-4 lg:px-6">
              <Skeleton className="h-8 w-8 rounded-md" /> {/* Sidebar Trigger */}
              <Skeleton className="h-8 w-40 rounded-lg" />  {/* Title text */}
            </div>
          </header>

          {/* 2. Top Section Metrics Cards Skeletons (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-6 py-4">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="rounded-2xl bg-background border border-border p-5 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-16 rounded-md" />   {/* Large Value */}
                    <Skeleton className="h-4 w-32 rounded-md" />   {/* Label text */}
                  </div>
                  <Skeleton className="h-12 w-12 rounded-2xl" />    {/* Icon bubble */}
                </div>
                <Skeleton className="h-5 w-14 rounded-lg" />        {/* Trend Indicator badge */}
              </div>
            ))}
          </div>

          {/* 3. Main Split Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 px-4 lg:px-6">
            
            {/* Left Side: Recent Leads & Unanswered Questions Containers */}
            <div className="grid grid-cols-1 gap-4">
              {/* Recent Leads Container Card */}
              <Card>
                <CardHeader className="space-y-2">
                  <Skeleton className="h-6 w-48 rounded-md" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-9 w-9 rounded-full" />
                        <div className="space-y-1.5">
                          <Skeleton className="h-4 w-32 rounded-md" />
                          <Skeleton className="h-3 w-20 rounded-md" />
                        </div>
                      </div>
                      <Skeleton className="h-4 w-16 rounded-md" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Unanswered Questions Container Card */}
              <Card>
                <CardHeader className="space-y-2">
                  <Skeleton className="h-6 w-56 rounded-md" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-3/4 rounded-md" />
                        <Skeleton className="h-4 w-12 rounded-md" />
                      </div>
                      <Skeleton className="h-3 w-1/4 rounded-md" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Side: System Status & Top Asked Questions Widgets */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* System Status Mock */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-5 w-36 rounded-md" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-2 w-2 rounded-full" />
                        <Skeleton className="h-4 w-24 rounded-md" />
                      </div>
                      <Skeleton className="h-4 w-16 rounded-md" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Asked Questions Progress Bars Mock */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-5 w-44 rounded-md" />
                </CardHeader>
                <CardContent className="space-y-5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-24 rounded-md" />
                        <Skeleton className="h-4 w-8 rounded-md" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </CardContent>
              </Card>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}