<script>
    import { onMount } from 'svelte';
  
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    let currentMonthData = generateCalendar(currentYear, currentMonth);
    let nextMonth = (currentMonth + 1) % 12;
    let nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;
    let nextMonthData = generateCalendar(nextYear, nextMonth);
  
    const events = {
      21: {
        title: "Entrepreneurship Awareness Program",
        speaker: "John Doe",
        registration: "http://example.com/register-21-april",
        time: "10:00 AM - 12:00 PM",
        location: "Room A, Tech Hub",
      },
      23: {
        title: "AI and ML Workshop",
        speaker: "Jane Smith",
        registration: "http://example.com/register-23-april",
        time: "02:00 PM - 04:00 PM",
        location: "Room B, Innovation Lab",
        type: "workshop"
      },
      25: {
        title: "MSME Growth Strategies",
        speaker: "Michael Brown",
        registration: "http://example.com/register-25-april",
        time: "11:00 AM - 01:00 PM",
        location: "Room C, Business Center",
      },
      27: {
        title: "AI in Business for Entrepreneurs",
        speaker: "Sarah Lee",
        registration: "http://example.com/register-27-april",
        time: "09:00 AM - 11:00 AM",
        location: "Room D, Conference Hall",
      },
      29: {
        title: "AI and MSME Synergy",
        speaker: "David Green",
        registration: "http://example.com/register-29-april",
        time: "03:00 PM - 05:00 PM",
        location: "Room E, Innovation Lab",
      },
      1: {
        title: "Entrepreneurship Bootcamp",
        speaker: "Emily White",
        registration: "http://example.com/register-1-may",
        time: "10:00 AM - 04:00 PM",
        location: "Room F, Startup Arena",
        type: "bootcamp"
      },
      3: {
        title: "MSME Growth Hackathon",
        speaker: "Tom Black",
        registration: "http://example.com/register-3-may",
        time: "01:00 PM - 05:00 PM",
        location: "Room G, Event Hall",
      },
      5: {
        title: "AI for MSME Transformation",
        speaker: "Alice Wilson",
        registration: "http://example.com/register-5-may",
        time: "09:30 AM - 12:00 PM",
        location: "Room H, Tech Lounge",
      },
      7: {
        title: "Startup Fundamentals Workshop",
        speaker: "George Harris",
        registration: "http://example.com/register-7-may",
        time: "10:00 AM - 12:00 PM",
        location: "Room I, Conference Room",
        type: "workshop"
      },
      9: {
        title: "AI in Finance for Entrepreneurs",
        speaker: "Nina Clark",
        registration: "http://example.com/register-9-may",
        time: "02:00 PM - 04:00 PM",
        location: "Room J, Innovation Center",
      },
    };
  
    function generateCalendar(year, month) {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const numDays = lastDay.getDate();
      const startDay = firstDay.getDay();
  
      let days = [];
      for (let i = 0; i < startDay; i++) {
        days.push(null);
      }
      for (let i = 1; i <= numDays; i++) {
        days.push(i);
      }
  
      let weeks = [];
      while (days.length) {
        weeks.push(days.splice(0, 7));
      }
  
      return weeks;
    }
  
    function nextMonthClick() {
      currentMonth = (currentMonth + 1) % 12;
      if (currentMonth === 0) currentYear++;
      currentMonthData = generateCalendar(currentYear, currentMonth);
  
      nextMonth = (currentMonth + 1) % 12;
      nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;
      nextMonthData = generateCalendar(nextYear, nextMonth);
    }
  
    function prevMonthClick() {
      currentMonth = (currentMonth - 1 + 12) % 12;
      if (currentMonth === 11) currentYear--;
      currentMonthData = generateCalendar(currentYear, currentMonth);
  
      nextMonth = (currentMonth + 1) % 12;
      nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;
      nextMonthData = generateCalendar(nextYear, nextMonth);
    }
  
    let popupVisible = false;
    let popupData = {};
  
    function showEventDetails(day) {
      const event = events[day];
      if (event) {
        popupData = event;
        popupVisible = true;
      } else {
        alert("No event on this day.");
      }
    }
  
    function closePopup() {
      popupVisible = false;
    }
  </script>
  
  <svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.min.css" rel="stylesheet" />
  </svelte:head>
  
  <style>

