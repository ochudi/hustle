import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Upwork",
      icon: "/placeholder.svg",
      connected: true,
      status: "Active",
      lastSync: "Today at 10:30 AM",
    },
    {
      id: 2,
      name: "Fiverr",
      icon: "/placeholder.svg",
      connected: true,
      status: "Active",
      lastSync: "Yesterday at 2:15 PM",
    },
    {
      id: 3,
      name: "Freelancer",
      icon: "/placeholder.svg",
      connected: false,
      status: "Disconnected",
      lastSync: "Never",
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: "/placeholder.svg",
      connected: true,
      status: "Active",
      lastSync: "Apr 2, 2025 at 9:45 AM",
    },
    {
      id: 5,
      name: "Behance",
      icon: "/placeholder.svg",
      connected: false,
      status: "Disconnected",
      lastSync: "Never",
    },
    {
      id: 6,
      name: "Dribbble",
      icon: "/placeholder.svg",
      connected: true,
      status: "Active",
      lastSync: "Mar 28, 2025 at 3:20 PM",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Connected Services</h1>
          <p className="text-muted-foreground">Manage your integrations with external platforms</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Service
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <img src={service.icon || "/placeholder.svg"} alt={service.name} className="h-6 w-6 rounded-full" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </div>
                <Switch checked={service.connected} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Status</div>
                  <Badge
                    variant="outline"
                    className={
                      service.status === "Active"
                        ? "text-green-500 bg-green-50 dark:bg-green-950/20"
                        : "text-red-500 bg-red-50 dark:bg-red-950/20"
                    }
                  >
                    {service.status}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Last Sync</div>
                  <div className="font-medium">{service.lastSync}</div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" disabled={!service.connected}>
                    {service.connected ? "Manage Connection" : "Connect"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

