<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { goto } from '$app/navigation';

  function scrollDown() {
    window.scrollBy({ top: 1000, behavior: 'smooth' });
  }

  function scrollToPosition(position) {
    window.scrollTo({ top: position, behavior: 'smooth' });
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

  let openDropdown = null;
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

<!-- News Ticker -->
<div class="fixed top-28 left-0 w-full bg-gradient-to-r from-[#17194a] to-[#17194a] text-white z-50 overflow-x-hidden">
  <div class="flex flex-col md:flex-row items-center justify-between gap-2 px-3 py-2">

    <!-- News Label -->
    <div class="w-full md:w-[15%] text-[#f6d287] font-semibold text-[4vw] sm:text-sm md:text-base text-center md:text-center">
      News Updates
    </div>

    <!-- Marquee -->
    <div class="w-full md:w-[65%] overflow-hidden">
      <div class="relative overflow-hidden">
        <div class="flex gap-6 animate-marquee whitespace-nowrap text-[3.2vw] sm:text-sm md:text-base">
          <span>
            Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are 
            <a href="/login" class="underline">welcome here!</a>
          </span>
          <span>The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
          <span>Innovation and Design Ideas, from MSME/Industry leading to New Product Development, are welcome here!</span>
          <span>The Government of India has approved Cambridge Institute of Technology as Host Institution and supported Students to incubate their ideas</span>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="hidden md:flex items-center justify-center w-full md:w-[20%] gap-5">
      {#each [
        { label: 'Explore', pos: 830 },
        { label: 'Team', pos: 1300 },
        { label: 'Startups', pos: 2680 },
        { label: 'Ideas', pos: 3200 }
      ] as { label, pos }}
        <button on:click={() => scrollToPosition(pos)} class="flex flex-col items-center group text-center">
          <div class="w-2.5 h-2.5 rounded-full bg-[white] border border-white shadow-md group-hover:shadow-[0_0_6px_#f6d287]"></div>
          <span class="text-[10px] text-[#f6d287] font-semibold leading-none mt-0.5">{label}</span>
        </button>
      {/each}
    </div>
  </div>
</div>

<!-- Responsive Banner with Image (with top margin) -->
<div class="mt-[1px] bg-white w-full relative h-[310px] sm:h-[480px] md:h-[415px] overflow-hidden">
  <div class="relative w-full h-full">
    <img 
      src="/logos/Artboard.jpg" 
      alt="MSMSE Hero Image" 
      class="w-full h-full object-contain rounded-xl pointer-events-none"
    />
  </div>
</div>

<!-- Marquee Animation -->
<style>
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }

  .animate-marquee {
    animation: marquee 60s linear infinite;
  }

  :global(html) {
    overflow-x: hidden;
  }
</style>
