/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `La Colmenita de Cuba`,
    description: `La Colmenita es una compañía de Teatro Infantil de Cuba la cual juega a hacer teatro con niños y adolescentes.`,
    author: `La Colmenita de Cuba`,
    keywords: [`La Colmenita`, `Cuba`, `infantil`, `teatro`, `teatro infantil`, `compañía de teatro`],
    siteUrl: `https://lacolmenita.netlify.app`,
    siteImage: {
      src: "https://lacolmenita.imgix.net/hLzTJQz.png",
      width: '512px',
      height: '512px'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*Manifest*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "La Colmenita de Cuba",
        short_name: "La Colmenita",
        start_url: "/",
        background_color: "#010101",
        theme_color: "#010101",
        display: "standalone",
        icon: "src/images/icon.svg",
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: `/icons/icon-192x192-maskable.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`
          },
          {
            src: `/icons/icon-512x512-maskable.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`
          },
        ]
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lacolmenita.netlify.app/',
        sitemap: 'https://lacolmenita.netlify.app/sitemap.xml',
        policy: [{ 
          userAgent: '*', 
          allow: '/',
          disallow: '/static'
        },
        { 
          userAgent: '*',
          disallow: '/workbox-v4.3.1'
        },
        { 
          userAgent: '*', 
          disallow: '/*.css$'
        },
        { 
          userAgent: '*',
          disallow: '/*.js$'
        },
        { 
          userAgent: '*', 
          disallow: '/*.json$'
        },
        { 
          userAgent: '*', 
          disallow: '/*.map$'
        }]
      }
    },
    `gatsby-plugin-material-ui`,
  ],
}
