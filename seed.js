require('dotenv').config();
const mongoose = require('mongoose');
const About = require('./models/About');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Project = require('./models/Project');

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(' Conectado a MongoDB');

    // Limpiar colecciones
    await About.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Project.deleteMany({});

    // About
    await About.create({
      name: "Richard Perez",
      title: "Software Devoloper",
      location: "Madrid, España",
      email: "richard@example.com",
      phone: "+34 600 000 000",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat vitae dignissim congue aenean et, ullamcorper per mi integer inceptos. Cursus blandit pretium porta pellentesque volutpat facilisis venenatis, vel vestibulum taciti ultricies vitae netus praesent suspendisse, congue lobortis nec enim aliquam luctus. Scelerisque urna viverra accumsan per aptent vitae, lectus molestie potenti dignissim tempor ullamcorper ut, penatibus malesuada consequat porttitor primis..",
      avatarUrl: "https://i.pravatar.cc/400?img=12",
      resumeUrl: "",
      socials: [
        { name: "GitHub", url: "https://github.com/ri5ch", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/richard-p%C3%A9rez-03b945221/", icon: "linkedin" }
      ]
    });

    // Experiences
    await Experience.insertMany([
      {
        title: "Frontend Developer",
        company: "Empresa A",
        location: "Madrid",
        startDate: new Date("2022-01-01"),
        endDate: null,
        description: "Trabajo con Angular y desarrollo de interfaces."
      },
      {
        title: "Junior Developer",
        company: "Empresa B",
        location: "Madrid",
        startDate: new Date("2020-06-01"),
        endDate: new Date("2021-12-31"),
        description: "Desarrollo web y mantenimiento de proyectos internos."
      }
    ]);

    // Education
    await Education.insertMany([
      {
        title: "Grado en Ingeniería Informática",
        school: "Universidad X",
        startDate: new Date("2016-09-01"),
        endDate: new Date("2020-06-01"),
        description: "Formación universitaria en informática."
      },
      {
        title: "Curso Angular Avanzado",
        school: "Platzi",
        startDate: new Date("2021-02-01"),
        endDate: new Date("2021-05-01"),
        description: "Curso avanzado de Angular y buenas prácticas."
      }
    ]);

    // Projects
    await Project.insertMany([
      {
        title: "Portfolio Angular",
        description: "Mi portfolio personal desarrollado en Angular",
        repo: "https://github.com/tuusuario/portfolio",
        demoUrl: "",
        technologies: ["Angular", "TypeScript", "CSS"],
        imageUrl: ""
      },
      {
        title: "App de Tareas",
        description: "Aplicación de gestión de tareas con Node.js y MongoDB",
        repo: "https://github.com/tuusuario/todo-app",
        demoUrl: "",
        technologies: ["Node.js", "Express", "MongoDB", "Angular"],
        imageUrl: ""
      }
    ]);

    console.log(' Seed completado');

  } catch (err) {
    console.error(' Error en seed:', err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
