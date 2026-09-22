// ===========================
// MOBILE MENU
// ===========================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

const menuIcon =
    menuBtn.querySelector("i");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");
    }
});


// Close mobile menu after clicking link

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuIcon.classList.remove(
                "fa-xmark"
            );

            menuIcon.classList.add(
                "fa-bars"
            );
        });
    });



// ===========================
// TYPING ANIMATION
// ===========================

const typingText =
    document.getElementById(
        "typingText"
    );

const roles = [
    "Web Developer",
    "Full Stack Learner",
    "Python Developer",
    "Future AI Engineer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 45 : 90
    );
}

typeEffect();



// ===========================
// SCROLL REVEAL
// ===========================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("show");

                    revealObserver
                        .unobserve(
                            entry.target
                        );
                }
            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );
    }
);



// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >=
                    sectionTop &&
                window.scrollY <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );
            }
        });


        navigationLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }
);



// ===========================
// SCROLL TO TOP
// ===========================

const scrollTopButton =
    document.getElementById(
        "scrollTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            scrollTopButton
                .classList
                .add("show");

        } else {

            scrollTopButton
                .classList
                .remove("show");
        }
    }
);


scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);



// ===========================
// CURRENT YEAR
// ===========================

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();