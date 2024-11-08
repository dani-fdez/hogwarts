import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CharacterCardProps {
  name: string;
  actor: string;
  house: string;
  role: string;
  description: string;
  imageUrl: string;
}

export function CharacterCard({ name, actor, house, role, description, imageUrl }: CharacterCardProps) {
  const getHouseColor = (house: string) => {
    switch (house) {
      case "Gryffindor":
        return "bg-red-600 hover:bg-red-700";
      case "Slytherin":
        return "bg-green-700 hover:bg-green-800";
      case "Ravenclaw":
        return "bg-blue-600 hover:bg-blue-700";
      case "Hufflepuff":
        return "bg-yellow-500 hover:bg-yellow-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-xl">{name}</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{actor}</Badge>
            <Badge className={getHouseColor(house)}>{house}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">{role}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}