.event-boxes {
  display: flex;
  position: absolute;
  left:730px; 
  bottom:3px;
  flex-direction: column; /* Stack the boxes vertically */
  gap: 2px; /* 13px gap between each item */
}

.event-box-item {
  display: flex;
  align-items: center;
  gap: 20px; /* Space between the box and the line */
}

.event-box {
  width: 10px;
  height: 10px;
  
  border-radius: 10px;
  transition: transform 0.3s ease; /* Adds smooth transition */
}

.event-box.blue {
  background-color: #4A90E2;
  color: #000000; /* Blue */
}

.event-box.yellow {
  background-color: hwb(65 0% 0%);
  color: #000000; /* Yellow */
}

.event-box.green {
  background-color: #7ED321;
  color: #000000; /* Green */
}

.line {
  width: 100px; /* Horizontal line length */
  height: 1px; /* Line thickness */
  background-color: #808080; /* Grey color for the line */
}

.text {
  font-size: 1rem;
  font-weight: bold;
  color: #000; /* Black text color */
}

/* Hover effect to zoom the boxes */
.event-box:hover {
  transform: scale(1.1); /* Zooms in the box when hovered */
}


    h1, p {
      font-family: "Poppins", sans-serif;
      background: white;
    }
  
    .main-container {
      width: 100%;
      padding: 30px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 95vh;
    }
  
    .header {
      width: 100%;
      max-width: 1000px;
      text-align: left;
      position: relative;
      right: 70px;
      padding-top: 40px;
    }
  
    .header h1 {
      font-size: 1.8rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 16px;
    }
  
    .decorator {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
    }
  
    .dot {
      width: 8px;
      height: 8px;
      background-color: #1e3a8a;
      border-radius: 50%;
    }
  
    .line {
      width: 60px;
      height: 2px;
      background-color: #1e3a8a;
    }
  
    .nav-buttons {
      margin: 20px 0;
      justify-content: center;
      display: flex;
      gap: 20px;
    }
  
    .nav-buttons button {
      padding: 8px 16px;
      background-color: #1e3a8a;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }
  
    .nav-buttons button:hover {
      background-color: #14275c;
    }
  
    .calendar-container {
      display: flex;
      gap: 30px;
      justify-content: center;
      width: 100%;
      max-width: 1500px;
      flex-wrap: wrap;
    }
  
    .calendar-box {
      width: 45%;
      background: #fff;
      box-shadow: 0px 8px 16px rgba(36, 3, 60, 0.1);
      border-radius: 10px;
      overflow: hidden;
      padding: 20px;
      min-width: 320px;
    }
  
    .calendar-box h2 {
      text-align: center;
      font-size: 1.4rem;
      color: hsl(224, 64%, 33%);
      margin-bottom: 10px;
    }
  
    .calendar-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
  
    .calendar-table th, .calendar-table td {
      text-align: center;
      padding: 10px;
      width: 14.28%;
    }
  
    .calendar-table th {
      background-color: #17194a;
      color: white;
      border-radius: 4px;
    }
  
    .calendar-table td {
      background-color: #f9f9f9;
      cursor: pointer;
      border-radius: 6px;
      transition: background-color 0.3s ease;
    }
  
    .calendar-table td:hover {
      background-color: #dce3f3;
    }
  
    .calendar-table .special-event {
      background-color: #ffed7d;
    }
  
    /* Event Type Styling */
    .calendar-table .bootcamp {
      background-color: #4A90E2; /* Blue */
      color: white;
    }
    .calendar-table .workshop {
      background-color: #7ED321; /* Green */
      color: white;
    }
  
    /* Popup Styling */
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border-radius: 10px;
      box-shadow: 0px 8px 16px rgba(36, 3, 60, 0.1);
      padding: 20px;
      max-width: 400px;
      width: 90%;
      z-index: 1000;
      display: none;
    }
  
    .popup.active {
      display: block;
    }
  
    .popup .popup-header {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .popup .popup-details {
      font-size: 1rem;
      margin-bottom: 15px;
    }
  
    .popup .popup-buttons {
      display: flex;
      justify-content: space-between;
    }
  
    .popup .popup-buttons button {
      padding: 8px 16px;
      background-color: #1e3a8a;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
    }
  
    .popup .popup-buttons button:hover {
      background-color: #14275c;
    }
  
    .popup .close-btn {
      background-color: red;
    }
  </style>
  
  <div class="main-container">
    <div class="header">
      <h1>Calender of Events, Workshops and Bootcamps</h1>
      <div class="decorator">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="line"></div>
      </div>
      <div class="event-boxes">
        <div class="event-box-item">
          <div class="event-box blue"></div>
          <div class="line"></div>
          <div class="text">Bootcamp</div>
        </div>
        <div class="event-box-item">
          <div class="event-box yellow"></div>
          <div class="line"></div>
          <div class="text">Awarness Programs</div>
        </div>
        <div class="event-box-item">
          <div class="event-box green"></div>
          <div class="line"></div>
          <div class="text">Workshops</div>
        </div>
      </div>
      
      
     
    </div>

  
    <div class="calendar-container">
      <div class="calendar-box">
        <h2>{monthNames[currentMonth]} {currentYear}</h2>
        <table class="calendar-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {#each currentMonthData as week}
              <tr>
                {#each week as day}
                  <td class={day && events[day] ? "special-event " + (events[day].type || "") : ""} on:click={() => showEventDetails(day)}>
                    {day}
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
  
      <div class="calendar-box">
        <h2>{monthNames[nextMonth]} {nextYear}</h2>
        <table class="calendar-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {#each nextMonthData as week}
              <tr>
                {#each week as day}
                  <td class={day && events[day] ? "special-event " + (events[day].type || "") : ""} on:click={() => showEventDetails(day)}>
                    {day}
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="nav-buttons">
        <button on:click={prevMonthClick}>Previous Month</button>
        <button on:click={nextMonthClick}>Next Month</button>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-center mb-4">Upcoming Important Events</h2>
    <div class="w-[80%] h-[200px] mx-auto grid grid-cols-4 gap-4">
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">12 Apr 2025</p>
        <h2 class="font-semibold text-base">MSME Growth Workshop</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">15 Apr 2025</p>
        <h2 class="font-semibold text-base">Startup Bootcamp</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">18 Apr 2025</p>
        <h2 class="font-semibold text-base">Entrepreneurship 101</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">20 Apr 2025</p>
        <h2 class="font-semibold text-base">MSME Finance Clinic</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">22 Apr 2025</p>
        <h2 class="font-semibold text-base">Digital MSME Day</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">25 Apr 2025</p>
        <h2 class="font-semibold text-base">Women Entrepreneurs Meet</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">27 Apr 2025</p>
        <h2 class="font-semibold text-base">Local to Global Expo</h2>
      </div>
      <div class="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-white/40">
        <p class="text-sm text-gray-700">30 Apr 2025</p>
        <h2 class="font-semibold text-base">Tech for MSMEs</h2>
      </div>
    </div>
    
    {#if popupVisible}
      <div class="popup active">
        <div class="popup-header">{popupData.title}</div>
        <div class="popup-details">
          <strong>Speaker:</strong> {popupData.speaker} <br />
          <strong>Time:</strong> {popupData.time} <br />
          <strong>Location:</strong> {popupData.location} <br />
          <strong>Registration:</strong> <a href={popupData.registration} target="_blank">Register Here</a>
        </div>
        <div class="popup-buttons">
          <button class="close-btn" on:click={closePopup}>Close</button>
        </div>
      </div>
    {/if}
  </div>
  