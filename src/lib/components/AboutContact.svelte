<script>
  export let aboutData;
  export let contactData;
</script>

<section id="contact" class="section">
  <div class="container about-contact-wrapper">
    <!-- About Column -->
    <div class="about-col">
      <h2 class="section-title">{aboutData.title}</h2>
      <div class="divider"></div>
      <p class="about-desc">{aboutData.description}</p>
      
      <!-- Feature list -->
      <ul class="features">
        <li>
          <span class="check">✓</span> Licensed & Insured Professionals
        </li>
        <li>
          <span class="check">✓</span> 24/7 Emergency Service
        </li>
        <li>
          <span class="check">✓</span> 100% Satisfaction Guarantee
        </li>
      </ul>
    </div>
    
    <!-- Contact Column -->
    <div class="contact-col glass-panel">
      <h3 class="contact-title">Contact Us Now</h3>
      <p class="contact-subtitle">Get your free quote today.</p>
      
      <div class="info-group">
        <div class="info-item">
          <strong>Phone:</strong> <a href="tel:{contactData.phone}">{contactData.phone}</a>
        </div>
        <div class="info-item">
          <strong>Email:</strong> <a href="mailto:{contactData.email}">{contactData.email}</a>
        </div>
        <div class="info-item">
          <strong>Address:</strong> <span>{contactData.address}</span>
        </div>
      </div>
      
      <form class="contact-form" on:submit|preventDefault={() => alert('Message Sent!')}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="How can we help?" rows="4" required></textarea>
        <button type="submit" class="btn btn-secondary w-full">Send Message</button>
      </form>
    </div>
  </div>
</section>

<style>
  .about-contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  @media (max-width: 900px) {
    .about-contact-wrapper {
      grid-template-columns: 1fr;
    }
  }
  
  .section-title {
    margin-bottom: 1rem;
    font-size: 2.8rem;
  }
  
  .divider {
    width: 60px;
    height: 4px;
    background: var(--color-accent);
    margin-bottom: 2rem;
    border-radius: 2px;
  }
  
  .about-desc {
    font-size: 1.1rem;
    color: var(--color-text);
    margin-bottom: 2rem;
  }
  
  .features {
    list-style: none;
    padding: 0;
  }
  
  .features li {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--color-text);
    font-weight: 500;
  }
  
  .check {
    color: var(--color-secondary);
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .contact-col {
    padding: 3rem;
    box-shadow: var(--shadow-lg);
    border-top: 5px solid var(--color-primary);
  }
  
  .contact-title {
    font-size: 2rem;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }
  
  .contact-subtitle {
    color: var(--color-text-light);
    margin-bottom: 2rem;
  }
  
  .info-group {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  
  .info-item {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
  }
  
  .info-item strong {
    color: var(--color-primary);
    display: inline-block;
    width: 80px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(15, 59, 140, 0.1);
  }
  
  .w-full {
    width: 100%;
  }
</style>
