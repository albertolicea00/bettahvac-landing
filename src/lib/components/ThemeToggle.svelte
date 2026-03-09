<script>
  import { onMount } from "svelte";

  let theme = "hot"; // default

  onMount(() => {
    // Check local storage or default to 'hot'
    const savedTheme = localStorage.getItem("hvac-theme");
    if (savedTheme) {
      theme = savedTheme;
    } else {
      theme = "hot";
    }
    document.documentElement.setAttribute("data-theme", theme);
  });

  const toggleTheme = () => {
    theme = theme === "hot" ? "cool" : "hot";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("hvac-theme", theme);
  };
</script>

<div class="theme-toggle-container">
  <button
    class="theme-toggle-btn {theme}"
    on:click={toggleTheme}
    aria-label="Toggle Theme"
  >
    {#if theme === "hot"}
      <i class="fa-solid fa-fire text-hot animate-pulse"></i>
      <span class="mode-text">Hot</span>
    {:else}
      <i class="fa-solid fa-snowflake text-cool animate-float-slow"></i>
      <span class="mode-text">Cool</span>
    {/if}
  </button>
</div>

<style>
  .theme-toggle-container {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 9999;
  }

  .theme-toggle-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-bg);
    border: 2px solid var(--color-primary);
    border-radius: 9999px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .theme-toggle-btn:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-premium);
  }

  .mode-text {
    color: var(--color-text);
  }

  .text-hot {
    color: #ef4444; /* Force red for flame */
  }

  .text-cool {
    color: #0ea5e9; /* Force blue for flake */
  }

  .animate-pulse {
    animation: pulse 1.5s infinite;
  }

  .animate-float-slow {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
</style>
