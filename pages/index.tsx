import React, { useEffect, useState, useMemo } from "react";
import Section from "../components/Section";
import RadialEffect from "../components/RadialEffect";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionRefs = useMemo(
    () => ({
      about: React.createRef<HTMLDivElement>(),
      experience: React.createRef<HTMLDivElement>(),
      projects: React.createRef<HTMLDivElement>(),
      contact: React.createRef<HTMLDivElement>(),
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          const title = section.querySelector("h2");
          const content = section.querySelector(".content");

          if (entry.isIntersecting) {
            setActiveSection(section.id);

            if (title) {
              title.classList.remove("hidden-title");
              title.classList.add("visible-title", "typing-effect");
            }

            if (content) {
              content.classList.add("opacity-100", "translate-y-0");
              content.classList.remove("opacity-0", "translate-y-4");
            }
          } else {
            if (title) {
              title.classList.remove("visible-title", "typing-effect");
              title.classList.add("hidden-title");
            }

            if (content) {
              content.classList.add("opacity-0", "translate-y-4");
              content.classList.remove("opacity-100", "translate-y-0");
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <div className="bg-black text-green-300 min-h-screen font-vcr flex flex-col lg:flex-row">
      <RadialEffect /> {/* Include background radial effect */}
      {/* Top Navigation for Mobile */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-black z-50 border-b border-green-300">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold glow-active">Noah Taggart</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative flex flex-col justify-between items-center w-8 h-6 text-green-300 text-2xl focus:outline-none"
          >
            <span
              className={`block h-1 w-6 bg-green-300 transition-all duration-300 transform ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-green-300 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-green-300 transition-all duration-300 transform ${
                mobileMenuOpen ? "-rotate-45 translate-y-[-12px]" : ""
              }`}
            ></span>
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="bg-black border-t border-green-300">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <NavLink
                href="#about"
                label="About"
                isActive={activeSection === "about"}
                simple={true}
              />
              <NavLink
                href="#experience"
                label="Experience"
                isActive={activeSection === "experience"}
                simple={true}
              />
              <NavLink
                href="#projects"
                label="Projects"
                isActive={activeSection === "projects"}
                simple={true}
              />
              <NavLink
                href="#contact"
                label="Contact"
                isActive={activeSection === "contact"}
                simple={true}
              />
            </ul>
          </nav>
        )}
      </header>
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-[40%] py-32 px-10 bg-black ml-[10%]">
        <h1 className="text-5xl font-bold glow-active mb-4">Noah Taggart</h1>
        <p className="text-lg text-green-300 mb-20">
          Student // Full-Stack Developer
        </p>
        <nav className="space-y-4 mb-20">
          <NavLink
            href="#about"
            label="About"
            isActive={activeSection === "about"}
          />
          <NavLink
            href="#experience"
            label="Experience"
            isActive={activeSection === "experience"}
          />
          <NavLink
            href="#projects"
            label="Projects"
            isActive={activeSection === "projects"}
          />
          <NavLink
            href="#contact"
            label="Contact"
            isActive={activeSection === "contact"}
          />
        </nav>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="https://github.com/arcboy1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 text-2xl icon-glow"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/noah-taggart-20b09960/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 text-2xl icon-glow"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </aside>
      {/* Main Content Area */}
      <main className="lg:ml-[40%] flex-1 p-10 mt-8 space-y-20">
        <Section
          id="about"
          title="About Me"
          ref={sectionRefs.about}
          description={[
            "Hi, I'm Noah Taggart, a student and software developer. Growing up, I was always fascinated by technology, video games, and movies, but I was told pursuing a career in gaming wasn't a 'real' job. Despite that, my passion for technology never faded.",

            "After earning my Business Degree from the University of Windsor and after working in the field for years unhappily, I realized it wasn’t for me. I decided to pursue my childhood passions, quit my job, and enrolled in Mobile App Development at St. Clair College. Now, I’m diving into front-end, back-end, and game development, eager to experiment with all sorts of technologies, though I hope to eventually find my niche and become an expert in a specific area of development. ",

            "My primary experience now is mostly in Java, Swift, and C#, as well as front-end(React,HTML,CSS). In my free time, I tinker with hardware projects like Arduino(C++/C) and create 3D models for printing(Blender).",

            "I'm excited to continue my learning journey and build projects that are not just cool, but solve real problems. If you're interested in collaborating or learning more about my work, feel free to explore my portfolio and contact me with the form at the bottom!",
          ]}
        />
        <Section
          id="experience"
          title="Experience"
          ref={sectionRefs.experience}
          description="Professional development experience:"
          extraContent={<Experience />}
        />
        <Section
          id="projects"
          title="Projects"
          ref={sectionRefs.projects}
          description="Check out some of my recently developped projects:"
          extraContent={<Projects />}
        />
        <Section
          id="contact"
          title="Contact"
          ref={sectionRefs.contact}
          description="Feel free to reach out via the form below."
          extraContent={<ContactForm />}
        />
      </main>
    </div>
  );
}

function NavLink({ href, label, isActive, simple = false }) {
  if (simple) {
    // Simplified version for mobile
    return (
      <a
        href={href}
        className={`block glow text-green-300 ${isActive ? "glow-active" : ""}`}
      >
        {label}
      </a>
    );
  }

  // Full version with effects for desktop
  return (
    <div className="relative flex items-center">
      {isActive && (
        <span className="triangle-indicator" aria-hidden="true"></span>
      )}
      <a
        href={href}
        className={`block glow text-green-300 transition ${
          isActive ? "glow-active" : ""
        }`}
      >
        {label}
      </a>
    </div>
  );
}

// Section for Experience
function Experience() {
  return (
    <div className="space-y-10">
      {/* Experience Blocks */}
      <div className="space-y-10">
        {/* Tutor at St Clair College */}
        <div className="border border-green-300 p-4 rounded">
          <h3 className="text-xl font-bold text-green-300">
            Tutor - St Clair College
          </h3>
          <p className="text-green-200">Jan 2024 - Nov 2024 · 11 months</p>
          <p className="text-green-300">
            Responsible for helping struggling students better understand
            programming or problem-solving concepts and assisting them in
            applying these concepts to create well-structured and effective
            code. Conducted 1-on-1 and group tutoring sessions. Among the
            top-ranked tutors for my program.
          </p>
          <p className="text-green-300 mt-2">
            <strong>Skills:</strong> Customer Service · Communication · Higher
            Education · One-on-one Instruction · Homework Help · Academic
            Coaching · Programming
          </p>
        </div>

        {/* Student Researcher at St. Clair College/Connecting Windsor Essex */}
        <div className="border border-green-300 p-4 rounded">
          <h3 className="text-xl font-bold text-green-300">
            Student Researcher - St. Clair College / Connecting Windsor Essex
          </h3>
          <p className="text-green-200">Nov 2024 - Present · 2 months</p>
          <p className="text-green-300">
            Playing an essential role in bringing awareness to cybersecurity and
            enhancing digital literacy through the TELUS Wise program, in
            partnership with Connecting Windsor-Essex, Windsor Police, and
            O.P.P. My role involves delivering the program to community members
            and assisting in data collection and analysis.
          </p>
          <p className="text-green-300 mt-2">
            <strong>Skills:</strong> Educational Research · Research Support ·
            Cybersecurity
          </p>
        </div>
      </div>

      <div className="mt-6">
        {/* GitHub Stats */}
        <div className="mb-6">
          <a
            href="https://github.com/arcboy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=arcboy1&show_icons=true&theme=radical&bg_color=00000000&title_color=9fecb1&text_color=9fecb1&icon_color=9fecb1&hide_border=true"
              alt="GitHub Stats"
              width={600}
              height={300}
              unoptimized
              className="rounded-lg p-4 border border-green-300"
            />
          </a>
        </div>

        {/* Top Languages */}
        <div>
          <a
            href="https://github.com/arcboy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=arcboy1&theme=radical&bg_color=00000000&title_color=9fecb1&text_color=9fecb1&bar_color=9fecb1&hide_border=true"
              alt="Top Languages"
              width={600}
              height={300}
              unoptimized
              className="rounded-lg p-4 border border-green-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

//Section for Projects
function Projects() {
  return (
    <div className="space-y-8">
      {/* Project 1: AniDex */}
      <a
        href="https://github.com/arcboy1/Anidex"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-4 border border-green-300 rounded transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-300 block"
      >
        <h3 className="text-xl text-green-300 font-semibold mb-2">
          AniDex: Android Anime & Manga App
        </h3>
        <p className="text-green-300 ">
          AniDex is a comprehensive Android app for anime and manga enthusiasts.
          It allows users to browse trending and popular content, view detailed
          title information, and manage a personalized watchlist. Features
          include GPT-4 powered character identification and customizable
          settings to enhance the user experience.
        </p>
        <p className="text-lg text-green-300 mt-2 mb-2">
          <strong>Technologies Used</strong>: Java, Android SDK, Retrofit, Gson,
          Picasso, GPT-4 Vision API, Kitsu API, AniPlaylist API
        </p>
      </a>

      {/* Project 2: Fridgy */}
      <a
        href="https://github.com/arcboy1/fridgy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-4 border border-green-300 rounded transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-300 block"
      >
        <h3 className="text-xl text-green-300 font-semibold mb-2">
          Fridgy: Food Inventory Management App
        </h3>
        <p className="text-green-300">
          Fridgy is a food inventory app built using Swift and Xcode. The app
          helps users keep track of their food inventory and alerts them when
          items are nearing their expiration dates, ensuring no food goes to
          waste.
        </p>
        <p className="text-lg text-green-300 mt-2">
          <strong>Technologies Used</strong>: Swift, Xcode, JSON Storage
        </p>
      </a>

      {/* Project 3: MADfitness */}
      <a
        href="https://github.com/arcboy1/MADfitness"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-4 border border-green-300 rounded transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-300 block"
      >
        <h3 className="text-xl text-green-300 font-semibold mb-2">
          MADfitness: Fitness Tracking Software
        </h3>
        <p className="text-green-300">
          MADfitness is a comprehensive fitness app designed to log and manage
          workout sessions. Built from scratch using JavaFX and an SQLite
          database, it enables users to track their progress and stay motivated
          with an easy-to-use interface.
        </p>
        <p className="text-lg text-green-300 mt-2">
          <strong>Technologies Used</strong>: JavaFX, SQLite, Java, Swing, Maven
        </p>
      </a>

      {/* Project 4: Portfolio Website */}
      <a
        href="http://localhost:3000"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-4 border border-green-300 rounded transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-green-300 block"
      >
        <h3 className="text-xl text-green-300 font-semibold mb-2">
          Portfolio Website
        </h3>
        <p className="text-green-300">
          This is the website you&apos;re currently viewing, built with Next.js,
          Tailwind CSS, and deployed via Vercel. It showcases my projects and
          skills, and uses Formspree to handle form submissions.
        </p>
        <p className="text-lg text-green-300 mt-2">
          <strong>Technologies Used</strong>: Next.js, Tailwind CSS, Vercel,
          Formspree
        </p>
      </a>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  return (
    <form
      className="space-y-4 bg-black p-6 rounded border border-green-300"
      action="https://formspree.io/f/xgvebaaz"
      method="POST"
    >
      <label className="block">
        <span className="text-green-300">Name:</span>
        <input
          type="text"
          name="name"
          className="w-full p-2 mt-1 bg-black text-green-300 border border-green-300 rounded outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300"
          required
        />
      </label>

      <label className="block">
        <span className="text-green-300">Email:</span>
        <input
          type="email"
          name="email"
          className="w-full p-2 mt-1 bg-black text-green-300 border border-green-300 rounded outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300"
          required
        />
      </label>

      <label className="block">
        <span className="text-green-300">Message:</span>
        <textarea
          name="message"
          className="w-full p-2 mt-1 bg-black text-green-300 border border-green-300 rounded outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300"
          rows={4}
          required
        ></textarea>
      </label>

      <button
        type="submit"
        className="w-full p-2 text-green-300 bg-black border border-green-300 rounded hover:bg-green-300 hover:text-black transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
