import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { skills } from "../data/skills";

interface SkillsProps {
  className?: string;
}

export const Skills = ({ className = "" }: SkillsProps) => (
  <Section id="skills" subtitle="Expertise" title="Technical Skills" className={className}>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <Card key={skill.name} delay={index * 0.1}>
          <div className="text-zinc-400 dark:text-zinc-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-4 transition-colors">
            {skill.icon}
          </div>
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{skill.name}</h3>
        </Card>
      ))}
    </div>
  </Section>
);
