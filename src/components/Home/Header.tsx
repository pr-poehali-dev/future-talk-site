import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
      <div className="flex gap-2">
        <Button variant="outline" className="bg-white text-indigo-600 hover:bg-indigo-50">Войти</Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Регистрироваться</Button>
      </div>
    </header>
  );
};

export default Header;