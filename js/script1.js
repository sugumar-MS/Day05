const resumeData={
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

// Using regular for loops
console.log("Using regular for loops:");
for (let i = 0; i < resumeData.education.length; i++) {
  console.log("Education:", resumeData.education[i]);
}

for (let key in resumeData.contact) {
  console.log("Contact:", key, "-", resumeData.contact[key]);
}

for (let i = 0; i < resumeData.experience.length; i++) {
  console.log("Experience:", resumeData.experience[i]);
}

for (let i = 0; i < resumeData.skills.length; i++) {
  console.log("Skills:", resumeData.skills[i]);
}

for (let i = 0; i < resumeData.languages.length; i++) {
  console.log("Languages:", resumeData.languages[i]);
}

// Using for...of loops
console.log("\nUsing for...of loops:");
for (let education of resumeData.education) {
  console.log("Education:", education);
}

for (let experience of resumeData.experience) {
  console.log("Experience:", experience);
}

for (let skill of resumeData.skills) {
  console.log("Skills:", skill);
}

for (let language of resumeData.languages) {
  console.log("Languages:", language);
}

// Using forEach method
console.log("\nUsing forEach method:");
resumeData.skills.forEach(skill => {
  console.log("Skills:", skill);
});

resumeData.languages.forEach(language => {
  console.log("Languages:", language);
});




























