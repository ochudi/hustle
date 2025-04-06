import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Filter, Star } from "lucide-react"

export default function FeedbackPage() {
  const feedbacks = [
    {
      id: 1,
      client: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg",
      },
      rating: 5,
      project: "Website Redesign",
      date: "Mar 28, 2025",
      comment:
        "John delivered exceptional work on our website redesign. He understood our brand perfectly and created a modern, user-friendly design that exceeded our expectations. Communication was excellent throughout the project.",
    },
    {
      id: 2,
      client: {
        name: "Michael Chen",
        avatar: "/placeholder.svg",
      },
      rating: 4,
      project: "Mobile App UI Design",
      date: "Mar 15, 2025",
      comment:
        "Great work on our mobile app UI. John provided creative solutions and was responsive to feedback. The only reason for 4 stars instead of 5 is that we had a slight delay in the timeline, but the quality made up for it.",
    },
    {
      id: 3,
      client: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg",
      },
      rating: 5,
      project: "Brand Identity",
      date: "Feb 22, 2025",
      comment:
        "John created an amazing brand identity for our startup. He took the time to understand our vision and translated it into a cohesive visual identity. Highly recommend his services!",
    },
    {
      id: 4,
      client: {
        name: "David Rodriguez",
        avatar: "/placeholder.svg",
      },
      rating: 5,
      project: "E-commerce Development",
      date: "Feb 10, 2025",
      comment:
        "John built our e-commerce platform from scratch and did an outstanding job. The site is fast, secure, and easy to manage. He also provided excellent documentation and training for our team.",
    },
    {
      id: 5,
      client: {
        name: "Lisa Wong",
        avatar: "/placeholder.svg",
      },
      rating: 4,
      project: "SEO Optimization",
      date: "Jan 30, 2025",
      comment:
        "John helped improve our website's SEO significantly. We've seen a noticeable increase in organic traffic since implementing his recommendations. He's knowledgeable and explains complex concepts clearly.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Client Feedback</h1>
          <p className="text-muted-foreground">Reviews and testimonials from your clients</p>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter by Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Feedback Summary</CardTitle>
          <CardDescription>Overall client satisfaction and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-0">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold">4.8</div>
              <div className="mt-2 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 4.8 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="h-0 w-px bg-border md:h-20"></div>
            <div className="text-center">
              <div className="text-5xl font-bold">27</div>
              <div className="mt-1 text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div className="h-0 w-px bg-border md:h-20"></div>
            <div className="text-center">
              <div className="text-5xl font-bold">92%</div>
              <div className="mt-1 text-sm text-muted-foreground">5-Star Ratings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <Card key={feedback.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={feedback.client.avatar} alt={feedback.client.name} />
                    <AvatarFallback>{feedback.client.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{feedback.client.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= feedback.rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <Badge variant="outline">{feedback.project}</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{feedback.date}</div>
                  </div>
                  <p className="mt-2 text-sm">{feedback.comment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

