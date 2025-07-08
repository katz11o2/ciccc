<script>
  const facilities = [

  {
      title: "Cambrian Incubation Centre",
      image: "https://i.postimg.cc/N0Cyb8WL/Whats-App-Image-2025-04-24-at-13-07-15-4da42ecc.jpg",
      description: "CIT provides a massive, well-equipped auditorium that accommodates over 1,000 students for special occasions and celebrations.",
      
      link: "/library"
    },

    {
      title: "Auditorium",
      image: "https://i.postimg.cc/LsNwn5Gz/1Z0A1943.jpg",
      description: "CIT provides a massive, well-equipped auditorium that accommodates over 1,000 students for special occasions and celebrations.",
      
      link: "/auditorium"  // Link to another page
    },
    {
      title: "Seminar Halls",
      image: "https://i.postimg.cc/Yq4GMgvj/Whats-App-Image-2025-04-24-at-13-14-28-f5789805.jpg",
      description: "We have 2 seminar halls with a seating capacity of 200 people each. The modern conference hall hosts seminars, workshops, and meetings.",
      link: "/conference-rooms"
    },

    

    {
      title: "Classrooms",
      image: "https://i.postimg.cc/R0WCSkDV/Whats-App-Image-2025-04-24-at-13-10-26-ef230c63.jpg",
     
     description: "CIT classrooms are designed to promote focus and academic excellence, fostering a rich learning experience.",
      link: "/classrooms"
    },
    {
      title: "Industry Labs",
      image: "https://i.postimg.cc/NG2B0xxh/DSC-0854.jpg",
      description: "Our state-of-the-art labs provide hands-on experiences, nurturing innovation and practical understanding.",
      link: "/labs"
    },
    {
      title: "Gym",
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2025/05/RY3A2863-2048x1365.jpg",
      description: "Our Gym are well eqiuped with modern equipments and provide hands-on experiences, nurturing fitness",
      link: "/gym"
    },
     {
      title: "Canteen",
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2025/05/DSC_9035-1-2048x1363.jpg ",
      description: "Our canteen are well eqiuped with modern equipments and provide hands-on experiences, nurturing fitness",
      link: "/canteen"
    },    


  {
      title: "Transportation",
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2022/01/transport-2048x1367.webp ",
      description: "Our transport are well eqiuped with modern equipments and provide hands-on experiences, nurturing fitness",
      link: "/trans"
    },    

    
 {
      title: "Library",
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-28-at-12.34.23-PM-3-2048x1358.jpeg ",
      description: "Our library are well eqiuped with modern equipments and provide hands-on experiences, nurturing fitness",
      link: "/li"
    }, 
   
  ];
</script>

<style>
  /* Global Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  
   
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f1f3f4;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    color: #1e0242;
    margin-bottom: 2.5rem;
    font-weight: 700;
  }

  .facilities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns for large screens */
    gap: 2rem;
    margin-bottom: 3rem;
  }

  p{   font-family: 'Poppins';
}

  .facility-box {
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .facility-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }

  .facility-image {
    width: 80%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .facility-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #202020;
    margin-bottom: 0.8rem;
  }

  .facility-description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .facilities-grid {
      grid-template-columns: 1fr; /* Stack them in one column on mobile */
    }
  }

  .greeting {
      padding: 60px 20px; /* 30px padding from top and bottom */
      text-align: left;
      font-family: 'Poppins';
    }


  
</style>

<div class="greeting">
  
  <h2>Facilities</h2>


 
  
  <div class="facilities-grid">
    {#each facilities as facility}
      <a href={facility.link} class="facility-box">
        <img class="facility-image" src={facility.image} alt={facility.title} />
        <div class="facility-title">{facility.title}</div>
        <div class="facility-description">{facility.description}</div>
      </a>
    {/each}
  </div>
</div>
