"use client"

import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardCharts() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-48 w-48">
          {/* This would be replaced with an actual chart component */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full border-8 border-purple-500 dark:border-purple-600">
            <div className="absolute inset-2 rounded-full border-[24px] border-muted"></div>
            <div className="text-center">
              <div className="text-4xl font-bold">90%</div>
              <div className="text-sm text-muted-foreground">Performance</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">90%</div>
            <div className="text-xs text-muted-foreground">Response rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">1,298</div>
            <div className="text-xs text-muted-foreground">Order completion</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

