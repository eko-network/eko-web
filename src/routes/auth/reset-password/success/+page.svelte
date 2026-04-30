<script lang="ts">
	import AuthSuccessState from '$lib/components/auth-success-state.svelte';
</script>

<svelte:head>
	<title>Password Reset Successful - Eko</title>
	<meta name="description" content="Your password has been reset successfully." />
</svelte:head>

<AuthSuccessState
	title="Password Reset Successful"
	description="Your password has been updated. You can now continue using Eko."
/>
