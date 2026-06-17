"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function EducationSection() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    async function fetchEducation() {
      const { data, error } = await supabase
        .from("education")
        .select("*");

      if (!error) {
        setEducation(data);
      }
    }

    fetchEducation();
  }, []);

  return (
      <div className="mt-auto flex justify-center gap-4">
        {education.map((edu) => (
          <div key={edu.id} className="h-full rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl text-white font-bold">{edu.school}</h3>
            <p className="text-white">{edu.degree}</p>
            <p className="text-sm text-white">GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
  );
}
