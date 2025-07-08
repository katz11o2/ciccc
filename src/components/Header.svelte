<script>
	import { CIT, CHOSS, CIC } from '$lib';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let isMenuOpen = false;
	let scrollY = 0;

	const navLinks = [
		{ href: 'https://cic-sparkle.vercel.app/', text: 'Home' },
		{ href: '/about', text: 'About Us' },
		{ href: '/calendar', text: 'Calendar of Events' },
		{ href: '/facilities', text: 'Facilities' },
		{ href: '/beneficiaries', text: 'Beneficiaries' },
		{ href: '/login', text: 'Register / Login' },
		{ href: 'https://engg.cambridge.edu.in/photo-gallery/', text: 'Gallery' },
		{ href: '/contact', text: 'Contact Us' }
	];

	$: isScrolled = scrollY > 50;

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	let currentNewsIndex = 0;
	const news = [
		'Cambridge Institute named Top Innovation Hub 2024',
		'New Industry Partnership Program Launched',
		'Student Startups Raised $5M+ This Quarter',
		'Join Our Next Innovation Workshop'
	];

	onMount(() => {
		const newsInterval = setInterval(() => {
			currentNewsIndex = (currentNewsIndex + 1) % news.length;
		}, 4000);
		return () => clearInterval(newsInterval);
	});

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) isMenuOpen = false;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 z-50 w-full py-2" style="background: linear-gradient(to right, #17194a,#17194a,  #17194a);">
	<div class="container mx-auto px-4 sm:px-6">
		<!-- Mobile Header -->
		<div class="flex items-center justify-between md:hidden bg-[#000A30] w-full">
			<img src={CIT} alt="CIT" class="h-12 w-auto" />
			<button
				on:click={toggleMenu}
				class="rounded-lg p-2.5 text-white transition-colors hover:bg-white/10"
				aria-label="Toggle menu"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		<!-- Desktop Navigation -->
		<!-- Desktop Navigation Logos -->
<div class="hidden md:grid grid-cols-3 items-center py-2 px-6">
	<!-- Left: CIT -->
	<a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer" class="flex justify-start">
		<img src={CIT} alt="CIT" class="h-8 w-auto transition-transform hover:scale-105" />
	</a>

	<!-- Center: CIC -->
	<a href="https://cambrian-sparkzone.com/" target="_blank" rel="noopener noreferrer" class="flex justify-center">
		<img src={CIC} alt="CIC" class="h-8 w-auto transition-transform hover:scale-105" />
	</a>

	<!-- Right: CHOSS -->
	<a href="https://engg.cambridge.edu.in/choss-team/" target="_blank" rel="noopener noreferrer" class="flex justify-end">
		<img src={CHOSS} alt="CHOSS" class="h-10 w-auto transition-transform hover:scale-105" />
	</a>
</div>

<<<<<<< HEAD

		<!-- Quick Links -->
<!-- Quick Links -->
<div class="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2 py-2 text-white font-semibold text-[2.8vw] sm:text-sm md:text-base lg:text-base leading-tight">
	<a on:click={() => history.back()}
		class="px-2 py-1 bg-white/10 rounded-full hover:bg-white/20 transition duration-200 cursor-pointer">
		← 
	</a>

	<a href="http://localhost:5173/" class="hover:underline">Home</a>
	<a href="/Abb" class="hover:underline">About Us</a>
	<a href="/login" class="relative inline-block hover:underline hover:text-glow">
		<span class="text">Design Challenges</span>
	</a>
	<a href="/Facilities" class="hover:underline">Facilities</a>
	<a href="/beneficiaries" class="hover:underline">Beneficiaries</a>
	
	
	
	<a href="/login" class="hover:underline">Register/Login</a>
	
</div>


=======
			<div class="flex items-center">
				<img src={CHOSS} alt="CHOSS" class="h-11 w-auto transition-transform hover:scale-105" />
			</div>
		</div>

		<!-- Quick Links -->
		<div class="w-full h-[30px] flex items-center justify-center space-x-6 text-sm font-semibold text-white relative">
			<!-- Back Arrow Button -->
			<button on:click={() => history.back()}
				class="absolute left-25 w-7 h-7 flex items-center justify-center text-white text-lg animate-wiggle hover:scale-105 transition-transform duration-200">
				←
			</button>
		
			<a href="https://cic-sparkle.vercel.app/" class="hover:underline" target="_self">Home</a>
			<a href="/Abb" class="hover:underline" target="_self">About Us</a>
			<a href="/programs" class="hover:underline" target="_self">Calendar of Events</a>
			<a href="/Facilities" class="hover:underline" target="_self">Facilities</a>
			<a href="/beneficiaries" class="hover:underline" target="_self">Beneficiaries</a>
			<a href="/login" class="relative inline-block text-white hover:underline hover:text-glow transition duration-300">
				<span class="">Design Challenges</span>
			</a>
			<a href="https://engg.cambridge.edu.in/photo-gallery/" class="hover:underline" target="_blank" rel="noopener noreferrer">Gallery</a>
			<a href="/login" class="hover:underline" target="_self">Register/Login</a>
			<a href="/contact" class="hover:underline" target="_self">Contact Us</a>
		</div>
>>>>>>> 52f904a9aa1a05184add3030b86cd179862fa7d2
		<!-- Mobile Menu Links -->
		{#if isMenuOpen}
			<div class="absolute top-full right-0 left-0 border-t border-white/10 bg-slate-900/95 shadow-lg backdrop-blur-sm z-50"
				transition:slide={{ duration: 300 }}>
				<nav class="divide-y divide-white/10">
					{#each navLinks as { href, text }}
						<a
							href={href}
							class="block px-4 py-3 text-blue-100 transition-colors hover:bg-white/5 hover:text-white"
							on:click={toggleMenu} target={href.startsWith('http') ? '_blank' : '_self'}
						>
							{text}
						</a>
					{/each}
				</nav>
				<div class="grid grid-cols-3 gap-4 bg-slate-800/50 p-6">
					<a href="https://engg.cambridge.edu.in/" target="_blank" rel="noopener noreferrer">
						<img src={CIT} alt="CIT" class="mx-auto h-12 w-auto" />
					</a>
					<a href="https://cambrian-sparkzone.com/" target="_blank" rel="noopener noreferrer">
						<img src={CIC} alt="CIC" class="mx-auto h-12 w-auto" />
					</a>
					<a href="https://engg.cambridge.edu.in/choss-team/" target="_blank" rel="noopener noreferrer">
						<img src={CHOSS} alt="CHOSS" class="mx-auto h-12 w-auto" />
					</a>
				</div>
			</div>
		{/if}
	</div>
</header>

<div class="h-[50px] bg-[#000A30]"></div>

<style>
	header {
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}
	nav a {
		-webkit-tap-highlight-color: transparent;
	}
	@keyframes wiggle {
		0%, 100% { transform: translateX(0); }
		25% { transform: translateX(-1px); }
		50% { transform: translateX(1px); }
		75% { transform: translateX(-1px); }
	}
	.animate-wiggle {
		animation: wiggle 0.4s infinite;
	}
	.glow-text {
		text-shadow: 0 0 5px #5acccc, 0 0 10px #00ffff, 0 0 15px #e8f0f0;
		transition: text-shadow 0.3s ease-in-out;
	}
	.hover\:text-glow:hover .glow-text {
		text-shadow: 0 0 8px #00ffff, 0 0 12px #00ffff, 0 0 20px #00ffff;
	}
</style>
