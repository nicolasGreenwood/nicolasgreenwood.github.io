const siteNav = document.getElementById("site-nav");
const menuToggle = document.getElementById("menu-toggle");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

menuToggle.addEventListener("click", (e) => {
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
    siteNav.classList.toggle("hidden");
});

const langList = document.querySelector(".language-list");
const langToggle = document.querySelector(".language-toggle");
const langOpenIcon = document.querySelector(".lang-open-icon");
const langCloseIcon = document.querySelector(".lang-close-icon");

langToggle.addEventListener("click", (e) => {
    langCloseIcon.classList.toggle("hidden");
    langOpenIcon.classList.toggle("hidden");
    langList.classList.toggle("hidden");
    langToggle.classList.toggle("active");
});

var swiper = new Swiper(".hero-carousel", {
    rewind: true,
    speed: 1200,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});

new ClipboardJS(".copy-code-button");

(() => {
    // <stdin>
    function setupBackToTop() {
        const intersectionObserver = new IntersectionObserver(function (
            entries
        ) {
            const topBtn = document.querySelector(".top-of-site-link");
            if (topBtn === null) return;
            topBtn.dataset.visible = entries[0].boundingClientRect.y < 0;
        });
        const topAnchor = document.querySelector("#top-of-site-anchor");
        if (topAnchor !== null) {
            intersectionObserver.observe(topAnchor);
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        setupBackToTop();
    });
})();

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    console.clear();

    document.fonts.ready.then(() => {
        gsap.utils.toArray(".animate-text").forEach((text) => {
            gsap.set(text, { opacity: 1 });

            let split;
            SplitText.create(text, {
                type: "lines",
                linesClass: "line",
                autoSplit: true,
                mask: "lines",
                onSplit: (self) => {
                    split = gsap.from(self.lines, {
                        duration: 1.2,
                        delay: 0.6,
                        scrollTrigger: {
                            trigger: text,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse",
                        },
                        yPercent: 100,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "power4.out",
                    });
                    return split;
                },
            });
        });
    });

    gsap.utils.toArray(".animate-box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
            },
            duration: 1.2,
            delay: 0.6,
            opacity: 1,
            y: 0,
            ease: "power4.out",
        });
    });
});
