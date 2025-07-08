<script>
  import { onMount } from 'svelte';
  let fadeIn = false;
  onMount(() => {
    fadeIn = true;
  });
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
</svelte:head>

  
  <style>
    :global(body) {
      width: 100%;
      margin: 0;
      padding-top:30px ;
      height: 100%;
      font-family: "Poppins", sans-serif;
      background: white;
     
      justify-content: center;
      align-items: start;
      overflow-x: hidden;
    }
  
    .main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

    .container {
      width: 100%;
      max-width: 1000px;
      padding: 30px;
      height: auto;  /* Change from min-height to height: auto */
      background: rgba(207, 223, 225, 0.2);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-out, transform 1s ease-out;
      overflow-x: auto;
      margin-bottom: 20px;
      margin-top: 30px; /* Added 20px padding between container and bottom of the page */
    }
  
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
  
    .greeting {
      padding: 10px 20px; /* 30px padding from top and bottom */
      text-align: left;
    }
  
    .justified-text {
      text-align: justify;
      line-height: 1.8;
    }
  
    .msme-link {
      color: #007bff;
      text-decoration: none;
    }
  
    .msme-link:hover {
      text-decoration: underline;
    }
  
    .greeting h1 {
      font-size: 32px; /* Adjust size as needed */
      font-weight: bold;
    }
  
    .greeting h2 {
      font-size: 28px; /* Adjust size as needed */
      font-weight: normal;
    }
  
    .greeting p {
      font-size: 16px; /* Adjust size as needed */
      line-height: 1.5;
      margin: 20px 0;
    }
  
    .msmelink {
      color: blue;
      text-decoration: none;
    }
  
    .msmelink:hover {
      text-decoration: underline;
    }
  
    .flowchart {
    font-family: sans-serif;
  }
  .box {
    border: 2px solid #333;
    padding: 10px 20px;
    border-radius: 8px;
    text-align: center;
    background-color: #f9f9f9;
    min-width: 150px;
  }
  .arrow {
    width: 0;
    height: 0;
  }
  .arrow.down {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid #333;
    margin: auto;
  }
  .arrow.down-left {
    transform: rotate(45deg);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid #333;
  }
  .arrow.down-right {
    transform: rotate(-45deg);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid #333;
  }
  
  
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
  
    .button-box {
      background-color: white;
      color: black;
      padding: 10px 20px;
      border: 1px solid black;
      cursor: pointer;
      font-weight: bold;
      width: 250px;
      text-align: center;
      border-radius: 12px;
      transition: background 0.5s ease;
    }
  
    .button-box:hover {
      background-color: #d3c4eb;
    }
  
    .connector {
      width: 2px;
      height: 30px;
      background-color: black;
    }
  
    .horizontal {
      width: 40px;
      height: 2px;
      background-color: black;
      margin-top: 15px;
    }
  
    .vertical {
      width: 2px;
      height: 30px;
      background-color: black;
      margin: 0 auto;
    }
    
  </style>
  
<div class="main">
  <div class="container" class:fade-in={fadeIn}>
    <div class="greeting">
      <div class="header">
        <h2>Cambarian Incubation Center (CIC)</h2>
        <div class="flex items-center gap-3 mt-2 mb-1">
          <span class="w-2 h-2 bg-blue-900 rounded-full"></span>
          <span class="w-2 h-2 bg-blue-900 rounded-full"></span>
          <div class="w-[60px] h-0.5 bg-blue-900 ml-2"></div>
        </div>
      </div>

     <p class="justified-text">
      The Cambrian Incubation Centre (CIC) is a smart initiative, established by 
      <a href="https://engg.cambridge.edu.in/" target="_blank" class="msme-link">Cambridge Institute of Technology</a>, Bangalore, to create a vibrant ecosystem that encourages technological innovation leading to entrepreneurship and growth. Its primary objective is to provide a supportive environment to innovation-hungry 
      <a href="https://msme.gov.in/" target="_blank" class="msme-link">MSMEs</a> to the extent possible and permissible. It fosters creation of a collaborative environment where students (potential entrepreneurs), academic staff (as mentors), and industry experts, especially from 
      <a href="https://msme.gov.in/" target="_blank" class="msme-link">MSMEs</a>, can connect, share knowledge, and grow together with eligible scheme support from the 
      <a href="https://msme.gov.in/" target="_blank" class="msme-link">Ministry of MSME (Govt of India).</a> The creation of a dedicated Centre is the outcome of recognition of Cambridge Institute of Technology (Bangalore) as a 
      <a href="https://www.dcmsme.gov.in/" target="_blank" class="msme-link">Host Institution</a>, by the Office of the Development Commissioner - MSME, 
      <a href="https://msme.gov.in/" target="_blank" class="msme-link">Ministry of MSME</a>, Govt of India. This Centre is also supported by the 
      <a href="https://msme.gov.in/" target="_blank" class="msme-link">MSME</a> 
      <a href="https://www.dcmsme.gov.in/" target="_blank" class="msme-link">(DCMSME) Centre of Excellence</a> IISc, Bangalore. This Centre would provide several facilities like Incubation Space (having office space, meeting rooms, internet, etc), Mentorship (connect with learned faculty), exposure to cutting-edge technologies (through participation in events like awareness programs and workshops), laboratories (for experimentation, etc).
    </p>

        <h2> Incubation Team</h2>
        <div class="flex items-center gap-3 mt-2 mb-1">
          <!-- Two dots -->
          <span class="w-2 h-2 bg-blue-900 rounded-full"></span>
          <span class="w-2 h-2 bg-blue-900 rounded-full"></span>
          <!-- Line -->
          <div class="w-[60px] h-0.5 bg-blue-900 ml-2"></div>
      </div>
      </div>
  
     <div class="flowchart space-y-4 bg-blue-50 p-10 overflow-hidden">

  <!-- Top: Chairman / CEO -->
 <!-- Chairman -->
