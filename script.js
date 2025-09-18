// JavaScript for interactive elements and animations

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    function highlightActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Navbar background on scroll
    function updateNavbar() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(248, 249, 250, 0.95)';
        } else {
            nav.style.background = 'rgba(248, 249, 250, 0.8)';
        }
    }

    // Scroll event listeners
    window.addEventListener('scroll', function() {
        highlightActiveNav();
        updateNavbar();
        animateOnScroll();
    });

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.academic-card, .involvement-card, .skill-item, .project-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize animation styles
    function initializeAnimations() {
        const elements = document.querySelectorAll('.academic-card, .involvement-card, .skill-item, .project-card');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    // Enhanced button animation effects
    function initializeButtonEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Mouse enter
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
            
            // Mouse leave
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            // Mouse down
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-1px) scale(0.98)';
            });
            
            // Mouse up
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
            
            // Ripple effect
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Card hover effects
    function initializeCardEffects() {
        const cards = document.querySelectorAll('.academic-card, .involvement-card, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            });
        });
    }

    // Skill item hover effects
    function initializeSkillEffects() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#5cb85c';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.color = '#2d5a3d';
            });
        });
    }

    // Project link hover effects
    function initializeProjectLinkEffects() {
        const projectLinks = document.querySelectorAll('.project-link');
        
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
                this.style.color = '#5cb85c';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
                this.style.color = '#2d5a3d';
            });
        });
    }

    // Image placeholder hover effect
    function initializeImageEffects() {
        const imagePlaceholder = document.querySelector('.image-placeholder');
        
        if (imagePlaceholder) {
            imagePlaceholder.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.borderColor = '#2d5a3d';
            });
            
            imagePlaceholder.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.borderColor = '#e5e5e7';
            });
        }
    }

    // Typing animation for hero title
    function initializeTypingAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Parallax effect for hero section
    function initializeParallax() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroImage = document.querySelector('.hero-image');
            
            if (heroImage && scrolled < window.innerHeight) {
                const rate = scrolled * -0.5;
                heroImage.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Intersection Observer for better performance
    function initializeIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll('.academic-card, .involvement-card, .skill-item, .project-card');
        animatableElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Add CSS class for active navigation
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #2d5a3d !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize all effects
    initializeAnimations();
    initializeButtonEffects();
    initializeCardEffects();
    initializeSkillEffects();
    initializeProjectLinkEffects();
    initializeImageEffects();
    initializeParallax();
    initializeIntersectionObserver();
    initializeFloatingContact();
    
    // Initial call to set active nav and navbar state
    highlightActiveNav();
    updateNavbar();
    animateOnScroll();

    // Add smooth fade-in for the entire page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

    // Add loading animation
    window.addEventListener('load', function() {
        // Remove any loading states
        document.body.classList.add('loaded');
        
        // Add a subtle pulse animation to the hero image
        const heroImage = document.querySelector('.image-placeholder');
        if (heroImage) {
            setInterval(() => {
                heroImage.style.boxShadow = '0 8px 30px rgba(45, 90, 61, 0.15)';
                setTimeout(() => {
                    heroImage.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }, 1000);
            }, 3000);
        }
    });

    // Floating Contact Sidebar
    function initializeFloatingContact() {
        const floatingContact = document.getElementById('floatingContact');
        const floatingToggle = document.getElementById('floatingToggle');
        const floatingClose = document.getElementById('floatingClose');
        
        if (!floatingContact || !floatingToggle || !floatingClose) return;
        
        floatingToggle.addEventListener('click', function() {
            floatingContact.classList.toggle('active');
        });
        
        floatingClose.addEventListener('click', function() {
            floatingContact.classList.remove('active');
        });
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!floatingContact.contains(e.target)) {
                floatingContact.classList.remove('active');
            }
        });
        
        // Prevent closing when clicking inside the content
        const floatingContent = document.querySelector('.floating-content');
        if (floatingContent) {
            floatingContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
        
        // Add entrance animation on page load
        setTimeout(() => {
            floatingContact.style.opacity = '1';
            floatingContact.style.transform = 'translateY(0)';
        }, 1500);
        
        // Initial styles for entrance animation
        floatingContact.style.opacity = '0';
        floatingContact.style.transform = 'translateY(100px)';
        floatingContact.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }// Easter egg: Konami code
let konamiCode = [];
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === correctCode.join(',')) {
        // Easter egg: Add a subtle animation
        document.body.style.animation = 'rainbow 2s ease-in-out';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});