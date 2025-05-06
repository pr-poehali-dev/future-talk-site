
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  buttonText 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  buttonText: string; 
}) => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow">
      <CardHeader>
        <Icon name={icon} className="h-12 w-12 text-indigo-600 mb-4" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
          {buttonText} <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Features = () => {
  const features = [
    {
      icon: "Search",
      title: "Профессиональная диагностика",
      description: "Определи свои сильные стороны и склонности с помощью наших тестов",
      buttonText: "Пройти тест"
    },
    {
      icon: "GraduationCap",
      title: "Подбор образования",
      description: "Найди подходящие учебные заведения и программы для своего развития",
      buttonText: "Найти программу"
    },
    {
      icon: "Briefcase",
      title: "Карьерные возможности",
      description: "Исследуй востребованные профессии и перспективные направления",
      buttonText: "Изучить профессии"
    }
  ];

  return (
    <section className="container mx-auto py-16">
      <h3 className="text-3xl font-bold text-center mb-12 text-indigo-900">Как мы помогаем</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            buttonText={feature.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
