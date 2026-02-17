
export const blogPosts = [
    {
        id: 1,
        slug: 'art-of-micro-interactions',
        category: 'Design',
        title: 'The Art of Micro-Interactions in Modern UI',
        excerpt:
            'How subtle animations and transitions can dramatically improve the user experience of your application.',
        date: 'Feb 12, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
        content: `
      <h2>The Power of Subtle Motion</h2>
      <p>Micro-interactions are the secret ingredients that make a digital product feel alive. They are the small, functional animations that provide feedback, guide tasks, and enhance the overall user experience.</p>
      
      <h3>Why They Matter</h3>
      <p>In a world where attention spans are shrinking, keeping users engaged is more challenging than ever. Micro-interactions help by providing immediate feedback. When a user clicks a button, a subtle ripple effect confirms the action.</p>
      
      <h2>Examples in the Wild</h2>
      <p>Consider the "Like" button on Twitter. It's not just a state change from gray to red; it's a playful explosion of confetti. This reward mechanism encourages interaction.</p>
      
      <h3>Implementation Tips</h3>
      <p>Keep it simple. Micro-interactions should not distract the user from their primary goal. They should be fast—typically under 300ms—and natural.</p>
      
      <h2>Tools for Designers</h2>
      <p>Tools like Rive, Lottie, and Framer Motion make it easier than ever to implement these interactions without sacrificing performance.</p>
    `,
    },
    {
        id: 2,
        slug: 'building-performant-animations',
        category: 'Development',
        title: 'Building Performant Animations with Framer Motion',
        excerpt:
            'A deep dive into creating 60fps animations using Framer Motion and React best practices.',
        date: 'Feb 8, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
        content: `
      <h2>Understanding the Render Loop</h2>
      <p>React's render cycle can be a bottleneck for animations. Framer Motion solves this by handling animations outside of the React render loop where possible.</p>
      
      <h3>Layout Animations</h3>
      <p>One of Framer Motion's most powerful features is layout animations. By simply adding the <code>layout</code> prop, you can animate complex layout changes with zero configuration.</p>
      
      <h2>Optimizing for Mobile</h2>
      <p>Mobile devices have limited resources. Use the <code>will-change</code> CSS property sparingly and prefer transform and opacity animations over properties that trigger reflow (like width, height, top, left).</p>
    `,
    },
    {
        id: 3,
        slug: 'css-clip-path-transitions',
        category: 'Animation',
        title: 'CSS Clip-Path Transitions Explained',
        excerpt:
            'Master the clip-path property to create stunning reveal effects and creative page transitions.',
        date: 'Feb 3, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
        content: `
      <h2>What is Clip-Path?</h2>
      <p>The <code>clip-path</code> property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.</p>
      
      <h3>Creating Shapes</h3>
      <p>You can create circles, ellipses, polygons, and complex paths. Combined with CSS transitions, you can morph these shapes to create unique effects.</p>
      
      <h2>Practical Use Cases</h2>
      <p>Use clip-path for image reveals, unconventional modal shapes, and interesting hover effects on buttons.</p>
    `,
    },
    {
        id: 4,
        slug: 'color-theory-for-developers',
        category: 'Design',
        title: 'Color Theory for Developers',
        excerpt:
            'Understanding color psychology and how to build cohesive palettes that enhance your brand.',
        date: 'Jan 28, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop',
        content: `
      <h2>The Basics of Color</h2>
      <p>Color conveys meaning. Red can signify danger or passion, while blue often represents trust and calm.</p>
      
      <h3>Contrast and Accessibility</h3>
      <p>Ensure your text is readable. Tools like the WebAIM contrast checker are essential for any developer. Aim for a contrast ratio of at least 4.5:1 for normal text.</p>
      
      <h2>Building a Palette</h2>
      <p>Start with a primary color, then choose a secondary color that complements it. Use neutral colors for backgrounds and text to balance the design.</p>
    `,
    },
    {
        id: 5,
        slug: 'nextjs-app-router-guide',
        category: 'Development',
        title: 'Next.js App Router: A Complete Guide',
        excerpt:
            'Everything you need to know about routing, layouts, and server components in Next.js.',
        date: 'Jan 22, 2026',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1000&auto=format&fit=crop',
        content: `
      <h2>Server vs. Client Components</h2>
      <p>The App Router introduces a new paradigm. By default, all components are Server Components. API calls happen on the server, reducing the bundle size sent to the client.</p>
      
      <h3>Nested Layouts</h3>
      <p>Layouts can now be nested, allowing for more complex UI structures that persist across navigation.</p>
      
      <h2>Data Fetching</h2>
      <p>Forget <code>useEffect</code> for initial data fetching. In the App Router, you can fetch data directly in your async Server Components.</p>
    `,
    },
    {
        id: 6,
        slug: 'staggered-animations',
        category: 'Animation',
        title: 'Staggered Animations Done Right',
        excerpt:
            'Techniques for creating delightful staggered animations that guide the user\'s attention.',
        date: 'Jan 15, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
        content: `
      <h2>The "Waterfall" Effect</h2>
      <p>Staggering animations creates a waterfall effect where elements appear one after another. This is much more pleasing to the eye than everything appearing at once.</p>
      
      <h3>Using Framer Motion</h3>
      <p>Framer Motion's <code>transition: { staggerChildren: 0.1 }</code> property makes this incredibly easy to implement on container elements.</p>
      
      <h2>Don't Overdo It</h2>
      <p>Too much staggering can make the interface feel slow. Keep the delays short (50ms - 100ms) to maintain a snappy feel.</p>
    `,
    },
];
