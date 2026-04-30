<script lang="ts">
	import { CheckCircle2 } from '@lucide/svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import ReturnHomeWidget from '$lib/components/return-home-widget.svelte';

	type Props = {
		title: string;
		description: string;
	};

	let { title, description }: Props = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-background to-muted/50 flex items-center justify-center p-4 sm:p-4">
	<div class="w-full max-w-md">
		<Card class="sm:shadow-2xl sm:border-0 sm:bg-card/95 sm:backdrop-blur-sm border-0 shadow-none bg-transparent">
			<CardHeader class="text-center space-y-4 pb-8 px-0 sm:px-6">
				<div class="mx-auto w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center">
					<CheckCircle2 class="w-14 h-14 text-green-600" />
				</div>
				<div class="space-y-2">
					<CardTitle class="text-3xl font-bold">{title}</CardTitle>
					<CardDescription class="text-muted-foreground text-base">
						{description}
					</CardDescription>
				</div>
			</CardHeader>

			<CardContent class="px-0 sm:px-6">
				<ReturnHomeWidget />
			</CardContent>
		</Card>
	</div>
</div>
