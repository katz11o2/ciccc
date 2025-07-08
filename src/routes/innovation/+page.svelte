<script>
    import { onMount } from 'svelte';
    let fadeIn = false;
  
    onMount(() => {
      fadeIn = true;
    });
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Cinzel+Decorative:wght@700&display=swap');
    
    :global(body) {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #2d1952, #7113ab, #4e0da2);
      color: white;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      overflow: hidden;
    }
  
    .container {
      max-width: 900px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1.2s ease-out, transform 1.2s ease-out;
    }
  
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
  
    h1 {
      font-size: 2rem;
      font-family: 'Cinzel Decorative', cursive;
      text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }
  
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-top: 20px;
      color: rgba(255, 255, 255, 0.9);
    }
  
    @keyframes glow {
      0% { text-shadow: 0 0 5px #fff, 0 0 10px #0ff, 0 0 15px #0ff; }
      50% { text-shadow: 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff; }
      100% { text-shadow: 0 0 5px #fff, 0 0 10px #0ff, 0 0 15px #0ff; }
    }
  
    .glow-text {
      animation: glow 2s infinite alternate;
    }
  </style>
  
  <div class="container {fadeIn ? 'fade-in' : ''}">
    <h1 class="glow-text">Industry-Innovation</h1>
    <p>
        Industry innovation refers to a challenging process of developing innovative ideas, products, services or factory-relevant processes with the primary objective of improving production-efficiency, cost-competitiveness and consequent market value through implementation of innovative technologies, methods and processes or impactful business models that have the potential to transform existing processes for better and more valuable new opportunities. This process may involve Product / Process Innovation, Business Innovation, breakthrough technological innovation, etc., which will be of extremely important to stay competitive in a cut-throat, survival of the fittest market, including international market.
        </p>
  </div>
  