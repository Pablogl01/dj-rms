const translations = {
    es: {
        nav_home: "INICIO",
        nav_narrative: "NARRATIVA",
        nav_booking: "CONTACTAR",
        hero_subtitle: "SONIDO EN BRUTO",
        hero_scroll: "DESLIZA",
        story_title: "LA ESENCIA",
        story_p1: "House, Electrónica, Techno y Reggaetón. Sin adornos ni distracciones. DJ RAMOS busca la frecuencia exacta donde estos ritmos conectan de forma natural y directa.",
        story_p2: "Bajos profundos y sonido analógico. Una propuesta centrada en lo esencial, donde cada elemento tiene su espacio y el ritmo marca el camino.",
        contact_title: "CONTACTO",
        contact_name: "NOMBRE",
        contact_email: "CORREO",
        contact_message: "MENSAJE...",
        contact_send: "ENVIAR",
        error_email: "CORREO INVÁLIDO.",
        error_empty: "CAMPOS INCOMPLETOS.",
        success_send: "SOLICITUD ENVIADA."
    },
    ca: {
        nav_home: "INICI",
        nav_narrative: "NARRATIVA",
        nav_booking: "CONTACTAR",
        hero_subtitle: "SO EN BRUT",
        hero_scroll: "DESPLAÇA",
        story_title: "L'ESSÈNCIA",
        story_p1: "House, Electrònica, Techno i Reggaeton. Sense ornaments ni distraccions. DJ RAMOS busca la freqüència exacta on aquests ritmes connecten de manera natural i directa.",
        story_p2: "Baixos profunds i so analògic. Una proposta centrada en l'essencial, on cada element té el seu espai i el ritme marca el camí.",
        contact_title: "CONTACTE",
        contact_name: "NOM",
        contact_email: "CORREU",
        contact_message: "MISSATGE...",
        contact_send: "ENVIAR",
        error_email: "CORREU INVÀLID.",
        error_empty: "CAMPS INCOMPLETS.",
        success_send: "SOL·LICITUD ENVIADA."
    },
    en: {
        nav_home: "HOME",
        nav_narrative: "NARRATIVE",
        nav_booking: "CONTACT",
        hero_subtitle: "RAW SOUND",
        hero_scroll: "SCROLL",
        story_title: "THE CORE",
        story_p1: "House, Electronica, Techno, and Reggaeton. No ornaments, no distractions. DJ RAMOS seeks the exact frequency where these rhythms connect naturally and directly.",
        story_p2: "Deep bass and analog sound. An approach focused on the essential, where every element has its space and the rhythm leads the way.",
        contact_title: "CONTACT",
        contact_name: "NAME",
        contact_email: "EMAIL",
        contact_message: "MESSAGE...",
        contact_send: "SEND",
        error_email: "INVALID EMAIL.",
        error_empty: "INCOMPLETE FIELDS.",
        success_send: "REQUEST SENT."
    },
    fr: {
        nav_home: "ACCUEIL",
        nav_narrative: "NARRATIVE",
        nav_booking: "CONTACTER",
        hero_subtitle: "SON BRUT",
        hero_scroll: "DÉFILEZ",
        story_title: "L'ESSENCE",
        story_p1: "House, Électronique, Techno et Reggaeton. Sans ornements ni distractions. DJ RAMOS cherche la fréquence exacte où ces rythmes se connectent de manière naturelle et directe.",
        story_p2: "Basses profondes et son analogique. Une approche centrée sur l'essentiel, où chaque élément a son espace et le rythme montre la voie.",
        contact_title: "CONTACT",
        contact_name: "NOM",
        contact_email: "E-MAIL",
        contact_message: "MESSAGE...",
        contact_send: "ENVOYER",
        error_email: "E-MAIL INVALIDE.",
        error_empty: "CHAMPS INCOMPLETS.",
        success_send: "DEMANDE ENVOYÉE."
    },
    pt: {
        nav_home: "INÍCIO",
        nav_narrative: "NARRATIVA",
        nav_booking: "CONTACTAR",
        hero_subtitle: "SOM BRUTO",
        hero_scroll: "ROLE",
        story_title: "A ESSÊNCIA",
        story_p1: "House, Eletrônica, Techno e Reggaeton. Sem enfeites ou distrações. DJ RAMOS busca a frequência exata onde esses ritmos se conectam de forma natural e direta.",
        story_p2: "Graves profundos e som analógico. Uma proposta focada no essencial, onde cada elemento tem seu espaço e o ritmo dita o caminho.",
        contact_title: "CONTATO",
        contact_name: "NOME",
        contact_email: "E-MAIL",
        contact_message: "MENSAGEM...",
        contact_send: "ENVIAR",
        error_email: "E-MAIL INVÁLIDO.",
        error_empty: "CAMPOS INCOMPLETOS.",
        success_send: "SOLICITAÇÃO ENVIADA."
    },
    de: {
        nav_home: "STARTSEITE",
        nav_narrative: "NARRATIVE",
        nav_booking: "KONTAKT",
        hero_subtitle: "ROHER SOUND",
        hero_scroll: "SCROLLE",
        story_title: "DER KERN",
        story_p1: "House, Electronica, Techno und Reggaeton. Keine Ornamente, keine Ablenkungen. DJ RAMOS sucht die exakte Frequenz, auf der sich diese Rhythmen natürlich und direkt verbinden.",
        story_p2: "Tiefe Bässe und analoger Sound. Ein Ansatz, der sich auf das Wesentliche konzentriert, bei dem jedes Element seinen Platz hat und der Rhythmus den Weg weist.",
        contact_title: "KONTAKT",
        contact_name: "NAME",
        contact_email: "E-MAIL",
        contact_message: "NACHRICHT...",
        contact_send: "SENDEN",
        error_email: "UNGÜLTIGE E-MAIL.",
        error_empty: "UNVOLLSTÄNDIGE FELDER.",
        success_send: "ANFRAGE GESENDET."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let activeLangKey = "es";
    // Custom Cursor
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a, button, .hover-distortion, .hover-glitch");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    links.forEach(link => {
        link.addEventListener("mouseenter", () => cursor.classList.add("active"));
        link.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    });

    // Navigation Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navOverlay = document.getElementById("nav-overlay");
    const navLinks = document.querySelectorAll(".nav-links a");

    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("open");
        navOverlay.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("open");
            navOverlay.classList.remove("active");
        });
    });

    // Language Switcher Logic
    const customLangSelector = document.getElementById("custom-lang-selector");
    const currentLang = document.getElementById("current-lang");
    const langOptions = document.querySelectorAll(".lang-options li");
    
    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        // Update regular text content
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.innerText = translations[lang][key];
            
            // If the element has a hover glitch data-text attribute, update it too
            if (el.hasAttribute("data-text")) {
                el.setAttribute("data-text", translations[lang][key]);
            }
        });

        // Update placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            el.setAttribute("placeholder", translations[lang][key]);
        });
    }

    customLangSelector.addEventListener("click", (e) => {
        // Toggle dropdown
        customLangSelector.classList.toggle("open");
    });

    langOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            const lang = e.target.getAttribute("data-value");
            currentLang.innerText = e.target.innerText;
            activeLangKey = lang;
            setLanguage(lang);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!customLangSelector.contains(e.target)) {
            customLangSelector.classList.remove("open");
        }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal-text").forEach(el => {
        revealObserver.observe(el);
    });

    // Simple Parallax
    const galleryItems = document.querySelectorAll(".gallery-item");
    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 1024) {
            galleryItems.forEach(item => {
                item.style.transform = 'none';
            });
            return;
        }
        galleryItems.forEach((item, index) => {
            const speed = 0.1 * (index + 1);
            const yPos = -(window.scrollY * speed);
            item.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Audio Player Logic
    const audioPlayer = new Audio();
    let currentTrack = null;
    const tracks = document.querySelectorAll('.track');

    tracks.forEach(track => {
        track.addEventListener('click', () => {
            const btn = track.querySelector('.play-btn');
            const src = track.getAttribute('data-src');

            if (currentTrack === track) {
                if (audioPlayer.paused) {
                    audioPlayer.play().catch(e => console.log("Audio no encontrado (Placeholder):", src));
                    btn.textContent = "[ PAUSE ]";
                    btn.setAttribute('data-text', '[ PAUSE ]');
                } else {
                    audioPlayer.pause();
                    btn.textContent = "[ PLAY ]";
                    btn.setAttribute('data-text', '[ PLAY ]');
                }
            } else {
                // Reset other tracks
                tracks.forEach(t => {
                    const tBtn = t.querySelector('.play-btn');
                    tBtn.textContent = "[ PLAY ]";
                    tBtn.setAttribute('data-text', '[ PLAY ]');
                    t.classList.remove('playing');
                });

                audioPlayer.src = src;
                audioPlayer.play().catch(e => console.log("Audio no encontrado (Placeholder):", src));
                btn.textContent = "[ PAUSE ]";
                btn.setAttribute('data-text', '[ PAUSE ]');
                track.classList.add('playing');
                currentTrack = track;
            }
        });
    });

    audioPlayer.addEventListener('ended', () => {
        if (currentTrack) {
            const btn = currentTrack.querySelector('.play-btn');
            btn.textContent = "[ PLAY ]";
            btn.setAttribute('data-text', '[ PLAY ]');
            currentTrack.classList.remove('playing');
            currentTrack = null;
        }
    });

    // Form Security & Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const messageInput = document.getElementById("message").value.trim();
            
            // HTML escaping to prevent XSS (Cross-Site Scripting)
            const sanitize = (str) => {
                const div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML;
            };
            
            const sanitizedName = sanitize(nameInput);
            const sanitizedEmail = sanitize(emailInput);
            const sanitizedMessage = sanitize(messageInput);
            
            const feedback = document.getElementById("form-feedback");
            feedback.className = "form-feedback"; // reset styles
            feedback.textContent = "";
            
            // Strict Email Validation Regex
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(emailInput)) {
                feedback.textContent = translations[activeLangKey].error_email;
                feedback.classList.add("error");
                return;
            }
            
            // Prevent purely empty submissions
            if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
                feedback.textContent = translations[activeLangKey].error_empty;
                feedback.classList.add("error");
                return;
            }
            
            // Send data securely to local Serverless Function
            fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: sanitizedName,
                    email: sanitizedEmail,
                    message: sanitizedMessage
                })
            }).then(response => response.json())
              .then(json => {
                  if (json.success) {
                      feedback.textContent = translations[activeLangKey].success_send;
                      feedback.classList.add("success");
                      contactForm.reset();
                  } else {
                      feedback.textContent = "ERROR.";
                      feedback.classList.add("error");
                  }
              })
              .catch(error => {
                  feedback.textContent = "ERROR.";
                  feedback.classList.add("error");
              })
              .finally(() => {
                  setTimeout(() => {
                      feedback.textContent = "";
                      feedback.className = "form-feedback";
                  }, 4000);
              });
        });
    }
});
