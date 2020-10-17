"use strict";

module.exports = {
  siteMetadata: {
    title: 'Apple Tips and Tricks',
    description: 'A collection of tips and tricks for people who are using Apple products and ecosystem.',
    keywords: 'apple, tips, tricks',
    siteUrl: 'https://apple-tips.netlify.com',
    author: {
      name: 'Naruth Kongurai',
      url: 'https://www.naruth.dev',
      email: 'nkongurai@gmail.com'
    },
    texts: {
      copyright: "2020",
      applyForContributions: "Help grow our resources by sharing a tip with us",
      builtWithGatsby: "Powered by Gatsby.js"
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'ios',
        path: `${__dirname}/src/content/ios`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'ipados',
        path: `${__dirname}/src/content/ipados`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'macos',
        path: `${__dirname}/src/content/macos`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://apple-tips.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
