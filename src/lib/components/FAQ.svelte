<script>
  export let faqs = [];
  let activeIndex = null;

  const toggleAccordion = (index) => {
    activeIndex = activeIndex === index ? null : index;
  };
</script>

<section id="faq" class="section">
  <div class="container">
    <div class="faq-header text-center">
      <h2 class="section-title text-gradient">Frequently Asked Questions</h2>
      <p class="section-subtitle mx-auto">
        We answer your main questions so you can be confident and trust us.
      </p>
    </div>

    <div class="faq-list">
      {#each faqs as faq, i}
        <div class="faq-item glass-panel {activeIndex === i ? 'active' : ''}">
          <button class="faq-question" on:click={() => toggleAccordion(i)}>
            <span>{faq.question}</span>
            <i
              class="fa-solid fa-chevron-down icon {activeIndex === i
                ? 'rotate'
                : ''}"
            ></i>
          </button>
          <div class="faq-answer {activeIndex === i ? 'open' : ''}">
            <div class="answer-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .faq-header {
    margin-bottom: 3rem;
  }

  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .faq-item {
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: var(--font-heading);
    color: var(--color-primary);
    background: transparent;
    border: none;
    border-left: 4px solid var(--color-secondary);
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease;
  }

  .faq-question:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .faq-question .icon {
    transition: transform 0.3s ease;
    color: var(--color-secondary);
  }

  .faq-question .rotate {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .faq-answer.open {
    max-height: 500px;
  }

  .answer-content {
    padding: 0 2rem 1.5rem 2rem;
  }

  .answer-content p {
    margin: 0;
    color: var(--color-text-light);
    line-height: 1.6;
  }
</style>
