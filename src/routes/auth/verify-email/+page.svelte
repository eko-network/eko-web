<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import AuthSuccessState from '$lib/components/auth-success-state.svelte';

	let isCheckingParams = true;

	onMount(async () => {
		if (!browser) return;

		const queryParams = new URLSearchParams(window.location.search);
		const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
		const hasAnyParams = queryParams.size > 0 || hashParams.size > 0;

		if (!hasAnyParams) {
			await goto('/');
			return;
		}

		// Clean token data from URL once validated.
		window.history.replaceState({}, document.title, window.location.pathname);
		isCheckingParams = false;
	});
</script>

<svelte:head>
	<title>Email Verified - Eko</title>
	<meta name="description" content="Your email has been verified successfully." />
</svelte:head>

{#if !isCheckingParams}
	<AuthSuccessState
		title="Email Verified"
		description="Your email has been confirmed. You can now continue using Eko."
	/>
{/if}
