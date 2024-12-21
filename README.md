# Creator LMS Website !

This is a Learning Management System (LMS) website built with Next.js. The purpose of this project is to provide a comprehensive platform for All Kind Creators ! .

![image](https://github.com/user-attachments/assets/e9ec94eb-310f-44dc-b84f-0e58ce4f310f)

## Demo Live Website : 

Check out the Live Website for this project : https://project-lms-platform.vercel.app

![image](https://github.com/user-attachments/assets/45b38982-b894-4f05-a8b6-4b96b5c2b879)
## For Tutors
![image](https://github.com/user-attachments/assets/6f7ff37b-629e-4d4d-905d-afb6108b789a)

![image](https://github.com/user-attachments/assets/388d6395-96ae-4631-ba54-61bb730dfb6c)

# A Lot More ...
## Deployed on Vercel

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Browse & Filter Courses
- Purchase Courses using Stripe
- NoSQL database using Mongodb
- Authentication using Clerk
- ORM using Prisma
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video player using react-player
- Rich text editor for chapter description

## Tech Stack

- Framework: Next.js 14
- Database: Prisma
- Authentication: Clerk
- UI Components: Radix UI, Shadcn/ui
- Forms: React Hook Form
- API Requests: Axios
- Styling: Tailwind CSS
- File Uploads: Uploadthing, Cloudinary
- Markdown Support: React Markdown Preview, React MD Editor

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- Git

### Clone the Repository

To clone the project, run the following command in your terminal:

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Set Up Environment Variables

Create a .env.local file in the root directory and add your environment variables. Here is an example:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_REDIRECT=/

DATABASE_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NEXT_PUBLIC_TEACHER_ID=
NEXT_PUBLIC_APP_URL=http://localhost:3000

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

You can also find an example environment file in .env.example.

### Start the Development Server

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Project_LMS_PLATFORM

# Build with Love 
