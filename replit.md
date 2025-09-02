# Overview

This is a full-stack web application built with a modern React frontend and Express.js backend. The project appears to be a personal portfolio website for Harshit Mishra, showcasing his work as an inventor and software developer. The application features sections for about information, patents, projects, skills, and contact details, all presented with a technical/developer-focused design aesthetic.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Uses Wouter for client-side routing with a simple home page and 404 handling
- **UI Components**: Built with Radix UI primitives and shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a monospace font design (JetBrains Mono, Fira Code)
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Build System**: ESBuild for production bundling, TSX for development
- **Development**: Vite middleware integration for hot module replacement in development
- **API Structure**: RESTful API design with routes prefixed under /api
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging for API endpoints with performance metrics

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema**: User table with UUID primary keys, username, and password fields
- **Migrations**: Drizzle Kit for database schema migrations
- **Development Storage**: In-memory storage implementation for local development
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity

## External Dependencies

- **Database**: Neon Database (PostgreSQL serverless)
- **Deployment**: Configured for Replit environment with custom Vite plugins
- **Fonts**: Google Fonts integration (JetBrains Mono, Fira Code, Source Code Pro)
- **Images**: Unsplash for portfolio images and technical diagrams
- **Development Tools**: Replit-specific plugins for error overlay and cartographer
- **UI Libraries**: Radix UI for accessible component primitives
- **Animation**: Framer Motion for smooth animations and transitions
- **Validation**: Zod for type-safe schema validation
- **Date Handling**: date-fns for date manipulation utilities