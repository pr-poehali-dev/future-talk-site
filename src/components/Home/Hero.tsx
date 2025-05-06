
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto pt-16 pb-24 text-center">
      <h2 className="text-5xl font-bold mb-6 text-indigo-900">Найди своё будущее</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        Исследуй возможности в карьере и образовании, открой свой потенциал 
        и найди правильный путь с помощью FUTURE TALK
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
          Карьерные тесты
        </Button>
        <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
          Подобрать образование
        </Button>
      </div>
    </section>
  );
};

export default Hero;
