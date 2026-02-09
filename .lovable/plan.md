

## Smooth Flowing Title Gradient

### Problem
The current `.text-gradient` class applies a shimmer animation that moves a gradient back and forth across highlighted words. This creates a choppy, back-and-forth effect rather than a smooth, continuous flow.

### Solution
Replace the current shimmer animation with a smooth, continuously flowing gradient that seamlessly cycles through the brand colors (teal primary to slate secondary and back). The gradient will move in one direction endlessly, creating a fluid, polished look.

### Changes

**1. Update `src/index.css`** - Modify the `.text-gradient` utility class:
- Change from `bg-[length:200%_auto]` to `bg-[length:300%_auto]` for a wider gradient spread
- Replace `animate-shimmer` with a new `animate-flow` animation that moves smoothly in one continuous direction

**2. Update `tailwind.config.ts`** - Replace the `shimmer` keyframe/animation:
- Add a new `flow` keyframe that transitions `background-position` from `0% center` to `300% center` continuously (no reverse)
- Use a longer duration (~6s) with `linear infinite` for a smooth, never-ending loop

**3. Fix build errors in `src/components/HeroSection.tsx`**:
- Fix the typo on line 87-88 where `mt` is used instead of `y` in framer-motion's `initial`/`animate` props

### Files Affected
- `src/index.css` (1 line change)
- `tailwind.config.ts` (update keyframe + animation)
- `src/components/HeroSection.tsx` (fix `mt` to `y` on lines 87-88)

All 9 files using `text-gradient` class will automatically pick up the smoother animation with no code changes needed.
