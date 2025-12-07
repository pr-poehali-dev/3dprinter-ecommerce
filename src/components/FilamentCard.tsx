import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Filament {
  name: string;
  price: string;
  image: string;
  type: string;
  specs: {
    diameter: string;
    weight: string;
    temperature: string;
    colors: string;
  };
  badge: string;
  badgeVariant: 'default' | 'secondary' | 'destructive' | 'outline';
  description: string;
  features: string[];
  applications: string[];
}

interface FilamentCardProps {
  filament: Filament;
  index: number;
  onInfoClick: (filament: Filament) => void;
}

const FilamentCard = ({ filament, index, onInfoClick }: FilamentCardProps) => {
  return (
    <Card
      className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-secondary/50 bg-card/50 backdrop-blur-sm animate-scale-in overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge variant={filament.badgeVariant}>{filament.badge}</Badge>
          <div className="text-5xl">{filament.image}</div>
        </div>

        <h3 className="text-2xl font-heading font-bold mb-1 group-hover:text-secondary transition-colors">
          {filament.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{filament.type}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Diameter" size={16} className="mr-2 text-secondary" />
            <span>Диаметр: {filament.specs.diameter}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Weight" size={16} className="mr-2 text-secondary" />
            <span>Вес: {filament.specs.weight}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Thermometer" size={16} className="mr-2 text-secondary" />
            <span>{filament.specs.temperature}</span>
          </div>
          <div className="flex items-start text-sm text-muted-foreground">
            <Icon name="Palette" size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
            <span>{filament.specs.colors}</span>
          </div>
        </div>

        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-heading font-bold text-secondary">
            {filament.price}
          </span>
          <span className="text-lg text-muted-foreground ml-1">₽</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button className="flex-1 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30">
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Купить
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onInfoClick(filament)}
        >
          <Icon name="Info" size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FilamentCard;
