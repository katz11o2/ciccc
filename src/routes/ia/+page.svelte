<script>
    let logos = [
      {
        src: 'https://static.wixstatic.com/media/f51316_4cce72566b71423cb7925545f11f01ad~mv2.png/v1/crop/x_0,y_28,w_4266,h_3824/fill/w_81,h_72,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/G3D%20H-%20LOGO.png',
        alt: 'Logo 10',
        label: 'Galactic 3D',
        href: 'https://www.galactic-3d.com/'  // Example custom link
      },
      {
        src: 'https://media.licdn.com/dms/image/v2/D4D0BAQHWpt9pWEy2jQ/company-logo_200_200/company-logo_200_200/0/1702847034624?e=2147483647&v=beta&t=_xOMEjrwce3xUdexiyf4CebHxduka4Q17z3fiEYw0w0',
        alt: 'Samsung',
        label: 'Samsung',
        href: 'https://www.samsung.com'  // Example custom link
      },
      {
        src: 'https://static.wixstatic.com/media/6cc8a6_649b4f2565b1402385688354e1bb9d23~mv2.png',
        alt: 'Logo 3',
        label: 'Persapien Innovation per life',
        href: 'https://static.wixstatic.com/media/6cc8a6_649b4f2565b1402385688354e1bb9d23~mv2.png'  // Example custom link
      },
      {
        src: 'https://dynamic.placementindia.com/recruiter_comp_logo/767881_20181001105507.jpg',
        alt: 'Logo 4',
        label: 'Avian Aerospace',
        href: 'https://example.com/4'  // Example custom link
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURTbQTSs0hlF1I70gibdLhIQAIZk7S2Pvxw&s',
        alt: 'Logo 5',
        label: 'Brewcha',
        href: 'https://example.com/5'  // Example custom link
      },
      {
        src: 'data:image/jpeg;base64,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',
        alt: 'Logo 6',
        label: 'Andrew Additive',
        href: 'https://example.com/6'  // Example custom link
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfj0pqBQ5c1x1kdizok7pkKvifvqk8LJVxgw&s',
        alt: 'Logo 7',
        label: 'Trane Technology',
        href: 'https://example.com/7'  // Example custom link
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVFSmnTAncQReHBHFO-N8VYuuvoMB8N5ys1yGzB6Jrw&s',
        alt: 'Logo 8',
        label: 'Okulo Aerospace Private Limited ',
        href: 'https://example.com/8'  // Example custom link
      },
      {
        src: 'data:image/jpeg;base64,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',
        alt: 'Logo 9',
        label: 'Wipro 3D',
        href: 'https://example.com/9'  // Example custom link
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIb6Q9hUKisc737yj_OoYWZfa0lEjVnjBf4A&s',
        alt: 'Logo 10',
        label: 'Synopsis',
        href: 'https://example.com/10'  // Example custom link
      }
      
    ];
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    
    :global(body) {
      padding: 0;
      font-family: 'Poppins', sans-serif;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 150vh;
    }
    
    .wrapper {
      text-align: center;
      padding: 2rem;
    }
    
    .heading {
      font-size: 2rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 2rem;
      margin-top: 3rem;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
      justify-items: center;
    }
    
    .logo-box {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      width: 140px;
      height: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none; /* Removes underline from link */
    }
    
    .logo-box:hover {
      transform: scale(1.08);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    
    .logo-box img {
      width: 60%;
      height: auto;
      margin-bottom: 0.5rem;
    }
    
    .logo-label {
      font-size: 14px;
      color: #1f2937;
    }
  </style>
  
  <div class="wrapper">
    <div class="heading">Partners: MSME & Industry Associations</div>
    <div class="grid">
      {#each logos as logo}
        <a href={logo.href} target="_blank" class="logo-box">
          <img src={logo.src} alt={logo.alt} />
          <div class="logo-label">{logo.label}</div>
        </a>
      {/each}
    </div>
  </div>
  