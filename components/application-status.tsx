"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ApplicationStatus() {
  const applications = [
    {
      id: 1,
      status: "Applied",
      date: "Jan 22",
      position: "Chinese Translator",
      company: "Tech Trooper (Jurong East, Singapore)",
      type: "Remote",
      contract: "Contract",
    },
    {
      id: 2,
      status: "Not selected",
      date: "Jan 09",
      position: "Frontend Developer (Junior Position)",
      company: "PT Nirlaba Digital Indonesia (Kemang, South Jakarta)",
      experience: "1-3 years exp",
      type: "Freelance",
    },
    {
      id: 3,
      status: "Interview",
      date: "Dec 29",
      position: "Website Designer",
      company: "Vergania Studio (Sydney, Australia)",
      contract: "3 months contract",
    },
    {
      id: 4,
      status: "Interview",
      date: "Dec 20",
      position: "Senior UI/UX Designer",
      company: "Ministry of Banking Departement (Jakarta)",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
      case "Interview":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500"
      case "Not selected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <Card key={app.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="p-4 md:flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <Badge className={getStatusColor(app.status)} variant="outline">
                    {app.status}
                  </Badge>
                  <div className="text-sm text-muted-foreground">Applied on {app.date}</div>
                </div>
                <h3 className="text-lg font-semibold">{app.position}</h3>
                <p className="text-sm text-muted-foreground">{app.company}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {app.type && (
                    <Badge variant="outline" className="font-normal">
                      {app.type}
                    </Badge>
                  )}
                  {app.contract && (
                    <Badge variant="outline" className="font-normal">
                      {app.contract}
                    </Badge>
                  )}
                  {app.experience && (
                    <Badge variant="outline" className="font-normal">
                      {app.experience}
                    </Badge>
                  )}
                </div>
              </div>
              <div className="border-t md:border-l md:border-t-0 p-4 md:pl-4 md:pr-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Contact recruiter</DropdownMenuItem>
                    <DropdownMenuItem>Withdraw application</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

