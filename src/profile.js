// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if false, animation plays everytime element comes on screen
    once: true
}
// Change your display name on tha landing display
const header = {
    name: "Tejasv Goel",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: " I am a canadian based self taught Web Developer and Software Engineer.  Focused on crafting great web experiences and motivated to change the world for better. Coding and Designing have been my passion since the days I started working with computers and I have a never give up attitude inspired from the tale of Naruto Uzumaki. I enjoy creating beautifully designed, intuitive and functional websites."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },
    {
        name: "CSS3",
        faClass: "fab fa-css3"
    },
    {
        name: "Javascript",
        faClass: "fab fa-js"
    },
    {
        name: "ReactJS",
        faClass: "fab fa-react"
    },
    {
        name: "Bootstrap",
        faClass: "fab fa-bootstrap"
    },
    {
        name: "SASS",
        faClass: "fab fa-sass"
    },
    {
        name: "Java",
        faClass: "fab fa-java"
    },
    {
        name: "PostgreSQL",
        faClass: "fas fa-database"
    },
    {
        name: "NPM",
        faClass: "fab fa-npm"
    },
    {
        name: "GitHub",
        faClass: "fab fa-github"
    },
    {
        name: "Firebase",
        faClass: "fas fa-folder-open"
    },
    {
        name: "Stripe",
        faClass: "fab fa-stripe"
    },
    {
        name: "Heroku",
        faClass: "fas fa-h-square"
    }
]

const section3Title = "Projects"
const projects = [
    {
        
        id: "project1",
        name: "Web Application Development and research for H2CU",
        skills: ["HTML, CSS, JS, Wix, React, formspree.io"],
        url: "https://www.h2cu.online/"
    },
    {
        
        id: "project2",
        name: "Web Application Development for HCE 4.0",
        skills: ["HTML, CSS, JS, Wix, React, formspree.io"],
        url: "https://www.hce4.com/"
    },
    {
        
        id: "project3",
        name: "Ecommerce website",
        skills: ["HTML, CSS, JS, React, Redux, Firebase, Stripe, firestore, Redux-thunk, Redux-saga, Heroku"],
        url: "https://simpl-clothing.herokuapp.com/"
    },
    {
       
        id: "project4",
        name: "Facial Recognition Website",
        skills: ["HTML, CSS, JS, React, PostgreSQL, Heroku, ExpressJS, NodeJS"],
        url: "https://box-on-the-face.herokuapp.com/"
    },
    // {
    //     
    //     id: "project5",
    //     name: "Project 5",
    //     skills: ["HTML, CSS, JS"],
    //     url: "https://github.com/kaustubhai"
    // },
    // {
    //     
    //     id: "project6",
    //     name: "Project 6",
    //     skills: ["HTML, CSS, JS"],
    //     url: "https://github.com/kaustubhai"
    // },
]

const section4Title = "Miscellaneous"
const miscellaneous = [
    {
        
        id: "misc1",
        name: "Background Generator",
        skills: ["HTML, CSS, JS"],
        url: "https://tejasvgoel.github.io/background-geneator.github.io/"
    },
    {
        
        id: "misc2",
        name: "Quiz for HCE 4.0",
        skills: ["HTML, CSS, JS"],
        url: "https://tejasvgoel.github.io/hce4quiz/"
    },
    // {
        
    //     id: "misc3",
    //     name: "Miscellaneous 3",
    //     url: "https://github.com/kaustubhai"
    // },
]

const section5Title = "Get in Touch"
const contact = {
    pitch: "My Email is: tejasvgoel@gmail.com. I'd love to hear from you!."
}

const social = {
    github: 'https://github.com/TejasvGoel',
    facebook: 'https://www.facebook.com/tejasvgoel',
    linkedin: 'https://www.linkedin.com/in/tejasv-goel-b6a075159/',
    instagram: 'https://www.instagram.com/tejasv_markll/',
    resume: 'https://drive.google.com/u/0/uc?id=1CUKQ76wM48yBp8uEgvLvYoPsORqnJzab&export=download'
}
// Dont change anything here
export { animation, header, background, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }