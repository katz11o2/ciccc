<script>

import { fade, scale } from 'svelte/transition';

function goTo(page) {
        window.location.href = page;
    }
    const stats = [
        { icon: '⩇', value: '10+', label: 'Years Experience' },
        { icon: '𖣠 ', value: '50+', label: 'Industry Partners' },
        { icon: '✧', value: '100+', label: 'Success Stories' },
        { icon: ' ⌕', value: '25+', label: 'Expert Mentors' }
    ];

    const services = [
    {
      title: "Industry Problem Solving",
      description: "Transform complex business challenges into opportunities with our cutting-edge technological solutions and expert guidance.",
      items: ["Expert Consultation", "Rapid Prototyping", "Industry-Specific Solutions"],
      button: "CUSTOM SOLUTIONS",
      link: "Learn more..",
      icon: "🏭"
    },
    {
      title: "R&D Partnership",
      description: "Access world-class research facilities and collaborate with leading experts to drive innovation in your field.",
      items: ["State-of-art Labs", "Research Expertise", "Innovation Support"],
      button: "ADVANCED LABS",
      link: "Learn more..",
      icon: "🔬"
    },
    {
      title: "Innovation Support",
      description: "Get comprehensive support throughout your innovation journey, from initial concept to market success.",
      items: ["Mentorship", "Funding Access", "Market Strategy"],
      button: "END-TO-END SUPPORT",
      link: "Learn more..",
      icon: "💡"
    }
  ];

    const studentStartups = [
        { name: 'Miceter.Tech', description: 'AI Solutions',  status: 'Active' },
        { name: 'Gananiya', description: 'Eco-Friendly Products',  status: 'Active' },
        { name: 'Koko Shell', description: 'Decoratives',  status: 'Active'  },
        { name: 'Naticutz', description: 'Animal Husbandry',  status: 'Active'  }
    ];

    const achievements = [
        { year: '2024', title: 'Innovation Excellence Award' },
        { year: '2023', title: 'Best Incubator Program' },
        { year: '2023', title: 'Top Research Institution' }
    ];

    const facultyAchievements = [
        {
            name: 'Industry 1',
           /// title: 'Head of Innovation',
            achievements: [
                'Research Excellence Award 2024',
                'Published in Nature Technology',
                '5 Patents Filed'
            ],
           /// image: 'src/lib/logos/image-2[1].png'
        },

        {
            name: 'Industry 2',
           /// title: 'Head of Innovation',
            achievements: [
                'Research Excellence Award 2024',
                'Published in Nature Technology',
                '5 Patents Filed'
            ],
           /// image: 'src/lib/logos/image-2[1].png'
        },
        {
            name: 'Industry 3',
           /// title: 'Lead Research Mentor',
            achievements: [
                'Best Mentor Award 2023',
                'Industry Innovation Prize',
                '10+ Startups Mentored'
            ],
           /// image: 'src/lib/logos/WhatsApp Image 2025-04-02 at 08.45.11_4c753bca.jpg'
        },
        {
            name: 'Industry 4',
           /// title: 'Lead Scientist',
            achievements: [
                'Tech Innovation Award',
                'IEEE Fellow',
                '15+ Research Papers'
            ],
           /// image: 'https://media.licdn.com/dms/image/v2/D5603AQGPKisYexfYeA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696911278245?e=1749081600&v=beta&t=Bm9ZB_4xK7LLJvie0WdZJ32s8T8AOO-ua-66aw_x0JE'
        },

      
       
    ];
</script>

<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">


<!-- Logo Image Section -->
<!-- Wrapper: Horizontal flex to place three boxes side by side -->


