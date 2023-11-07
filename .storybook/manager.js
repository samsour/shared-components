import { addons } from '@storybook/addons';

// https://storybook.js.org/docs/react/configure/features-and-behavior

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: false,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['context', 'docs', 'pages', 'helper'],
  },
});
