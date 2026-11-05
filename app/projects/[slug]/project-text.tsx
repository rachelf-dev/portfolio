type ProjectTextProps = {
  text: string;
};

export function ProjectText({ text }: ProjectTextProps) {
  const blocks = text.split(/\n{2,}/);

  return (
    <div className="space-y-4 text-body-md leading-relaxed text-muted">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter((line) => line.trim().length > 0);
        const listStart = lines.findIndex((line) => line.trimStart().startsWith("- "));

        if (listStart === -1) {
          return <p key={blockIndex}>{block}</p>;
        }

        const intro = lines.slice(0, listStart);
        const items = lines
          .slice(listStart)
          .map((line) => line.trimStart().replace(/^- /, ""));

        return (
          <div key={blockIndex} className="space-y-3">
            {intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <ul className="list-disc space-y-2 ps-5 marker:text-accent">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