<div class=" flex justify-center items-center gap-34 pr-8 bg-white pt-15">

  <!-- Box 1 -->
  <div class="w-[130px] h-[150px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/factory.gif" alt="Factory Animation" class="w-10 h-10 object-contain mb-1" />
    <img src="/logos/50+.png" alt="50 Plus" class="w-10 h-10 object-contain mb-1" />
    <img src="/logos/50+ Industry Partners.png" alt="50+ Industry Partners" class="relative pt-2 w-70 object-contain" />
  </div>

  <!-- Box 2 -->
  <div class="w-[125px] h-[145px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/certificate.gif" alt="Certificate Animation" class="w-10 h-10 object-contain mb-1" />
    <img src="/logos/30+.png" alt="30 Plus" class="w-10 h-10 object-contain mb-1" />
    <img src="/logos/Patents Filed.png" alt="Patents Filed" class="w-20 h-auto object-contain" />
  </div>

  <!-- Box 3 -->
  <div class="w-[125px] h-[145px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/success.gif" alt="Success Animation" class="w-10 h-10 object-contain mb-1" />
    <img src="/logos/95%25.png" alt="95%" class="w-10 h-10 object-contain mb-1" />
    <img src="/logos/Success%20Rate.png" alt="Success Rate" class="w-20 h-auto object-contain" />
  </div>

</div>

<!-- New Box with Images Below the First Div (Adding Below the Existing Flex) -->

<!-- Wrapper: Horizontal flex to place two boxes side by side with 4px gap -->
<!-- Wrapper: Horizontal flex to place three boxes side by side with a 4px gap -->
<div class="flex justify-center items-center gap-1 bg-white pr-15">

  <!-- Box for First Image (World Creativity and Innovation Day) -->
  <div class="w-[150px] h-[180px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/world-creativity-and-innovation-day.gif" alt="World Creativity and Innovation Day" class="w-17 h-18 object-contain mb-1" />
  </div>

  <!-- Box for Second Image (Frame 5) -->
  <div class="w-[190px] h-[190px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/Frame%205%20(2).png" alt="Frame 5" class="w-48 h-68 object-contain mb-1" />
  </div>

  <!-- Box for Third Image (Research) -->
  <div class="w-[130px] h-[130px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/research.gif" alt="Research" class="w-18 h-18 object-contain mb-1" />
  </div>

  <div class="w-[190px] h-[190px] border border-transparent flex flex-col items-center justify-center bg-white p-2">
    <img src="/logos/Frame%205%20(3).png" alt="Frame 5" class="w-48 h-68 object-contain mb-1" />
  </div>

</div>













<div class="w-full bg-white flex justify-center py-4 pt-10">
  <img 
    src="https://i.ibb.co/0jjYCB1r/Frame-3.png" 
    alt="Frame-3" 
    border="5"
    class="w-[80%] h-[100%] relative left-2 object-contain rounded-[30px] transition-transform duration-300 hover:scale-105" 
  />
</div>



<div class="w-full bg-white flex justify-center py-4 pt-5">
  <div class="relative w-full flex justify-center">
    
    <!-- 🔵 Blue box positioned absolutely (adjust top and left as needed) -->


<!-- Image 3 -->


    
<div class="bg-white py-10 px-4">
  <div class="relative left-93">
  <h1 class="relative text-5xl font-bold text-blue-800 text-left mb-20">Meet our Distinguished Team</h1>

  <div class="flex items-center gap-3 mt-1 mb-10">
    <span class="w-2 h-2 bg-blue-900 rounded-full"></span>
    <span class="w-2 h-2 bg-blue-900 rounded-full"></span>
    <div class="w-[360px] h-0.5 bg-blue-900 ml-2"></div>
  </div>
</div>

