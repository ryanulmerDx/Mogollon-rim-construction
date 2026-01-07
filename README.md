# Mogollon Rim Construction - Next.js Website

A professional, modern website built with Next.js 14, TypeScript, and Tailwind CSS for a custom home builder in Heber-Overgaard, Arizona.

## Features

- **7 Complete Pages**: Home, About, Services, Projects, Process, Testimonials, Contact
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Fade-in effects and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Easy to Customize**: Well-organized code structure

## Pages

1. **Home** - Hero section with CTAs, services preview, featured projects
2. **About** - Company story, values, community commitment
3. **Services** - Detailed service descriptions with images
4. **Projects** - Portfolio gallery with 9 project cards
5. **Process** - 4-step build process explanation
6. **Testimonials** - Client reviews, stats, and FAQs
7. **Contact** - Contact form, business information, map placeholder

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Extract the project files** to your desired location

2. **Open terminal in the project directory**

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
mogollon-nextjs/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── process/
│   │   └── page.tsx
│   ├── testimonials/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    DEFAULT: '#2D5F3F',  // Main green color
    dark: '#1E3A27',
    light: '#3D7A52',
  },
  accent: {
    DEFAULT: '#E8F3ED',  // Light green background
  },
}
```

### Images

All images are currently placeholders from Unsplash. Replace with actual photos:
1. Hero images
2. About section photos
3. Project gallery images (9 total)
4. Service page images

### Contact Information

Update in these files:
- `components/Footer.tsx`
- `app/contact/page.tsx`

Current placeholders:
- Phone: (928) 468-0000
- Email: info@mogollonrimconstruction.com
- Location: Heber-Overgaard, AZ 85923
- ROC License: #000000

### Content

- Update company story in `app/about/page.tsx`
- Replace testimonials in `app/testimonials/page.tsx`
- Add real project descriptions in `app/projects/page.tsx`
- Customize services in `app/services/page.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Hosting Options

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Follow AWS deployment guide
- **Traditional Hosting**: Use `npm run build` then deploy the `.next` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Google Fonts** - Playfair Display (headings) + Inter (body)

## Future Enhancements

Consider adding:
- Backend integration for contact form
- CMS integration for easier content management
- Image gallery lightbox
- Blog section
- Client portal
- Virtual tours
- Before/After project comparisons
- Google Maps integration
- Search functionality

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

## License

This project is proprietary and confidential.

---

Built with ❤️ for Mogollon Rim Construction
