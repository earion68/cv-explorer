# CV Explorer 🚀

A modern, interactive web application that showcases your CV in both **dynamic** and **static** formats. Built with React, TypeScript, and Vite for blazing-fast performance.

## Features ✨

### Dynamic CV Rendering
- **Interactive Components**: Hover and click on experience cards, skills, and projects for detailed information
- **Popup Drill-downs**: Expand any section to explore more details without leaving the page
- **Smooth Animations**: Polished transitions and visual feedback for all interactions
- **Responsive Design**: Fully mobile-friendly interface that adapts to all screen sizes

### Static PDF Export
- **One-Click Download**: Generate a professional PDF version of your CV with a single click
- **Consistent Styling**: PDF layout matches the web version for a cohesive presentation
- **Print Optimization**: Built-in print styles ensure professional output

### Developer-Friendly
- **JSON-Based Data**: Easy to update your CV by editing a simple JSON file
- **TypeScript Support**: Full type safety across the entire application
- **Component Architecture**: Reusable, modular components for easy customization
- **Zero Build Configuration**: Pre-configured with Vite for instant HMR and fast builds

## Tech Stack 🛠️

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: CSS3 with CSS Modules (responsive design patterns)
- **PDF Export**: jsPDF + html2canvas
- **State Management**: React Hooks (usePopup)
- **Package Manager**: npm

## Project Structure 📁

```
src/
├── components/          # React components
│   ├── Header.tsx       # CV header with contact info
│   ├── CVDisplay.tsx    # Main CV display container
│   ├── ExperienceCard.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectCard.tsx
│   ├── EducationCard.tsx
│   ├── SectionContainer.tsx
│   └── Popup.tsx        # Reusable modal component
├── hooks/
│   └── usePopup.ts      # Custom hook for popup state management
├── types/
│   └── cv.ts            # TypeScript interfaces for CV data
├── data/
│   └── cv-data.json     # Your CV content
├── styles/              # Component-specific CSS files
│   ├── Header.css
│   ├── CVDisplay.css
│   ├── Popup.css
│   ├── ExperienceCard.css
│   ├── SkillsSection.css
│   ├── ProjectCard.css
│   ├── EducationCard.css
│   └── SectionContainer.css
├── App.tsx              # Main application component
├── App.css              # Global app styles
├── index.css            # Global reset & variables
└── main.tsx             # Entry point
```

## Getting Started 🎯

### Prerequisites
- Node.js 18+ (with npm)

### Installation

1. **Clone and install dependencies**
   ```bash
   npm install
   ```

2. **Update your CV data**
   Edit `src/data/cv-data.json` with your information:
   - Update personal info, contact details
   - Add your experiences with details for drill-downs
   - List your skills by category
   - Include projects and education

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory.

## Usage 📖

### Updating CV Data

Edit `src/data/cv-data.json` to customize your CV:

```json
{
  "fullName": "Your Name",
  "title": "Your Job Title",
  "summary": "Brief professional summary",
  "contact": {
    "email": "you@example.com",
    "phone": "+1 (555) 123-4567",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "website": "https://yourwebsite.com",
    "location": "City, Country"
  },
  "experiences": [...],
  "skills": [...],
  "projects": [...],
  "education": [...]
}
```

### Adding Drill-down Details

Each experience, skill, project, or education entry can have optional `details` field for popup content:

```json
{
  "id": "exp-1",
  "company": "TechCorp",
  "position": "Senior Developer",
  "details": "Detailed description shown in popup when clicked...",
  "achievements": ["Achievement 1", "Achievement 2"],
  "technologies": ["React", "TypeScript", "AWS"]
}
```

### Customizing Styling

- **Global Variables**: Edit CSS variables in `src/index.css`
- **Component Styles**: Modify component-specific CSS in `src/styles/`
- **Tailoring Layout**: Update component rendering in `src/components/`

## Available Scripts 📝

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Data Schema 📊

### CVData Interface

```typescript
interface CVData {
  fullName: string;
  title: string;
  summary?: string;
  contact: ContactInfo;
  experiences: Experience[];
  skills: Skill[];
  projects?: Project[];
  education?: Education[];
  theme?: { primaryColor?: string; secondaryColor?: string };
  avatarImage?: string;
  updatedDate?: string;
}
```

See `src/types/cv.ts` for complete interface definitions.

## PDF Export 📄

Click the **"📥 Download PDF"** button in the header to generate and download your CV as a PDF file. The PDF maintains the visual styling and layout of the web version.

## Deployment 🚀

### GitHub Pages

1. Update `vite.config.ts` to set the correct base path
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### Vercel, Netlify, or similar

Simply connect your repository and let the platform handle the build process. No additional configuration needed!

## Browser Support 🌐

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Tips 💡

1. **Change Color Scheme**: Update CSS variables in `src/index.css`
2. **Add New Sections**: Create new card components following the existing pattern
3. **Modify Popup Behavior**: Edit `src/hooks/usePopup.ts`
4. **Adjust Responsive Breakpoints**: Update media queries in component CSS files

## Performance ⚡

- **Vite**: Instant HMR and extremely fast builds
- **Code Splitting**: Automatic with Vite's native ES modules
- **Image Optimization**: Consider using image optimization services for your avatar
- **PDF Generation**: Client-side rendering eliminates backend requirements

## License 📜

This project is open source and available under the MIT License.

## Contributing 🤝

Feel free to fork this project and customize it for your needs. If you have improvements or bug fixes, consider submitting a pull request!

---

**Happy coding!** 🎉 If you find this project useful, please consider giving it a ⭐ on GitHub.

      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