<div class="flex flex-wrap justify-center gap-10 w-full max-w-6xl mx-auto">
  <!-- Box Template -->
  <a href="/chairman" target="_blank" rel="noopener noreferrer">
    <div class="flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[300px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:bg-white/40 hover:border-white/60">
      <img src="https://engg.cambridge.edu.in/wp-content/uploads/2020/12/Chairman-600x410-1.jpg.webp" alt="Chairman" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
      <div>
        <h3 class="text-[#000A30] font-semibold">Shri.D.K Mohan</h3>
        <p class="text-[5px] text-[#000A30]">Chairman, CGI</p>

      </div>
    </div>
  </a>

  <a href="/ceo" target="_blank" rel="noopener noreferrer">
      <div class="flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[300px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:bg-white/40 hover:border-white/60">
    <img src="https://i.ibb.co/B1Mz9nV/IMG-7217.jpg" alt="IMG-7217" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
    <div>
        <h3 class="text-[#000A30] font-semibold">Shri.Nithin Mohan</h3>
        <p class="text-sm text-[#000A30]">CEO, CITech</p>
      </div>
    </div>
  </a>

  <a href="/princi" target="_blank" rel="noopener noreferrer">
    <div class="flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[300px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:bg-white/40 hover:border-white/60">
      <img src="https://engg.cambridge.edu.in/wp-content/uploads/2021/09/Principal1.png.webp" alt="Principal" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
      <div>
        <h3 class="text-[#000A30] font-semibold">Dr.G.Indumathi</h3>
        <p class="text-sm text-[#000A30]">Principal, CITech</p>
      </div>
    </div>
  </a>


    <!-- Row 2 -->

   
   <a href="/srini" target="_blank" rel="noopener noreferrer"> 
  <div class="flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[340px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:bg-white/40 hover:border-white/60 mt-6">
    <img src="https://i.ibb.co/4wvg2LQs/11111111.jpg" alt="Srinivas" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
    <div>
      <h3 class="text-[#000A30] font-semibold">Shri. Srinivas M. Jamkhandi</h3>
      <p class="text-xs text-[#000A30]">Advisor - Innovation,<br> CITech</p>
    </div>
  </div>
</a>

  
    <a href="/hod" target="_blank" rel="noopener noreferrer">
      <div class="flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[340px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:bg-white/40 hover:border-white/60 mt-6">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2023/06/536e21ff-2f83-4f7f-8cfb-f3707a562081.jpg" alt="Varalatchoumy" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
        <div>
          <h3 class="text-[#000A30] font-semibold">Dr.Varalatchoumy.M</h3>
          <p class="text-sm text-[#000A30]">Head - Cambrian Incubation Centre, CITech</p>
        </div>
      </div>
    </a>

    <!-- 4 Boxes Row -->
    <div class="flex flex-nowrap justify-start gap-6 w-full max-w-9xl mx-auto mt-7 overflow-hidden">
      <div class="flex items-center w-[280px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2023/06/Dean.png" alt="Dean" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr.Shanthi S R</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Dean, BS, CITech</p>
        </div>
      </div>
    
     <div class="flex items-center w-[300px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60">
  <img src="https://i.ibb.co/C3QDyyrM/istockphoto-1075374570-612x612-1.jpg" alt="Dr. Shreekanth" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
  <div>
    <h3 class="text-[#000A30] font-semibold text-sm">Dr. Shreekanth M Prabhu</h3>
    <p class="text-[10px] text-[#000A30]">Professor & Head, CSE, CITech</p>
  </div>
