import { getDefaultSettings, getParams } from '../../.storybook/templates';
import { includesfooterhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getParams({ page: true }),
  ...getDefaultSettings({
    component,
    argTypes: {
      data: {
        description: 'Contains Company Information for the Footer',
        type: 'object',
      },
      noMargin: {
        description: 'Toggles Margin on the footer Page',
        type: 'boolean',
      },
      lang: {
        description: 'The Language of the Page',
        control: {
          type: 'text',
        },
        type: {
          summary: 'Languages',
          detail: 'de, en, es',
        },
      },
    },
  }),
  title: 'Components/Footer',
};

export const Corporate = { args: {} };

export const Product = {
  args: {
    noMargin: true,
    data: {
      name: 'glueckkanja AG',
      street: 'Kaiserstraße 39',
      postalCode: 63065,
      city: 'Offenbach',
      country: 'Germany',
      mail: null,
      additionalLocations: [
        {
          name: 'glueckkanja Pacific Pty Ltd',
          over: 'c/o WOTSO',
          postalCode: '2022',
          street: 'Level 1 9-13 Bronte Road',
          city: 'Bondi Junction NSW',
          country: 'Australia',
          mail: 'info@glueckkanja.com',
          postalReversed: true,
        },
      ],
      logos: [
        {
          img: '/mandrill/radius-logo-footer.svg',
          alt: 'RADIUSaaS Logo',
          url: 'index.html',
          linkClasses: 'w-75 w-lg-100',
        },
      ],
      socials: [
        {
          icon: 'fa-x-twitter',
          url: 'https://twitter.com/RADIUSaaS',
          title: 'Twitter',
        },
        {
          icon: 'fa-youtube',
          url: 'https://www.youtube.com/channel/UCKnLYxlQFhzdXkDADV_Unrg',
          title: 'Youtube',
        },
        {
          icon: 'fa-linkedin',
          url: 'https://www.linkedin.com/showcase/radiusaas',
          title: 'LinkedIn',
        },
      ],
    },
  },
};
