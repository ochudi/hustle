import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText } from "lucide-react"

export default function EarningsPage() {
  const invoices = [
    {
      id: "INV-001",
      client: "TechStart Inc",
      amount: "$8,000.00",
      status: "Paid",
      date: "Mar 30, 2025",
    },
    {
      id: "INV-002",
      client: "Fashion Forward",
      amount: "$3,500.00",
      status: "Pending",
      date: "Apr 15, 2025",
    },
    {
      id: "INV-003",
      client: "Green Earth Co",
      amount: "$1,200.00",
      status: "Paid",
      date: "Mar 15, 2025",
    },
    {
      id: "INV-004",
      client: "Wellness Hub",
      amount: "$1,800.00",
      status: "Pending",
      date: "Apr 22, 2025",
    },
    {
      id: "INV-005",
      client: "Artisan Crafts",
      amount: "$950.00",
      status: "Paid",
      date: "Mar 05, 2025",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-500"
      case "Pending":
        return "text-yellow-500"
      case "Overdue":
        return "text-red-500"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Earnings</h1>
          <p className="text-muted-foreground">Track your income and financial performance</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$108,950.00</div>
            <p className="text-xs text-muted-foreground">+12.5% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.00</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,300.00</div>
            <p className="text-xs text-muted-foreground">2 invoices pending</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Breakdown</CardTitle>
          <CardDescription>Your earnings over the past 12 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            {/* This would be replaced with an actual chart component */}
            <div className="h-full w-full rounded-md bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20"></div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="invoices">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>Manage and download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                      <th className="pb-3 pl-4">Invoice</th>
                      <th className="pb-3">Client</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3 pr-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b text-sm">
                        <td className="py-3 pl-4 font-medium">{invoice.id}</td>
                        <td className="py-3">{invoice.client}</td>
                        <td className="py-3">{invoice.amount}</td>
                        <td className={`py-3 ${getStatusColor(invoice.status)}`}>{invoice.status}</td>
                        <td className="py-3">{invoice.date}</td>
                        <td className="py-3 pr-4 text-right">
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Track all your received payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground">Payment history will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

