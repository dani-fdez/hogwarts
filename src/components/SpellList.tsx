import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Spell {
  name: string;
  type: string;
  description: string;
}

interface SpellListProps {
  spells: Spell[];
}

export function SpellList({ spells }: SpellListProps) {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-4">
        {spells.map((spell) => (
          <div
            key={spell.name}
            className="flex items-center justify-between space-x-4 rounded-lg border p-4"
          >
            <div>
              <h3 className="font-semibold">{spell.name}</h3>
              <p className="text-sm text-muted-foreground">
                {spell.description}
              </p>
            </div>
            <Badge variant="secondary">{spell.type}</Badge>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}