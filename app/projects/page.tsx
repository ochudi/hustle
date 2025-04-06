import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Filter, Plus } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      client: {
        name: "Fashion Forward",
        avatar: "/placeholder.svg",
      },
      status: "In Progress",
      deadline: "Apr 15, 2025",
      progress: 65,
      budget: "$3,500",
      type: "Web Design",
    },
    {
      id: 2,
      title: "Mobile App Development",
      client: {
        name: "TechStart Inc",
        avatar: "/placeholder.svg",
      },
      status: "Delivered",
      deadline: "Mar 30, 2025",
      progress: 100,
      budget: "$8,000",
      type: "Mobile Development",
    },
    {
      id: 3,
      title: "Brand Identity Package",
      client: {
        name: "Green Earth Co",
        avatar: "/placeholder.svg",
      },
      status: "In Progress",
      deadline: "May 10, 2025",
      progress: 40,
      budget: "$2,200",
      type: "Branding",
    },
    {
      id: 4,
      title: "Content Marketing Strategy",
      client: {
        name: "Wellness Hub",
        avatar: "/placeholder.svg",
      },
      status: "Pending",
      deadline: "Apr 22, 2025",
      progress: 10,
      budget: "$1,800",
      type: "Marketing",
    },
    {
      id: 5,
      title: "SEO Optimization",
      client: {
        name: "Local Bistro",
        avatar: "/placeholder.svg",
      },
      status: "Delivered",
      deadline: "Mar 15, 2025",
      progress: 100,
      budget: "$1,200",
      type: "SEO",
    },
    {
      id: 6,
      title: "Product Photography",
      client: {
        name: "Artisan Crafts",
        avatar: "/placeholder.svg",
      },
      status: "In Progress",
      deadline: "Apr 28, 2025",
      progress: 75,
      budget: "$950",
      type: "Photography",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500"
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and track all your client projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage src={project.client.avatar} alt={project.client.name} />
                      <AvatarFallback>{project.client.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {project.client.name}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)} variant="outline">
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Type</div>
                  <div className="font-medium">{project.type}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Budget</div>
                  <div className="font-medium">{project.budget}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Deadline</div>
                  <div className="font-medium">{project.deadline}</div>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <div className="text-muted-foreground">Progress</div>
                    <div className="font-medium">{project.progress}%</div>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

