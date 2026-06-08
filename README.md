# Training Plan Generator 📊🚴

A powerful web application that generates personalized training plans for running and cycling events based on individual user profiles and event types.

## What This Project Does

This application creates customized training schedules tailored to your fitness goals, current ability level, and available training time. Whether you're preparing for your first 5K race or competing in a century-long bike ride, the generator adapts to your needs.

### Key Features

- **Multi-Sport Support**: Generate training plans for both running and cycling disciplines
- **Event Type Coverage**: Supports 8 different plan types including:
  - Beginner 5K
  - Beginner 10K
  - Half Marathon
  - Marathon
  - Century Ride (200+ miles)
  - FTP Improvement (fitness building)
  - Gravel Race
  - Criterium
- **Personalization**: Plans adapt based on:
  - Age
  - Current skill level
  - Weekly volume capacity
  - Active status
- **Interactive Interface**: Clean React-based UI with real-time plan generation
- **Visual Components**: Charts, progress displays, and detailed workout breakdowns

## How It Works

### Architecture Overview

The project uses a modern Next.js architecture with TypeScript for type safety:

```
tpg/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
├── generators/    # Training plan generation logic
│   ├── baseGenerator.ts   # Core generation framework
│   ├── generatePlan.ts    # Main factory method
│   └── [event-specific]/  # Individual plan generators
└── types/         # TypeScript type definitions
```

### Generation Process

1. **User Input Collection**: Users provide their profile data via the `TrainingForm` component
2. **Event Selection**: Choose from available plan types
3. **Factory Pattern**: The `generator` map routes to the appropriate specialized generator
4. **Plan Calculation**: Each generator implements the `PlanGenerator` interface with a custom `generate()` method
5. **Output Display**: Results rendered via `TrainingPlanDisplay` with visualizations included

### Example Workflow

```typescript
// Simple API usage
const plan = generatePlan(PlanType.MARATHON, {
  age: 30,
  skillLevel: SkillLevel.INTERMEDIATE,
  weeklyVolume: 40,
  active: true,
});
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app automatically updates when you edit files under the `app` directory.

## Customizing the Plan

You can adjust parameters in the form to see how different inputs affect your generated plan:

- **Age**: Helps calculate recovery time and intensity recommendations
- **Skill Level**: From beginner to elite, affects workout difficulty progression
- **Weekly Volume**: Your available training hours per week
- **Active Status**: Accounts for pre-existing fitness level

## File Structure

```
tpg/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx        # Main home page
├── components/
│   ├── trainingForm.tsx          # User input form
│   ├── trainingPlanDisplay.tsx   # Plan output display
│   ├── trainingVolumeChart.tsx   # Visual progress charts
│   └── volumeTooltip.tsx         # Interactive tooltips
├── generators/
│   ├── index.ts                  # Generator registry
│   ├── generatePlan.ts           # Main generation API
│   ├── beginen*/*.ts             # Running plan generators
│   ├── *ride*.ts                 # Cycling/racing generators
│   └── ftpImprovement*.ts        # Fitness training generator
├── types/
│   ├── plans.ts                  # Plan type definitions
│   └── training.ts               # Common types and interfaces
└── package.json
```

## Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) with App Router
- **Language**: TypeScript for strict typing
- **Styling**: Tailwind CSS (via standard Next.js setup)
- **Build Tool**: Vercel-compatible Next.js builder
- **Fonts**: Geist font family for optimal performance

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Official docs and API reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Language fundamentals
- [React.dev](https://react.dev) - Modern React concepts

If you have questions about the implementation, check the:
- `generators/baseGenerator.ts` for the core generation logic
- `types/training.ts` for data structures and type definitions

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Feel free to add new plan types, customize existing generators, or improve the UI components. The modular architecture makes it easy to extend functionality while maintaining type safety throughout.
=======    
