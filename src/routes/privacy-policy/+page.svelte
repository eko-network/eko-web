<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card/index.js';
	import { Shield } from '@lucide/svelte';
	import privacyHtml from './privacy-policy.md';
</script>

<svelte:head>
	<title>Privacy Policy - Eko</title>
	<meta
		name="description"
		content="How Eko collects, uses, and protects information when you use our services."
	/>
</svelte:head>

<main
	class="min-h-screen pt-16 pb-12 bg-gradient-to-br from-background to-muted/50 flex justify-center px-4 sm:p-6 sm:pt-24"
>
	<div class="w-full max-w-3xl py-8 sm:py-10">
		<Card
			class="sm:shadow-2xl sm:border-0 sm:bg-card/95 sm:backdrop-blur-sm border-0 shadow-none bg-transparent"
		>
			<CardHeader class="text-center space-y-4 pb-6 px-0 sm:px-6">
				<div class="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
					<Shield class="w-6 h-6 text-primary" />
				</div>
				<div class="space-y-2">
					<CardTitle class="text-2xl sm:text-3xl font-bold">Privacy Policy</CardTitle>
				</div>
			</CardHeader>

			<CardContent class="px-0 sm:px-6 text-sm sm:text-[15px] leading-relaxed text-foreground">
				<div
					class="[&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_h2:not(:first-child)]:mt-8 [&_p]:text-muted-foreground [&_p:last-child]:mb-0"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -- site-owned markdown compiled at build time -->
					{@html privacyHtml}
				</div>
			</CardContent>
		</Card>
	</div>
</main>
