# CLAXIC Website

> Technology · Innovation · Education

A complete, modern, responsive company website for **CLAXIC** — built with React, Vite, Tailwind CSS and React Router.

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18+ |
| Vite | 6+ |
| Tailwind CSS | 4 (Vite plugin) |
| React Router | 6+ |
| Lucide React | latest |

---

## Quick Start

```bash
# 1. Clone / open the project
cd claxic-website

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and fill in your values (see section below)

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
# Public Google Sheets / Apps Script endpoint for the Academy course catalogue
VITE_COURSES_API_URL=YOUR_PUBLIC_COURSE_CATALOGUE_ENDPOINT

# WhatsApp Business number — digits only, no + or spaces
# Example: 911234567890 for +91 12345 67890
VITE_CLAXIC_WHATSAPP=YOUR_BUSINESS_WHATSAPP_NUMBER
```

> ⚠️ Never commit your real `.env` file. `.env.example` is safe to commit.

---

## Google Sheets Course Catalogue Setup

### 1. Create the spreadsheet

- Name: `Claxic Academy Course Catalogue`
- Tab name: `Courses`

### 2. Column headers (Row 1)

| slug | title | category | level | description | duration | format | price | status | coverImage |
|------|-------|----------|-------|-------------|----------|--------|-------|--------|------------|

### 3. Add courses

Fill in rows with your course data. Set `status` to:
- `Published` — visible on the website
- `Draft` — hidden
- `Closed` — hidden

### 4. Deploy with Google Apps Script (recommended for CORS)

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Paste the following script:

```javascript
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('Courses');
  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];
  const courses = rows.slice(1).map(row =>
    Object.fromEntries(headers.map((h, i) => [h, row[i]]))
  );
  const published = courses.filter(c => c.status === 'Published');
  return ContentService
    .createTextOutput(JSON.stringify({ courses: published }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy → New deployment → Web app**
4. Set **Who has access** to **Anyone**
5. Copy the deployment URL and paste it as `VITE_COURSES_API_URL` in your `.env`

### 5. Alternative: Published CSV

- In Google Sheets, go to **File → Share → Publish to web**
- Choose the `Courses` tab and **Comma-separated values (.csv)**
- Copy the link and use it as `VITE_COURSES_API_URL`

The `coursesApi.js` utility handles both JSON and CSV formats automatically.

---

## WhatsApp Integration

All WhatsApp links use the number set in `VITE_CLAXIC_WHATSAPP`. Format:
- International format, digits only
- Example: `919876543210` for +91 98765 43210

Enquiry buttons include prefilled messages relevant to the context (project enquiry, course enquiry, etc.).

---

## Replacing the Logo

The current `public/logo.svg` is a text-based SVG placeholder using the brand red-orange `#FF2B12`.

**To replace with your official logo:**

1. Export your logo as `logo.svg` (SVG with transparent background preferred) or `logo.png`
2. Place it in the `public/` folder, replacing `logo.svg`
3. If using a PNG, update the `<img src="/logo.svg" ...>` references in:
   - `src/components/Header.jsx`
   - `src/components/Footer.jsx`

**Logo usage:**
- Header: normal colour on white background
- Footer: inverted white version (uses CSS `brightness-0 invert`)

---

## Replacing Cartoon Illustrations

All illustrations are inline SVG components in `src/assets/illustrations.jsx`.

To replace with your own artwork:

1. Export your illustration as an SVG file
2. Place it in `src/assets/`
3. Import and use it instead of the inline component:

```jsx
// Instead of:
import { HeroIllustration } from '../assets/illustrations';
<HeroIllustration className="w-full max-w-sm" />

// Use:
import heroImg from '../assets/my-hero.svg';
<img src={heroImg} alt="Hero illustration" className="w-full max-w-sm" loading="lazy" />
```

---

## Project Structure

