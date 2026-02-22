import { ExternalLinkIcon, VideoIcon } from "@radix-ui/react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  type: "video" | "website";
}

export function ProjectCard({ title, description, type }: ProjectCardProps) {
  return (
    <article className="-mx-2.5 flex items-center justify-between rounded-lg px-5 py-4 transition hover:bg-sage-40 active:scale-[.99] group-focus-visible:ring-1 group-focus-visible:ring-ring md:-mx-5">
      <div>
        <h2 className="pb-1.5 font-semibold font-serif">{title}</h2>
        <p className="font-sans opacity-60">{description}</p>
      </div>
      {type === "video" && (
        <VideoIcon className="text-transparent transition-colors group-hover:text-gray-120" />
      )}
      {type === "website" && (
        <ExternalLinkIcon className="text-transparent transition-colors group-hover:text-gray-120" />
      )}
    </article>
  );
}
