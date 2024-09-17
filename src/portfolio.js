/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  //eric version
  username: "Feng Lin",
  title: "Hi all, I'm Feng Lin",
  subTitle: emoji(
    "A passionate Front End Developer 🚀 having an experience of building Web and Mobile applications with Angular, HTML/CSS, JavaScript, Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    //eric version
    // require("./assets/cv_of_Eric_Lin_.pdf"), // Set to empty to hide the button
    require("./assets/RESUME.pdf"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    //eric version
    /*
    emoji(
      "⚡ Around 7 years of strong experience in developing web applications by using Angular 2+, AngularJS, JavaScript, TypeScript, HTML5, CSS3, Bootstrap, JQuery, Ajax, JSON."
    ),
    emoji("⚡ Extensive experience in Angular 2+ features like Routing, Data Binding, Directives, Page Loading, Component Communication, Dependency Injection, Service, HTTP server, Forms, and Exception Handling."),
    emoji(
      "⚡ Experience in writing Angular Modules, Components, Services, Controllers, Interceptor, Custom Validators, Custom Pipes, and Custom Directives."
    ),


    emoji(
      "⚡ Strong knowledge of RxJs library, NgRx, and Angular Material."
    ),
    emoji("⚡ Good knowledge of testing frameworks and tools including JUnit, Karma, Mockito, Jasmine, Fiddler, and Postman."),
    emoji(
      "⚡ Hands-on experience writing web services both client-side and server-side using RESTful web services."
    ),

    emoji(
      "⚡ Hands-on experience with back-end skills such as Spring Core, Spring MVC, Spring Boot, Node.js, Express.js, and Hibernate."
    ),
    emoji("⚡ StrongknowledgeofMongoDB,Oracle,SQLServer,andMySQLand proficiency in writing complex SQL, PL/SQL."),
    emoji(
      "⚡ Expertise in version control tools like GIT and SVN to manage and control software development."
    ),

    emoji(
      "⚡ Experience in all phases of CI/CD like Requirement Analysis, Implementation, Maintenance, and extensive experience with Agile and Scrum."
    ),
    emoji("⚡ Excellent communication skills, interpersonal, strong architectural skills, hardworking, and a very good team player."),
    */

    emoji("⚡ Around 3 years of strong experience in developing web applications by using Angular, AngularJS, JavaScript, TypeScript, HTML5, CSS3, Bootstrap, JQuery, Ajax, JSON."
    ),
    emoji("⚡ Extensive experience in Angular features like Routing, Data Binding, Directives, Page Loading, Component Communication, Dependency Injection, Service, HTTP server, Forms, and Exception Handling."
    ),
    emoji("⚡ Experience in writing Angular Modules, Components, Services, Controllers, Interceptor, Custom Validators, Custom Pipes, and Custom Directives."
    ),
    emoji("⚡ Strong knowledge of RxJs library, NgRx, and Angular Material."
    ),
    emoji("⚡ Good knowledge of testing frameworks and tools including JUnit, Karma, Mockito, Jasmine, Fiddler, and Postman."
    ),
    emoji("⚡ Hands-on experience writing web services both client-side and server-side using RESTful web services."
    ),
    emoji("⚡ Around 3 years of extensive experience in backend web development using Node.js and Express.js. Proficient in JavaScript and TypeScript, leveraging their features for efficient and scalable web application development."
    ),
    emoji("⚡ Skilled in developing RESTful APIs with Express.js, ensuring robust and scalable server-side solutions."
    ),
    emoji("⚡ Strong knowledge of Node.js asynchronous programming model and event-driven architecture."
    ),
    emoji("⚡ Experience with Node.js frameworks such as Express.js and Koa.js for building efficient web applications and APIs."
    ),
    emoji("⚡ Familiarity with Node.js ORM libraries such as Sequelize and Mongoose, enabling efficient database interactions with MySQL, PostgreSQL, and MongoDB."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/stonybrook.png"),
      subHeader: "Bachelor of Science in Computer Science, Applied Mathematics & Statistics",
      duration: "",
      desc: "",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend(HTML, CSS, Javascript, Typescript, Angular, Bootstrap, AJAX, JQuery)", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend(Node.js, Express.js, Spring Core, Spring Boot, Hibernate)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database(MySQL, MongoDB)",
      progressPercentage: "80%"
    },
    {
      Stack: "Testing(Junit, Mockito, Jasmine, Karma, Postman)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "CVS",
      companylogo: require("./assets/images/CVS2.png"),
      //eric version
      // date: "Jan 2022 - Jul 2023",
      date: "Jan 2022 - Dec 2023",
      desc: "",
      descBullets: [
        //eric version
        /*
        "Developed and debugged Angular 14 component files using HTML5, SCSS, JavaScript, TypeScript.",
        "Good knowledge on various Website Design Tools like HTML5, CSS3, SASS/LESS CSS JavaScript, Angular 14, Bootstrap, Angular material.",
        "Created reusable registration forms/components to streamline development.",
        "Developed responsive and mobile-friendly registration UI with Angular Material/Bootstrap.",
        "Good experience with building applications with REST API services.",
        "Implemented registration data validation and error handling with Angular forms.",
        "Provided seamless navigation and transitions between registration steps using Angular routing.",
        "Used Jasmine, Karma to build and test application. Performed unit testing using Jasmine.",
        "Maintained and enhanced registration features by leveraging core Angular concepts like modularity, observables, dependency injection, etc.",
        "Optimized Angular build and deployment process for faster rendering of the registration pages.",
        "Worked closely with accessibility team to ensure registration pages meet WCAG standards and are accessible to users with disabilities.",
        "Good understand and experience in UX mockup tools like Invision and Figma.",
        "Analyzed, evaluated, and made recommendations on UI frameworks, technologies, and architecture.",
        "Efficiently resolved various front-end issues during registration to ensure stability.",
        */
        "Spearheaded the development of Angular 14 component files for the CRM Registration project, encompassing Caremark and Specialty registrations, utilizing HTML5, SCSS, JavaScript, and TypeScript, Bootstrap and Angular material.",
        "Designed and implemented reusable registration forms/components, significantly streamlining the development process and enhancing code maintainability.",
        "Developed a responsive and mobile-friendly registration UI using Angular Material/Bootstrap, improving user experience across various devices.",
        "Integrated REST API services to build robust applications, ensuring efficient data communication between the front-end and back-end.",
        "Implemented data validation and error handling with Angular forms, enhancing the accuracy and reliability of user input during registration.",
        "Enabled seamless navigation and transitions between registration steps using Angular routing, providing a smooth user journey.",
        "Conducted thorough unit testing using Jasmine and Karma, contributing to the stability and reliability of the application.",
        "Maintained and enhanced registration features by leveraging core Angular concepts like modularity, observables, dependency injection, etc.",
        "Optimized the Angular build and deployment process, resulting in faster rendering of registration pages and improved overall web page performance.",
        "Collaborated with the accessibility team to ensure that registration pages meet WCAG standards, making them accessible to users with disabilities.",
        "Good understand and experience in UX mockup tools like Invision and Figma.",
        "Proactively identified and resolved various front-end issues during registration, ensuring the stability and performance of the web application.",
        "Played a key role in analyzing, evaluating, and making recommendations on UI frameworks, technologies, and architecture, leading to enhanced user interface design and development practices."
      ]
    },
    {
      //eric version
      // role: "Angular Developer",
      role: "Web Developer",
      // company: "Picwell",
      company: "Sita Health & Life Sciences",
      // companylogo: require("./assets/images/picwell.jpeg"),
      companylogo: require("./assets/images/sita.webp"),
      // date: "Sep 2019 – Dec 2021",
      date: "Feb 2021 - Aug 2021",
      desc: "",
      descBullets: [
        //eric version
        /*
        "Involved in all stages of software development life cycle including analysis, development, implementation, testing and support.",
        "Developed various pages in the applications using HTML5, CSS3, JSON, JavaScript, Angular 8/10, and Angular Material.",
        "Built Angular 8/10 components, UI services to consume rest services using Component based architecture provided by Angular 8/10.",
        "Created Angular components like Components, Directives, Services, and ReactiveForms to collect input from the users.",
        "Worked on Angular 8/10 features like Routing, Data Binding, Directives, Page Loading, Component Communication, Dependency Injection, Service, HTTP server, Forms, and Exception Handling.",
        "Incorporated D3.js with Angular 8/10 and built interactive data visualizations such as bar charts and line charts using JSON data sets.",
        "Developing RESTFUL web services using Spring Boot, Spring RESTFUL template.",
        "Worked with Karma and Jasmine, supporting QA team to debug and write tests.",
        "Automated the build and deployment process using Maven build script.",
        "Responsible for maintaining versions of source code using Git.",
        "Involved in Agile process, two-week Sprints, and daily Scrums to discuss the development of the application."
        */
        "Led the development of the company’s internal employee management portal using Angular 8 / 10, HTML5, CSS3, and Angular Material, enhancing the user interface for accessing and managing critical information such as personal and financial data.",
        "Actively participated in all stages of the software development life cycle, collaborating with cross - functional teams to analyze requirements, develop, implement, and support user interface solutions that align with business objectives.",
        "Utilized Angular 8 / 10 to architect and develop a dynamic web page, leveraging advanced features such as Routing, Data Binding, Directives, Reactive Forms, Component Communication, Dependency Injection, and Exception Handling to create a highly interactive and responsive user interface that efficiently collects and manages user input.",
        "Implemented RESTful services consumption in Angular components, facilitating seamless data exchange between the front - end and back - end.",
        "Integrated D3.js with Angular to develop interactive data visualizations, enabling efficient tracking and analysis of employee metrics and financial data.",
        "Collaborated on back - end development using Node.js and Express.js, ensuring seamless data handling and server-side logic.",
        "Integrated MongoDB as the database solution, enabling efficient storage and retrieval of employee information.",
        "Ensured code quality and maintainability by adhering to best practices in component - based architecture and using Git for version control.",
        "Participated in Agile methodologies, including two - week sprints and daily scrums, to continuously improve the development process and meet project deadlines.",
        "Assisted the QA team with writing tests and debugging using Karma and Jasmine, contributing to the overall stability and reliability of the application."

      ]
    },
    //eric version
    /*
    {
      role: "Angular Developer",
      company: "Evercore Partners",
      companylogo: require("./assets/images/ev.jpeg"),
      date: "Aug 2017 - Sep 2019",
      desc: "",
      descBullets: [
        "Implemented Single Page Web Applications (SPA) for displaying user requests, user records history and various analytics by using Angular 4.",
        "Responsible for setting up Angular 4 framework for UI development. Developed html views with HTML5, CSS3, JSON, Angular Material and Angular 4.",
        "Worked on Angular 4 features like Two Way Binding, Custom Directives, Controllers, Filters, Services and Http Request.",
        "Designed and created various forms using ReactiveForm in angular 4.",
        "Worked with UX designers and used Angular 4 Material and CSS3 to create web pages based on the mockups.",
        "Created view-model and controllers and worked with demo JSON data and services until API gets ready.",
        "Developed RESTful APIs using SpringBoot and Hibernate.",
        "Tested the created web services of the Web API controllers, and actions route using Postman.",
        "Involved in unit testing of the software modules using Karma and Jasmine.",
        "Responsible for maintaining versions of source code using Git.",
        "Participated in daily Scrum meets and used AGILE methodologies with JIRA to manage development process of the project."
      ]
    },
    

    {
      role: "Web Developer",
      company: "ACV Auctions",
      companylogo: require("./assets/images/acv.jpeg"),
      date: "Jun 2016 - Apr 2017",
      desc: "",
      descBullets: [
        "Designed dynamic and browser compatible pages using HTML5, CSS3, jQuery and JavaScript.",
        "Used advanced level of HTML5, JavaScript, CSS3 to build the pages.",
        "Produced content pages with CSS3 layout and style markup presentations and used JavaScript methods and properties.",
        "Used Bootstrap front-end framework for faster and easier web development with MSSQL database as the backend.",
        "Successfully implemented Auto Complete/Auto Suggest functionality using Ajax, jQuery, Web Service call and JSON.",
        "Used JavaScript unit testing frameworks like jasmine for client side.",
        "Design and implemented Restful API layer along with calls to consume an API layer.",
        "Developed RESTful API using Spring Boot and Hibernate.",
        "Created tables and indexes and wrote Stored Procedures, Functions and Triggers in SQL Server.",
        "Utilized GitHub for version Control and source code maintenance needs."
      ]
    },
    */
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "267-340-7631",
  //eric version
  // email_address: "ericlin3589@gmail.com"
  email_address: "feng.lin.5789@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