<div class="flex justify-center">
  <a href="/chairman" target="_blank" class="w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">Chairman, CGI</a>
</div>

<!-- Up arrow (between Chairman and CEO) -->
<div class="flex justify-center">
  <div class="w-0 h-0 border-l-9 border-r-9 border-b-20 border-transparent border-b-blue-800 mt-2"></div>
</div>

<!-- CEO -->
<div class="flex justify-center">
  <a href="/ceo" target="_blank" class="w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">CEO, CITech</a>
</div>

<!-- Down arrow (to Principal) -->
<div class="flex justify-center">
  <div class="w-0 h-0 border-l-9 border-r-9 border-b-20 border-transparent border-b-blue-800 mt-2"></div>
</div>

  <!-- Principal -->
  <div class="flex justify-center">
    <a href="/princi" target="_blank" class="w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">Principal, CITech</a>
  </div>

  <!-- Arrow -->
  <div class="flex justify-center">
    <div class="w-0 h-0 border-l-9 border-r-9 border-b-20 border-transparent border-b-blue-800 mt-2"></div>
  </div>

  <!-- Middle Flow -->
  <div class="flex justify-center">
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-2">

        <!-- Manager -->
        <a  target="_blank" class="relative left-52 bottom-10 w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">Operations Manager - CIC</a>
        <div class="relative left-58 top-5 w-0 h-0 border-t-9 border-b-9 border-l-20 border-transparent border-l-blue-800"></div>

        <!-- Technology Head -->
        <a  target="_blank" class="relative right-5 top-14 w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">Web Administrator - CIC</a>
        <div class="relative left-1 bottom-5 w-0 h-0 border-t-9 border-b-9 border-l-20 border-transparent border-l-blue-800"></div>

        <!-- Innovation Advisor -->
        <a href="srini" target="_blank" class="relative bottom-3 left-75 w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">Advisor - Innovation, CITech</a>
        <div class="relative left-10 bottom-0 w-0 h-0 border-t-9 border-b-9 border-l-20 border-transparent border-l-blue-800"></div>

        <!-- Double Arrow Right-Left (no box in between, just decorative or alignment?) -->
        <div class="relative left-11 bottom-0 w-0 h-0 border-t-9 border-b-9 border-r-20 border-transparent border-r-blue-800"></div>

        <!-- Industry Associations -->
        <div class="relative group top-23 left-7 w-48">
          <a href="/ia" target="_blank" class="relative left-5 top-6   w-48 p-4 text-center border-2 border-yellow-400 bg-blue-100 text-blue-900 shadow-[0_0_10px_#facc15] transition duration-200 rounded-md block">
            MSME/Industry Associations
          </a>
        
          <!-- Invisible hover zone beside the link -->
          <div class="absolute left-full top-0 w-10 h-full group-hover:block hidden"></div>
        
          <!-- Pop-up box -->
         
       
        </div>
        
        
        <!-- Down arrow (below Industry Associations) -->
        <div class="flex justify-center">
          <div class="relative right-25 top-12 w-0 h-0 border-l-9 border-r-9 border-b-20 border-transparent border-b-blue-800 mt-2"></div>
        </div>

        <!-- Up arrow (below down arrow) -->
        <div class="flex justify-center">
          <div class="relative right-17 top-13 w-0 h-0 border-l-9 border-r-9 border-t-20 border-transparent border-t-blue-800"></div>
        </div>

      </div>

      <!-- Innovation Head -->
      <a href="/hod" target="_blank" class="relative right-121 w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">Head - CIC</a>
    </div>
  </div>

  <!-- Arrow -->
  <div class="flex justify-center">
    <div class="w-0 h-0 border-l-9 border-r-9 border-b-20 border-transparent border-b-blue-800 mt-2"></div>
  </div>

  <!-- All HoDs -->
  <div class="flex justify-center">
    <a  target="_blank" class="w-48 p-4 text-center border-2 border-blue-800 bg-blue-100 text-blue-900 hover:bg-blue-200 hover:shadow-lg transition duration-200 rounded-md">All HoDs, CITech</a>
  </div>
 </div>

  </div>

</div>  
