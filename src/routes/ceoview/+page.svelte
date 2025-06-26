<script>
    import { fade } from 'svelte/transition';
  </script>
  
  <style>
    .container {
      background-color: white;
      padding: 2rem;
      max-width: 1000px;
      margin: 2rem auto;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', sans-serif;
    }
  
    .title {
      background-color: #4DA1FF;
      color: white;
      text-align: center;
      padding: 0.5rem;
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
    }
  
    .box {
      border: 1px solid #ccc;
      padding: 1rem;
      text-align: center;
      border-radius: 8px;
      transition: transform 0.2s ease, background-color 0.2s ease;
    }
  
    .box:hover {
      transform: scale(1.03);
    }
  
    .box.green {
      background-color: #b9e6c3;
    }
  
    .box.red {
      background-color: #f8c0c0;
    }
  
    .box.orange {
      background-color: #ffcc99;
    }
  
    .center-box {
      grid-column: span 3;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      background-color: #fff;
    }
  
    .center-box table {
      width: 100%;
      border-spacing: 0.5rem;
    }
  
    .center-box td {
      padding: 0.3rem;
      vertical-align: top;
    }
  
    .footer {
      margin-top: 2rem;
      font-size: 0.9rem;
      text-align: right;
      color: gray;
    }
  </style>
  
  <div class="container" in:fade>
    <div class="title">PROJECT STATUS</div>
  
    <div class="grid">
      <div class="box green">Stage - 1<br>Application Receipt<br><small>&lt;date&gt;</small></div>
      <div class="box green">Stage - 2<br>Preliminary Assessment<br><small>&lt;date&gt;</small></div>
      <div class="box green">Stage - 3<br>Assessment by HoD(s)<br><small>&lt;date&gt;</small></div>
      <div class="box red">Stage - 4<br>Design Idea / Concept Defence<br><small>&lt;date&gt;</small></div>
      <div class="box red">Stage - 5<br>Proof of Concept (Solution)<br><small>&lt;date&gt;</small></div>
      <div class="box red">Stage - 6<br>Project Progress Reviews<br><small>&lt;date&gt;</small></div>
      <div class="box red">Stage - 7<br>Prototype Development & Readiness<br><small>&lt;date&gt;</small></div>
      <div class="box red">Stage - 8<br>Field Trials & Performance Analysis<br><small>&lt;date&gt;</small></div>
      <div class="box red">Stage - 9<br>Final Prototype Demonstration<br><small>&lt;date&gt;</small></div>
    </div>
  
    <div class="center-box">
      <table>
        <tbody>
          <tr><td><strong>PROJECT CODE</strong></td><td>:</td><td></td></tr>
          <tr><td><strong>TITLE</strong></td><td>:</td><td></td></tr>
          <tr><td><strong>PROPOSER</strong></td><td>:</td><td></td></tr>
          <tr><td><strong>TYPE</strong></td><td>:</td><td>MSME / NON-MSME / FACULTY / INDIVIDUAL</td></tr>
          <tr><td><strong>START DATE</strong></td><td>:</td><td></td></tr>
          <tr><td><strong>PROTO-DEMO DATE</strong></td><td>:</td><td></td></tr>
          <tr><td><strong>PROJECT TEAM</strong></td><td>:</td><td>
            Mentoring Faculty<br>
            Students
          </td></tr>
        </tbody>
      </table>
    </div>
  
    <div class="grid">
      <div class="box orange">COMPLETION STATUS<br>Certificate Issue<br><small>&lt;date&gt;</small></div>
    </div>
  
    <div class="center-box">
      <strong>FINANCIAL DATA</strong>
    </div>
  
    <div class="footer">
      Cambrian Incubation Centre, Cambridge Institute of Technology, Bangalore (CIT-B)
    </div>
  </div>
  