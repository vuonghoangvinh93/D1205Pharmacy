# Pharma Store - Next.js Conversion

This is a modern Next.js conversion of the Pharma pharmacy e-commerce template. It features a responsive design and interactive product catalog.

## Features

- ✅ Home page with hero banner and product showcases
- ✅ Product catalog with filtering and search
- ✅ Individual product detail pages
- ✅ Shopping cart functionality
- ✅ Checkout process
- ✅ Order confirmation page
- ✅ About and Contact pages
- ✅ Responsive mobile-first design
- ✅ Modern React components with hooks
- ✅ Server-side rendering capabilities

## Project Structure

```
D1205Pharmacy/
├── app/                          # Next.js app directory
│   ├── layout.js                 # Root layout
│   ├── layout.css                # Layout styles
│   ├── globals.css               # Global styles
│   ├── page.js                   # Home page
│   ├── page.css                  # Home page styles
│   ├── about/
│   │   ├── page.js              # About page
│   │   └── about.css            # About styles
│   ├── cart/
│   │   ├── page.js              # Shopping cart
│   │   └── cart.css             # Cart styles
│   ├── checkout/
│   │   ├── page.js              # Checkout page
│   │   └── checkout.css         # Checkout styles
│   ├── contact/
│   │   ├── page.js              # Contact page
│   │   └── contact.css          # Contact styles
│   ├── shop/
│   │   ├── page.js              # Shop page
│   │   └── shop.css             # Shop styles
│   ├── shop-single/
│   │   ├── page.js              # Product detail page
│   │   └── shop-single.css      # Product detail styles
│   └── thankyou/
│       ├── page.js              # Thank you page
│       └── thankyou.css         # Thank you styles
├── components/                   # Reusable React components
│   ├── Header.js                # Navigation header
│   ├── Header.css               # Header styles
│   ├── Footer.js                # Footer component
│   ├── Footer.css               # Footer styles
│   ├── ProductCard.js           # Product card component
│   └── ProductCard.css          # Product card styles
├── public/                       # Static assets
│   ├── images/                  # Product and page images
│   ├── fonts/                   # Icon fonts
│   └── ...
├── package.json                 # Dependencies
├── next.config.js               # Next.js configuration
└── jsconfig.json                # JavaScript configuration

```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd d:\work_space\D1205Pharmacy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production bundle
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Pages

### Public Pages

- **Home** (`/`) - Landing page with featured products and testimonials
- **Shop** (`/shop`) - Product catalog with filters and pagination
- **Product Detail** (`/shop-single/[id]`) - Individual product page
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Order checkout form
- **Thank You** (`/thankyou`) - Order confirmation

## Components

### Header
Responsive navigation bar with:
- Logo and site title
- Main navigation menu
- Search functionality
- Shopping cart link
- Mobile menu toggle

### Footer
Footer section with:
- Company information
- Quick links
- Contact details
- Copyright information

### ProductCard
Reusable product card component displaying:
- Product image
- Product name
- Price (with sale price if applicable)
- Sale badge

## Styling

The project uses CSS modules and global styles:

- **Global Styles** (`app/globals.css`) - Base styling and utility classes
- **Layout Styles** (`app/layout.css`) - Header, footer, and navigation styles
- **Page-Specific Styles** - Individual CSS files for each page
- **Component Styles** - Scoped styles for reusable components

## Future Enhancements

- [ ] Integrate with backend API for product data
- [ ] Add user authentication
- [ ] Implement payment gateway integration (Stripe, PayPal)
- [ ] Add product reviews and ratings
- [ ] Create admin dashboard for product management
- [ ] Implement search and advanced filtering
- [ ] Add wishlist functionality
- [ ] Email notifications for orders
- [ ] Product inventory management
- [ ] Multiple language support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel

The easiest way to deploy a Next.js app is to use Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy

```bash
npm install -g vercel
vercel
```

### Manual Deployment

```bash
npm run build
npm start
```

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- CSS modules for scoped styling
- Responsive design for all devices

## License

This template is made with ❤️ by [Colorlib](https://colorlib.com)

## Support

For issues and questions, please create an issue in the repository or contact the development team.
