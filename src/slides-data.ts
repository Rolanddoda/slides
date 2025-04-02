export interface Slide {
  id: number
  type?: string
  title: string
  // Additional properties vary by slide type
  [key: string]: any
}

// SVG icons for use cases
const infoIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
const checkIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
const lockIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`

export const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: '⏯️ Vue Watchers: Pause & Resume',
    subtitle: 'More control over reactivity!',
    image: 'https://vuejs.org/logo.svg',
  },
  {
    id: 2,
    type: 'code',
    title: '🤔 The Old Way: Only `stop()`',
    description:
      'Previously, `watch` and `watchEffect` returned only a `stop` function to permanently end the watcher:',
    code: `// Watcher setup
const stop = watch(obj, () => {
  console.log('obj changed');
});

// Later...
stop(); // 👈 Watcher is stopped permanently`,
    footer: "Once stopped, it couldn't be restarted.",
  },
  {
    id: 3,
    type: 'code',
    title: '✨ New in Vue: Pause & Resume!',
    description: 'Now, `watch` and `watchEffect` return an object with more controls:',
    code: `const controls = watch(obj, callback);

// controls object:
{
  pause: () => void,  // Temporarily stop triggering callback
  resume: () => void, // Resume triggering callback
  stop: () => void    // Permanently stop the watcher
}`,
    footer: "This allows for temporary suspension of the watcher's effects.",
  },
  {
    id: 4,
    type: 'code',
    title: '🔧 Example: Pause, Resume, Stop',
    description: "Here's how you can use the new controls:",
    code: `const { pause, resume, stop } = watch(obj, () => {
  console.log('obj changed');
});

pause();
obj.value++; // Callback doesn't log

resume();
obj.value++; // Callback logs 'obj changed'

stop();
obj.value++; // Callback doesn't log anymore`,
    footer: 'Provides fine-grained control over watcher execution.',
  },
  {
    id: 5,
    type: 'useCases',
    title: '💡 Potential Use Cases',
    useCases: [
      {
        icon: infoIcon,
        title: 'Performance Optimization',
        description:
          'Pause watchers when a component is inactive or hidden (e.g., off-screen, in background tab) to save resources.',
      },
      {
        icon: checkIcon,
        title: 'Complex UI Updates',
        description:
          'Temporarily pause watchers during multi-step updates or animations to prevent intermediate state triggers.',
      },
      {
        icon: lockIcon,
        title: 'Conditional Watching',
        description:
          'Easier to manage watchers that should only run under certain conditions without needing complex conditional logic inside the callback.',
      },
    ],
  },
  {
    id: 6,
    type: 'conclusion',
    title: '🎉 More Control Over Watchers!',
    description:
      'The ability to pause and resume `watch` and `watchEffect` provides developers with finer-grained control over reactive effects, leading to potentially cleaner code and better performance optimization opportunities.',
    tags: ['#VueJS', '#JavaScript', '#Reactivity', '#Watchers', '#Frontend', '#WebDev', '#Vue3'],
  },
  {
    id: 7,
    type: 'about',
    title: '👋 About Me',
    description:
      'Hi, my name is Roland, working as a Vue.js dev since 2017 and currently the Frontend Lead at ProfitMetrics.io.',
    socials: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/roland-doda/',
      },
      {
        platform: 'ProfitMetrics.io',
        url: 'https://profitmetrics.io/',
      },
    ],
  },
]
