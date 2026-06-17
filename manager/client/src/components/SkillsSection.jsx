import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .range(0, 3);

      if (!error) {
        setSkills(data);
      }
    }

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category) => (
          <SkillCard
            key={category.id}
            title={category.name}
            skills={category.category}
          />
        ))}
      </div>
    </section>
  );
}