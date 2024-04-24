let person={
    
        name: "sugumar",
        title: "software Engineer",
        contact: {
          email: "msugumar832@gmail.com",
          phone: "9787570498",
          address: "123 Main Street, villupuram, State,vanur 604304"
        },
        education: [
          {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Computer Science",
            location: "pondicherry",
            year: "2015-2019"
          }
        ],
        experience: [
          {
            title: "Senior Software Engineer",
            company: "abc Innovations Inc.",
            location: "pondicherry",
            responsibilities: [
              "Lead a team of developers in designing and implementing new features for the company's flagship product.",
              "Optimized backend processes, resulting in a 30% increase in application performance.",
              "Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues."
            ]
          },
          {
            title: "Software Engineering Intern",
            company: "Software Solutions Co.",
            location: "pondicherry",
            dates: "Summer 2018",
            responsibilities: [
              "Assisted senior engineers in developing and testing new software modules.",
              "Participated in code reviews and provided constructive feedback to team members.",
              "Researched emerging technologies and presented findings to the development team."
            ]
          }
        ],
        skills: [
          {
            "category": "Programming Languages",
            "list": ["HTML","CSS", "JavaScript"]
          },
     
        ],
        languages: ["English","Tamil"]
      
}

let{ name:myName, title, ...remaining} = person;
console.log(myName)
console.log(title)
console.log(remaining)