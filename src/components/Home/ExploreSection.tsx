
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2">
    <Icon name="Check" className="text-green-500 h-5 w-5" />
    {text}
  </li>
);

const CategoryCard = ({ 
  title, 
  description, 
  items, 
  buttonText 
}: { 
  title: string; 
  description: string; 
  items: string[]; 
  buttonText: string; 
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="outline" size="sm">{buttonText}</Button>
    </CardFooter>
  </Card>
);

const CareerContent = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <CategoryCard
      title="ИТ и программирование"
      description="Востребованные профессии в сфере технологий"
      items={["Разработчик ПО", "Специалист по данным", "Кибербезопасность"]}
      buttonText="Подробнее"
    />
    <CategoryCard
      title="Креативные индустрии"
      description="Творческие профессии будущего"
      items={["Дизайнер интерфейсов", "3D-моделирование", "Медиапродюсер"]}
      buttonText="Подробнее"
    />
  </div>
);

const EducationContent = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <CategoryCard
      title="Высшее образование"
      description="Университеты и институты"
      items={["Бакалавриат", "Магистратура", "Аспирантура"]}
      buttonText="Найти ВУЗ"
    />
    <CategoryCard
      title="Онлайн-образование"
      description="Курсы и обучающие программы"
      items={[
        "Профессиональная переподготовка", 
        "Курсы повышения квалификации", 
        "Интенсивы и буткемпы"
      ]}
      buttonText="Найти курс"
    />
  </div>
);

const ExploreSection = () => {
  return (
    <section className="container mx-auto py-16 bg-white rounded-xl shadow-sm">
      <h3 className="text-3xl font-bold text-center mb-8 text-indigo-900">Исследуй возможности</h3>
      
      <Tabs defaultValue="career" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="career">Карьера</TabsTrigger>
          <TabsTrigger value="education">Образование</TabsTrigger>
        </TabsList>
        
        <TabsContent value="career" className="space-y-4">
          <CareerContent />
        </TabsContent>
        
        <TabsContent value="education" className="space-y-4">
          <EducationContent />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ExploreSection;
