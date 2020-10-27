// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Gamemode One Docs',
	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/favicon.png',
	},
	siteUrl: process.env.SITE_URL
		? process.env.SITE_URL
		: 'https://gamemode-one.github.io/',
	pathPrefix: '/docs',
	settings: {
		web: 'https://www.gamemodeone.com/',
		twitter: 'https://twitter.com/gmodeone',
		github: 'https://github.com/Gamemode-One',
		nav: {
			links: [{ path: '/docs/', title: 'Docs' }],
		},
		sidebar: [
			{
				name: 'docs',
				sections: [
					{
						title: 'Getting Started',
						items: ['/docs/', '/docs/tools/', '/docs/misc/'],
					},
					{
						title: 'General',
						items: ['/docs/general/animations-and-controllers/'],
					},
					{
						title: 'BP',
						items: [
							'/docs/bp/entities/',
							'/docs/bp/functions/',
							'/docs/bp/scoreboards/',
							'/docs/bp/tags/',
						],
					},
					{
						title: 'RP',
						items: [],
					},
				],
			},
		],
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './content',
				path: '**/*.md',
				typeName: 'MarkdownPage',
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: ['noopener', 'noreferrer'],
					plugins: ['@gridsome/remark-prismjs'],
				},
			},
		},

		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js',
				purgeConfig: {
					// Prevent purging of prism classes.
					whitelistPatternsChildren: [/token$/],
				},
			},
		},

		{
			use: '@gridsome/plugin-sitemap',
			options: {},
		},
	],
}
