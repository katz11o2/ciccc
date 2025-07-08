<script>
  let form = {
    title: "",
    category: "",
    description: "",
    uniqueness: "",
    existingTechnologies: "",
    gapAnalysis: "",
    patentability: "",
    Marketingdata: "",
    visualizedProduct: "",
    researchData: "",
    experimentalData: "",
    otherCategory: "",
    confirmSubmission: false
  };

  let file;
  let loading = false;

  const MASTER_KEY = "$2a$10$7s2J1bfLkUw4k5xI41hADupk/1x12kJIIECHjYqWCruKDUnE0/wKu";
  const BIN_KEY_STORAGE = "jsonbin_design_ideas";
  const IMGBB_API_KEY = "6b78d56b527f6dba58807d358ac35142";

  let showOtherCategory = false;
  $: showOtherCategory = form.category === "OTHERS";

  let showPatentField = false;
  $: showPatentField = form.uniqueness === "Yes";

  async function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = error => reject(error);
    });
  }

  async function submitForm() {
    if (!form.confirmSubmission || !file) {
      alert("Please confirm the submission and upload a visual file.");
      return;
    }

    loading = true;
    try {
      // Upload to ImgBB
      const imageBase64 = await toBase64(file);
      const imgRes = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: "POST",
        body: new URLSearchParams({ image: imageBase64 })
      });
      const imgData = await imgRes.json();
      form.visualizedProduct = imgData.data.url;

      // Save to JSONBin
      let binId = localStorage.getItem(BIN_KEY_STORAGE);
      let existing = [];

      if (binId) {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
          headers: { "X-Master-Key": MASTER_KEY }
        });
        const json = await res.json();
        existing = json.record || [];
      }

      existing.push({ ...form, submittedAt: new Date().toISOString() });

      const url = binId ? `https://api.jsonbin.io/v3/b/${binId}` : "https://api.jsonbin.io/v3/b";
      const method = binId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": MASTER_KEY,
          "X-Bin-Private": "true"
        },
        body: JSON.stringify(existing)
      });

      const result = await response.json();
      if (!binId) {
        localStorage.setItem(BIN_KEY_STORAGE, result.metadata.id);
      }

      alert("✅ Submission successful!");
      form = {
        title: "",
        category: "",
        description: "",
        uniqueness: "",
        existingTechnologies: "",
        gapAnalysis: "",
        patentability: "",
        Marketingdata: "",
        visualizedProduct: "",
        researchData: "",
        experimentalData: "",
        otherCategory: "",
        confirmSubmission: false
      };
      file = null;
    } catch (e) {
      console.error(e);
      alert("❌ Submission failed.");
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex justify-center items-center p-6 bg-gray-300 pt-10">
  <div class="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg shadow-blue-400 mt-5">
    <h1 class="text-3xl font-bold text-center text-blue-700 mb-6">🚀 Submit Your Design Idea</h1>

    <form on:submit|preventDefault={submitForm}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input maxlength="100" bind:value={form.title} placeholder="Title" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <select bind:value={form.category} class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Category</option>
          <option value="CSE">Computer Science and Engineering</option>
          <option value="AIML">Mechanical Engineering</option>
          <option value="EEE">Electrical Engineering</option>
          <option value="MECH">Chemical Engineering</option>
          <option value="OTHERS">Others</option>
        </select>

        {#if showOtherCategory}
          <input maxlength="100" bind:value={form.otherCategory} placeholder="Please specify the category" class="p-3 border rounded-lg text-lg col-span-2 transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {/if}

        <textarea maxlength="100" bind:value={form.description} placeholder="Description" class="p-3 border rounded-lg text-lg col-span-2 transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

        <select bind:value={form.uniqueness} class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Is there any uniqueness?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {#if showPatentField}
          <input maxlength="100" bind:value={form.patentability} placeholder="Patentability Information" class="p-3 border rounded-lg text-lg col-span-2 transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {/if}

        <input maxlength="100" bind:value={form.existingTechnologies} placeholder="Existing Technologies" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input maxlength="100" bind:value={form.gapAnalysis} placeholder="Gap-Analysis and problem-elimination" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input maxlength="100" bind:value={form.Marketingdata} placeholder="Market / Marketing data" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <label for="visualizedProduct" class="block text-lg font-medium text-blue-600 mb-2">Click here to upload </label>
        <div class="relative mb-4">
          <input type="file" id="visualizedProduct" on:change={(e) => file = e.target.files[0]} class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-0 absolute inset-0 w-full h-full" accept="image/*,.pdf,.docx">
        </div>

        <p class="text-center text-sm text-blue-600 italic">Submit your product visualized for a chance to showcase your idea!</p>

        <div class="col-span-2 flex items-center">
          <input type="checkbox" bind:checked={form.confirmSubmission} class="mr-2">
          <span class="text-sm text-blue-600">I confirm the submission and understand the terms.</span>
        </div>
      </div>

      <button type="submit" class="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg text-xl transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  </div>
</div>
