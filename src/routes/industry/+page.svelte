<script> 
    import { goto } from '$app/navigation';
</script>

<!-- Load Inter font -->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<style>
    main {
        font-family: 'Inter', sans-serif;
    }

    .glass-box {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        text-align: center;
    }

    .glass-box:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }
</style>

<main class="overflow-hidden flex flex-col bg-white text-black py-10 px-2 min-h-screen font-sans">
  <div class="flex flex-row gap-10 items-center justify-center pt-[30px]">
    
    <!-- Left Image -->
    <img src="/logos/Frame 1 (1).png" alt="Header Image" class="h-[430px] w-[350px]" />

    <!-- Right Blocks -->
    <div class="flex flex-col justify-center gap-6">
      
      <!-- CIT Students -->
      <div
        class="glass-box flex items-center justify-center w-[280px] h-[150px] text-[#000a30] text-2xl font-semibold"
        on:click={() => goto('/Msmesignup')}
      >
        For MSME
      </div>

      <!-- Non-CIT Students -->
      <div
        class="glass-box flex items-center justify-center w-[280px] h-[150px] text-[#000a30] text-2xl font-semibold"
        on:click={() => goto('/nonmsmesignup')}
      >
      For Non-MSME
      </div>

    </div>
  </div>
</main>
