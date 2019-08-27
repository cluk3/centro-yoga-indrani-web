module.exports = {
  siteMetadata: {
    title: 'Centro Yoga Indrani',
    description:
      'Centro Yoga in Volo Indrani per il benessere fisico e spirituale.',
    siteUrl: 'https://centroyogaindrani.it',
    siteLang: 'it',
    image: 'https://lengstorf.com/images/jason-lengstorf.jpg',
    author: {
      name: 'Luca Campli'
    },
    organization: {
      name: 'Centro Yoga Indrani',
      logo: 'https://lengstorf.com/android-chrome-512x512.png',
      owner: 'Rossana Campli'
    },
    social: {
      instagram: '',
      fbAppID: ''
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'centro-yoga-in-volo-indrani',
        short_name: 'yoga-indrani',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-favicon',
    'gatsby-plugin-offline'
  ]
};
