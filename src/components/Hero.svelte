<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	function scrollDown() {
		window.scrollBy({ top: 1000, behavior: 'smooth' });
	}

	function scrollToPosition(position) {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }

	const stats = [
		{ label: 'Industry Partners', value: '50+', prefix: '' },
		{ label: 'Patents Filed', value: '3000+', prefix: '' },
	];

	const news = [
		'Student Startups Raised $5M+ This Quarter',
		'Cambridge Institute named Top Innovation Hub 2024',
		'New Industry Partnership Program Launched',
		'Student Startups Raised $5M+ This Quarter',
		'Join Our Next Innovation Workshop',
		'Cambridge Institute named Top Innovation Hub 2024',
	];


	const navLinks = [
		{ href: '/about', text: 'About Us' },
		{ href: '/facilities', text: 'Facilities' },
		{ href: '/programs', text: 'Programs' },
		{
			text: 'Courses',
			dropdown: [
				{ href: '/programs/ug', text: 'UG' },
				{ href: '/programs/pg', text: 'PG' }
			]
		},
		{ href: '/register', text: 'Register' },
		{ href: '/contact', text: 'Contact Us' }
	];

	// Track which dropdown is open
	let openDropdown = null;

	// Toggle dropdown visibility
	function toggleDropdown(index) {
		openDropdown = openDropdown === index ? null : index;
	}

	let currentNewsIndex = 0;
	let isVisible = false;

	onMount(() => {
		isVisible = true;
		const interval = setInterval(() => {
			currentNewsIndex = (currentNewsIndex + 1) % news.length;
		}, 4000);

		return () => clearInterval(interval);
	});

	const opportunities = [
		{
			title: 'Industry Innovation',
			description: 'Transform your business challenges into opportunities',
			cta: 'Submit Challenge',
			icon: '🎯',
			link: "/innovation"
		},
		{
			title: 'Research Partnership',
			description: 'Access cutting-edge research and development facilities',
			cta: 'Partner With Us',
			icon: '🔬',
			link: "/research"
		}


	];


	
</script>



<div class="fixed top-24 left-0 w-full h-[60px] bg-[linear-gradient(to_right,_#17194a,_#17194a,_#17194a,_#17194a)] text-white flex items-center overflow-hidden z-50">

	<div class="w-[10%] text-[#f6d287] font-semibold pl-5">
	  News Updates
	</div>
  
	<!-- Scrolling Marquee -->
	<div class="flex w-[68%]">
	  <!-- 70% Scrolling Content -->
	  <div class="w-full marquee-container overflow-hidden relative">
		<div class="marquee-content flex gap-6 animate-marquee whitespace-nowrap">
		 
			<span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are <a href="/login" style="text-decoration: underline;">welcome here!</a></span>

		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span> <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		  <span class="news-span">The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
		  <span class="news-span">Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
		 
		 
		  
		</div>
	  </div>
	</div>
  
	<!-- 30% Circle Section -->
	<div class="fixed top-33 right-30 w-40 z-40">
		<div class="relative right-2 bottom-1 flex justify-between items-center text-white gap-2">
		  
		  <!-- Node A -->
		  <button on:click={() => scrollToPosition(830)} class="flex flex-col items-center group text-center">
			<div class="w-2.5 h-2.5 rounded-full bg-[#0b81bb] border border-white shadow-md transition group-hover:shadow-[0_0_6px_#f6d287]"></div>
			<span class="text-[10px] text-[#f6d287] font-semibold leading-none mt-1">Innovation</span>
		  </button>
	  
		  <!-- Node B -->
		  <button on:click={() => scrollToPosition(1300)} class="flex flex-col items-center group text-center">
			<div class="w-2.5 h-2.5 rounded-full bg-[#0b81bb] border border-white shadow-md transition group-hover:shadow-[0_0_6px_#f6d287]"></div>
			<span class="text-[10px] text-[#f6d287] font-semibold leading-none mt-1">Team</span>
		  </button>
	  
		  <!-- Node C -->
		  <button on:click={() => scrollToPosition(2680)} class="flex flex-col items-center group text-center">
			<div class="w-2.5 h-2.5 rounded-full bg-[#0b81bb] border border-white shadow-md transition group-hover:shadow-[0_0_6px_#f6d287]"></div>
			<span class="text-[10px] text-[#f6d287] font-semibold  leading-none mt-1">Startups</span>
		  </button>
	  
		  <!-- Node D -->
		  <button on:click={() => scrollToPosition(3200)} class="flex flex-col items-center group text-center">
			<div class="w-2.5 h-2.5 rounded-full bg-[#0b81bb] border border-white shadow-md transition group-hover:shadow-[0_0_6px_#f6d287]"></div>
			<span class="text-[10px] text-[#f6d287] font-semibold leading-none mt-1">Ideas</span>
		  </button>
	  
		</div>
	  </div>
	  
  </div>
  

  
 
  
<!-- Existing Image Section -->
<div class="top-banner bg-white h-[448px] relative">
	<!-- Image -->
