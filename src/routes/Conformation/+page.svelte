<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let submissions = [];

  // Safe parsing from localStorage
  try {
    const data = localStorage.getItem("submissions");
    submissions = data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to parse submissions from localStorage", e);
    submissions = [];
  }

  let commentText = '';
  let selectedHOD = '';

  const hodOptions = [
    { name: "Mechanical HOD", value: "Mechanical" },
    { name: "EEE HOD", value: "EEE" },
    { name: "ECE HOD", value: "ECE" },
    { name: "CSE HOD", value: "CSE" },
  ];

  onMount(() => {
    if (!Array.isArray(submissions) || submissions.length === 0) {
      setTimeout(() => goto('/'), 0);
    }
  });

  function sendToHOD(hod) {
    if (!hod) {
      alert("Invalid HOD selected");
      return;
    }
    alert(`Sent to ${hod.name}`);
    // Logic to send submission to HOD goes here
  }
</script>

<div class="min-h-screen flex justify-center items-center p-6 bg-gray-100 pt-10">
  <div class="max-w-3xl w-full bg-white bg-opacity-30 backdrop-blur-xl p-8 rounded-lg shadow-lg shadow-blue-400 mt-5">
    <h1 class="text-3xl font-bold text-center text-blue-700 mb-6">Submitted Design Ideas</h1>

    {#if submissions.length === 0}
      <p class="text-center text-lg text-red-600">No submissions yet. Please go back and submit a design.</p>
    {:else}
      {#each submissions as submission}
        <div class="mb-6 p-6 bg-white bg-opacity-30 backdrop-blur-xl rounded-lg shadow-lg">
          <div class="grid grid-cols-1 gap-4 mb-4">
            <div><strong>Title:</strong> {submission.title}</div>
            <div><strong>Category:</strong> {submission.category}</div>
            <div><strong>Description:</strong> {submission.description}</div>
            <div><strong>Uniqueness:</strong> {submission.uniqueness}</div>
            {#if submission.patentability}
              <div><strong>Patentability:</strong> {submission.patentability}</div>
            {/if}
            <div><strong>Existing Technologies:</strong> {submission.existingTechnologies}</div>
            <div><strong>Gap-Analysis:</strong> {submission.gapAnalysis}</div>
            <div><strong>Market/Marketing Data:</strong> {submission.Marketingdata}</div>
            {#if submission.visualizedProduct instanceof File}
              <div><strong>Visualized Product:</strong><br/>
                <img src={URL.createObjectURL(submission.visualizedProduct)} alt="Visualized Product" class="w-32 h-32 object-cover mt-2"/>
              </div>
            {/if}
          </div>

          <!-- Comment Section -->
          <div class="mt-6">
            <h2 class="text-xl font-semibold text-blue-600">Add a Comment</h2>
            <textarea
              bind:value={commentText}
              placeholder="Write your comment here..."
              class="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
            <button type="button" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add Comment
            </button>
          </div>

          <!-- Send to HOD Dropdown -->
          <div class="mt-6">
            <h3 class="text-lg font-semibold">Send to HOD</h3>
            <select
              bind:value={selectedHOD}
              class="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>Select HOD</option>
              {#each hodOptions as hod}
                <option value={hod.value}>{hod.name}</option>
              {/each}
            </select>
            <button
              type="button"
              class="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              on:click={() => sendToHOD(hodOptions.find(h => h.value === selectedHOD))}
              disabled={!selectedHOD}
            >
              Send to HOD
            </button>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .bg-opacity-30 {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .backdrop-blur-xl {
    backdrop-filter: blur(30px);
  }

  .shadow-blue-400 {
    box-shadow: 0 4px 6px rgba(29, 78, 216, 0.1), 0 1px 3px rgba(29, 78, 216, 0.08);
  }

  .focus\:ring-blue-400:focus {
    ring-color: rgba(29, 78, 216, 0.4);
  }

  .hover\:bg-blue-700:hover {
    background-color: #2b6cb0;
  }

  .hover\:bg-green-700:hover {
    background-color: #2f855a;
  }
</style>
