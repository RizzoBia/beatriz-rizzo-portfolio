import { PROJECTS_DATA } from './assets/js/data/projects.js';
import { SKILLS_DATA } from './assets/js/data/skills.js';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATION_DATA } from './assets/js/data/experience.js';

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // RENDER CERTIFICATIONS
    // ==========================================================================
    const certContainer = document.querySelector(".certifications-grid");
    if (certContainer && typeof CERTIFICATION_DATA !== "undefined") {
        certContainer.innerHTML = CERTIFICATION_DATA.map(cert => `
            <div class="cert-card reveal-on-scroll">
                <i class="fa-solid fa-certificate cert-icon"></i>
                <div class="cert-info">
                    <h4>${cert.title}</h4>
                    <p>${cert.institution} &bull; ${cert.year}</p>
                    ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn-cert">Ver certificado <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                </div>
            </div>
        `).join('');
    }

    // ==========================================================================
    // RENDER SKILLS
    // ==========================================================================
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = SKILLS_DATA.map(category => `
            <div class="skills-category-card">
                <div class="skills-category-header">
                    <i class="${category.icon}"></i>
                    <h3>${category.category}</h3>
                </div>
                <div class="skills-chip-container">
                    ${category.skills.map(skill => `
                        <span class="skill-chip ${skill.isPrimary ? 'skill-primary' : 'skill-secondary'}">
                            ${skill.name}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // ==========================================================================
    // FIXED HEADER ON SCROLL
    // ==========================================================================
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // ==========================================================================
    // MOBILE NAVIGATION MENU
    // ==========================================================================
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => {
        navMenu.classList.toggle("active");
        const icon = mobileToggle.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
            document.body.style.overflow = "hidden";
        } else {
            icon.className = "fa-solid fa-bars";
            document.body.style.overflow = "auto";
        }
    };

    if(mobileToggle) mobileToggle.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // ==========================================================================
    // ACTIVE SECTION TRACKING ON SCROLL
    // ==========================================================================
    const sections = document.querySelectorAll("section");
    
    const activeSectionTracker = () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add("active");
            } else {
                document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", activeSectionTracker);

    // ==========================================================================
    // PROJECT FILTERING
    // ==========================================================================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                
                if (filterValue === "all" || categories.includes(filterValue)) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // ==========================================================================
    // DETAIL MODAL LOGIC (ESTUDO DE CASO)
    // ==========================================================================
    const modal = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close");
    const modalBody = document.getElementById("modal-body");

    const openModal = (projectId) => {
        const project = PROJECTS_DATA[projectId];
        if (!project) return;

        const techHTML = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");
        
        const resultsHTML = project.results && project.results.length > 0 
            ? `
                <div class="case-study-section">
                    <h4><i class="fa-solid fa-chart-line"></i> Resultados e Métricas</h4>
                    <ul class="case-study-list">
                        ${project.results.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
              ` : "";

        const decisionsHTML = project.decisions && project.decisions.length > 0 
            ? `
                <div class="case-study-section">
                    <h4><i class="fa-solid fa-code-branch"></i> Principais Decisões</h4>
                    <ul class="case-study-list">
                        ${project.decisions.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
              ` : "";

        const screenshotsHTML = project.screenshots && project.screenshots.length > 0 
            ? `
                <div class="case-study-section">
                    <h4><i class="fa-solid fa-images"></i> Galeria de Telas</h4>
                    <div class="screenshot-gallery">
                        ${project.screenshots.map(s => `<img src="${s}" alt="Tela do projeto" loading="lazy" class="case-screenshot">`).join('')}
                    </div>
                </div>
              ` : "";

        const architectureHTML = project.architecture && project.architecture.length > 0
            ? `
                <div class="case-study-section">
                    <h4><i class="fa-solid fa-sitemap"></i> Arquitetura Simplificada</h4>
                    <div class="architecture-diagram">
                        ${project.architecture.map((step, index) => `
                            <div class="arch-step">
                                <span>${step}</span>
                                ${index < project.architecture.length - 1 ? '<i class="fa-solid fa-arrow-down arch-arrow"></i>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : "";

        const challengesHTML = project.challenges ? `
            <div class="case-study-section">
                <h4><i class="fa-solid fa-screwdriver-wrench"></i> Desafios Técnicos</h4>
                <p>${project.challenges}</p>
            </div>
        ` : "";

        const learningsHTML = project.learnings ? `
            <div class="case-study-section">
                <h4><i class="fa-solid fa-book"></i> Aprendizados</h4>
                <p>${project.learnings}</p>
            </div>
        ` : "";

        const confidentialityHTML = project.confidentialityNotice ? `
            <div class="case-study-section confidentiality-notice">
                <i class="fa-solid fa-lock"></i>
                <p>${project.confidentialityNotice}</p>
            </div>
        ` : "";

        modalBody.innerHTML = `
            <div class="modal-case-study">
                <img class="modal-header-image" src="${project.image}" alt="${project.title}" onerror="this.src='${project.fallbackImage}'">
                <div class="modal-content-inner">
                    <span class="project-tag">${project.category}</span>
                    <h3 class="modal-project-title">${project.title}</h3>
                    
                    ${confidentialityHTML}

                    <div class="case-study-grid">
                        <div class="case-study-main">
                            ${project.overview ? `
                            <div class="case-study-section">
                                <h4><i class="fa-solid fa-eye"></i> Visão Geral</h4>
                                <p>${project.overview}</p>
                            </div>` : ''}

                            ${project.context ? `
                            <div class="case-study-section">
                                <h4><i class="fa-regular fa-compass"></i> Contexto</h4>
                                <p>${project.context}</p>
                            </div>` : ''}
                            
                            ${project.problem ? `
                            <div class="case-study-section">
                                <h4><i class="fa-solid fa-triangle-exclamation"></i> O Problema</h4>
                                <p>${project.problem}</p>
                            </div>` : ''}

                            ${project.solution ? `
                            <div class="case-study-section">
                                <h4><i class="fa-regular fa-lightbulb"></i> A Solução</h4>
                                <p>${project.solution}</p>
                            </div>` : ''}

                            ${architectureHTML}
                            ${challengesHTML}
                            ${decisionsHTML}
                            ${resultsHTML}
                            ${learningsHTML}
                            ${screenshotsHTML}
                        </div>

                        <div class="case-study-sidebar">
                            ${project.role ? `
                            <div class="sidebar-box">
                                <h4>Minha Atuação</h4>
                                <p>${project.role}</p>
                            </div>` : ''}

                            <div class="sidebar-box">
                                <h4>Tecnologias Utilizadas</h4>
                                <div class="sidebar-tech-list">
                                    ${techHTML}
                                </div>
                            </div>

                            <div class="sidebar-links">
                                ${project.demoUrl ? `<a href="${project.demoUrl}" class="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">Acessar Demonstração <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                                ${project.repoUrl ? `<a href="${project.repoUrl}" class="btn btn-secondary btn-block" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Ver Código</a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        modalBody.scrollTop = 0; // Reset scroll position
    };

    const closeModal = () => {
        if(modal) {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "auto";
        }
    };

    projectCards.forEach(card => {
        const btnDetails = card.querySelector(".btn-view-details");
        const projectId = card.getAttribute("data-project-id");
        
        if(btnDetails) {
            btnDetails.addEventListener("click", (e) => {
                e.stopPropagation();
                openModal(projectId);
            });
        }
        
        const cardImg = card.querySelector(".project-image");
        if(cardImg) {
            cardImg.addEventListener("click", () => {
                openModal(projectId);
            });
        }
    });

    if(modalClose) modalClose.addEventListener("click", closeModal);

    if(modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // ==========================================================================
    // RENDER TIMELINE (EXPERIÊNCIA E FORMAÇÃO)
    // ==========================================================================
    const experienceTimeline = document.getElementById("experience-timeline");
    const educationTimeline = document.getElementById("education-timeline");

    if (experienceTimeline) {
        let experienceHTML = '';
        EXPERIENCE_DATA.forEach(exp => {
            const techChips = exp.tech && exp.tech.length > 0 
                ? `<div class="timeline-tech-chips">${exp.tech.map(t => `<span class="timeline-tech-chip">${t}</span>`).join('')}</div>`
                : '';

            experienceHTML += `
                <div class="timeline-item reveal-on-scroll">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${exp.period}</div>
                    <div class="timeline-content">
                        <h3>${exp.role}</h3>
                        <p class="timeline-institution">${exp.company}</p>
                        <p class="timeline-details">${exp.description}</p>
                        ${techChips}
                    </div>
                </div>
            `;
        });
        experienceTimeline.innerHTML = experienceHTML;
    }

    if (educationTimeline) {
        let educationHTML = '';
        EDUCATION_DATA.forEach(edu => {
            educationHTML += `
                <div class="timeline-item reveal-on-scroll">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${edu.period}</div>
                    <div class="timeline-content">
                        <h3>${edu.course}</h3>
                        <p class="timeline-institution">${edu.institution}</p>
                        <p class="timeline-details">${edu.description}</p>
                    </div>
                </div>
            `;
        });
        educationTimeline.innerHTML = educationHTML;
    }

    // ==========================================================================
    // CONTACT FORM
    // ==========================================================================
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("form-submit-btn");
    const formStatus = document.getElementById("form-status");

    if(contactForm && submitBtn && formStatus) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = `Enviando... <i class="fa-solid fa-spinner fa-spin"></i>`;
            
            formStatus.className = "form-status";
            formStatus.innerHTML = "";

            const formData = new FormData(contactForm);
            fetch("https://formsubmit.co/ajax/beatriztrizzo@gmail.com", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            })
            .then(response => {
                if (!response.ok) throw new Error("Erro na rede");
                return response.json();
            })
            .then(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                formStatus.classList.add("success");
                formStatus.innerHTML = "Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.";
                
                contactForm.reset();

                setTimeout(() => {
                    formStatus.classList.remove("success");
                    formStatus.innerHTML = "";
                }, 5000);
            })
            .catch(err => {
                console.error(err);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                formStatus.classList.add("error");
                formStatus.innerHTML = "Erro ao enviar mensagem. Por favor, tente novamente ou envie um e-mail direto.";
            });
        });
    }

    // ==========================================================================
    // INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // If they prefer reduced motion, reveal everything immediately
        revealElements.forEach(el => el.classList.add('is-revealed'));
    }

    // ==========================================================================
    // INICIALIZAÇÃO DE EFEITOS ESPECIAIS (PARTICLES, ETC)
    // ==========================================================================
});
