<template>
	<Layout>
		<div class="flex flex-wrap items-start justify-start">
			<div
				class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
				style="top: 4rem"
			>
				<OnThisPage />
			</div>

			<div class="order-1 w-full md:w-2/3">
				<div class="content" v-html="$page.markdownPage.content" />

				<div class="flex items-center mt-8 mb-4 lg:mt-12 lg:mb-6">
					<GithubEdit :githubLink="githubLink" />
				</div>

				<div class="pt-8 lg:pt-12 border-t border-ui-border">
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
	fileInfo {
		path
	}
  }
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/OnThisPage.vue'
import NextPrevLinks from '@/components/NextPrevLinks.vue'
import GithubEdit from '@/components/GithubEdit.vue'

export default {
	components: {
		OnThisPage,
		NextPrevLinks,
		GithubEdit,
	},

	metaInfo() {
		const title = this.$page.markdownPage.title
		const description =
			this.$page.markdownPage.description ||
			this.$page.markdownPage.excerpt

		return {
			title: title,
			meta: [
				{
					name: 'description',
					content: description,
				},
				{
					key: 'og:title',
					name: 'og:title',
					content: title,
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title,
				},
				{
					key: 'og:description',
					name: 'og:description',
					content: description,
				},
				{
					key: 'twitter:description',
					name: 'twitter:description',
					content: description,
				},
			],
		}
	},
	computed: {
		githubLink() {
			return (
				'https://github.com/Gamemode-One/docs/blob/master/content/docs/' +
				this.$page.markdownPage.fileInfo.path
			)
		},
	},
}
</script>

<style>
@import 'prism-themes/themes/prism-material-oceanic.css';
</style>
