/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sections = document.querySelectorAll("section");

const nav = document.querySelector("#navbar__list");
sections.forEach((e) => {
    const list = document.createElement("li");
    const link = document.createElement("a");
    const linkContent = document.createTextNode(e.dataset.nav);

    link.setAttribute("href", '#' + e.id);
    link.classList.add(e.id);

    link.appendChild(linkContent);
    list.appendChild(link);
    nav.appendChild(list);
});

// Add class 'active' to section when near top of viewport
function makeActive(){
    for (let section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("active");
            const link = document.querySelector(`#navbar__list a.${section.id}`);
            link.classList.add("active");
        } else {
            section.classList.remove("active");
            document.querySelectorAll(`#navbar__list a.${section.id}`).forEach((e) => {
                e.classList.remove("active");
            });
        }
    }
}

document.addEventListener("scroll", function() {
    makeActive();
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const links = document.querySelectorAll("#navbar__list li a");
links.forEach((li) => {
    li.addEventListener("click", (e) => {
        let topSection = document.querySelector("#" + e.target.classList[0]).offsetTop;
        window.scrollTo(0, topSection);
    })
})

// Set sections as active




