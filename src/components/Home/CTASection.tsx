
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="container mx-auto py-16 my-8 bg-indigo-900 text-white rounded-xl">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-6">Готов найти свой путь?</h3>
        <p className="text-xl mb-8 text-indigo-100">
          Пройди бесплатный тест профориентации и получи персональные рекомендации по карьере и образованию
        </p>
        <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100">
          Начать тестирование
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