```
claxic-website/
├── public/
│   └── logo.svg                  # Brand logo (replace with official asset)
├── src/
│   ├── assets/
│   │   └── illustrations.jsx     # Inline SVG cartoon illustrations
│   ├── components/
│   │   ├── Header.jsx            # Sticky nav with mobile menu
│   │   ├── Footer.jsx            # Dark footer
│   │   ├── WhatsAppButton.jsx    # Reusable WhatsApp CTA
│   │   ├── ServiceCard.jsx       # Technologies service cards
│   │   ├── CourseCard.jsx        # Academy course cards
│   │   ├── CourseCatalogue.jsx   # Fetches & renders courses
│   │   ├── FAQAccordion.jsx      # Accessible FAQ accordion
│   │   └── ContactForm.jsx       # Validated contact form
│   ├── data/
│   │   ├── services.js           # Technologies service data
│   │   └── faq.js                # FAQ data by category
│   ├── layouts/
│   │   └── MainLayout.jsx        # Header + content + Footer wrapper
│   ├── lib/
│   │   └── coursesApi.js         # Google Sheets fetch utility
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── TechnologiesPage.jsx
│   │   ├── AcademyPage.jsx
│   │   ├── FAQPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── TermsPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx                   # Router configuration
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
├── index.html                    # Document with SEO meta tags
├── vite.config.js                # Vite + Tailwind v4 config
├── .env.example                  # Environment variable template
└── package.json
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Claxic |
| `/technologies` | Claxic Technologies |
| `/academy` | Claxic Academy (courses included) |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `*` | 404 Not Found |

---

## Contact Form

The contact form validates all required fields on submit and on blur. Validation is accessible with ARIA attributes.

**Submission options:**
1. **With a form endpoint**: Set `VITE_FORM_ENDPOINT` in your `.env` to a service like [Formspree](https://formspree.io), [Basin](https://usebasin.com) or your own API.
2. **Without an endpoint**: The form detects this and shows a WhatsApp fallback with the user's details pre-populated.

```env
# Optional: form submission endpoint
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

---

## Deployment

### Netlify / Vercel

```bash
npm run build
```

Upload the `dist/` folder.

**Important for SPA routing**: Add a redirect rule so all routes serve `index.html`.

**Netlify** (`public/_redirects`):
```
/*  /index.html  200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Testing Checklist

### Navigation
- [ ] All 6 primary nav links navigate correctly
- [ ] Logo link returns to Home
- [ ] Active route is highlighted in nav
- [ ] Mobile hamburger menu opens and closes
- [ ] Mobile menu closes after link click

### Homepage
- [ ] Hero section loads with illustration and CTA buttons
- [ ] "Explore Technologies" goes to `/technologies`
- [ ] "Explore Academy" goes to `/academy`
- [ ] "Discuss a Project" goes to `/contact`

### Technologies
- [ ] All 5 service cards visible
- [ ] 4-step process displayed
- [ ] "Discuss Your Project" opens WhatsApp

### Academy
- [ ] Course catalogue shows loading state
- [ ] Configures correctly with `VITE_COURSES_API_URL`
- [ ] Only `Published` courses shown
- [ ] Empty state shown when no courses
- [ ] Error state shown with retry button
- [ ] "Enquire About This Course" opens WhatsApp with prefilled message

### FAQ
- [ ] All category sections visible
- [ ] Accordion opens and closes correctly
- [ ] Only one item open at a time

### Contact
- [ ] Required field validation on submit
- [ ] Inline validation on blur
- [ ] WhatsApp fallback shown when no endpoint configured
- [ ] Success state shows after successful submission

### Mobile & Responsive
- [ ] No horizontal overflow at 320px
- [ ] Illustrations scale correctly
- [ ] Touch targets are large enough
- [ ] Typography is readable on small screens

### Accessibility
- [ ] Skip to content link works (Tab on fresh load)
- [ ] All interactive elements keyboard-navigable
- [ ] Focus indicators visible
- [ ] Form error messages linked via aria-describedby
- [ ] Illustrations have alt text

---

## Adding a Real Email Address

The contact page currently uses WhatsApp as primary contact. When a business email is available:

1. Add a visible email link to `ContactPage.jsx`:
```jsx
<a href="mailto:hello@claxic.com" className="text-[#FF2B12] font-semibold hover:underline">
  hello@claxic.com
</a>
```

2. Consider adding it to the Footer as well.

---

## Customising FAQ Content

Edit `src/data/faq.js`. Each entry is:

```js
{
  category: 'Category Name',
  items: [
    { q: 'Question text', a: 'Answer text' },
  ]
}
```

---

## Licence

Claxic website — proprietary. All rights reserved.
