<script>
    import { goto } from '$app/navigation';
  </script>
  
  <style>
    .container {
      display: flex;
      padding: 80px;
      justify-content: center;
      align-items: flex-start;
      gap: 40px;
      flex-wrap: wrap;
    }
  
    .logo-wrapper {
      position: relative;
      width: 300px;
      height: 400px;
    }
  
    .main-logo {
      width: 100%;
      height: calc(100% + 40px); /* increased height by 40px */
      border-radius: 8px;
      object-fit: cover;
    }
  
    .top-right-logo {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 50px;
      height: auto;
      padding-top: 30px; /* added top padding */
    }
  
    .info-blocks {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
      flex: 1;
      padding-top: 10px;
    }
  
    .info-box {
      border: 2px solid #1e3a8a;
      border-radius: 12px;
      padding: 13px;
      color: #1e3a8a;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      transition: all 0.2s ease;
      cursor: pointer;
    }
  
    .info-box:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
  
    .info-box h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 4px;
    }
  
    .arrow-button {
      background: none;
      border: none;
      color: #1e3a8a;
      font-size: 1.25rem;
      cursor: pointer;
      margin-left: 6px;
    }
  </style>
  
  <main class="container">
    <!-- Logo Section -->
    <div class="logo-wrapper">
      <img src="/logos/Frame 1.png" alt="Main Logo" class="main-logo" />
      <img src="/logos/Frame 17 (2).png" alt="Corner Logo" class="top-right-logo" />
    </div>
  
    <!-- Info Blocks Section -->
    <div class="info-blocks">
      <h1 class="relative left-21 text-blue-900 font-bold">Post your Problem Statement</h1>

      <div class="info-box" on:click={() => goto('/loginforboth')}>
        <h2>Student</h2>
        <p>
          Post your Problem statement or Take up an industry related problem and solve it.
          <button class="arrow-button">→</button>
        </p>
      </div>
  
      <div class="info-box" on:click={() => goto('/facultylogin')}>
        <h2>Academicians</h2>
        <p>
          Manage Problem Statements, Track progress, and resources seamlessly.
          <button class="arrow-button">→</button>
        </p>
      </div>
  
      <div class="info-box" on:click={() => goto('/industry')}>
        <h2>MSME/NON-MSME</h2>
        <p>
          Connect with our Institution and explore collaboration opportunities.
          <button class="arrow-button">→</button>
        </p>
      </div>
    </div>
  </main>
  