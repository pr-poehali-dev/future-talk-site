
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const FooterColumn = ({ 
  title, 
  links 
}: { 
  title: string; 
  links: Array<{ text: string; url: string }> 
}) => (
  <div>
    <h5 className="font-medium mb-4 text-indigo-900">{title}</h5>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url} className="text-gray-600 hover:text-indigo-600">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: "Facebook", label: "Facebook", url: "#" },
    { icon: "Twitter", label: "Twitter", url: "#" },
    { icon: "Instagram", label: "Instagram", url: "#" }
  ];

  return (
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
        
        <FooterColumn 
          title="Ресурсы" 
          links={[
            { text: "Тесты", url: "/tests" },
            { text: "Учебные программы", url: "/programs" },
            { text: "Каталог профессий", url: "/professions" }
          ]} 
        />
        
        <FooterColumn 
          title="Компания" 
          links={[
            { text: "О нас", url: "/about" },
            { text: "Контакты", url: "/contact" },
            { text: "Блог", url: "/blog" }
          ]} 
        />
        
        <div>
          <h5 className="font-medium mb-4 text-indigo-900">Связаться</h5>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} aria-label={link.label}>
                <Icon 
                  name={link.icon} 
                  className="h-5 w-5 text-gray-600 hover:text-indigo-600" 
                />
              </a>
            ))}
          </div>
          <p className="text-gray-600">info@futuretalk.ru</p>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t text-center text-gray-500">
        <p>{currentYear} FUTURE TALK. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
