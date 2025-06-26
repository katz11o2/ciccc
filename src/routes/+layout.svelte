<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="layout-wrapper">
	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
