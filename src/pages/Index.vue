<template>
	<Layout>
		<div class="pt-8 md:pt-16">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-center mb-2 text-ui-primary">
					<Logo width="60px" />
					<h1
						class="text-3xl text-6xl font-black tracking-tighter border-none text-center"
					>
						Gamemode One Docs
					</h1>
				</div>
				<h2 class="text-center">
					Reference for best practices and conventions
				</h2>

				<div class="flex justify-center mt-8">
					<g-link
						to="/docs/"
						class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
					>
						Read Docs
						<ArrowRightCircleIcon class="ml-4" size="1x" />
					</g-link>
				</div>
			</div>
			<div
				class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
			/>

			<p class="text-xl font-medium text-center">
				Gamemode One - Official Minecraft Partner and Creators of
				Minecraft's PAC-MAN
			</p>
		</div>
	</Layout>
</template>

<script>
import Logo from '@/components/Logo'
import {
	ArrowRightCircleIcon,
	ZapIcon,
	CodeIcon,
	MoonIcon,
	SearchIcon,
} from 'vue-feather-icons'

export default {
	components: {
		Logo,
		ArrowRightCircleIcon,
		ZapIcon,
		CodeIcon,
		MoonIcon,
		SearchIcon,
	},

	metaInfo() {
		const title = 'Gamemode One Docs'
		const description = 'Technical docs for Gamemode One'

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
}
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>
