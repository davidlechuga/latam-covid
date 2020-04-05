module.exports = {
  siteMetadata: {
    title: `Coronantine`,
    description: `The one news stop`,
	author: `@coronantine`,
	components: {
		appbar: {
		  position: "sticky",
		  links: [
			{
			  title: "News",
			  url: "/news/page/1"
			},
			{
			  title: "Myths & Facts",
			  url: "/myths-facts"
			},
			{
			  title: "Map & Stats",
			  url: "/map-stats"
			},
			{
			  title: "Support Us",
			  url: "/support"
			},
			{
			  title: "About Us",
			  url: "/about-us"
			},
			{
				title:"FAQ",
				url: "/faq"
			}
		  ]
		},
		footer: {
		  copyright: "https://coronantine.com",
		  columns: [
			{
			  heading: "Column 1",
			  links: [
				{
				  title: "Link 1",
				  url: "#"
				},
				{
				  title: "Link 2",
				  url: "#"
				},
				{
				  title: "Link 3",
				  url: "#"
				}
			  ]
			},
			{
			  heading: "Column 2",
			  links: [
				{
				  title: "Link A",
				  url: "#"
				},
				{
				  title: "Link B",
				  url: "#"
				},
				{
				  title: "Link C",
				  url: "#"
				}
			  ]
			},
			{
			  heading: "Column 3",
			  links: [
				{
				  title: "Link x",
				  url: "#"
				},
				{
				  title: "Link y",
				  url: "#"
				},
				{
				  title: "Link z",
				  url: "#"
				}
			  ]
			}
		  ]
		}
	  },
	  templates: {
		home: {
		  totalPosts: 3,
		  template: "home"
		},
		pages: {
		  path: "/content/pages/",
		  template: "page-noimage"
		},
		posts: {
		  path: "/content/posts/",
		  pathPrefix: "news",
		  template: "post",
		  filters: {
			tag: {
			  pathPrefix: "tag",
			  template: "tag",
			  totalPosts: 3,
			  pagination: {
				template: "resultsTag",
				resultsPerPage: 6
			  }
			}
		  },
		  pagination: {
			template: "resultsAll",
			resultsPerPage: 6
		  }
		}
	  }
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
	},
	`gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
	},
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
		resolve: `gatsby-source-filesystem`,
		options: {
		  name: `markdown-pages`,
		  path: `src/content/pages`
		}
	  },
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
		  name: `markdown-posts`,
		  path: `src/content/posts`
		}
	  },
	  {
		resolve: "gatsby-plugin-prefetch-google-fonts",
		options: {
		  fonts: [
			{
			  family: "Roboto"
			},
			{
			  family: "Work Sans",
			  variants: ["800"]
			}
		  ]
		}
	  }
  ],
}
