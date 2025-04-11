import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Download, ExternalLink, Plus } from "lucide-react";
import { DashboardCharts } from "@/components/dashboard-charts";
import { ApplicationStatus } from "@/components/application-status";

export default function Dashboard() {
  const activeProjects = [
    {
      id: 1,
      client: {
        name: "Steven Terry",
        avatar: "/placeholder.svg",
      },
      project: "Landing page",
      price: "$800",
      deliveryTime: "1 days 2 hours",
      progress: 90,
    },
    {
      id: 2,
      client: {
        name: "Audrey Jones",
        avatar: "/placeholder.svg",
      },
      project: "Development",
      price: "$300",
      deliveryTime: "4 days 8 hours",
      progress: 50,
    },
    {
      id: 3,
      client: {
        name: "Brian Fisher",
        avatar: "/placeholder.svg",
      },
      project: "Translator",
      price: "$180",
      deliveryTime: "14 days 2 hours",
      progress: 95,
    },
    {
      id: 4,
      client: {
        name: "Molly Mills",
        avatar: "/placeholder.svg",
      },
      project: "Data Analyst",
      price: "$920",
      deliveryTime: "8 days 20 hours",
      progress: 20,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, John!
        </h1>
        <Button className="md:w-auto" variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download report
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Card className="">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Your performance metrics</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <DashboardCharts />
          </CardContent>
        </Card>

        <Card className="lg:row-span-1">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-xl font-bold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Ca, California</p>
            <Button className="mt-4" variant="outline">
              Edit profile
            </Button>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Earning reports</CardTitle>
              <CardDescription>Income in 2024</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Yearly</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold">$108.9k</h3>
                <span className="text-sm font-medium text-green-500">
                  +2.3%
                </span>
              </div>
            </div>
            <div className="h-[200px] w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full rounded-md bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Active projects (12)</CardTitle>
              <CardDescription>Manage your ongoing projects</CardDescription>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add new project
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                    <th className="pb-3 pl-4">Client Name</th>
                    <th className="pb-3">Project</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Delivered in</th>
                    <th className="pb-3">Progress</th>
                    <th className="pb-3 pr-4 text-right">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {activeProjects.map((project) => (
                    <tr key={project.id} className="border-b text-sm">
                      <td className="py-3 pl-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={project.client.avatar}
                              alt={project.client.name}
                            />
                            <AvatarFallback>
                              {project.client.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {project.client.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              View order
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">{project.project}</td>
                      <td className="py-3">{project.price}</td>
                      <td className="py-3">{project.deliveryTime}</td>
                      <td className="py-3 pr-4">
                        <Progress
                          value={project.progress}
                          className="h-2 w-full"
                        />
                      </td>
                      <td className="py-3 pr-4 text-right">
                        {project.progress}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Application status</CardTitle>
          </CardHeader>
          <CardContent>
            <ApplicationStatus />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
