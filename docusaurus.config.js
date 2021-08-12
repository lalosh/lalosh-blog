const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'مدونة خاصة تتحدث عمّا أواجه من تجارب شخصية',
  tagline: 'أرجو أن تجد ما ينفعك في أحد السطور',
  url: 'https://lalosh-blog.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'https://github.com/lalosh', // Usually your GitHub org/user name.
  projectName: 'الموقع الشخصي', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },

    navbar: {
      title: 'محمد لؤي العش',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'الدراسات',
        },
        { to: '/blog', label: 'المدونة', position: 'left' },
        {
          href: 'https://github.com/lalosh/lalosh-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'خريطة الموقع',
          items: [
            {
              label: 'الدراسات',
              to: '/docs/intro',
            },
            {
              label: 'المدونة',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'للتواصل',
          items: [
            {
              label: 'Telegram',
              to: 'https://t.me/laloshx17',
            },
            {
              label: 'Linkedin',
              to: 'https://www.linkedin.com/in/mhd-louay-al-osh-43b67b149/',
            },
          ],
        },
        {
          title: 'المزيد',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/lalosh',
            },
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/users/8667766/louay-alosh',
            },
          ],
        },
      ],
      copyright: `حقوق النشر محفوظة © ${new Date().getFullYear()} (بُني بإستخدام Docusaurus)`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/lalosh/lalosh-blog/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/lalosh/lalosh-blog/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },
};
