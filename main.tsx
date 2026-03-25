@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-headline: "Space Grotesk", "Manrope", sans-serif;
  
  --color-primary: #FACC15;
  --color-primary-container: #ffd600;
  --color-on-primary-container: #705d00;
  --color-surface: #f9f9f9;
  --color-on-surface: #1b1b1b;
  --color-secondary: #5e5e5e;
  --color-outline: #7f775f;
  --color-surface-container-low: #f3f3f3;
  --color-surface-container-lowest: #ffffff;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

@layer base {
  body {
    @apply font-sans bg-surface text-on-surface;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-headline;
  }
}

.glass-card {
  background: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
