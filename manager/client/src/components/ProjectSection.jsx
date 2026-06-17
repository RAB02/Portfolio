"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*");

      if (!error) {
        setProjects(data);
      }
    }

    fetchProjects();
  }, []);

  return (
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
  );
}
