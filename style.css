/* ============================================
   RAJAT SHARMA - PORTFOLIO
   Advanced Interactive Design with Animations
   Day 5: Advanced JavaScript Features
   ============================================ */

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  line-height: 1.6;
  color: #333;
}

/* ============================================
   LOADING SCREEN
   ============================================ */

#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
}

#loading-screen.hidden {
  opacity: 0;
  visibility: hidden;
}

.loader {
  text-align: center;
}

.spinner {
  border: 4px solid rgba(56, 189, 248, 0.3);
  border-top: 4px solid #38bdf8;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader p {
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
}

/* ============================================
   HEADER / HERO SECTION
   ============================================ */

header {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 80px 20px 60px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: relative;
}

header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 700;
}

header p {
  margin: 15px 0 20px;
  font-size: 1.3rem;
  font-weight: 300;
  opacity: 0.9;
}

/* Typing Animation */
.cursor {
  display: inline-block;
  margin-left: 3px;
  animation: blink 0.7s infinite;
  font-weight: 400;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

#typed-text {
  color: #38bdf8;
  font-weight: 600;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: absolute;
  top: 30px;
  right: 20px;
}

.mobile-menu-toggle span {
  width: 30px;
  height: 3px;
  background: white;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Navigation */
header nav {
  margin: 25px 0;
  padding: 15px 0;
}

header nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
}

header nav a:hover {
  background: rgba(56, 189, 248, 0.2);
  color: #38bdf8;
  transform: translateY(-2px);
}

/* Buttons */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: #38bdf8;
  color: #0f172a;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0ea5e9;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(56, 189, 248, 0.4);
}

.btn-small {
  padding: 8px 16px;
  font-size: 0.9rem;
  margin: 5px;
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */

.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 {
  transition-delay: 0.1s;
}

.reveal-delay-2 {
  transition-delay: 0.2s;
}

.reveal-delay-3 {
  transition-delay: 0.3s;
}

.reveal-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.6s ease-out;
}

.reveal-left.active {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.6s ease-out;
}

.reveal-right.active {
  opacity: 1;
  transform: translateX(0);
}

/* ============================================
   SECTIONS
   ============================================ */

section {
  padding: 60px 20px;
  max-width: 1100px;
  margin: auto;
}

h2 {
  margin-bottom: 30px;
  color: #0f172a;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: #38bdf8;
  border-radius: 2px;
}

/* ============================================
   ABOUT SECTION
   ============================================ */

#about {
  text-align: center;
  background: #f8fafc;
}

.about-image {
  margin: 30px 0;
}

.about-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #38bdf8;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.05) rotate(5deg);
}

#about p {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 20px auto;
  color: #475569;
}

/* ============================================
   SKILLS SECTION
   ============================================ */

.skills {
  display: grid;
  gap: 25px;
  margin-top: 40px;
}

.card {
  border: 1px solid #e2e8f0;
  padding: 30px;
  border-radius: 10px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  border-color: #38bdf8;
}

.card h3 {
  color: #0f172a;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Skill Progress Bars */
.skill-progress {
  margin-top: 20px;
}

.skill-item {
  margin-bottom: 15px;
}

.skill-item span {
  display: block;
  margin-bottom: 8px;
  color: #0f172a;
  font-weight: 600;
  font-size: 0.9rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #0ea5e9);
  border-radius: 10px;
  width: 0;
  transition: width 1.5s ease-out;
}

/* ============================================
   PROJECTS SECTION
   ============================================ */

.project-filters {
  text-align: center;
  margin: 30px 0;
}

.filter-btn {
  background: white;
  border: 2px solid #e2e8f0;
  padding: 10px 25px;
  margin: 5px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #64748b;
}

.filter-btn:hover {
  border-color: #38bdf8;
  color: #38bdf8;
}

.filter-btn.active {
  background: #38bdf8;
  color: white;
  border-color: #38bdf8;
}

.projects {
  display: grid;
  gap: 30px;
  margin-top: 40px;
}

.project-item {
  transition: all 0.3s ease;
}

.project-item.hide {
  display: none;
}

.project-links {
  margin-top: 15px;
}

/* ============================================
   CONTACT SECTION
   ============================================ */

#contact {
  background: #f8fafc;
}

.contact-info {
  margin: 30px 0;
  text-align: center;
}

.contact-info p {
  margin: 15px 0;
  font-size: 1.1rem;
}

.contact-info a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.contact-info a:hover {
  color: #0ea5e9;
  text-decoration: underline;
}

#contact h3 {
  margin: 40px 0 20px;
  text-align: center;
  font-size: 1.5rem;
  color: #0f172a;
}

/* Form Styling */
form {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

form input,
form textarea {
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 2px solid #e2e8f0;
  border-radius: 5px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  transition: border-color 0.3s;
}

form input:focus,
form textarea:focus {
  outline: none;
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
}

form textarea {
  resize: vertical;
  min-height: 120px;
}

#form-message {
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
}

#form-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  display: block !important;
}

#form-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  display: block !important;
}

form button {
  width: 100%;
  padding: 12px 20px;
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

form button:hover {
  background: #0ea5e9;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(56, 189, 248, 0.3);
}

/* ============================================
   FOOTER
   ============================================ */

footer {
  text-align: center;
  padding: 30px 20px;
  background: #0f172a;
  color: white;
}

footer p {
  margin: 10px 0;
}

footer a {
  color: #38bdf8;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

footer a:hover {
  color: #0ea5e9;
  text-decoration: underline;
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (min-width: 768px) {
  .skills {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  header nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: #1e293b;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transition: right 0.3s ease;
    z-index: 9;
    box-shadow: -2px 0 10px rgba(0,0,0,0.3);
    margin: 0;
    padding: 0;
  }
  
  header nav.active {
    right: 0;
  }
  
  header nav a {
    font-size: 1.5rem;
    padding: 15px 30px;
    width: 80%;
    text-align: center;
    margin: 0;
  }
  
  header h1 {
    font-size: 2rem;
  }
  
  header p {
    font-size: 1.1rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  section {
    padding: 40px 15px;
  }
}
