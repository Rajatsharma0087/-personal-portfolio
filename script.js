// ============================================
// RAJAT SHARMA - PORTFOLIO JAVASCRIPT
// Interactive Features & Form Validation
// ============================================

console.log('Portfolio JavaScript loaded! 🚀');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready!');
  
  // ============================================
  // SMOOTH SCROLLING
  // ============================================
  let allLinks = document.querySelectorAll('a[href^="#"]');
  
  allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      let href = this.getAttribute('href');
      
      if (href && href !== '#') {
        e.preventDefault();
        let targetSection = document.querySelector(href);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ============================================
  // CONTACT FORM VALIDATION & HANDLING
  // ============================================
  let contactForm = document.querySelector('form');
  let formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values and trim whitespace
      let name = document.querySelector('input[name="name"]').value.trim();
      let email = document.querySelector('input[name="email"]').value.trim();
      let message = document.querySelector('textarea[name="message"]').value.trim();
      
      // Clear previous messages
      if (formMessage) {
        formMessage.style.display = 'none';
        formMessage.className = '';
      }
      
      // Validate all fields filled
      if (!name || !email || !message) {
        showMessage('⚠️ Please fill in all fields!', 'error');
        return;
      }
      
      // Validate email format
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showMessage('⚠️ Please enter a valid email address!', 'error');
        return;
      }
      
      // Validate name (at least 2 characters)
      if (name.length < 2) {
        showMessage('⚠️ Please enter a valid name (at least 2 characters)!', 'error');
        return;
      }
      
      // Validate message (at least 10 characters)
      if (message.length < 10) {
        showMessage('⚠️ Message should be at least 10 characters long!', 'error');
        return;
      }
      
      // Success!
      showMessage('✅ Thanks ' + name + '! I received your message and will reply to ' + email + ' soon! 📧', 'success');
      contactForm.reset();
    });
  }
  
  // Helper function to show messages
  function showMessage(text, type) {
    if (formMessage) {
      formMessage.textContent = text;
      formMessage.className = type;
      formMessage.style.display = 'block';
      
      // Auto-hide success messages after 5 seconds
      if (type === 'success') {
        setTimeout(function() {
          formMessage.style.display = 'none';
        }, 5000);
      }
    }
  }
  
  // ============================================
  // HIRE ME BUTTON INTERACTION
  // ============================================
  let hireButton = document.querySelector('header .btn');
  let clickCount = 0;
  
  if (hireButton) {
    hireButton.addEventListener('click', function(e) {
      clickCount++;
      
      if (clickCount === 1) {
        console.log('Hire Me button clicked!');
      } else if (clickCount === 5) {
        e.preventDefault();
        alert('😄 You really like that button! Let me scroll you to the contact form...');
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      } else if (clickCount > 5) {
        e.preventDefault();
        alert('😊 The contact form is right there! Fill it out to reach me!');
      }
    });
  }
  
  // ============================================
  // SKILL CARDS HOVER EFFECT (Enhanced)
  // ============================================
  let skillCards = document.querySelectorAll('#skills .card');
  
  skillCards.forEach(function(card, index) {
    // Add slight delay to animation based on index
    card.style.animationDelay = (index * 0.1) + 's';
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // ============================================
  // PROJECT CARDS INTERACTION (Enhanced)
  // ============================================
  let projectCards = document.querySelectorAll('#projects .card');
  
  projectCards.forEach(function(card, index) {
    card.style.animationDelay = (index * 0.1) + 's';
    
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
      this.style.transform = 'translateY(0)';
    });
  });
  
  // ============================================
  // SCROLL TO TOP BUTTON (Bonus Feature!)
  // ============================================
  // Create back-to-top button dynamically
  let backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #38bdf8;
    color: #0f172a;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 1000;
  `;
  
  document.body.appendChild(backToTopBtn);
  
  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Hover effect for back-to-top button
  backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.background = '#0ea5e9';
  });
  
  backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.background = '#38bdf8';
  });
  
  console.log('All JavaScript features loaded! ✨');
});