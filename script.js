/*
 * ============================================================
 * GERMAIN'S WEBSITE JAVASCRIPT
 * ============================================================
 *
 * Features:
 * 1. Interactive Interests Gallery
 * 2. Contact Form Confirmation
 * 3. Return to Contact Form
 * 4. Show / Hide Learning Message
 *
 * ============================================================
 */


/* ============================================================
   SCRIPT LOADED
   ============================================================ */

console.log("script.js loaded");


/* ============================================================
   WAIT FOR PAGE TO LOAD
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================================
       MILESTONES TABLE
       ======================================================== */

    const milestones = [
        {
            week: "Week 1",
            milestone: "Learned HTML5 webpage structure",
            skills: "Headings, paragraphs, images, and hyperlinks"
        },
        {
            week: "Week 2",
            milestone: "Built my first personal webpage",
            skills: "Writing HTML and organizing page content"
        },
        {
            week: "Week 3",
            milestone: "Created a multi-page website",
            skills: "Navigation links and multiple HTML pages"
        },
        {
            week: "Week 4",
            milestone: "Learned CSS styling",
            skills: "Colors, typography, spacing, borders, and layouts"
        },
        {
            week: "Week 5",
            milestone: "Made my website responsive",
            skills: "Flexbox, media queries, and mobile layouts"
        },
        {
            week: "Week 6",
            milestone: "Created a contact form",
            skills: "HTML forms and accessible form controls"
        },
        {
            week: "Week 7",
            milestone: "Improved website accessibility",
            skills: "Semantic HTML, keyboard navigation, ARIA, and JavaScript"
        }
    ];

    const milestonesBody =
        document.querySelector("#milestones-body");

    if (milestonesBody) {
        for (const milestone of milestones) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <th scope="row">${milestone.week}</th>
                <td>${milestone.milestone}</td>
                <td>${milestone.skills}</td>
            `;

            milestonesBody.appendChild(row);
        }
    }

    /* ========================================================
       INTERACTIVE INTERESTS GALLERY
       ======================================================== */

    const images = [
        "technology.jpg",
        "web-development.jpg",
        "artificial-intelligence.jpg",
        "reading.jpg",
        "helping-others.jpg"
    ];


    const titles = [
        "Technology",
        "Web Development",
        "Artificial Intelligence",
        "Reading and Learning",
        "Helping Others"
    ];


    const descriptions = [
        "Technology fascinates me because it continually transforms the way people communicate, learn, work, and solve problems.",

        "Web development allows me to turn ideas into useful, responsive, and accessible websites that people can interact with.",

        "Artificial intelligence interests me because it can help solve complex problems and create innovative solutions for real-world challenges.",

        "Reading and continuous learning help me expand my knowledge, strengthen my thinking, and develop new skills.",

        "Helping others motivates me to use what I learn to create useful solutions and make a positive difference."
    ];


    const altText = [
        "Technology and digital innovation",

        "Web development and website programming",

        "Artificial intelligence and modern technology",

        "Reading and lifelong learning",

        "Helping others and making a positive difference"
    ];


    /* Current gallery image */

    let currentImage = 0;


    /* Find gallery elements */

    const galleryImage =
        document.getElementById("gallery-image");

    const galleryTitle =
        document.getElementById("gallery-title");

    const galleryDescription =
        document.getElementById("gallery-description");

    const galleryCounter =
        document.getElementById("gallery-counter");

    const previousButton =
        document.getElementById("previous-image");

    const nextButton =
        document.getElementById("next-image");


    /* Debugging information */

    console.log("Gallery image:", galleryImage);
    console.log("Gallery title:", galleryTitle);
    console.log("Gallery description:", galleryDescription);
    console.log("Gallery counter:", galleryCounter);
    console.log("Previous button:", previousButton);
    console.log("Next button:", nextButton);


    /* ========================================================
       DISPLAY GALLERY ITEM
       ======================================================== */

    if (
        galleryImage &&
        galleryTitle &&
        galleryDescription &&
        galleryCounter &&
        previousButton &&
        nextButton
    ) {

        function showImage(index) {

            galleryImage.src = images[index];

            galleryImage.alt = altText[index];

            galleryTitle.innerText = titles[index];

            galleryDescription.innerText =
                descriptions[index];

            galleryCounter.innerText =
                "Image " +
                (index + 1) +
                " of " +
                images.length;
        }


        /* ====================================================
           NEXT BUTTON
           ==================================================== */

        nextButton.addEventListener(
            "click",
            function () {

                currentImage++;

                if (currentImage >= images.length) {
                    currentImage = 0;
                }

                showImage(currentImage);

                console.log(
                    "Next clicked. Current image:",
                    currentImage
                );
            }
        );


        /* ====================================================
           PREVIOUS BUTTON
           ==================================================== */

        previousButton.addEventListener(
            "click",
            function () {

                currentImage--;

                if (currentImage < 0) {
                    currentImage = images.length - 1;
                }

                showImage(currentImage);

                console.log(
                    "Previous clicked. Current image:",
                    currentImage
                );
            }
        );


        /* Display first image */

        showImage(currentImage);
    }


    /* ========================================================
       CONTACT FORM
       ======================================================== */

    const contactForm =
        document.querySelector("#contact-form");

    const confirmation =
        document.querySelector("#confirmation");

    const confirmationMessage =
        document.querySelector("#confirmation-message");

    const returnButton =
        document.querySelector("#return-button");

    const visitorName =
        document.querySelector("#visitor-name");


    /* Debugging information */

    console.log("Contact form:", contactForm);
    console.log("Confirmation:", confirmation);
    console.log(
        "Confirmation message:",
        confirmationMessage
    );
    console.log("Return button:", returnButton);
    console.log("Visitor name:", visitorName);


    /* ========================================================
       CONTACT FORM SUBMISSION
       ======================================================== */

    if (
        contactForm &&
        confirmation &&
        confirmationMessage &&
        visitorName
    ) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                /* Prevent actual form submission */

                event.preventDefault();


                /* Get visitor name */

                const name =
                    visitorName.value.trim();


                /* Display confirmation */

                confirmationMessage.innerText =
                    `Thank you, ${name}. Your practice message has been received.`;


                /* Hide form */

                contactForm.hidden = true;


                /* Show confirmation */

                confirmation.hidden = false;


                /* Move focus to Return button */

                if (returnButton) {
                    returnButton.focus();
                }

            }
        );
    }


    /* ========================================================
       RETURN TO CONTACT FORM
       ======================================================== */

    if (
        returnButton &&
        confirmation &&
        contactForm
    ) {

        returnButton.addEventListener(
            "click",
            function () {

                /* Hide confirmation */

                confirmation.hidden = true;


                /* Show form */

                contactForm.hidden = false;


                /* Clear form */

                contactForm.reset();


                /* Return focus to name field */

                if (visitorName) {
                    visitorName.focus();
                }

            }
        );
    }


    /* ========================================================
       SHOW / HIDE LEARNING MESSAGE
       ======================================================== */

    const messageButton =
        document.querySelector("#message-button");

    const learningMessage =
        document.querySelector("#learning-message");


    /* Debugging information */

    console.log("Message button:", messageButton);
    console.log("Learning message:", learningMessage);


    /* ========================================================
       SHOW / HIDE MESSAGE
       ======================================================== */

    if (
        messageButton &&
        learningMessage
    ) {

        messageButton.addEventListener(
            "click",
            function () {

                /* Toggle hidden state */

                learningMessage.hidden =
                    !learningMessage.hidden;


                /* Update button */

                if (learningMessage.hidden) {

                    messageButton.innerText =
                        "Show Message";

                    messageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    messageButton.innerText =
                        "Hide Message";

                    messageButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );
                }

            }
        );
    }

});




