// Site-wide configuration. The pipeline and humans edit this file, not the templates.
export const SITE = {
  name: 'Chris Nash',
  title: 'Chris Nash · Inner & Outer Landscapes',
  tagline: 'Seeding a regenerative culture, through restoration of inner and outer landscapes.',
  description:
    'Chris Nash is a restoration leader and agroecologist in Cape Town, South Africa. Fortnightly letters on ecological restoration, inner development and regenerative culture across Africa.',
  url: 'https://chrisnash.earth',
  email: 'chris@chrisnash.earth',
  linkedin: 'https://www.linkedin.com/in/christopher-nash-bba628266',
  greenpop: 'https://greenpop.org',

  // Newsletter wiring. Leave kitFormAction empty until the Kit account exists;
  // the form component then renders the personal-subscribe fallback instead of a dead form.
  kitFormAction: '', // e.g. 'https://app.kit.com/forms/1234567/subscriptions'
  newsletterName: 'Inner & Outer Landscapes',
  newsletterPromise: 'One letter every two weeks. Read in five minutes.',
  antiSpam: 'No noise, no selling, unsubscribe anytime.',

  // Role anchor shown near the hero for cold visitors.
  roleAnchor:
    'Head of Restoration at Greenpop · programmes across South Africa, Malawi, Kenya and Sierra Leone'
};
