<script>
    // Svelte component script
  </script>
  
  <style>
    /* Overall page styles */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: white;
    }
  
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }
  
    /* Box with glass effect */
    .glass-box {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 40px;
      width: 80%;
      max-width: 900px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #333;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      animation: fadeInUp 1.5s ease-out;
    }
  
    /* Fade and slide-in animation */
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    .glass-box h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #333;
      text-align: center;
    }
  
    .glass-box p {
      font-size: 1rem;
      line-height: 1.6;
      text-align: justify;
      color: #333;
    }
  
    /* Optional: Add a subtle hover effect for interaction */
    .glass-box:hover {
      transform: scale(1.02);
      transition: transform 0.3s ease-in-out;
    }
  </style>
  
  <div class="container">
    <div class="glass-box">
      <h2>Collaboration between Academia and Industry</h2>
      <p>
        A partnership between learned academia and industry is designed to establish a professional platform to enable impactful collaboration to take on real-world challenges and build innovative solutions through intense research by participating research faculty. Such a professional relationship will involve expertise, resources and technological capabilities of industry, especially MSMEs, with the intellectual and research-oriented knowledge from the academic world. The primary objective is to intensely drive innovation in product/process development. Expected outcomes from such partnerships shall include accelerated yet relevant Innovation, access to resources, practical application including experimentation and related data acquisition and analysis, knowledge transfer, etc.
      </p>
    </div>
  </div>
  