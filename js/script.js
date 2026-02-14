document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // 2. Category Filtering with Fade Animation
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to current
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const categories = card.getAttribute('data-category');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    // Trigger reflow
                    void card.offsetWidth;
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                }
            });
        });
    });

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Close mobile menu if open
            if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Highlight Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });


    // 6. Board of Honors Modal Logic
    const boardMembers = [
        {
            name: "Mr. Sardar Nayyer Khan",
            designation: "Chief Executive Officer",
            email: "ceo@bereketfoods.com",
            image: "assets/images/leadership/board/1.png",
            quals: [
                "CPA, CGA (Canada), CMA, MBA",
                "Business Strategies",
                "Operational Efficiencies",
                "Budgeting and Forecasting",
                "Risk Management",
                "Business Development"
            ],
            experience: "Rtd. Squadron Leader Sardar Nayyer Khan is a commercially astute CPA certified accountant, commercial businesses with over 30 years’ experience of providing comprehensive high quality finance and accounting support services, Management Consultancy to across Canada."
        },
        {
            name: "Mr. Rana M. Nouman",
            designation: "Founder & Managing Director",
            email: "md@bereketfoods.com",
            image: "assets/images/leadership/board/2.png",
            quals: [
                "Business Graduate",
                "Strategic Entrepreneurship",
                "FMCG Logistics",
                "Healthcare Sector Management",
                "Sustainable Solutions"
            ],
            experience: "Mr. Rana M. Nouman is a strategic entrepreneur with over 25 years of experience across Edible Oils, FMCG, Healthcare, and Beverage sectors managing multi-million dollar businesses. He is dedicated to bridging the gap between modern convenience and holistic health through sustainable, forward-thinking solutions."
        },
        {
            name: "Mr. Faisal Hayat",
            designation: "COO & Co-Founder",
            email: "faisal.hayat@bereketfoods.com",
            image: "assets/images/leadership/board/3.png",
            quals: [
                "MBA (IBA)",
                "Strategic Marketing",
                "Leadership",
                "Financial Strategy"
            ],
            experience: "Mr. Faisal is MBA from IBA with over 20+ experience in Strategic Marketing with prior experience of 20+ years in top national FMCG’s companies in leadership positions. A thoroughbred professional strategized and execute the annual marketing budget of USD 14.5 million. Under Mr. Faisal leadership companies witnessed the double-digit sales growth rate. Further Mr. Faisal during his career re strategized and re designed the FMCG portfolio and realized all time high topline."
        },
        {
            name: "Mufti Aitisam",
            designation: "Executive Director Sales",
            email: "m.aitisam@bereketfoods.com",
            image: "assets/images/leadership/board/4.png",
            quals: [
                "BBA & MBI (Marketing)",
                "Marketing Strategist",
                "Brand Excellence Expert"
            ],
            experience: "Mufti Aitisam is a marketing strategist holding both a BBA and an MBI in Marketing, with a proven track record of driving brand excellence across diverse sectors. With extensive leadership experience at premier organizations including Pepsi, Packages Private Ltd Lhr, Herbion, and Comsian, he has established himself as a versatile professional capable of navigating both multinational and national corporate landscapes. Throughout his career, Mr. Aitisam has been instrumental in spearheading high-impact marketing initiatives and managing complex brand portfolios. His expertise lies in translating consumer insights into actionable strategies that fuel market penetration and sustainable topline growth. Known for his analytical rigor and creative vision, he has consistently delivered results that enhance brand equity and operational efficiency within the competitive FMCG and packaging industries."
        },
        {
            name: "Usama Khan Swati",
            designation: "Executive Director Operations",
            email: "usama.khan@bereketfoods.com",
            image: "assets/images/leadership/board/5.png",
            quals: [
                "AI/SW",
                "Operations Strategy",
                "E-commerce Excellence",
                "Tech-Driven Management"
            ],
            experience: "Usama Khan Swati is a forward-thinking leader with a specialized background in AI/SW, currently serving in the dual capacity of Head of Operations and Head of E-commerce. With a unique blend of technical expertise and strategic business management, he has established himself as a versatile professional capable of scaling digital ecosystems and optimizing complex operational frameworks in an increasingly tech-driven market. Throughout his career, Mr. Swati has been instrumental in spearheading data-driven initiatives and managing integrated commercial portfolios. His expertise lies in leveraging AI-driven insights to streamline operational workflows and enhance e-commerce performance, ensuring sustainable growth and market competitiveness. Known for his analytical precision and operational agility, he consistently delivers results that bridge the gap between emerging technology and commercial excellence."
        },
        {
            name: "Mr. Muhammad Abubakar",
            designation: "Non-Executive Director",
            email: "abubakar@bereketinternational.com",
            image: "assets/images/leadership/board/6.png",
            quals: [
                "C. Dir, CLA, CT, MBA",
                "Committee Chair",
                "Business Excellence Expert",
                "Member TCs & NSC - PSQCA (MoST)"
            ],
            experience: "Mr. Abubakar is Board Director, Board Advisor and Business Excellence Expert with over 16 years of experience spanning Asia, Africa & Arabia regions with Food, Agri, Healthcare and FMCG MNCs. He is Certified Board Director, certified Lead Auditor and Trainer. He successfully facilitated various Boards at both strategic and operational fronts in Acquisitions, Business Excellence, Evaluating new Facilities, Compliance, Capacity building, Strategic planning and Business revamping. As Group General Manager, he led group of USD 350 Million. He also led Centralized Planning and Business Integration of multi Billion dollar company in Asia and Africa. He is Member MANCOM from over a decade and providing leadership and governance to organizations by channeling excellence in E2E chain for sustainable triple bottom line."
        }
    ];

    window.openBoardModal = function (index) {
        const member = boardMembers[index];
        const modal = document.getElementById('boardModal');

        if (member && modal) {
            document.getElementById('modalImg').src = member.image;
            document.getElementById('modalName').textContent = member.name;
            document.getElementById('modalDesignation').textContent = member.designation;
            document.getElementById('modalExperience').textContent = member.experience;

            const emailLink = document.getElementById('modalEmail');
            if (emailLink) {
                emailLink.href = `mailto:${member.email}`;
                emailLink.innerHTML = `<i class="fas fa-envelope"></i>`;
                emailLink.setAttribute('aria-label', `Email ${member.name}`);
            }

            const qualsList = document.getElementById('modalQuals');
            qualsList.innerHTML = '';
            member.quals.forEach(qual => {
                const li = document.createElement('li');
                li.textContent = qual;
                qualsList.appendChild(li);
            });

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeBoardModal = function () {
        const modal = document.getElementById('boardModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    window.handleOutsideClick = function (event) {
        const boardModal = document.getElementById('boardModal');
        const careersModal = document.getElementById('careersModal');

        if (event.target === boardModal) {
            closeBoardModal();
        }
        if (event.target === careersModal) {
            closeCareersModal();
        }
    };

    // 7. Careers Modal Logic
    window.openCareersModal = function () {
        const modal = document.getElementById('careersModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeCareersModal = function () {
        const modal = document.getElementById('careersModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // 8. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Disable button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formMessage.style.display = 'none';

            fetch('send_mail.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    formMessage.style.display = 'block';
                    if (data.success) {
                        formMessage.style.backgroundColor = '#d4edda';
                        formMessage.style.color = '#155724';
                        formMessage.textContent = 'Thank you. Your message has been sent to the Board of Honors.';
                        contactForm.reset();
                    } else {
                        formMessage.style.backgroundColor = '#f8d7da';
                        formMessage.style.color = '#721c24';
                        formMessage.textContent = data.message || 'An error occurred. Please try again.';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Fallback for static server testing (assuming success for demo)
                    // Remove this in production if real failure handling is strict
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = '#fff3cd'; // Warning color
                    formMessage.style.color = '#856404';
                    formMessage.textContent = 'Note: Email sending requires a PHP server. (Or an error occurred)';
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                });
        });
    }

    // 9. Infinite Brand Scroller Logic
    const scrollerTrack = document.querySelector('.brands-track');
    const brands = Array.from(document.querySelectorAll('.brand-slide'));

    if (scrollerTrack && brands.length > 0) {
        // Calculate total width of original content including gap
        // We assume all slides have same width + gap. 
        // Best way is to let CSS handle the width variable, but we need to set it.

        // Clone brands for seamless looping
        // We need enough clones to fill the screen width + buffer. 
        // A safe bet for infinite scroll is to double or triple the content 
        // depending on screen size vs total content width.
        // For simple linear infinite scroll, 2 sets is minimum, 3 is safer for wide screens.

        // Clone the entire set of brands twice to ensure we never run out of scroll
        brands.forEach(brand => {
            const clone = brand.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true'); // Accessibility
            scrollerTrack.appendChild(clone);
        });

        brands.forEach(brand => {
            const clone = brand.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true'); // Accessibility
            scrollerTrack.appendChild(clone);
        });

        // Calculate the width of one single iteration of brands
        // We can do this by summing widths of original brands + padding/gap
        // Or simply by: (Slide Width + Gap) * Number of Original Slides

        const slideWidth = 500; // refined from CSS
        const gap = 50; // refined from CSS
        const totalOriginalWidth = brands.length * (slideWidth + gap);

        // Set the CSS variable for the animation to know how far to scroll
        scrollerTrack.style.setProperty('--scroll-amount', `${totalOriginalWidth}px`);

        // Optional: Adjust speed based on number of items to keep constant speed
        // e.g. 5 seconds per 1000px
        const speedFactor = 5; // seconds per item roughly? No, let's stick to CSS time for now or adjust dynamically
        // const duration = (totalOriginalWidth / 100) * 2; // Example calculation
        // scrollerTrack.style.animationDuration = `${duration}s`;
    }

});
