"use client";
    
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
export default function AboutSection() {
    const [skills, setSkills] = useState([]);
    
      useEffect(() => {
        async function fetchSkills() {
          const { data, error } = await supabase
            .from("skills")
            .select("category")
            .eq("id", 6)
            .single()
    
          if (!error) {
            setSkills(data.category);
          }
        }
    
        fetchSkills();
      },[]);
    
  return (
    <section
      id="about"
      className="flex items-center justify-center px-4"
    >
      <div className="max-w-4xl text-center">
    
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Ramon Bernal
        </h1>

        <p className="text-blue-400 font-medium mb-2">
          Software Engineer
        </p>

        <p className="mt-6 text-xl text-gray-200">
          Computer Science graduate passionate about full-stack
          development, cloud technologies, and scalable web applications.
        </p>

        <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Experienced with React, Node.js, Express, PostgreSQL,
          Supabase, and cloud deployment platforms. Led the
          development of a full-stack Apartment Management Platform
          featuring authentication, payment processing, geolocation,
          and database integration.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full border border-white/20 text-white text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/ramon-bernal-286669309/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/RAB02"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-5 py-3 text-white font-medium hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}