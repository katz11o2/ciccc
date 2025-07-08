<script>
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation'; // SvelteKit's built-in navigation
  import { selectedSubmission } from '../../stores/selectedSubmission';  // Import the store
  
  let submissions = [];
  let comment = '';  // This will hold the comment input
  
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Fetching data from localStorage for submissions
    submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  });
  
  // Function to open a file
  function openFile(url) {
    window.open(url, '_blank');
  }
  
  // Function to send selected submission to the HOD page
  function sendToNextPage(submission) {
    // Store the selected submission and comment in the store
    selectedSubmission.set({ ...submission, comment });
  
    // Navigate to the HOD page
    goto('/hodall'); // Adjust the URL based on your structure
  }
</script>

<div class="min-h-screen p-6 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600">
  <h1 class="text-4xl font-extrabold text-center text-white mb-8">📋 View Submitted Ideas</h1>

  {#if submissions.length === 0}
    <p class="text-center text-gray-200 mt-4 text-lg">No submissions yet.</p>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {#each submissions as submission}
        <div class="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg p-6 shadow-lg">
          <h2 class="text-xl font-bold text-white mb-4">{submission.title}</h2>
          <p class="text-white">Category: {submission.category}</p>
          <p class="text-white">Description: {submission.description}</p>
          <p class="text-white">Uniqueness: {submission.uniqueness}</p>
          <p class="text-white">Existing Technologies: {submission.existingTechnologies}</p>
          <p class="text-white">Gap Analysis: {submission.gapAnalysis}</p>
          <p class="text-white">Patentability: {submission.patentability}</p>
          <p class="text-white">Market Data: {submission.MarketData}</p>
          <div class="my-4">
            {#if submission.visualizedProduct}
              <button class="bg-blue-500 text-white p-2 rounded" on:click={() => openFile(submission.visualizedProduct)}>
                View File
              </button>
            {:else}
              <p class="text-white">No file uploaded</p>
            {/if}
          </div>
          <p class="text-white">Other Category: {submission.otherCategory || "N/A"}</p>
          
          <div class="mt-4">
            <input 
              type="text" 
              placeholder="Add comments..." 
              bind:value={comment} 
              class="border p-2 rounded-md w-full text-black" />
          </div>
          <div class="mt-4">
            <button class="mt-2 bg-green-500 text-white px-4 py-2 rounded-md" on:click={() => sendToNextPage(submission)}>
              Continue Conversation
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

