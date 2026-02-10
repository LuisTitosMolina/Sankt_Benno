// ===========================
// Mobile Menu Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Update button text
            if (mainNav.classList.contains('active')) {
                menuToggle.textContent = 'Schließen';
            } else {
                menuToggle.textContent = 'Menü';
            }
        });
    }
});

// ===========================
// Hero Slider
// ===========================
class HeroSlider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoplayDelay = 5000; // 5 seconds
        
        this.init();
    }
    
    init() {
        if (this.slides.length <= 1) return;
        
        // Start autoplay
        this.startAutoplay();
        
        // Pause on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Add navigation dots (optional)
        this.createDots();
    }
    
    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Wrap around if needed
        if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = index;
        }
        
        // Add active class to current slide
        this.slides[this.currentSlide].classList.add('active');
        
        // Update dots if they exist
        this.updateDots();
    }
    
    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }
    
    startAutoplay() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        
        this.slides.forEach((slide, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.stopAutoplay();
                this.showSlide(index);
                this.startAutoplay();
            });
            
            dotsContainer.appendChild(dot);
        });
        
        this.slider.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.slider-dot');
    }
    
    updateDots() {
        if (!this.dots) return;
        
        this.dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const sliderElement = document.querySelector('.hero-slider');
    if (sliderElement) {
        new HeroSlider(sliderElement);
    }
});

// ===========================
// Back to Top Button
// ===========================
class BackToTop {
    constructor() {
        this.button = document.querySelector('.back-to-top');
        this.scrollThreshold = 300; // Show button after scrolling 300px
        
        this.init();
    }
    
    init() {
        if (!this.button) return;
        
        // Check scroll position on page load
        this.toggleVisibility();
        
        // Listen for scroll events
        window.addEventListener('scroll', () => this.toggleVisibility());
        
        // Smooth scroll to top
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    toggleVisibility() {
        if (window.pageYOffset > this.scrollThreshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', function() {
    new BackToTop();
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===========================
// Search Form Handler
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const destination = this.querySelector('select[name="destination"]').value;
            const checkin = this.querySelector('input[name="checkin"]').value;
            const checkout = this.querySelector('input[name="checkout"]').value;
            
            // Validate inputs
            if (!destination || destination === 'Wo soll es hingehen?') {
                alert('Bitte wählen Sie ein Reiseziel aus.');
                return;
            }
            
            if (!checkin) {
                alert('Bitte wählen Sie ein Anreisedatum.');
                return;
            }
            
            if (!checkout) {
                alert('Bitte wählen Sie ein Abreisedatum.');
                return;
            }
            
            // Check if checkout is after checkin
            if (new Date(checkout) <= new Date(checkin)) {
                alert('Das Abreisedatum muss nach dem Anreisedatum liegen.');
                return;
            }
            
            // In a real implementation, this would submit to a booking system
            console.log('Search parameters:', { destination, checkin, checkout });
            
            // For demo purposes, redirect to a search results page
            // window.location.href = `/search?destination=${destination}&checkin=${checkin}&checkout=${checkout}`;
            alert('Suche wird durchgeführt...');
        });
    }
});

// ===========================
// Lazy Loading Images
// ===========================
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.observer = null;
        
        this.init();
    }
    
    init() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers
            this.loadAllImages();
            return;
        }
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        this.images.forEach(img => this.observer.observe(img));
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;
        
        img.src = src;
        img.removeAttribute('data-src');
        
        if (this.observer) {
            this.observer.unobserve(img);
        }
    }
    
    loadAllImages() {
        this.images.forEach(img => this.loadImage(img));
    }
}

// Initialize lazy loading (if needed)
document.addEventListener('DOMContentLoaded', function() {
    new LazyLoader();
});

// ===========================
// Card Animations on Scroll
// ===========================
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll(
            '.destination-card, .offer-card, .icon-item'
        );
        this.observer = null;
        
        this.init();
    }
    
    init() {
        if (!('IntersectionObserver' in window)) return;
        
        // Add initial class to elements
        this.animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.animatedElements.forEach(el => this.observer.observe(el));
    }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    new ScrollAnimations();
});

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Window resize handler with debounce
window.addEventListener('resize', debounce(function() {
    // Handle any responsive adjustments here
    console.log('Window resized');
}, 250));

// ===========================
// Accessibility Improvements
// ===========================

// Add keyboard navigation for slider
document.addEventListener('keydown', function(e) {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;
    
    // Only handle arrow keys if slider is in viewport
    const rect = slider.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowLeft') {
            // Trigger previous slide
            const sliderInstance = slider.sliderInstance;
            if (sliderInstance) sliderInstance.prevSlide();
        } else if (e.key === 'ArrowRight') {
            // Trigger next slide
            const sliderInstance = slider.sliderInstance;
            if (sliderInstance) sliderInstance.nextSlide();
        }
    }
});

// Focus trap for mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mainNav && menuToggle) {
        // Get all focusable elements in the menu
        const focusableElements = mainNav.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            mainNav.addEventListener('keydown', function(e) {
                if (!mainNav.classList.contains('active')) return;
                
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
                
                if (e.key === 'Escape') {
                    mainNav.classList.remove('active');
                    menuToggle.textContent = 'Menü';
                    menuToggle.focus();
                }
            });
        }
    }
});

// ===========================
// Console Message
// ===========================
console.log('%c🏖️ Sankt Beno Website', 'font-size: 20px; font-weight: bold; color: #00A651;');
console.log('%cWillkommen auf der Sankt Beno Website!', 'font-size: 14px; color: #333;');
console.log('%cBad Lauterberg im Harz günstig erleben', 'font-size: 12px; color: #666;');
