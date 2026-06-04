# AGENTS.md - CV Explorer Development Guide

This document provides guidelines for AI agents and developers to understand the CV Explorer project structure, extend functionality, and maintain code quality.

## Project Overview

**CV Explorer** is a modern, interactive CV web application built with React, TypeScript, and Vite. It enables users to showcase their professional profile through:
- A dynamic, interactive web interface with drill-down details
- Static PDF export functionality
- Responsive, mobile-friendly design

### Core Philosophy
- **Data-Driven**: CV content is managed as JSON, making it easy to update without code changes
- **Type-Safe**: Full TypeScript support ensures reliability and excellent IDE support
- **Modular**: Reusable components and hooks promote clean architecture
- **Performance-First**: Vite for fast builds, optimized rendering, client-side PDF generation

---

## Architecture

### Component Hierarchy

```
App (Main Container)
├── Header (Contact Info & PDF Download)
├── CVDisplay (Main Content)
│   ├── SectionContainer (Reusable section wrapper)
│   │   ├── ExperienceCard (Multiple)
│   │   ├── SkillsSection
│   │   │   └── SkillCard (Multiple, grouped by category)
│   │   ├── ProjectCard (Multiple)
│   │   └── EducationCard (Multiple)
└── Popup (Modal for drill-down details)
```

### State Management

- **usePopup Hook**: Manages modal visibility and content
  - Located in: `src/hooks/usePopup.ts`
  - Exports: `usePopup()` hook, `PopupContent` interface
  - Responsibility: Centralized popup state management

### Data Flow

```
cv-data.json (source)
    ↓
CVData (TypeScript interface)
    ↓
App.tsx (loads data)
    ↓
CVDisplay (renders sections)
    ↓
Individual Card Components (render items, handle clicks)
    ↓
usePopup (manages popup state)
    ↓
Popup.tsx (renders modal with details)
```

---

## Key Files & Responsibilities

### Core Application Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main application component, PDF download handler, event orchestration |
| `src/main.tsx` | Entry point, renders App into DOM |
| `src/types/cv.ts` | TypeScript interfaces: CVData, Experience, Skill, Project, Education, ContactInfo |
| `src/data/cv-data.json` | CV content in JSON format |
| `src/hooks/usePopup.ts` | Custom hook for popup state management |

### Component Files

| Component | Path | Responsibility |
|-----------|------|---|
| Header | `src/components/Header.tsx` | Display name, title, summary, contact info, PDF button |
| CVDisplay | `src/components/CVDisplay.tsx` | Render all sections conditionally based on data |
| SectionContainer | `src/components/SectionContainer.tsx` | Reusable section wrapper with title styling |
| ExperienceCard | `src/components/ExperienceCard.tsx` | Display job role with hover effects, drill-down trigger |
| SkillsSection | `src/components/SkillsSection.tsx` | Group skills by category in a grid layout |
| ProjectCard | `src/components/ProjectCard.tsx` | Display project with tech stack and links |
| EducationCard | `src/components/EducationCard.tsx` | Display education entry |
| Popup | `src/components/Popup.tsx` | Reusable modal component with keyboard support |

### Styling Files

| File | Scope |
|------|-------|
| `src/index.css` | Global variables, reset, typography |
| `src/App.css` | App-level styles, print media queries |
| `src/styles/Header.css` | Header component styling |
| `src/styles/CVDisplay.css` | Main display container, print styles |
| `src/styles/*.css` | Component-specific styles (one per component) |

---

## Development Patterns

### Adding a New CV Section

**Example: Adding a "Languages" section**

1. **Define the Data Type** (`src/types/cv.ts`)
   ```typescript
   export interface Language {
     id: string;
     name: string;
     proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
     details?: string;
   }
   
   // Add to CVData interface:
   // languages?: Language[];
   ```

2. **Add Data** (`src/data/cv-data.json`)
   ```json
   "languages": [
     {
       "id": "lang-1",
       "name": "English",
       "proficiency": "Native"
     }
   ]
   ```

3. **Create Card Component** (`src/components/LanguageCard.tsx`)
   ```typescript
   import React from 'react';
   import { Language } from '../types/cv';
   import '../styles/LanguageCard.css';

   interface LanguageCardProps {
     language: Language;
     onDetailsClick: () => void;
   }

   export const LanguageCard: React.FC<LanguageCardProps> = ({
     language,
     onDetailsClick,
   }) => {
     return (
       <div className="language-card" onClick={onDetailsClick}>
         <span className="language-name">{language.name}</span>
         <span className="language-proficiency">{language.proficiency}</span>
       </div>
     );
   };
   ```

4. **Create Styling** (`src/styles/LanguageCard.css`)
   ```css
   .language-card {
     /* See ExperienceCard.css for patterns */
   }
   ```

5. **Update CVDisplay** (`src/components/CVDisplay.tsx`)
   ```typescript
   // Add import
   import { LanguageCard } from './LanguageCard';
   
   // Add to JSX:
   {cv.languages && cv.languages.length > 0 && (
     <SectionContainer title="Languages">
       <div className="languages-grid">
         {cv.languages.map((lang) => (
           <LanguageCard
             key={lang.id}
             language={lang}
             onDetailsClick={() => onLanguageClick(lang)}
           />
         ))}
       </div>
     </SectionContainer>
   )}
   ```

6. **Update App** (`src/App.tsx`)
   ```typescript
   // Add handler
   const handleLanguageClick = (lang: Language) => {
     if (lang.details) {
       openPopup({
         title: lang.name,
         body: lang.details,
       });
     }
   };
   
   // Pass to CVDisplay
   onLanguageClick={handleLanguageClick}
   ```

