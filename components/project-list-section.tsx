import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import type { IProject } from "@/types/types";

interface ProjectListSectionProps {
  cards: IProject[];
}

export function ProjectListSection({ cards }: ProjectListSectionProps) {
  return (
    <section>
      <h1 className="font-medium text-xl opacity-60">Currently Working On</h1>
      <div className="py-3">
        {cards.map((card) => (
          <Link
            href={card.href || "#"}
            key={card.title}
            target="_blank"
            className="group focus-visible:outline-none"
          >
            <ProjectCard
              key={card.title}
              title={card.title}
              description={card.description}
              type={card.type}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
