import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wand2, Sparkles, GraduationCap, Scroll, BookOpen, Users } from 'lucide-react';
import { HouseCard } from '@/components/HouseCard';
import { SpellList } from '@/components/SpellList';
import { CharacterCard } from '@/components/CharacterCard';
import { houses, spells, characters } from '@/data/hogwarts';

function App() {
  const [activeHouse, setActiveHouse] = useState("Gryffindor");

  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block">
            <Wand2 className="h-12 w-12 text-primary floating inline-block" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Hogwarts School
          </h1>
          <p className="text-xl text-muted-foreground">
            of Witchcraft and Wizardry
          </p>
        </div>

        <Tabs defaultValue="houses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-[500px] mx-auto">
            <TabsTrigger value="houses">
              <GraduationCap className="mr-2 h-4 w-4" />
              Houses
            </TabsTrigger>
            <TabsTrigger value="characters">
              <Users className="mr-2 h-4 w-4" />
              Characters
            </TabsTrigger>
            <TabsTrigger value="spells">
              <Sparkles className="mr-2 h-4 w-4" />
              Spells
            </TabsTrigger>
            <TabsTrigger value="library">
              <BookOpen className="mr-2 h-4 w-4" />
              Library
            </TabsTrigger>
          </TabsList>

          <TabsContent value="houses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {houses.map((house) => (
                <HouseCard
                  key={house.name}
                  {...house}
                  isActive={activeHouse === house.name}
                  onClick={() => setActiveHouse(house.name)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="characters" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {characters.map((character) => (
                <CharacterCard key={character.name} {...character} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="spells">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scroll className="mr-2 h-5 w-5" />
                  Spell Book
                </CardTitle>
                <CardDescription>
                  Essential spells every wizard should know
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpellList spells={spells} />
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Learn More Spells
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="library">
            <Card>
              <CardHeader>
                <CardTitle>Hogwarts Library</CardTitle>
                <CardDescription>
                  Access to magical knowledge and ancient texts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Restricted Section</CardTitle>
                      <CardDescription>
                        Access requires special permission
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Area</CardTitle>
                      <CardDescription>
                        Quiet space for magical research
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;