### Modifying Popup Behavior

**Location**: `src/hooks/usePopup.ts`

To change popup animation delay, keyboard behavior, or add new features:
1. Edit the hook to add/modify state or functions
2. Update `PopupContent` interface if changing popup data structure
3. Update `Popup.tsx` component if changing UI behavior

### Styling Guidelines

- **Use CSS Variables**: Defined in `src/index.css` for consistent theming
- **Responsive Design**: Use `@media (max-width: ...)` patterns seen in existing CSS
- **Hover Effects**: Apply subtle transforms and box-shadows from pattern examples
- **Transitions**: Use `--transition-*` CSS variables for consistency

---

## TypeScript Interfaces Reference

### CVData (Root)
```typescript
interface CVData {
  fullName: string;           // Name displayed in header
  title: string;              // Job title/headline
  summary?: string;           // Brief professional summary
  contact: ContactInfo;       // Contact information
  experiences: Experience[];  // Work history
  skills: Skill[];            // Skills by category
  projects?: Project[];       // Featured projects
  education?: Education[];    // Educational background
  theme?: {                   // Optional theme customization
    primaryColor?: string;
    secondaryColor?: string;
  };
  avatarImage?: string;       // Optional profile image path
  updatedDate?: string;       // Last updated date
}
```

### Other Key Interfaces
- `ContactInfo`: Email, phone, social links, location
- `Experience`: Company, position, dates, summary, details, achievements, technologies
- `Skill`: Name, category, proficiency level (1-5), optional details
- `Project`: Name, description, technologies, optional link and details
- `Education`: Institution, degree, field, graduation date, optional details

---

## PDF Export Implementation

**Location**: `src/App.tsx` (`handleDownloadPDF` function)

### How It Works
1. Captures the CV element using `html2canvas`
2. Creates a PDF document with jsPDF
3. Handles multi-page PDFs by calculating page heights
4. Saves PDF with the user's name as filename

### To Modify
- Change canvas options in `html2canvas()` call (scale, backgroundColor, etc.)
- Adjust PDF margins by modifying imgWidth/pageHeight
- Customize filename format in `pdf.save()` call

---

## Common Tasks

### Task: Update CV Color Scheme
1. Edit `--primary-color` and `--primary-dark` in `src/index.css`
2. Update `theme` object in `src/data/cv-data.json` if desired
3. CSS will automatically apply to all components

### Task: Add Animation to Cards
1. Add CSS animations in component's CSS file
2. Use existing animation patterns from `Popup.css` as reference
3. Apply animation class to the card element

### Task: Add Social Media Links
1. Add to `ContactInfo` interface in `src/types/cv.ts`
2. Update `cv-data.json` with new links
3. Add rendering logic in `Header.tsx`

### Task: Change PDF Export Behavior
1. Edit `handleDownloadPDF` in `src/App.tsx`
2. Modify html2canvas or jsPDF options
3. Test PDF output

---

## Debugging Tips

### Issue: Popup not showing details
- Verify the data has a `details` field populated
- Check `usePopup` hook is properly initialized
- Ensure click handler is calling `openPopup()`

### Issue: PDF export looks misaligned
- Check element margins/padding in CSS
- Adjust `html2canvas` scale parameter
- Test with different page heights in `handleDownloadPDF`

### Issue: Styles not applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Verify CSS file is imported in component
- Check CSS specificity and selector accuracy

---

## Performance Considerations

- **Code Splitting**: Vite automatically splits code; no manual configuration needed
- **Images**: Consider using optimized images for avatar; provide WebP with fallback
- **Large CVs**: Current architecture handles 100+ items efficiently
- **PDF Generation**: Large PDFs (~20+ pages) may take 2-3 seconds

---

## Testing Guidelines

### Manual Testing Checklist
- [ ] All sections render with sample data
- [ ] Clicking cards opens popup with correct content
- [ ] Popup closes on overlay click and ESC key
- [ ] PDF download generates valid file
- [ ] Mobile view is responsive
- [ ] Links open in new tabs
- [ ] Print preview looks correct

### Deployment Checklist
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] All dependencies are in package.json
- [ ] README.md is up to date
- [ ] Sample CV data is realistic or replaced

---

## Extending the Project

### Possible Enhancements
1. **Dark Mode Toggle**: Add theme switcher in Header
2. **Multiple CV Support**: Load different CV files dynamically
3. **Export Options**: Add CSV/JSON export alongside PDF
4. **Search/Filter**: Add skill/experience search capability
5. **Analytics**: Track which sections users interact with most
6. **Backend Integration**: Store CV data in database, enable updates
7. **Animation Library**: Integrate Framer Motion for advanced animations

### Integration Points
- Consider creating a `src/api/` folder for backend API calls
- Update `CVData` interface to support dynamic field validation
- Consider context API for global state if backend integration added

---

## Code Style & Standards

- **Naming**: PascalCase for components, camelCase for functions/variables
- **Types**: Always define TypeScript interfaces for complex objects
- **Props**: Use explicit interface definitions for component props
- **Comments**: Add JSDoc comments for non-obvious functions
- **File Organization**: Keep related files in same directory (components with their CSS)

---

## Resources & References

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [html2canvas Documentation](https://html2canvas.hertzen.com/)

---

## Contact & Support

For questions about this project structure or implementation details, refer to:
1. Component inline comments
2. This AGENTS.md file
3. README.md for user-facing information
4. TypeScript interfaces in `src/types/cv.ts` for data structure

---

**Last Updated**: June 1, 2024
**Version**: 1.0.0
