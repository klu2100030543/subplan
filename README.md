# 🚀 BasicBros Marketplace - Subscription Management System

A modern, full-stack subscription management application built with React, TypeScript, and Express.js. This application provides a complete subscription flow for BasicBros Marketplace, allowing users to select plans, choose subscription periods, register, and complete payments.

## ✨ Features

### 🎯 Core Functionality
- **📋 Subscription Plan Selection** - Choose from Free, Standard, and Pro plans
- **📅 Period Selection** - Flexible subscription periods (1, 12, 24, 48 months) with dynamic pricing
- **📝 User Registration** - Complete registration form with validation
- **💳 Payment Processing** - Integrated payment flow with order summary
- **✅ Order Confirmation** - Success page with order details and auto-redirect

### 🎨 User Experience
- **🔄 Progress Tracking** - Visual progress bar across all steps
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **⚡ Real-time Validation** - Form validation with immediate feedback
- **🛡️ Navigation Guards** - Prevents access to pages without prerequisites
- **🎯 State Management** - Centralized state management with React Context

### 🛠️ Technical Features
- **⚛️ React 18** - Latest React features with TypeScript
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🔧 Vite** - Fast build tool and development server
- **📦 Express.js** - Backend API server
- **🌐 React Router** - Client-side routing
- **📊 React Query** - Data fetching and caching
- **🎭 ShadCN UI** - Beautiful, accessible UI components

## 🏗️ Project Structure

```
curry-hub/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # ShadCN UI components
│   │   ├── Header.tsx     # Main header component
│   │   └── ProgressBar.tsx # Subscription flow progress
│   ├── context/           # React Context providers
│   │   └── SubscriptionContext.tsx # Subscription state management
│   ├── pages/             # Application pages
│   │   ├── Index.tsx      # Landing page (redirects to plans)
│   │   ├── SubscriptionPlans.tsx # Plan selection
│   │   ├── PeriodSelection.tsx # Period selection
│   │   ├── Register.tsx   # User registration
│   │   ├── Payment.tsx    # Payment processing
│   │   ├── ThankYou.tsx   # Order confirmation
│   │   └── NotFound.tsx   # 404 page
│   ├── lib/               # Utility functions
│   ├── hooks/             # Custom React hooks
│   └── global.css         # Global styles
├── server/                # Backend Express.js server
│   ├── index.ts           # Server entry point
│   ├── node-build.ts      # Production server build
│   └── routes/            # API routes
├── shared/                # Shared code between client and server
│   └── api.ts             # Shared API types
├── netlify/               # Netlify serverless functions
│   └── functions/         # Serverless API endpoints
├── public/                # Static assets
└── dist/                  # Build output (generated)
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/klu2100030543/subplan.git
   cd subplan
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm test         # Run tests
pnpm typecheck    # TypeScript type checking
pnpm format.fix   # Format code with Prettier
```

## 📱 Application Flow

### 1. **Subscription Plans** (`/subscription-plans`)
- Choose from Free, Standard, or Pro plans
- View features and pricing for each plan
- Interactive plan cards with hover effects

### 2. **Period Selection** (`/period-selection`)
- Select subscription duration (1, 12, 24, 48 months)
- Dynamic pricing with discounts for longer periods
- Visual progress indicator

### 3. **User Registration** (`/register`)
- Complete registration form with validation
- Real-time form validation and error messages
- Secure password requirements

### 4. **Payment Processing** (`/payment`)
- Order summary with selected plan and period
- Payment method selection (Ideapay)
- Simulated payment processing

### 5. **Order Confirmation** (`/thank-you`)
- Success message with order details
- Auto-redirect after 5 seconds
- Reset subscription state

## 🎨 UI Components

The application uses **ShadCN UI** components for a consistent and beautiful design:

- **Cards** - Plan selection and period options
- **Forms** - Registration with validation
- **Buttons** - Interactive elements with hover states
- **Progress Bar** - Visual flow indicator
- **Icons** - React Icons for consistent iconography

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
PING_MESSAGE=BasicBros API

# Development
NODE_ENV=development
```

### Build Configuration

- **Vite** for fast development and optimized builds
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Router** for navigation

## 🚀 Deployment

### Netlify Deployment

The project is configured for Netlify deployment:

1. **Build Command**: `npm run build:client`
2. **Publish Directory**: `dist/spa`
3. **Functions Directory**: `netlify/functions`

### Production Build

```bash
# Build both client and server
pnpm build

# Start production server
pnpm start
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Type checking
pnpm typecheck
```

## 📦 Dependencies

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Query** - Data fetching
- **ShadCN UI** - UI components
- **React Icons** - Icon library

### Backend
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Development
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vite** - Development server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ShadCN UI** for beautiful, accessible components
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development experience
- **React Team** for the amazing framework

## 📞 Support

For support, email support@basicbros.com or create an issue in this repository.

---

**Built with ❤️ for BasicBros Marketplace**
