const portfolioData = {
    "imageUrl": 'http://localhost:3000/',
    "logo": "images/sh_logo.png",
    "name": 'Scott House',
    "role": 'Full Stack Developer',
    "intro": "Let's work to build a better world!",
    "projects": [
        {
            "id": 0,
            "title": "COVID-19 Tracker",
            "imageUrl": "images/portfolio/project-demo.gif",
            "link": "http://covidtracking-us.com/",
            "codeLink": "https://github.com/sehouse/covid-data-collector",
            "description": "This project uses data from The Atlantic's COVID Data Tracker to create an interactive way to view the statistics for COVID in the United States.",
            "technology": ["HTML/CSS", "JavaScript/jQuery/Moment.js", "Bulma", "Font Awesome"],
        },
        {
            "id": 1,
            "title": "Digital Dude",
            "imageUrl": "images/portfolio/digital-dude.gif",
            "link": "http://www.digital-dude.com/",
            "codeLink": "https://github.com/sehouse/tamagotchi",
            "description": "This project is a digital pet game, created using JS and a MySql database, to store player data.",
            "technology": ["HTML/CSS", "Materialize", "Javascript", "MySql", "Heroku", "Node.js/bcryptjs/dotenv/express/jsonwebtoken/mysql2/sequelize/uuid"],
        },
        {
            "id": 2,
            "title": "Work Day Scheduler",
            "imageUrl": "images/portfolio/scott-house-work-day-scheduler-top.jpg",
            "link": "https://sehouse.github.io/work-day-scheduler/",
            "codeLink": "https://github.com/sehouse/work-day-scheduler",
            "description": "This project is a fairly basic work day scheduler, in which the user can input daily tasks by hour, save/clear them, and the app will track what time of day it currently is.",
            "technology": ["HTML/CSS", "JS/moment.js", "Bootstrap"],
        },
        {
            "id": 3,
            "title": "Weather Dashboard",
            "imageUrl": "images/portfolio/scott-house-weather-dashboard.png",
            "link": "https://sehouse.github.io/weather-dashboard/",
            "codeLink": "https://github.com/sehouse/weather-dashboard",
            "description": "This project is a functioning weather dashboard, with which you can search for the current and extended five day forecast for a city, using the OpenWeather API. You are also able to recall previously searched city data.",
            "technology": ["HTML/CSS", "JS", "OpenWeather API"]
        },
        {
            "id": 4,
            "title": "Handlebars Burger App",
            "imageUrl": "images/portfolio/handlebars-burger-app.png",
            "link": "https://vaporwave-burger-application.herokuapp.com/burgers",
            "codeLink": "https://github.com/sehouse/handlebars_burger_app",
            "description": "This application creates a database of burgers for a user to keep track of and allows them to mark the burger as devoured or submit new burgers through a front end application, instead of through mysql.",
            "technology": ["HTML/Handlebars", "JS", "Heroku", "MySQL", "JAWSDB", "Node.JS(dotenv, express, express-handlebars, mysql)"]
        },
        {
            "id": 5,
            "title": "Employee Tracker",
            "imageUrl": "images/portfolio/employee-tracker.gif",
            "link": "https://www.youtube.com/watch?v=i81DLv_b0V8",
            "codeLink": "https://github.com/sehouse/employee_tracker",
            "description": "This application is a command line application that allows a user to view/modify a MySQL database, using just command line inputs. The user s able to view tables of employees, roles, and departments, and is also able to add new roles, employees, and departments to the database.",
            "technology": ["JS", "MySQL", "Node.JS(console.table, dotenv, inquirer, mysql)"]
        },
    ],
    "skills": [
        {
            "name": "HTML/CSS",
            "percentage": 75
        },
       
        {
            "name": "Javascript",
            "percentage": 80
        },

        {
            "name": "Node.JS",
            "percentage": 75
        },

        {
            "name": "Express",
            "percentage": 70
        },

        {
            "name": "MySQL",
            "percentage": 65
        },

        {
            "name": "Mongo",
            "percentage": 55
        },

        {
            "name": "REACT",
            "percentage": 50
        },
    ],
    "workExp": [
        {
            "title": "Tech Support Specialist",
            "date": 'August 2020 - Current',
            "description": "I am responsible for maintenance and upkeep of the high school's technology, which includes ChromeBooks, MacBooks, iPads, and Prometheus boards, and other assorted technology.",
            "company": 'Sanford High School'
        },
        {
            "title": "Title I Math Support Specialist",
            "date": 'October 2019 - August 2020',
            "description": "I was responsible for assisting with extra support and math instruction for first grade students between two schools.",
            "company": 'Sanford School District',
        },
    ]

}

export default portfolioData;