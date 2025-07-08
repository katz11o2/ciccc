<script>
    import { selectedSubmission } from '../../stores/selectedSubmission';  // Import the store
    import { get } from 'svelte/store'; // To get the store value
  </script>
  
  <div class="min-h-screen p-6 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600">
    <h1 class="text-4xl font-extrabold text-center text-white mb-8">📋 Submission Details</h1>
  
    {#if $selectedSubmission}
      <div class="bg-white shadow-lg rounded-lg p-6">
        <p><strong>Title:</strong> {$selectedSubmission.title}</p>
        <p><strong>Category:</strong> {$selectedSubmission.category}</p>
        <p><strong>Description:</strong> {$selectedSubmission.description}</p>
        <p><strong>Uniqueness:</strong> {$selectedSubmission.uniqueness}</p>
        <p><strong>Existing Technologies:</strong> {$selectedSubmission.existingTechnologies}</p>
        <p><strong>Gap Analysis:</strong> {$selectedSubmission.gapAnalysis}</p>
        <p><strong>Patentability:</strong> {$selectedSubmission.patentability}</p>
        <p><strong>Market Data:</strong> {$selectedSubmission.MarketData}</p>
        <p><strong>Visualized Product:</strong> {$selectedSubmission.visualizedProduct ? 'File Available' : 'No File'}</p>
        <p><strong>Other Category:</strong> {$selectedSubmission.otherCategory || "N/A"}</p>
        <p><strong>Comment:</strong> {$selectedSubmission.comment}</p>
      </div>
    {:else}
      <p class="text-center text-gray-200 mt-4 text-lg">No submission data available.</p>
    {/if}
  </div>
  