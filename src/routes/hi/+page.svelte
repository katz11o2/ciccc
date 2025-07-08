<script>
    let formData = {
        name: "",
        email: "",
        message: ""
    };

    let submitting = false;
    let responseMessage = "";

    async function submitForm() {
        submitting = true;
        responseMessage = "Submitting...";

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbz6UsivgpyvBogmVYVFJWiWoXLISG4RNHP7OVRtO0e2m5xJX_PIvtDVOrTUHf4R7dO9/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    mode: "cors", // Prevent CORS issues
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();
            console.log("Response:", result);

            if (result.status === "success") {
                responseMessage = "✅ Form submitted successfully!";
                formData = { name: "", email: "", message: "" }; // Reset form
            } else {
                responseMessage = "❌ Submission failed: " + result.message;
            }
        } catch (error) {
            console.error("Submission Error:", error);
            responseMessage = "❌ Failed to submit the form.";
        } finally {
            submitting = false;
        }
    }
</script>

<h1>Google Sheets Form</h1>

<form on:submit|preventDefault={submitForm}>
    <label>Name:</label>
    <input type="text" bind:value={formData.name} required />

    <label>Email:</label>
    <input type="email" bind:value={formData.email} required />

    <label>Message:</label>
    <textarea bind:value={formData.message} required></textarea>

    <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
    </button>
</form>

<p>{responseMessage}</p>
