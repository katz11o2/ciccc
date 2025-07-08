<script>
  let facultyList = Array.from({ length: 25 }, (_, i) => `Faculty ${i + 1}`);
</script>

<style>
  body {
    background: linear-gradient(to right, #1e3c72, #2a5298);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    padding: 50px;
    justify-content: center;
    align-items: center;
  }

  .flip-box {
    width: 250px;
    height: 250px;
    perspective: 1200px;
  }

  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    font-weight: bold;
    font-size: 1.8rem;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    transition: all 0.3s ease;
  }

  .flip-box-front {
    background: linear-gradient(to bottom, #ffffff, #f8f9fa);
    color: #333;
  }

  .flip-box-back {
    transform: rotateY(180deg);
    background: linear-gradient(to bottom, #2980b9, #3498db);
    color: white;
  }

  .button-container {
    margin-top: 30px;
  }

  .navigate-button {
    border-radius: 10px;
    border: none;
    padding: 12px 25px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .navigate-button:hover {
    background: linear-gradient(to right, #2a5298, #1e3c72);
    transform: scale(1.05);
  }
</style>

<div class="grid-container">
  {#each facultyList as faculty}
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">{faculty}</div>
        <div class="flip-box-back">{faculty}</div>
      </div>
    </div>
  {/each}
</div>

