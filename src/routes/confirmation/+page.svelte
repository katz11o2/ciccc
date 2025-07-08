<script>
  // This function is to open the modal when the image is clicked
  function openModal() {
    // Display the modal with the second image
    document.getElementById("imageModal").style.display = "flex";

    // After 3 seconds, redirect to the home page
    setTimeout(() => {
      window.location.href = "http://localhost:5173"; // Change to your home page URL
    }, 3000); // 3000ms = 3 seconds
  }

  // This function is to close the modal when the user clicks outside the image
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
</script>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  /* Modal Styles */
  .modal {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* White background */
    justify-content: center;
    align-items: center;
  }

  .modal img {
    max-width: 90%;
    max-height: 90%;
    border: 5px solid white;
  }

  .modal-close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
</style>

<div class="center">
  <!-- First Image displayed on the page -->
  <img src="/logos/Frame22.png" alt="Research GIF" class="relative pt-10" on:click={openModal} />
</div>

<!-- Modal to display the second image when clicked -->
<div id="imageModal" class="modal" on:click={closeModal}>
  <img src="/logos/Frame23.png" alt="Research GIF" />
  <span class="modal-close" on:click={closeModal}>X</span>
</div>