</div>

    
      <div class="flex items-center w-[300px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60">
        <img src="https://i.ibb.co/C3QDyyrM/istockphoto-1075374570-612x612-1.jpg" alt="Preethi" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Preethi S</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head, <br> ISE, CITech</p>
        </div>
      </div>
    
      <div class="flex items-center w-[300px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60">
        <img src="https://i.ibb.co/C3QDyyrM/istockphoto-1075374570-612x612-1.jpg" alt="Sandeep" class="w-[100px] h-[100px] object-cover rounded-xl mr-4">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Sandeep Kumar</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head, <br> CS-IOT, CITech</p>
        </div>
      </div>
    </div>
    
  

    <div class="flex justify-start gap-4 w-full max-w-9xl mx-auto mt-10">
      <!-- Card 1 -->
      <div class="flex items-center w-[260px] h-[120px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2023/06/536e21ff-2f83-4f7f-8cfb-f3707a562081.jpg" alt="Dr.Varalatchoumy M" class="w-[90px] h-[90px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Varalatchoumy M</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head,<br> AIML, CITech</p>
        </div>
      </div>
    
      <!-- Card 2 -->
      <div class="flex items-center w-[300px] h-[120px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2022/03/DSC_1035-2048x1362.jpg" alt="Dr.Shiva Panchakshari T G" class="w-[90px] h-[90px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Shiva Panchakshari T G</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head,<br> ECE, CITech</p>
        </div>
      </div>
    
      <!-- Card 3 -->
      <div class="flex items-center w-[260px] h-[120px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2021/11/hema.jpg" alt="Prof. Hema. A" class="w-[90px] h-[90px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Prof. Hema A</h3>
          <p class="text-[10px] text-[#000A30]">Associate Professor & Head, EEE, CITech</p>
        </div>
      </div>
    
      <!-- Card 4 -->
      <div class="flex items-center w-[290px] h-[120px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2021/11/Dr.-SHANKAR-B.S-Professor-and-HOD-CIVIL.jpg" alt="Dr. Shankar B S" class="w-[90px] h-[90px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Shankar B S</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head, <br> Civil, CITech</p>
        </div>
      </div>
    </div>
    

    <div class="flex justify-center gap-7 w-full max-w-9xl mx-auto mt-8">
      <!-- Card 1 -->
      <div class="flex items-center w-[330px] h-[130px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://engg.cambridge.edu.in/wp-content/uploads/2021/03/mech-hod-Dr-Suneelkumar-N-Kulkarni.jpg" alt="Dr. Suneelkumar N Kulkarni" class="w-[60px] h-[60px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Suneelkumar N Kulkarni</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head, Mechanical, CITech</p>
        </div>
      </div>
    
      <!-- Card 2 -->
      <div class="flex items-center w-[330px] h-[130px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://i.ibb.co/C3QDyyrM/istockphoto-1075374570-612x612-1.jpg" alt="Dr. Ravi" class="w-[60px] h-[60px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Dr. Ravi</h3>
          <p class="text-[10px] text-[#000A30]">Professor & Head, MBA, CITech</p>
        </div>
      </div>
    
      <!-- Card 3 -->
      <div class="flex items-center w-[330px] h-[130px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-2 hover:scale-105 hover:shadow-2xl hover:bg-white/40 hover:border-white/60 transition-all duration-300">
        <img src="https://i.ibb.co/C3QDyyrM/istockphoto-1075374570-612x612-1.jpg" alt="Prof. Diwakar Karadi" class="w-[60px] h-[60px] object-cover rounded-xl mr-3">
        <div>
          <h3 class="text-[#000A30] font-semibold text-sm">Prof. Diwakar Karadi</h3>
          <p class="text-[10px] text-[#000A30]">Assistant Professor & Head, MCA, CITech</p>
        </div>
      </div>
    </div>
    


    <!-- Row 3 -->
    <div class="flex justify-center gap-6 w-full max-w-5xl mx-auto mt-10">
      <!-- Mr. Syed Hayath -->
      <div class="transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[320px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 flex items-center hover:bg-white/40 hover:border-white/60">
        <img src="https://i.postimg.cc/g2L1bDMC/DSC-092898.jpg" alt="Mr. Syed Hayath" class="w-[60px] h-[60px] object-cover rounded-xl mr-4">
        <div class="flex flex-col justify-center">
          <h3 class="text-center text-[#000A30] font-semibold text-sm">Mr. Syed Hayath</h3>
          <p class="text-center text-[10px] leading-[12px] text-[#000A30]">Web Administrator, <br>Cambrian Incubation Centre, CITech</p>
        </div>
      </div>
    
      <!-- Mr. Arun Singh -->
      <div class="transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[320px] h-[140px] bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-3 flex items-center hover:bg-white/40 hover:border-white/60">
        <img src="https://i.ibb.co/B2xmBwjy/arun.png" alt="Mr. Arun Singh" class="w-[60px] h-[60px] object-cover rounded-xl mr-4">
        <div class="flex flex-col justify-center">
          <h3 class="text-center text-[#000A30] font-semibold text-sm">Mr. Arun Singh</h3>
          <p class="text-center text-[10px] leading-[12px] text-[#000A30]">Operations Manager, <br>Cambrian Incubation Centre, CITech</p>
        </div>
      </div>
    </div>
    
    
    
  </div>
