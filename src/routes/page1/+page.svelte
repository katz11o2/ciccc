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
      <h2>Industry Innovation</h2>
      <p>
        Industry innovation refers to a challenging process of developing innovative ideas, products, services or factory-relevant processes with the primary objective of improving production-efficiency, cost-competitiveness and consequent market value through implementation of innovative technologies, methods and processes or impactful business models that have the potential to transform existing processes for better and more valuable new opportunities. This process may involve Product / Process Innovation, Business Innovation, breakthrough technological innovation, etc., which will be of extremely important to stay competitive in a cut-throat, survival of the fittest market, including international market.
    </p>
    </div>
  </div>
  