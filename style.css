// ============================================
// RAJAT SHARMA - PORTFOLIO JAVASCRIPT
// Day 5: Advanced Interactive Features
// ============================================

console.log('Portfolio JavaScript loaded! 🚀');

// ============================================
// LOADING SCREEN
// ============================================
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  
  setTimeout(function() {
    loadingScreen.classList.add('hidden');
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000);
});

// ============================================
// TYPING ANIMATION
// ============================================
const typedTextSpan = document.getElementById('typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'Turning Ideas into Websites',
  'Building Beautiful Experiences',
  'Creating Digital Solutions',
  'Freelance Web Developer'
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

if (typedTextSpan) {
  setTimeout(type, newTextDelay + 250);
}

// ============================================
// DOM CONTENT LOADED - MAIN FUNCTIONALITY
// ============================================
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
  // MOBILE MENU TOGGLE
  // ============================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
    
    let navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }
  
  // ============================================
  // SCROLL REVEAL ANIMATION
  // ============================================
  function reveal() {
    let reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    reveals.forEach(function(element) {
      let windowHeight = window.innerHeight;
      let elementTop = element.getBoundingClientRect().top;
      let elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', reveal);
  reveal();
  
  // ============================================
  // SKILLS PROGRESS BARS ANIMATION
  // ============================================
  function animateProgressBars() {
    let progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(function(bar) {
      let progress = bar.getAttribute('data-progress');
      let position = bar.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      
      if (position < windowHeight - 100) {
        bar.style.width = progress + '%';
      }
    });
  }
  
  window.addEventListener('scroll', animateProgressBars);
  animateProgressBars();
  
  // ============================================
  // PROJECT FILTERS
  // ============================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(function(button) {
        button.classList.remove('active');
      });
      
      // Add active to clicked button
      this.classList.add('active');
      
      let filter = this.getAttribute('data-filter');
      
      projectItems.forEach(function(item) {
        if (filter === 'all') {
          item.classList.remove('hide');
          item.style.display = 'block';
        } else {
          let categories = item.getAttribute('data-category');
          
          if (categories.includes(filter)) {
            item.classList.remove('hide');
            item.style.display = 'block';
          } else {
            item.classList.add('hide');
            item.style.display = 'none';
          }
        }
      });
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
      
      let name = document.querySelector('input[name="name"]').value.trim();
      let email = document.querySelector('input[name="email"]').value.trim();
      let message = document.querySelector('textarea[name="message"]').value.trim();
      
      if (formMessage) {
        formMessage.style.display = 'none';
        formMessage.className = '';
      }
      
      if (!name || !email || !message) {
        showMessage('⚠️ Please fill in all fields!', 'error');
        return;
      }
      
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showMessage('⚠️ Please enter a valid email address!', 'error');
        return;
      }
      
      if (name.length < 2) {
        showMessage('⚠️ Please enter a valid name (at least 2 characters)!', 'error');
        return;
      }
      
      if (message.length < 10) {
        showMessage('⚠️ Message should be at least 10 characters long!', 'error');
        return;
      }
      
      showMessage('✅ Thanks ' + name + '! I received your message and will reply to ' + email + ' soon! 📧', 'success');
      contactForm.reset();
    });
  }
  
  function showMessage(text, type) {
    if (formMessage) {
      formMessage.textContent = text;
      formMessage.className = type;
      formMessage.style.display = 'block';
      
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
  // SKILL CARDS HOVER EFFECT
  // ============================================
  let skillCards = document.querySelectorAll('#skills .card');
  
  skillCards.forEach(function(card, index) {
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
  // PROJECT CARDS INTERACTION
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
  // BACK TO TOP BUTTON
  // ============================================
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
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
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
