// Web3Forms: clave pública por diseño (identifica el buzón de destino, no da acceso a nada).
const WEB3FORMS_ACCESS_KEY = "a539ce66-878c-4810-8855-4fe278b7ad05";

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
        success_send: "SOLICITUD ENVIADA.",
        nav_reviews: "RESEÑAS",
        reviews_label: "RESEÑAS",
        reviews_title: "VOCES",
        review_form_send: "PUBLICAR",
        review_success: "RESEÑA PUBLICADA.",
        review_error_empty: "COMPLETA TODOS LOS CAMPOS.",
        review_toggle: "+ DEJAR RESEÑA",
        nav_live: "DIRECTO",
        live_label: "EN DIRECTO",
        live_title: "SESIONES"
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
        success_send: "SOL·LICITUD ENVIADA.",
        nav_reviews: "RESSENYES",
        reviews_label: "RESSENYES",
        reviews_title: "VEUS",
        review_form_send: "PUBLICAR",
        review_success: "RESSENYA PUBLICADA.",
        review_error_empty: "COMPLETA TOTS ELS CAMPS.",
        review_toggle: "+ DEIXAR RESSENYA",
        nav_live: "DIRECTE",
        live_label: "EN DIRECTE",
        live_title: "SESSIONS"
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
        success_send: "REQUEST SENT.",
        nav_reviews: "REVIEWS",
        reviews_label: "REVIEWS",
        reviews_title: "VOICES",
        review_form_send: "PUBLISH",
        review_success: "REVIEW PUBLISHED.",
        review_error_empty: "FILL IN ALL FIELDS.",
        review_toggle: "+ LEAVE A REVIEW",
        nav_live: "LIVE",
        live_label: "LIVE",
        live_title: "SESSIONS"
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
        success_send: "DEMANDE ENVOYÉE.",
        nav_reviews: "AVIS",
        reviews_label: "AVIS",
        reviews_title: "VOIX",
        review_form_send: "PUBLIER",
        review_success: "AVIS PUBLIÉ.",
        review_error_empty: "REMPLISSEZ TOUS LES CHAMPS.",
        review_toggle: "+ LAISSER UN AVIS",
        nav_live: "LIVE",
        live_label: "EN LIVE",
        live_title: "SESSIONS"
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
        success_send: "SOLICITAÇÃO ENVIADA.",
        nav_reviews: "AVALIAÇÕES",
        reviews_label: "AVALIAÇÕES",
        reviews_title: "VOZES",
        review_form_send: "PUBLICAR",
        review_success: "AVALIAÇÃO PUBLICADA.",
        review_error_empty: "PREENCHA TODOS OS CAMPOS.",
        review_toggle: "+ DEIXAR AVALIAÇÃO",
        nav_live: "AO VIVO",
        live_label: "AO VIVO",
        live_title: "SESSÕES"
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
        success_send: "ANFRAGE GESENDET.",
        nav_reviews: "BEWERTUNGEN",
        reviews_label: "BEWERTUNGEN",
        reviews_title: "STIMMEN",
        review_form_send: "VERÖFFENTLICHEN",
        review_success: "BEWERTUNG VERÖFFENTLICHT.",
        review_error_empty: "ALLE FELDER AUSFÜLLEN.",
        review_toggle: "+ BEWERTUNG SCHREIBEN",
        nav_live: "LIVE",
        live_label: "LIVE",
        live_title: "SESSIONS"
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

    // Parallax on scroll (desktop only)
    const galleryItems = document.querySelectorAll(".gallery-item");
    const isMobile = () => window.innerWidth <= 1024;
    window.addEventListener("scroll", () => {
        if (isMobile()) return;
        galleryItems.forEach((item, index) => {
            const speed = 0.1 * (index + 1);
            item.style.transform = `translateY(${-(window.scrollY * speed)}px)`;
        });
    }, { passive: true });

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
                    audioPlayer.play().catch(() => {});
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
                audioPlayer.play().catch(() => {});
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


    // ── Live videos: un solo sonido a la vez (vídeo o remix) ─────────────────
    const liveCards = document.querySelectorAll('.live-card');
    const liveStrip = document.getElementById('live-strip');

    const setLiveLabel = (card, playing) => {
        const btn = card.querySelector('.live-play');
        const label = playing ? '[ PAUSE ]' : '[ PLAY ]';
        btn.textContent = label;
        btn.setAttribute('data-text', label);
        card.classList.toggle('playing', playing);
    };

    const pauseAllVideos = (except = null) => {
        liveCards.forEach(card => {
            const video = card.querySelector('video');
            if (video !== except && !video.paused) video.pause();
        });
    };

    const pauseAudioPlayer = () => {
        if (audioPlayer.paused) return;
        audioPlayer.pause();
        if (currentTrack) {
            const btn = currentTrack.querySelector('.play-btn');
            btn.textContent = "[ PLAY ]";
            btn.setAttribute('data-text', '[ PLAY ]');
        }
    };

    liveCards.forEach(card => {
        const video = card.querySelector('video');
        card.addEventListener('click', () => {
            if (video.paused) {
                pauseAllVideos(video);
                pauseAudioPlayer();
                video.muted = false;
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
        video.addEventListener('play',  () => setLiveLabel(card, true));
        video.addEventListener('pause', () => setLiveLabel(card, false));
        video.addEventListener('ended', () => { video.currentTime = 0; setLiveLabel(card, false); });
        card.addEventListener('mouseenter', () => cursor.classList.add('active'));
        card.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    // Si arranca un remix, se paran los vídeos
    audioPlayer.addEventListener('play', () => pauseAllVideos());

    // Un vídeo que sale de pantalla se pausa
    if (liveCards.length) {
        const liveObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const video = entry.target.querySelector('video');
                if (!entry.isIntersecting && !video.paused) video.pause();
            });
        }, { threshold: 0.25 });
        liveCards.forEach(card => liveObserver.observe(card));
    }

    const livePrev = document.getElementById('live-prev');
    const liveNext = document.getElementById('live-next');
    if (liveStrip && livePrev && liveNext) {
        const liveStep = () => {
            const card = liveStrip.querySelector('.live-card');
            const gap  = parseFloat(getComputedStyle(liveStrip).columnGap) || 32;
            return card ? card.getBoundingClientRect().width + gap : 300;
        };
        livePrev.addEventListener('click', () => liveStrip.scrollBy({ left: -liveStep(), behavior: 'smooth' }));
        liveNext.addEventListener('click', () => liveStrip.scrollBy({ left:  liveStep(), behavior: 'smooth' }));
    }

    // ── Reviews: Carousel + D1 + Form ──────────────────────────────────
    const reviewsTrack   = document.getElementById('reviews-track');
    const revPrev        = document.getElementById('rev-prev');
    const revNext        = document.getElementById('rev-next');
    const revDotsContainer = document.getElementById('rev-dots');
    let revCurrentIndex  = 0;

    // Sanitize helper (reused in form too)
    const stripHTML = (str) => str.replace(/<[^>]*>/g, '').trim();

    /** Build a review <article> card from a plain object */
    function buildReviewCard(review) {
        const card = document.createElement('article');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-quote">&ldquo;</div>
            <blockquote class="review-text">${stripHTML(review.text)}</blockquote>
            <footer class="review-footer">
                <span class="review-author">— ${stripHTML(review.author).toUpperCase()}</span>
                <span class="review-event">${stripHTML(review.event).toUpperCase()}</span>
            </footer>`;
        return card;
    }

    /** (Re-)initialize dots and reset position */
    function initCarousel() {
        revCurrentIndex = 0;
        revDotsContainer.innerHTML = '';
        reviewsTrack.style.transform = 'translateX(0)';

        const cards = reviewsTrack.querySelectorAll('.review-card');
        cards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'rev-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Reseña ${i + 1}`);
            dot.addEventListener('click', () => goToReview(i));
            dot.addEventListener('mouseenter', () => cursor.classList.add('active'));
            dot.addEventListener('mouseleave', () => cursor.classList.remove('active'));
            revDotsContainer.appendChild(dot);
        });
    }

    function goToReview(index) {
        const cards = reviewsTrack.querySelectorAll('.review-card');
        if (!cards.length) return;
        revCurrentIndex = Math.max(0, Math.min(index, cards.length - 1));
        const style = window.getComputedStyle(reviewsTrack);
        const gap   = parseFloat(style.columnGap) || parseFloat(style.gap) || 48;
        const cardW = cards[0].getBoundingClientRect().width + gap;
        reviewsTrack.style.transform = `translateX(-${revCurrentIndex * cardW}px)`;
        revDotsContainer.querySelectorAll('.rev-dot').forEach((d, i) =>
            d.classList.toggle('active', i === revCurrentIndex));
    }

    /** Fetch reviews from Supabase via our API and replace the hardcoded cards */
    async function loadReviews() {
        try {
            const res  = await fetch('/api/reviews');
            if (!res.ok) return;
            const data = await res.json();
            if (!Array.isArray(data) || data.length === 0) return;

            reviewsTrack.innerHTML = '';
            data.forEach(r => reviewsTrack.appendChild(buildReviewCard(r)));
            initCarousel();
            // Trigger reveal on newly added cards
            reviewsTrack.querySelectorAll('.review-card').forEach(el => {
                el.classList.add('visible');
            });
        } catch (e) {
            console.warn('Using fallback reviews:', e);
        }
    }

    if (reviewsTrack && revPrev && revNext) {
        initCarousel();
        loadReviews();

        revPrev.addEventListener('click', () => goToReview(revCurrentIndex - 1));
        revNext.addEventListener('click', () => goToReview(revCurrentIndex + 1));

        // Touch / swipe
        let touchStartX = 0;
        reviewsTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        reviewsTrack.addEventListener('touchend', e => {
            const delta = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(delta) > 50) goToReview(revCurrentIndex + (delta > 0 ? 1 : -1));
        }, { passive: true });

        [revPrev, revNext].forEach(btn => {
            btn.addEventListener('mouseenter', () => cursor.classList.add('active'));
            btn.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // Review form toggle
    const reviewToggleBtn   = document.getElementById('reviews-toggle-btn');
    const reviewFormContainer = document.getElementById('review-form-container');
    if (reviewToggleBtn && reviewFormContainer) {
        reviewToggleBtn.addEventListener('click', () => {
            const isOpen = reviewFormContainer.classList.toggle('open');
            reviewToggleBtn.classList.toggle('open', isOpen);
            reviewFormContainer.setAttribute('aria-hidden', String(!isOpen));
            // Swap button label
            const lang = translations[activeLangKey];
            const label = isOpen
                ? lang.review_toggle.replace(/^[+−–-]\s*/, '− ')
                : lang.review_toggle;
            reviewToggleBtn.textContent = label;
            reviewToggleBtn.setAttribute('data-text', label);
            // Set timestamp when form opens (for bot timing check)
            if (isOpen) {
                const tsField = document.getElementById('review-ts');
                if (tsField) tsField.value = Date.now();
                reviewFormContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        // Cursor effect
        reviewToggleBtn.addEventListener('mouseenter', () => cursor.classList.add('active'));
        reviewToggleBtn.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    }

    const reviewForm    = document.getElementById('review-form');
    const reviewSubmit  = document.getElementById('review-submit');
    const reviewAuthor  = document.getElementById('review-author');
    const reviewEvent   = document.getElementById('review-event');
    const reviewText    = document.getElementById('review-text');
    const reviewFeedback = document.getElementById('review-feedback');
    const reviewHp      = document.getElementById('review-hp');
    const reviewTs      = document.getElementById('review-ts');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const authorVal = reviewAuthor.value.trim();
            const eventVal  = reviewEvent.value.trim();
            const textVal   = reviewText.value.trim();
            const feedback  = reviewFeedback;

            feedback.className   = 'form-feedback';
            feedback.textContent = '';

            if (!authorVal || !eventVal || !textVal) {
                feedback.textContent = translations[activeLangKey].review_error_empty;
                feedback.classList.add('error');
                return;
            }

            // Disable submit while sending
            reviewSubmit.disabled     = true;
            reviewSubmit.textContent  = '...';

            try {
                const res = await fetch('/api/reviews', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        author: authorVal,
                        event:  eventVal,
                        text:   textVal,
                        _hp:    reviewHp?.value || '',
                        _ts:    reviewTs?.value || ''
                    })
                });
                const json = await res.json();

                if (!res.ok || !json.success) throw new Error(json.message || 'Error');

                feedback.textContent = translations[activeLangKey].review_success;
                feedback.classList.add('success');
                reviewForm.reset();

                // Close the form
                if (reviewFormContainer && reviewToggleBtn) {
                    reviewFormContainer.classList.remove('open');
                    reviewFormContainer.setAttribute('aria-hidden', 'true');
                    reviewToggleBtn.classList.remove('open');
                    const baseLabel = translations[activeLangKey].review_toggle;
                    reviewToggleBtn.textContent = baseLabel;
                    reviewToggleBtn.setAttribute('data-text', baseLabel);
                }

                // Prepend new card to the carousel
                const newCard = buildReviewCard(json.data || { author: authorVal, event: eventVal, text: textVal });
                newCard.classList.add('visible');
                reviewsTrack.insertBefore(newCard, reviewsTrack.firstChild);
                initCarousel();
                goToReview(0);

            } catch (err) {
                feedback.textContent = err.message || 'ERROR.';
                feedback.classList.add('error');
            } finally {
                reviewSubmit.disabled    = false;
                const sendLabel = translations[activeLangKey].review_form_send;
                reviewSubmit.textContent = sendLabel;
                reviewSubmit.setAttribute('data-text', sendLabel);
                setTimeout(() => {
                    feedback.textContent  = '';
                    feedback.className    = 'form-feedback';
                }, 4000);
            }
        });
    }

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
            
            // Envío directo a Web3Forms desde el navegador (su uso previsto: la access key
            // es pública por diseño y el límite de envíos se aplica por IP del visitante).
            // FormData sin cabeceras propias = petición "simple": el navegador no hace
            // preflight OPTIONS, que el firewall de Web3Forms rechaza.
            const payload = new FormData();
            payload.append("access_key", WEB3FORMS_ACCESS_KEY);
            payload.append("subject", "Nuevo contacto desde djramos.es");
            payload.append("from_name", "DJ RAMOS web");
            payload.append("name", sanitizedName);
            payload.append("email", sanitizedEmail);
            payload.append("message", sanitizedMessage);
            payload.append("botcheck", document.getElementById("contact-botcheck")?.checked ? "on" : "");
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: payload
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
