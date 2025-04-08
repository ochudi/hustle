# Hustle — Freelancer Portfolio Dashboard

**Hustle** is a modern and responsive portfolio dashboard built for freelancers to manage their profiles, showcase projects, track earnings, and receive client feedback—all in one centralized place.

This project was developed as part of the **Stage 5 Frontend Task**, emphasizing frontend skills, UI/UX design, and data interactivity using modern technologies.

## Features

- **Profile Overview**  
  View and manage freelancer bio, location, and profile photo.

- **Recent Projects / Services**  
  Showcase active and completed projects, including progress tracking.

- **Client Feedback**  
  Interactive section for viewing and managing ratings and reviews from clients.

- **Earnings Summary**  
  Dynamic charts and stats to display income performance.

- **Responsive Layout**  
  Fully responsive design optimized for mobile, tablet, and desktop views.

## Project Structure

```
hustle/
├── app/                      # App routes and pages
│   ├── applications/         # Client applications/requests
│   ├── earnings/             # Earnings summary page
│   ├── feedback/             # Client feedback and ratings
│   ├── profile/              # Freelancer profile section
│   ├── projects/             # Projects dashboard
│   ├── services/             # Services or offerings
│   ├── settings/             # Account settings
│   └── layout.tsx            # Shared layout components
│
├── components/               # Shared and reusable UI components
│   ├── ui/                   # Chakra-wrapped UI elements
│   ├── dashboard-layout.tsx
│   ├── top-navbar.tsx
│   └── main-sidebar.tsx
│
├── public/                   # Static assets
├── styles/                   # Global and component styles
├── lib/                      # Helper libraries and utils
├── hooks/                    # Custom React hooks
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Installation

```bash
# Clone the repository
git clone https://github.com/ochudi/hustle.git
cd hustle

# Install dependencies
pnpm install
# or
npm install

# Run the development server
pnpm dev
# or
npm run dev
```


## License

This project is licensed under the MIT License.