<!-- Image -->
<div class="relative h-full w-full">
	<div class="relative top-14 left-0 h-full w-full overflow-hidden">
		<img 
		src="/logos/Artboard.jpg" 
		alt="MSMSE Hero Image" 
		class="absolute bottom-8 left-0 rounded-xl h-full object-contain pointer-events-none" 
	  />
	  
	</div>
  </div>
  
  

	<!-- Circles and Line Group -->

  

	  
		
	
  </div>
  


  
  


<!-- ✅ Wrapper div with flex add your code here for the -->

<!-- Fixed News Ticker -->



<!-- Animated Down Arrow Centered -->

  
<style>
   @keyframes softGlow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 18px rgba(255, 255, 255, 0.6);
    }
  }
  
.flash-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* opacity: 0; */
	/* animation rules removed for testing */
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}



.flash-loop {
	position: relative;
	width: 100%;
	height: 380px;
	overflow: hidden;
}

.flash-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0;
	animation-duration: 6s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
}

.image1 {
	animation-name: flashInOut1;
}

.image2 {
	animation-name: flashInOut2;
}

ul {
		list-style-type: none;
		padding: 0;
	}

@keyframes flashInOut1 {
	0%, 49.9% {
		opacity: 1;
	}
	50%, 100% {
		opacity: 0;
	}
}

@keyframes flashInOut2 {
	0%, 49.9% {
		opacity: 0;
	}
	50%, 100% {
		opacity: 1;
	}
}

@keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .marquee {
      width: 100%;
      overflow: hidden;
      position: relative;
    }


	.marquee-container {
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.marquee-content {
		display: inline-block;
		white-space: nowrap;
		/* This is the key: 200s linear scroll */
		animation: scroll 2000s linear infinite;
	}

	/* Disable animation initially */
	.marquee-content.paused {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}


.animate-slow-marquee {
    animation: scroll-marquee 50s linear infinite;
  }



@keyframes slow-marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}



.animate-slow-marquee {
  animation: slow-marquee 50s linear infinite;
}

.glow-yellow {
	background-color: #abc0c3;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}

.glow-orange {
	background-color: #ddff00;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}

.glow-blue {
	background-color: #6622db;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}

.glow-green {
	background-color: #f44004;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}
	
	
	
@keyframes scrollX {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}

.animate-scrollX {
	animation: scrollX 10s linear infinite;
}


@keyframes yellowPulse {
	0% {
		box-shadow: 0 0 6px 2px rgba(238, 241, 241, 0.4), 0 0 14px 5px rgba(242, 244, 242, 0.5);
	}
	50% {
		box-shadow: 0 0 6px 2px rgba(235, 246, 233, 0.9), 0 0 28px 10px rgb(179, 169, 197);
	}
	100% {
		box-shadow: 0 0 6px 2px rgba(223, 216, 225, 0.4), 0 0 14px 5px rgba(42, 10, 77, 0.5);
	}
}



.fixed-band {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 50;
}

.band-text {
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.5px;
}

	:global(html) {
		scroll-behavior: smooth;
		background: white;
		overflow-x: hidden;
		
	}





	.image-scroll-wrapper {
	width: 100%;
	height: 300px;
	overflow: hidden;
	position: relative;
}

.image-list {
	display: flex;
	flex-direction: row;
	gap: 20px;
	animation: scrollLeft 20s linear infinite;
	width: max-content;
}

.image-list img {
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* DELETE THIS to stop vertical auto scroll */
@keyframes scrollLeft {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}


h1 {
    font-size: 2rem; /* Big font */
    font-weight: 400; /* Extra bold */
    color: #000A30; /* Deep blue */
    text-align: left;
 
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4.5rem; /* Responsive scaling */
    }

}
	p {
		position: relative;
		top: 23px;
		left: 15px;
		font-size: 14px;
		word-spacing: 6px;
		line-height: 28px;
	}
	button {
		all: unset; /* This resets everything so we can style from scratch */
		cursor: pointer;
		font-size: 12px;
		color: white;
		background-color: #000A30; /* Tailwind's blue-800 */
		padding: 12px 13px;
		border-radius: 8px;
		display: inline-flex;
		align-items: center;
		height: 18px;
		width: 77px;
		position: relative;
		left:14px;	
		bottom: 10PX;
		
		transition: background-color 0.5s ease;
	}

	button:hover {
		background-color: #1c3faa; /* slightly darker on hover */
	}

	svg {
		width: 12px;
		height: 12px;
		margin-left: 4px;
	}

	/* Optional: override notification dot positioning */
	button .absolute {
		display: none; /* Or adjust position as needed */
	}


	.group {
		padding: 0rem;
		transition: all 0.2s ease;
		margin-right: 20px;
	
	}
	.group .text-3xl {
		font-size: 1px;
	}
	.group .text-2xl {
		font-size: 15px;
	}
	.group .text-lg {
		font-size: 15px;
	}
	.grid {
		max-height: 800px;
	}
	main {
		height: 500px;
	}
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}
	.animate-bounce {
		animation: bounce 0.8s infinite;
	}
</style>
