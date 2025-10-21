# OurMap - Event Discovery Platform

## Overview

OurMap is a location-based event discovery and social networking platform that helps users find, create, and participate in local events. The application is built as a modern single-page application (SPA) with a focus on user experience, visual appeal, and interactive map-based event browsing. The platform targets Brazilian Portuguese-speaking users and aims to transform cities into "maps of opportunities" by connecting people through events like parties, concerts, workshops, and meetups.

## Recent Changes (October 2025)

- **Migration from Lovable to Replit**: Successfully migrated the project from Lovable to Replit environment
- **Architecture Decision**: Maintained frontend-only structure using Vite dev server (no backend) as recommended by architect
- **Development Server**: Configured to run on port 5000 with host 0.0.0.0 for Replit compatibility
- **Package Cleanup**: Removed unnecessary backend dependencies (Express, tsx, drizzle) that were added during initial migration attempt

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR (Hot Module Replacement)
- **React Router** for client-side routing (currently minimal with Index and NotFound pages)

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives
- Extensive use of Radix UI components for accessibility and consistent behavior
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CVA (class-variance-authority)** for variant-based component styling

**Design System**
- Custom color scheme centered around a vibrant pink/red primary color (HSL: 350, 89%, 60%)
- Pacifico font for branding/logo elements
- Comprehensive design tokens defined in CSS variables (colors, gradients, shadows)
- Mobile-first responsive design approach
- Custom shadow and glow effects for enhanced visual appeal

**State Management**
- **TanStack Query v5** (React Query) for server state management and data fetching
- React hooks for local component state
- No global state management library currently implemented

**Form Handling**
- **React Hook Form** with **Zod** resolvers for type-safe form validation
- Integration with shadcn/ui form components

### Component Structure

**Page Components**
- `Index.tsx` - Main landing page composed of multiple sections
- `NotFound.tsx` - 404 error page with basic navigation

**Feature Sections** (Landing Page)
- `Hero` - Primary call-to-action section with hero image and branding
- `Features` - Three-column feature showcase (Discover, Connect, Organize)
- `HowItWorks` - Three-step process explanation
- `CTA` - Call-to-action section encouraging user signup
- `Footer` - Site footer with navigation and social links

**Shared Components**
- `Logo` - Branded logo component with MapPin, PartyPopper, and Calendar icons
- Complete shadcn/ui component library (40+ components)

### Styling Architecture

**Tailwind Configuration**
- Custom color palette extending the default theme
- CSS custom properties for dynamic theming support
- Path aliases configured (@/ points to src/)
- Custom font family (Pacifico) for branding

**Theme Support**
- **next-themes** integration for dark/light mode switching
- CSS variables defined for both light and dark themes
- Gradient definitions for hero sections and visual effects

### Development Tooling

**TypeScript Configuration**
- Relaxed type checking (strict: false) for faster development
- Path aliases for clean imports
- Multiple tsconfig files (app, node) for different contexts

**Linting**
- ESLint with TypeScript support
- React Hooks and React Refresh plugins
- Unused variables checking disabled for development flexibility

**Code Quality**
- Component tagging via lovable-tagger in development mode
- Hot module replacement for instant feedback

### Build & Deployment

**Build Process**
- Vite build targeting ES2020
- Asset optimization and bundling
- Preview mode available via `npm run preview`

**Development Server**
- Configured to run on host 0.0.0.0:5000 for Replit environment
- Vite dev server with HMR (Hot Module Replacement)
- Workflow: "Start application" runs `npm run dev`

### External Link Strategy

The application currently links to an external web app (`https://app.ourmap.com.br`) for the actual application functionality, suggesting this repository contains the marketing/landing page while the core application logic resides elsewhere.

## External Dependencies

### UI & Component Libraries
- **@radix-ui/react-*** - Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, select, etc.)
- **shadcn/ui** - Pre-built component system based on Radix UI
- **lucide-react** - Icon library for consistent iconography
- **cmdk** - Command menu component
- **embla-carousel-react** - Carousel/slider functionality
- **input-otp** - OTP input component
- **next-themes** - Theme management

### Form & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** (implied) - Schema validation

### Data Fetching
- **@tanstack/react-query** - Server state management and caching

### Styling
- **tailwindcss** - Utility-first CSS framework
- **autoprefixer** - CSS vendor prefixing
- **class-variance-authority** - Variant-based styling
- **clsx** - Conditional className utility
- **tailwind-merge** - Tailwind class merging

### Utilities
- **date-fns** - Date manipulation and formatting
- **react-day-picker** - Date picker component

### Development Tools
- **@vitejs/plugin-react-swc** - React plugin with SWC for fast refresh
- **typescript-eslint** - TypeScript linting
- **eslint-plugin-react-hooks** - React Hooks linting rules
- **lovable-tagger** - Development component tagging

### External Services
- **Google Fonts** - Pacifico font loaded via CDN
- **app.ourmap.com.br** - External application platform (linked for actual app functionality)

### Asset Management
- Image assets stored in `src/assets/` directory
- Static files in `public/` directory
- robots.txt configured to allow all crawlers