</div>



  
  </div>
</div>



  
<div class="w-full bg-white flex justify-center py-4 pt-20 relative"> 

  <!-- First white box with factory.gif -->
  

  <!-- Background Image -->
  <div style="width: 80%; height: auto; overflow: hidden;">
    <a href="https://ibb.co/SD4p9Twy" style="display: inline-block;">
      <img src="https://i.ibb.co/BH5RSD23/Frame-19.png" alt="Frame-19" style="width: 100%; height: auto; border-radius: 30px; transition: transform 0.3s ease;">
    </a>
  </div>
  
  
  <!-- Startup Logos -->



</div>


<!-- Font Awesome Icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">


<section class="px-6 py-16 bg-white text-center font-[Poppins]">
  <!-- Section Heading -->
  <h2 class="text-sky-500 text-xl font-medium mb-15">Our Initatives</h2>
  <img src="logos/abb.png" alt="Transform Text" 
  class="w-[600px] h-auto mx-auto mt-1 block"/>

  
  
  <h3 class="mt-4 max-w-5xl mx-auto text-[16px] text-[#555555]">
    Partner with us to access world-class resources, expert guidance, and comprehensive support to bring your innovations to life.
  </h3>

  <!-- Cards -->
  <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <!-- Card 1 -->
    <a href="/page1" class="transform transition-transform duration-300 hover:scale-105">
      <img src="/logos/Frame 7.png" alt="Transform Text"  
           class="w-[300px] h-auto mx-auto mt-10 block" />
    </a>
  
    <!-- Card 2 -->
    <a href="/page2" class="transform transition-transform duration-300 hover:scale-105">
      <img src="/logos/Frame 8.png" alt="Transform Text"  
           class="w-[300px] h-auto mx-auto mt-10 block" />
    </a>
  
    <!-- Card 3 -->
    <a href="/page3" class="transform transition-transform duration-300 hover:scale-105">
      <img src="/logos/Frame 9.png" alt="Transform Text"  
           class="w-[300px] h-auto mx-auto mt-10 block" />
    </a>
  </div>
  
</section>





  <!-- Image container -->
 


  

 



<style>

a:hover img {
    transform: scale(1.1);
  }

.glass-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease-in-out;
  }
  .glass-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
.news-span {
  min-width: max-content;
  display: inline-block;
  letter-spacing: 1px;
  white-space: nowrap;
  padding-right: 3rem;
}

@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

  .logo {
    height: 100px;
    margin: 0 2rem;
  }
  
.animate-scroll-marquee {
  animation: scroll 30s linear infinite;
}




  @media (max-width: 768px) {
    .logo {
      height: 60px;
      margin: 0 1rem;
    }
  }



  @keyframes scroll-marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}






h1,h2{
  font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family:'Poppins' 'source sans pro';
    color: #050c2b;
    max-width: 1200px;
    line-height: 1;
    margin-bottom: 1.5rem;



}

h3 {
    font-size: 15px;
		word-spacing: 2px;
		line-height: 20px;
    font-family: 'Roboto','source sans pro';
}
    p {
		position: relative;
	  top:12px;
		font-size: 12px;
		word-spacing: 6px;
		line-height: 20px;
    font-family: 'Poppins','source sans pro';
	}

    
	

  .red{
    font-size: 1.2rem; /* Big font */
    font-weight: 500; /* Extra bold */
    color: #000A30; /* Deep blue */
    text-align: center;
   
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
  }

  

  @media (max-width: 768px) {
    h1 {
      font-size: 2.6rem;
    }
  }
    button {
		all: unset; /* This resets everything so we can style from scratch */
		cursor: pointer;
		font-size: 12px;
		color: white;
		background-color: #000A30; /* Tailwind's blue-800 */
		padding: 12px 13px;
		border-radius: 8px;
		display: inline-flex;
		align-items: center;
		height: 18px;
		width: 100px;
		position: relative;

		top:20PX;
		
		transition: background-color 0.5s ease;
	}

	button:hover {
		background-color: #1c3faa; /* slightly darker on hover */
	}

    </style>
    