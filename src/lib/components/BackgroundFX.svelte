<script>
  import { onMount, onDestroy } from "svelte";

  let currentTheme = "hot";
  let observer;

  onMount(() => {
    // Read initial theme
    currentTheme = document.documentElement.getAttribute("data-theme") || "hot";

    // Observe changes to data-theme on html element
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          currentTheme = document.documentElement.getAttribute("data-theme");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
  });

  onDestroy(() => {
    if (observer) observer.disconnect();
  });
</script>

<div class="fx-container" class:pointer-events-none={true}>
  {#if currentTheme === "cool"}
    <!-- Snow Animation -->
    {#each Array(30) as _, i}
      <div
        class="snowflake"
        style="
          left: {Math.random() * 100}vw; 
          animation-duration: {Math.random() * 3 + 2}s; 
          animation-delay: {Math.random() * 5}s;
          opacity: {Math.random() * 0.5 + 0.3};
          transform: scale({Math.random() * 0.5 + 0.5});
        "
      ></div>
    {/each}
  {:else}
    <!-- Heat Distortion / Embers Animation -->
    {#each Array(20) as _, i}
      <div
        class="ember"
        style="
          left: {Math.random() * 100}vw; 
          animation-duration: {Math.random() * 4 + 3}s; 
          animation-delay: {Math.random() * 5}s;
          opacity: {Math.random() * 0.6 + 0.2};
          transform: scale({Math.random() * 0.8 + 0.5});
        "
      ></div>
    {/each}
    <div class="heat-wave"></div>
  {/if}
</div>

<style>
  .fx-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 9998; /* Just behind theme toggle & popup */
    pointer-events: none; /* Let clicks pass through */
  }

  /* --- COOL: SNOW --- */
  .snowflake {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    filter: blur(1px);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    animation: fall linear infinite;
  }

  @keyframes fall {
    0% {
      transform: translateY(-10px) translateX(0) scale(1);
    }
    50% {
      transform: translateY(50vh) translateX(20px) scale(0.8);
    }
    100% {
      transform: translateY(100vh) translateX(-20px) scale(1);
    }
  }

  /* --- HOT: EMBERS & WAVES --- */
  .ember {
    position: absolute;
    bottom: -10px;
    width: 8px;
    height: 8px;
    background: #ff5722;
    border-radius: 50%;
    filter: blur(2px);
    box-shadow:
      0 0 15px #ff9800,
      0 0 20px #ff5722;
    animation: rise ease-in infinite;
  }

  @keyframes rise {
    0% {
      transform: translateY(10px) translateX(0) scale(1);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100vh) translateX(30px) scale(0.2);
      opacity: 0;
    }
  }

  .heat-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 40vh;
    background: linear-gradient(to top, rgba(255, 69, 0, 0.1), transparent);
    animation: heatHaze 4s alternate infinite ease-in-out;
  }

  @keyframes heatHaze {
    0% {
      opacity: 0.3;
      transform: scaleY(1);
    }
    100% {
      opacity: 0.7;
      transform: scaleY(1.2);
      filter: blur(4px);
    }
  }
</style>
