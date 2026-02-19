export function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-1.5 bg-black dark:bg-black bg-opacity-10 dark:bg-opacity-100 text-textnormal rounded-full text-xs">
      {name}
    </span>
  );
}
