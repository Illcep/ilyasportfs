"use client"; // Ensure the component runs on the client side

import { Inter } from "next/font/google";
import { useState } from 'react';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [section, setSection] = useState('home');

  return (
    <div className={`${inter.className} flex flex-col items-center min-h-screen`}>
      <Navbar setSection={setSection} />
      {section === 'home' && <HomeSection setSection={setSection} />}
      {section === 'resume' && <ResumeSection />}
      {section === 'contact' && <ContactSection />}
    </div>
  );
}

function Navbar({ setSection }) {
  return (
    <nav className="navbar bg-base-100 shadow-lg w-full flex justify-between items-center p-4">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost normal-case text-xl">Menu</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button onClick={() => setSection('home')}>Home</button></li>
          <li><button onClick={() => setSection('resume')}>Resume</button></li>
          <li><button onClick={() => setSection('contact')}>Contact</button></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={(e) => document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light')} />
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64 17.36A9 9 0 1117.36 5.64 9 9 0 015.64 17.36z" />
          </svg>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 3v1M12 20v1M4.22 4.22l.707.707M17.071 17.071l.707.707M1 12h1M22 12h1M4.22 19.778l.707-.707M17.071 6.929l.707-.707" />
          </svg>
        </label>
      </div>
    </nav>
  );
}

function HomeSection({ setSection }) {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <img src="IlyasI.jpg" alt="Profile Picture" className="w-40 h-40 rounded-full mb-4" />
      <h1 className="text-5xl font-bold mb-2">Ilyas Ismailzada</h1>
      <p className="text-2xl mb-4">Software Developer Student</p>
      <p className="text-xl mb-4">Interested in Full Stack Web Development, Machine Learning, and more Coding Languages</p>
      <p className="text-xl mb-4">Currently learning Python, C++, and C#</p>
      <p className="text-xl mb-4">I am a passionate and hardworking person who is always willing to learn new things.</p>
      <div className="flex space-x-4 mb-4">
        <button className="btn btn-primary" onClick={() => setSection('resume')}>Resume</button>
        <button className="btn btn-secondary" onClick={() => setSection('contact')}>Contact</button>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/ilyas-ismailzada-166313263" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          LinkedIn
        </a>
        <a href="https://github.com/illcep" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          GitHub
        </a>
      </div>
    </main>
  );
}

function ResumeSection() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul>
          <li className="mb-2">
            <strong>Southern Alberta Institute of Technology</strong> - Software Developement Diploma (2023-2024)
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <ul>
          <li className="mb-2">
            <strong>SAIT</strong> - Student (2023-Present)
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Certified JavaScript Developer</li>
          <li>React Professional</li>
        </ul>
      </section>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="textarea textarea-bordered w-full"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
