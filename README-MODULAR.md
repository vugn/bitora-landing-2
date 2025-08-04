# Bitora Landing Page - Modular Architecture

This is a fully modular and configurable landing page for Bitora Protocol, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏗️ Architecture Overview

### 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Main page (original)
│   ├── page-new.tsx          # New modular page
│   └── globals.css           # Global styles
├── components/
│   ├── background/
│   │   └── matrix-background.tsx
│   ├── navigation/
│   │   └── navigation.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── roadmap-section.tsx
│   │   ├── code-genesis-section.tsx
│   │   ├── other-sections.tsx
│   │   └── footer.tsx
│   ├── stats/
│   │   └── live-stats.tsx
│   └── ui/                   # Shadcn/ui components
├── config/
│   ├── site.ts              # Main site configuration
│   └── roadmap.ts           # Roadmap data configuration
├── hooks/
│   └── use-api-data.ts      # Data fetching hooks
├── lib/
│   ├── api.ts               # API client
│   └── utils.ts             # Utilities
└── .env.example             # Environment variables template
```

## 🔧 Configuration System

### Site Configuration (`config/site.ts`)

Centralized configuration for:
- Site metadata
- Navigation items
- Hero section content
- Live stats settings
- Social media links
- Footer content
- API endpoints

### Roadmap Configuration (`config/roadmap.ts`)

Dedicated configuration for:
- Roadmap phases
- Phase statuses
- Timeline data
- Key outputs

### Environment Variables (`.env.example`)

Configure different environments:
- API endpoints
- Feature toggles
- Social media URLs
- Analytics IDs

## 🚀 Getting Started

### 1. Setup Environment

```bash
# Copy environment template
cp .env.example .env.local

# Install dependencies
npm install # or pnpm install
```

### 2. Configure Settings

Edit `config/site.ts` to customize:
- Site name and description
- Navigation items
- Hero section content
- Social media links

Edit `config/roadmap.ts` to update:
- Roadmap phases
- Timeline dates
- Development status

### 3. Switch to Modular Version

Replace `app/page.tsx` with `app/page-new.tsx`:

```bash
mv app/page.tsx app/page-old.tsx
mv app/page-new.tsx app/page.tsx
```

### 4. Run Development Server

```bash
npm run dev # or pnpm dev
```

## 📡 API Integration

### Enable Real API

1. Set up your API endpoints
2. Update `.env.local`:
   ```
   NEXT_PUBLIC_API_ENABLED=true
   NEXT_PUBLIC_API_URL=https://your-api.com
   ```

### Available Hooks

- `useStats()` - Live statistics data
- `useRoadmap()` - Roadmap data
- `useApiData()` - Generic API data fetching

### API Client

The `lib/api.ts` provides a ready-to-use API client:

```typescript
import { apiClient } from '@/lib/api'

// Get stats
const stats = await apiClient.getStats()

// Get roadmap
const roadmap = await apiClient.getRoadmap()
```

## 🎨 Customization

### Adding New Sections

1. Create component in `components/sections/`
2. Add to main page in `app/page.tsx`
3. Update navigation in `config/site.ts`

### Styling

- Uses Tailwind CSS
- Shadcn/ui components
- Consistent design system
- Dark theme optimized

### Data Sources

Components accept props for:
- Custom data
- API integration
- Event handlers
- Configuration overrides

## 🔗 Section Management

### Hero Section

```typescript
<HeroSection 
  onButtonClick={handleButtonClick}
  customStats={stats}
  customContent={{
    title: "Custom Title",
    taglines: ["Custom tagline"],
    buttons: [...]
  }}
/>
```

### Roadmap Section

```typescript
<RoadmapSection 
  data={customRoadmapData}
  onPhaseClick={handlePhaseClick}
/>
```

### Navigation

```typescript
<Navigation onSectionClick={handleSectionClick} />
```

## 📊 Live Stats

Configure in `config/site.ts`:

```typescript
stats: {
  baseValues: { /* default values */ },
  updateInterval: 2000,
  variance: { /* update ranges */ }
}
```

Use with API:

```typescript
const { stats, loading, error } = useStats(true) // true = enable API
```

## 🗺️ Roadmap Management

### Static Configuration

Edit `config/roadmap.ts` for static roadmap data.

### Dynamic API Integration

```typescript
const { roadmap, loading, error } = useRoadmap(true) // true = enable API
```

### Phase Interaction

Handle phase clicks:

```typescript
const handlePhaseClick = (phase) => {
  // Custom logic for phase interactions
  console.log('Phase clicked:', phase)
}
```

## 🎯 Features

- ✅ Fully modular architecture
- ✅ TypeScript support
- ✅ API-ready with fallbacks
- ✅ Responsive design
- ✅ Dark theme optimized
- ✅ Animation support (Framer Motion)
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Configurable without code changes
- ✅ Easy deployment

## 📱 Responsive Design

All components are mobile-first and responsive:
- Mobile: Optimized layouts
- Tablet: Enhanced spacing
- Desktop: Full feature set

## 🚀 Deployment

### Environment Setup

For production:

```bash
# .env.production
NEXT_PUBLIC_API_ENABLED=true
NEXT_PUBLIC_API_URL=https://api.bitora.com
```

### Build

```bash
npm run build
npm start
```

## 🛠️ Development Tips

### Adding New API Endpoints

1. Update `config/site.ts` endpoints
2. Add method to `lib/api.ts`
3. Create hook in `hooks/use-api-data.ts`
4. Use in component

### Custom Sections

1. Create in `components/sections/`
2. Follow existing patterns
3. Accept props for data and handlers
4. Add to main page

### Configuration Changes

Most changes only require updating:
- `config/site.ts` - Main configuration
- `config/roadmap.ts` - Roadmap data
- `.env.local` - Environment settings

No code changes needed for:
- Content updates
- Navigation changes
- Social media links
- API endpoints
- Feature toggles

This modular architecture makes the landing page highly maintainable and easy to extend with real API integration.
