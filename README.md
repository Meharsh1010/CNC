# Core Networking Classes Website - React Redesign

A modern, responsive React-based redesign of the Core Networking Classes website with full functionality, touch-interactive features, and optimized performance.

## 🚀 Features

### ✅ Implemented
- **Modern UI/UX** with responsive design (mobile, tablet, desktop)
- **Navigation System** with sticky header and mega-menu
- **Hero Carousel** with auto-scrolling slides
- **Course Management** with filtering and detailed course pages
- **Blog Section** with search, categories, and individual post views
- **Course Enquiry System** with localStorage persistence
- **Testimonials Slider** with auto-rotation
- **Statistics Banner** displaying key metrics
- **Victory Section** with success stories and placement info
- **Contact Form** with validation
- **Dynamic Category Pages** (Routing, Switching, Security, etc.)
- **Touch-Interactive** gestures and smooth animations
- **Mobile-First** responsive design
- **Performance Optimized** with CSS modules and code splitting ready

## 📦 Tech Stack

- **Frontend**: React 18+
- **Routing**: React Router DOM v6
- **Styling**: CSS Modules + CSS Variables
- **State Management**: Context API
- **Build Tool**: Vite

## 🛠️ Setup & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5173
```

## 🎯 Key Pages

- **Home** (`/`) - Landing page with hero, courses, testimonials
- **Courses** (`/courses`) - All courses with filters
- **Course Details** (`/courses/:courseId`) - Individual course info
- **Blog** (`/blog`) - Blog listing with search
- **Blog Post** (`/blog/:slug`) - Individual blog article
- **Contact** (`/contact`) - Contact form
- **Victory** (`/victory`) - Success stories & placements
- **Category Pages** (`/routing`, `/switching`, `/security`) - Category-specific courses

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── context/            # Context API state management
├── services/           # Data service layer
├── data/              # Mock JSON data
└── styles/            # Global styles & variables
```

## 💾 Data Management

All data uses localStorage for enquiry forms and JSON files for content:
- Courses: `/src/data/courses.json`
- Testimonials: `/src/data/testimonials.json`
- Blogs: `/src/data/blogs.json`

## 🎨 Customization

Edit colors in `/src/styles/variables.css`:
```css
--primary-color: #1a5f7a;
--secondary-color: #f39c12;
--accent-color: #2980b9;
```

## 📱 Mobile Responsive

- Mobile-first design
- Touch-friendly buttons (44x44px minimum)
- Hamburger navigation menu
- Responsive grids and layouts
- Works on all major devices

## 🚀 Production Build

```bash
npm run build
# Creates optimized production build in /dist
```

## 🔄 Future Enhancements

1. Node.js/Express backend
2. MongoDB database
3. Admin panel
4. User authentication
5. Payment integration
6. Real email notifications

## 📖 Course Data Format

Add new courses to `/src/data/courses.json`:
```json
{
  "Enterprise": [
    {
      "id": "course-id",
      "name": "Course Name",
      "category": "Enterprise",
      "duration": "6 months",
      "level": "Beginner",
      "description": "Course description",
      "features": ["Feature 1", "Feature 2"],
      "syllabus": ["Topic 1", "Topic 2"],
      "trainer": "Trainer Name",
      "price": "$500"
    }
  ]
}
```

## 📞 Contact Info

- Email: info@cnc.com
- Phone: +91-9876-543210
- Hours: Mon-Sat, 10 AM - 10 PM IST

---

**Version**: 1.0.0 (MVP)
**Status**: ✅ Running on http://localhost:5173
**Last Updated**: June 21, 2024
