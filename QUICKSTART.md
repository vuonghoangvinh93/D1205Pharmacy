# Quick Start Guide

## Installation (5 minutes)

### Step 1: Install Dependencies
```bash
cd d:\work_space\D1205Pharmacy
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## Project Highlights

### 🎨 Color Scheme
- Primary: `#51eaea` (Cyan)
- Dark: `#25262a` (Dark Gray)
- Light: `#f9f9f9` (Light Gray)
- Text: `#8c92a0` (Medium Gray)

### 📱 Responsive Breakpoints
- Mobile: 0px - 575px
- Tablet: 576px - 991px
- Desktop: 992px+

### 🗂️ Main Directories
```
app/              → Pages (routes)
components/       → Reusable React components
public/           → Static files (images, fonts)
```

## Key Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page |
| Shop | `/shop` | Product catalog |
| Product | `/shop-single/[id]` | Product details |
| Cart | `/cart` | Shopping cart |
| Checkout | `/checkout` | Order form |
| About | `/about` | Company info |
| Contact | `/contact` | Contact form |
| Thank You | `/thankyou` | Order confirmation |

## Common Tasks

### Add a New Page
1. Create folder in `app/` directory
2. Create `page.js` file
3. Add component code
4. Import Header and Footer
5. Add route-specific CSS

### Add a New Component
1. Create file in `components/` directory
2. Create corresponding CSS file
3. Export component as default
4. Import in pages where needed

### Update Styling
- Global styles: `app/globals.css`
- Layout styles: `app/layout.css`
- Page styles: `app/[page]/[page].css`
- Component styles: `components/[Component].css`

### Add Images
1. Place images in `public/images/`
2. Import with Next.js Image component:
   ```jsx
   import Image from 'next/image'
   
   <Image 
     src="/images/product.jpg" 
     alt="Product"
     width={300}
     height={300}
   />
   ```

## Available Commands

```bash
# Development
npm run dev          # Start dev server on :3000

# Production
npm run build        # Build for production
npm start           # Start production server

# Quality
npm run lint        # Run ESLint
```

## Important Notes

1. **Images & Fonts**: Copy original assets from the old project to `public/`
2. **Product Data**: Currently using mock data in components
3. **Backend**: Ready to connect to API endpoints
4. **Styling**: All CSS is modular and scoped

## Next Steps

1. ✅ Copy images and fonts to `public/`
2. Copy product data from database
3. Create API routes for backend
4. Connect shopping cart to state management
5. Deploy to Vercel

## Useful Links

- [Next.js Docs](https://nextjs.org/docs) - Full documentation
- [React Docs](https://react.dev) - React reference
- [Vercel Deploy](https://vercel.com/new) - Deploy your app

## Need Help?

Check the `README.md` and `MIGRATION_GUIDE.md` files for more detailed information.

---

Happy coding! 🚀
