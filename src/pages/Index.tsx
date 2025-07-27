import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const furnitureCategories = [
    {
      id: 1,
      title: "Гостиные",
      description: "Элегантные решения для уютных гостиных",
      image: "/img/958c8b78-8283-4873-a48f-c364e71cfb5b.jpg",
      items: ["Диваны", "Журнальные столики", "Стенки", "Кресла"]
    },
    {
      id: 2,
      title: "Спальни",
      description: "Комфорт и стиль для идеального отдыха",
      image: "/img/bc0d16da-587e-46ce-a07a-b6b683295d60.jpg",
      items: ["Кровати", "Прикроватные тумбы", "Шкафы", "Комоды"]
    },
    {
      id: 3,
      title: "Кухни",
      description: "Функциональная мебель для семейных обедов",
      image: "/img/32ac87b9-092b-49b9-ba03-f16c7ba5edec.jpg",
      items: ["Столы", "Стулья", "Гарнитуры", "Буфеты"]
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Заказывала спальный гарнитур по индивидуальному проекту. Качество превзошло все ожидания!",
      rating: 5
    },
    {
      name: "Михаил Иванов",
      text: "Отличный сервис и профессиональный подход. Мебель изготовили точно в срок.",
      rating: 5
    },
    {
      name: "Елена Сидорова",
      text: "Наталья помогла создать уникальный дизайн гостиной. Все гости в восторге!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-warm-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/98d5afb1-76f3-4cca-8b1f-df64946d9752.jpg" 
                alt="Мебель у Натальи" 
                className="h-10 w-auto"
              />
              <h1 className="font-display text-2xl font-bold text-primary">Мебель у Натальи</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["Главная", "Каталог", "Под заказ", "Проекты", "О нас", "Отзывы", "Контакты", "Доставка"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-warm-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-warm-100 to-warm-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Авторская мебель
              <span className="block text-accent">с душой</span>
            </h2>
            <p className="text-xl text-warm-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Создаем уникальные мебельные решения, которые отражают ваш стиль и характер. 
              От готовых коллекций до индивидуальных проектов под заказ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Icon name="Sofa" className="mr-2" size={20} />
                Посмотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                <Icon name="Pencil" className="mr-2" size={20} />
                Заказать дизайн
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={32} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Уникальный дизайн</h3>
              <p className="text-warm-700">Авторские решения, которые подчеркнут индивидуальность вашего интерьера</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Под заказ</h3>
              <p className="text-warm-700">Изготавливаем мебель по вашим размерам и пожеланиям</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Высокое качество</h3>
              <p className="text-warm-700">Используем только лучшие материалы и проверенные технологии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Наш каталог</h2>
            <p className="text-xl text-warm-700">Готовые решения для каждой комнаты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {furnitureCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-warm-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary">{category.title}</CardTitle>
                  <CardDescription className="text-warm-700">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-warm-200 text-warm-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Смотреть коллекцию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Мебель под заказ</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Воплотим ваши идеи в реальность. Создаем уникальную мебель, 
                которая идеально впишется в ваш интерьер и отразит ваш стиль.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Индивидуальный дизайн",
                  "Работа с любыми размерами",
                  "Выбор материалов и фурнитуры",
                  "3D визуализация проекта",
                  "Гарантия качества"
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <Icon name="Check" size={20} className="text-accent mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold mb-4">Как мы работаем</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Консультация", desc: "Обсуждаем ваши идеи и пожелания" },
                    { step: "02", title: "Дизайн", desc: "Создаем эскизы и 3D модель" },
                    { step: "03", title: "Изготовление", desc: "Производим мебель в нашей мастерской" },
                    { step: "04", title: "Доставка", desc: "Доставляем и устанавливаем мебель" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/80 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-warm-700">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-warm-50 border-warm-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                    ))}
                  </div>
                  <CardTitle className="font-display text-lg text-primary">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl font-bold text-primary mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-warm-700 mb-8">
                Готовы воплотить ваши идеи в жизнь? Свяжитесь с нами для консультации.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-accent mr-4" />
                  <span className="text-warm-700">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-accent mr-4" />
                  <span className="text-warm-700">info@mebel-natalya.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="text-accent mr-4" />
                  <span className="text-warm-700">г. Москва, ул. Мебельная, д. 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-accent mr-4" />
                  <span className="text-warm-700">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">Заказать звонок</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full p-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Мебель у Натальи</h3>
              <p className="text-white/80">Создаем уникальную мебель с 2010 года. Качество, стиль и индивидуальный подход.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Гостиные</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Спальни</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Кухни</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Детские</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Мебель под заказ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Дизайн проект</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Установка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (999) 123-45-67</p>
                <p>info@mebel-natalya.ru</p>
                <p>г. Москва, ул. Мебельная, д. 15</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <div className="text-center text-white/60">
            <p>&copy; 2024 Мебель у Натальи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;