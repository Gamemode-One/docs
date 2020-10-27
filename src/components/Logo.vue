<template>
	<div :style="`width: ${width};`">
		<g-image alt="bridge. Logo" src="~/assets/favicon.png" />
	</div>
</template>

<script>
export default {
	props: {
		width: {
			default: '20px',
			type: String,
		},
	},
}
</script>
