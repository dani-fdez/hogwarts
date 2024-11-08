import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HouseCardProps {
  name: string;
  description: string;
  color: string;
  textColor: string;
  isActive: boolean;
  onClick: () => void;
}

export function HouseCard({ name, description, color, textColor, isActive, onClick }: HouseCardProps) {
  return (
    <Card 
      className={`relative overflow-hidden transition-transform hover:scale-105 ${
        isActive ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className={textColor}>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${color}`} />
    </Card>
  );
}