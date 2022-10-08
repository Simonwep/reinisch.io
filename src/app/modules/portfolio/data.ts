export interface Project {
  title: string;
  description: string;
  homepage?: string;
  tags: string[];
  link: string;
}

export interface Portfolio {
  active: Project[];
  archived: Project[];
}

export const portfolio: Portfolio = {
  active: [
    {
      title: 'Ocular',
      description: 'Simplistic budget planner with google drive synchronization.',
      homepage: 'https://ocular.reinisch.io',
      tags: ['pwa', 'ts', 'app'],
      link: 'https://github.com/Simonwep/ocular',
    },
    {
      title: 'Viselect',
      description: 'Powerful, visual element-selection engine.\n Select elements just like on your desktop!',
      homepage: 'https://simonwep.github.io/selection',
      tags: ['ts', 'ui', 'ux', 'library'],
      link: 'https://github.com/Simonwep/selection',
    },
    {
      title: 'Nanopop',
      description: 'Minimalistic, high performant positioning engine for maximum control.',
      homepage: 'https://simonwep.github.io/nanopop',
      tags: ['ts', 'popper', 'engine'],
      link: 'https://github.com/Simonwep/nanopop',
    },
    {
      title: 'Graceful Web-Sockets',
      description: 'A graceful websocket wrapper with connection re-establishment capabilities.',
      tags: ['ts', 'websocket', 'library'],
      link: 'https://github.com/Simonwep/graceful-ws',
    },
    {
      title: 'Nason',
      description: 'Ultra tiny serializer / encoder with plugin-support.',
      tags: ['ts', 'json', 'binary', 'serialization'],
      link: 'https://github.com/Simonwep/nason',
    },
    {
      title: 'Li18nt',
      description: 'Opinionated, small linter for i18n locale files. Prettifies, validates and finds duplicates.',
      tags: ['ts', 'json', 'linting', 'cli'],
      link: 'https://github.com/Simonwep/li18nt',
    },
    {
      title: 'Spectrum',
      description: 'A web-based audio spectrum analyzer.',
      homepage: 'https://spectrum.reinisch.io',
      tags: ['pwa', 'ts'],
      link: 'https://github.com/Simonwep/spectrum',
    },
    {
      title: 'OpenVPN Pihole',
      description: 'OpenVPN and Pihole wrapped up in a docker-compose setup.',
      tags: ['docker', 'openvpn', 'pihole'],
      link: 'https://github.com/Simonwep/openvpn-pihole',
    },
  ],
  archived: [
    {
      title: 'Pickr',
      description: 'Flat, simple, multi-themed, responsive and hackable colorpicker.',
      homepage: 'https://simonwep.github.io/pickr',
      tags: ['js', 'ui', 'ux', 'widget'],
      link: 'https://github.com/Simonwep/pickr',
    },
    {
      title: 'Conway',
      description: 'Supercharged version of conways game of life build with wasm and web-workers.',
      homepage: 'https://conway.reinisch.io',
      tags: ['preact', 'ts', 'game', 'wasm', 'pwa'],
      link: 'https://github.com/Simonwep/conway',
    },
    {
      title: 'Bavary',
      description: 'Regular expressions on steroids. A custom language which can be used to parse sytax.',
      tags: ['ts', 'regex', 'language'],
      link: 'https://github.com/Simonwep/bavary',
    },
    {
      title: 'Candy',
      description: 'Cross platform youtube downloader and converter using ffmpeg.',
      tags: ['electron', 'vue', 'youtube', 'downloader', 'app'],
      link: 'https://github.com/Simonwep/candy',
    },
    {
      title: 'Vue Cloudfront',
      description: 'A PWA cloudfront to manage all your files in real time.',
      tags: ['vue', 'app', 'pwa', 'cloud'],
      link: 'https://github.com/ovanta/vue-cloudfront',
    },
    {
      title: 'Vue Blogfront',
      description: 'An self-hosted blog app, wrapped up in a PWA.',
      tags: ['vue', 'app', 'pwa', 'blog'],
      link: 'https://github.com/ambrest/vue-blogfront',
    },
    {
      title: 'Intl Demo',
      description: 'Interactive demo of the ECMAScript Internationalization API.',
      tags: ['preact', 'ui', 'demo', 'app', 'pwa'],
      link: 'https://github.com/Simonwep/intl-demo',
    },
    {
      title: 'Beam Cafe',
      description: 'Blazing fast file-transfer app. Share files without uploading them.',
      tags: ['preact', 'ui', 'app', 'pwa'],
      link: 'https://github.com/dot-cafe/beam.cafe',
    },
    {
      title: 'OpenVPN Access',
      description: "Free, open-source alternative to OpenVPN's access service.",
      tags: ['openvpn', 'docker', 'app', 'pwa'],
      link: 'https://github.com/openvpn-access/openvpn-access',
    },
    {
      title: 'Presentr',
      description: 'Simple, tiny, presentation framework I created for high school presentations.',
      tags: ['js', 'presentation', 'framework'],
      link: 'https://github.com/Simonwep/presentr',
    },
    {
      title: 'Java Express',
      description: 'HTTP framework in java based on expressjs with the same easy-to-use API.',
      tags: ['java', 'http', 'framework'],
      link: 'https://github.com/Simonwep/java-express',
    },
    {
      title: 'Sassyfication',
      description: 'A sass library to speed up your css workflow.',
      tags: ['scss', 'css', 'styles'],
      link: 'https://github.com/Simonwep/sassyfication',
    },
  ],
};