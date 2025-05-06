import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Sparkles" className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-indigo-900">FUTURE TALK</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-indigo-900 hover:text-indigo-600 font-medium">Главная</Link>
          <Link to="/career" className="text-indigo-900 hover:text-indigo-600 font-medium">Карьера</Link>
          <Link to="/education" className="text-indigo-900 hover:text-indigo-600 font-medium">Образование</Link>
          <Link to="/about" className="text-indigo-900 hover:text-indigo-600 font-medium">О нас</Link>
        </nav>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Регистрироваться</Button>
      </header>

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-900">Как мы помогаем</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader>
              <Icon name="Search" className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Профессиональная диагностика</CardTitle>
              <CardDescription>
                Определи свои сильные стороны и склонности с помощью наших тестов
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
                Пройти тест <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader>
              <Icon name="GraduationCap" className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Подбор образования</CardTitle>
              <CardDescription>
                Найди подходящие учебные заведения и программы для своего развития
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
                Найти программу <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader>
              <Icon name="Briefcase" className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Карьерные возможности</CardTitle>
              <CardDescription>
                Исследуй востребованные профессии и перспективные направления
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
                Изучить профессии <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto py-16 bg-white rounded-xl shadow-sm">
        <h3 className="text-3xl font-bold text-center mb-8 text-indigo-900">Исследуй возможности</h3>
        
        <Tabs defaultValue="career" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="career">Карьера</TabsTrigger>
            <TabsTrigger value="education">Образование</TabsTrigger>
          </TabsList>
          
          <TabsContent value="career" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>ИТ и программирование</CardTitle>
                  <CardDescription>
                    Востребованные профессии в сфере технологий
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Разработчик ПО
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Специалист по данным
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Кибербезопасность
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Креативные индустрии</CardTitle>
                  <CardDescription>
                    Творческие профессии будущего
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Дизайнер интерфейсов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      3D-моделирование
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Медиапродюсер
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Высшее образование</CardTitle>
                  <CardDescription>
                    Университеты и институты
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Бакалавриат
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Магистратура
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Аспирантура
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Найти ВУЗ</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Онлайн-образование</CardTitle>
                  <CardDescription>
                    Курсы и обучающие программы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Профессиональная переподготовка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Курсы повышения квалификации
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500 h-5 w-5" />
                      Интенсивы и буткемпы
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Найти курс</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="container mx-auto py-12 border-t">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Sparkles" className="h-5 w-5 text-indigo-600" />
              <h4 className="text-lg font-bold text-indigo-900">FUTURE TALK</h4>
            </div>
            <p className="text-gray-600">
              Помогаем найти свое призвание и построить успешное будущее
            </p>
          </div>
          
          <div>
            <h5 className="font-medium mb-4 text-indigo-900">Ресурсы</h5>
            <ul className="space-y-2">
              <li><Link to="/tests" className="text-gray-600 hover:text-indigo-600">Тесты</Link></li>
              <li><Link to="/programs" className="text-gray-600 hover:text-indigo-600">Учебные программы</Link></li>
              <li><Link to="/professions" className="text-gray-600 hover:text-indigo-600">Каталог профессий</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-4 text-indigo-900">Компания</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">О нас</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Контакты</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-indigo-600">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-4 text-indigo-900">Связаться</h5>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon name="Twitter" className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
              </a>
            </div>
            <p className="text-gray-600">info@futuretalk.ru</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-gray-500">
          <p> 2025 FUTURE TALK. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};
export default Index;