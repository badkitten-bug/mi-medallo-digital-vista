import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Mountain, 
  Camera, 
  MapPin, 
  Waves, 
  Coffee, 
  Utensils,
  Star,
  Plane,
  Car,
  Home,
  Heart,
  Users,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Music,
  Shirt,
  ExternalLink,
  Phone,
  Globe,
  Smartphone,
  Gift,
  Search as SearchIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import Masonry from "react-masonry-css";

const Categories = () => {
  // Estados para filtro de categoría y carrusel
  const [activeCategory, setActiveCategory] = useState('Nuestras Marcas');
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Negocios reales proporcionados por el usuario
  const businesses = [
    {
      name: "Casa Hotel Venecia",
      subdomain: "casahotelvenecia",
      url: "https://casahotelvenecia.tuguiadeturismo.com/",
      category: "Alojamiento",
      subcategory: "Hoteles",
      phone: "",
      location: "Medellín, Colombia",
      description: "Hotel boutique con ambiente familiar y servicios premium en el corazón de Medellín.",
      image: "photo-1506744038136-46273834b3fb",
      icon: Home,
      rating: 4.8,
      featured: true
    },
    {
      name: "Cámara Lúcida",
      subdomain: "camaralucida",
      url: "https://camaralucida.tuguiadeturismo.com/",
      category: "Fotografía y Arte",
      phone: "",
      location: "Medellín, Colombia",
      description: "Estudio fotográfico profesional y arte visual para eventos y empresas.",
      image: "photo-1519125323398-675f0ddb6308",
      icon: Camera,
      rating: 4.9,
      featured: true
    },
    {
      name: "La Casona",
      subdomain: "lacasona",
      url: "https://lacasona.tuguiadeturismo.com/",
      category: "Gastronomía",
      subcategory: "Restaurantes",
      phone: "",
      location: "Medellín, Colombia",
      description: "Restaurante de comida típica y ambiente tradicional antioqueño.",
      image: "photo-1414235077428-338989a2e8c0",
      icon: Utensils,
      rating: 4.8,
      featured: true
    },
    {
      name: "Rentas AMG",
      subdomain: "rentasamg",
      url: "https://rentasamg.tuguiadeturismo.com/",
      category: "Transporte",
      subcategory: "Renta de vehículos",
      phone: "3014480448",
      location: "Medellín, Colombia",
      description: "Alquiler de vehículos premium y servicios de transporte ejecutivo.",
      image: "photo-1449824913935-59a10b8d2000",
      icon: Car,
      rating: 4.8,
      featured: true
    },
    {
      name: "Imperium Essence",
      subdomain: "imperiumessence",
      url: "https://imperiumessence.tuguiadeturismo.com/",
      category: "Belleza y Cuidado Personal",
      subcategory: "Salones de belleza",
      phone: "3150816169",
      location: "Colombia",
      description: "Productos de belleza y cuidado personal premium.",
      image: "photo-1517841905240-472988babdf9",
      icon: Heart,
      rating: 4.9,
      featured: true
    },
    {
      name: "Tecno Movil Tech",
      subdomain: "tecnomoviltech",
      url: "https://tecnomoviltech.tuguiadeturismo.com/",
      category: "Tecnología",
      phone: "3507503233",
      location: "Colombia",
      description: "Servicios técnicos especializados en tecnología móvil y reparación de celulares.",
      image: "photo-1519389950473-47ba0277781c",
      icon: Smartphone,
      rating: 4.7,
      featured: false
    },
    {
      name: "Soccer Star",
      subdomain: "soccerstar",
      url: "https://soccerstar.tuguiadeturismo.com/",
      category: "Deportes y Academias",
      phone: "",
      location: "Colombia",
      description: "Academia de fútbol y formación deportiva para niños y jóvenes.",
      image: "photo-1571019613454-1cb2f99b2d8b",
      icon: Users,
      rating: 4.8,
      featured: false
    },
    {
      name: "Anit Swimwear",
      subdomain: "anitswimwear",
      url: "https://anitswimwear.tuguiadeturismo.com/",
      category: "Moda y Ropa",
      phone: "",
      location: "Colombia",
      description: "Ropa de baño y moda para playa, diseños exclusivos.",
      image: "photo-1512436991641-6745cdb1723f",
      icon: Shirt,
      rating: 4.7,
      featured: false
    },
    {
      name: "Los Pits Barber",
      subdomain: "lospitsbarber",
      url: "https://lospitsbarber.tuguiadeturismo.com/",
      category: "Belleza y Cuidado Personal",
      subcategory: "Barberías",
      phone: "",
      location: "Colombia",
      description: "Barbería moderna y cuidado masculino profesional.",
      image: "photo-1515378791036-0648a3ef77b2",
      icon: Heart,
      rating: 4.8,
      featured: false
    },
    {
      name: "Car Dealer Imports",
      subdomain: "cardealerimports",
      url: "https://cardealerimports.tuguiadeturismo.com/",
      category: "Transporte",
      subcategory: "Importación de vehículos",
      phone: "",
      location: "Colombia",
      description: "Importación y venta de autos de lujo y alta gama.",
      image: "photo-1503736334956-4c8f8e92946d",
      icon: Car,
      rating: 4.9,
      featured: true
    },
    {
      name: "Mundo Sorpresa",
      subdomain: "mundosorpresa",
      url: "https://mundosorpresa.tuguiadeturismo.com/",
      category: "Regalos y Fiestas",
      phone: "",
      location: "Colombia",
      description: "Regalos, sorpresas y decoración para fiestas y eventos.",
      image: "photo-1513475382585-d06e58bcb0e0",
      icon: Gift,
      rating: 4.8,
      featured: false
    },
    {
      name: "Buenos Aires Coffee",
      subdomain: "buenosairescoffe",
      url: "https://buenosairescoffe.tuguiadeturismo.com/",
      category: "Café y Aromas",
      subcategory: "Cafeterías",
      phone: "",
      location: "Colombia",
      description: "Café de especialidad y experiencias baristas únicas.",
      image: "photo-1447933601403-0c6688de566e",
      icon: Coffee,
      rating: 4.9,
      featured: true
    },
    {
      name: "Cedbos",
      subdomain: "cedbos",
      url: "https://cedbos.tuguiadeturismo.com/",
      category: "Educación y Formación",
      phone: "",
      location: "Colombia",
      description: "Centro educativo y de formación integral.",
      image: "photo-1464983953574-0892a716854b",
      icon: GraduationCap,
      rating: 4.7,
      featured: false
    },
    {
      name: "Palm Beach",
      subdomain: "palmbeach",
      url: "https://palmbeach.tuguiadeturismo.com/",
      category: "Viajes y Turismo",
      subcategory: "Turismo local",
      phone: "",
      location: "Colombia",
      description: "Destino turístico de playa y descanso con ambiente tropical.",
      image: "photo-1507525428034-b723cf961d3e",
      icon: Waves,
      rating: 4.8,
      featured: false
    },
    {
      name: "CV Alfonso López",
      subdomain: "cvalfonsolopez",
      url: "https://cvalfonsolopez.tuguiadeturismo.com/",
      category: "Viajes y Turismo",
      subcategory: "Turismo especializado",
      phone: "",
      location: "Colombia",
      description: "Centro vacacional con piscina, recreación y espacios para toda la familia.",
      image: "photo-1507525428034-b723cf961d3e",
      icon: Briefcase,
      rating: 4.7,
      featured: false
    },
    // Nuevos negocios para las categorías agregadas
    {
      name: "La Rockola Bar",
      subdomain: "larockolabar",
      url: "https://larockolabar.tuguiadeturismo.com/",
      category: "Bares y Discotecas",
      subcategory: "Bares",
      phone: "",
      location: "Medellín, Colombia",
      description: "Bar con música en vivo y ambiente rockero en el corazón de Medellín.",
      image: "photo-1514933651103-005eec06c04b",
      icon: Music,
      rating: 4.6,
      featured: false
    },
    {
      name: "Emprendimiento Digital",
      subdomain: "emprendimientodigital",
      url: "https://emprendimientodigital.tuguiadeturismo.com/",
      category: "Emprendedores",
      subcategory: "Tecnología",
      phone: "",
      location: "Colombia",
      description: "Plataforma de apoyo para emprendedores digitales y startups.",
      image: "photo-1552664730-d307ca884978",
      icon: Briefcase,
      rating: 4.8,
      featured: true
    },
    {
      name: "Café de la Comuna 13",
      subdomain: "cafecomuna13",
      url: "https://cafecomuna13.tuguiadeturismo.com/",
      category: "Por Comunas",
      subcategory: "Comuna 13",
      phone: "",
      location: "Comuna 13, Medellín",
      description: "Café comunitario que promueve el desarrollo local de la Comuna 13.",
      image: "photo-1447933601403-0c6688de566e",
      icon: Coffee,
      rating: 4.7,
      featured: false
    },
    {
      name: "Tienda Gourmet",
      subdomain: "tiendagourmet",
      url: "https://tiendagourmet.tuguiadeturismo.com/",
      category: "Cafeterías y Tiendas",
      subcategory: "Tiendas especializadas",
      phone: "",
      location: "Medellín, Colombia",
      description: "Tienda especializada en productos gourmet y delicatessen.",
      image: "photo-1578662996442-48f60103fc96",
      icon: ShoppingBag,
      rating: 4.5,
      featured: false
    }
  ];

  // Definir categorías con sus subcategorías (solo las que las necesitan)
  const categoriesData = [
    {
      name: "Alojamiento",
      icon: Home,
      color: "from-blue-400 to-blue-600",
      subcategories: ["Hoteles", "Apartamentos", "Otros alojamientos"] // SÍ tiene subcategorías
    },
    {
      name: "Viajes y Turismo", // 2do lugar
      icon: Plane,
      color: "from-teal-400 to-teal-600",
      subcategories: ["Viajes alrededor del mundo", "Asesores en turismo", "Turismo local", "Turismo especializado", "Estudios en el exterior"] // SÍ tiene subcategorías
    },
    {
      name: "Emprendedores", // 3er lugar
      icon: Briefcase,
      color: "from-purple-400 to-purple-600",
      subcategories: [] // NO tiene subcategorías
    },
    {
      name: "Fotografía y Arte",
      icon: Camera,
      color: "from-pink-400 to-pink-600",
      subcategories: [] // NO tiene subcategorías (OK)
    },
    {
      name: "Gastronomía",
      icon: Utensils,
      color: "from-yellow-400 to-yellow-600",
      subcategories: ["Restaurantes", "Comidas rápidas", "Alimentos"] // SÍ tiene subcategorías
    },
    {
      name: "Transporte",
      icon: Car,
      color: "from-gray-400 to-gray-600",
      subcategories: ["Renta de vehículos", "Venta de vehículos", "Importación de vehículos", "Transporte ejecutivo", "Otro transporte"] // SÍ tiene subcategorías
    },
    {
      name: "Belleza y Cuidado Personal",
      icon: Heart,
      color: "from-rose-400 to-rose-600",
      subcategories: ["Salones de belleza", "Barberías", "Salud y bienestar", "Spa", "Centros de estética"] // SÍ tiene subcategorías
    },
    {
      name: "Tecnología",
      icon: Smartphone,
      color: "from-indigo-400 to-indigo-600",
      subcategories: [] // NO tiene subcategorías (OK)
    },
    {
      name: "Deportes y Academias",
      icon: Users,
      color: "from-emerald-400 to-emerald-600",
      subcategories: [] // NO tiene subcategorías (OK)
    },
    {
      name: "Moda y Ropa",
      icon: Shirt,
      color: "from-fuchsia-400 to-fuchsia-600",
      subcategories: [] // NO tiene subcategorías (OK)
    },
    {
      name: "Regalos y Fiestas",
      icon: Gift,
      color: "from-red-400 to-red-600",
      subcategories: [] // NO tiene subcategorías (OK)
    },
    {
      name: "Café y Aromas",
      icon: Coffee,
      color: "from-amber-400 to-amber-600",
      subcategories: [] // NO tiene subcategorías
    },
    {
      name: "Educación y Formación",
      icon: GraduationCap,
      color: "from-cyan-400 to-cyan-600",
      subcategories: [] // NO tiene subcategorías (OK)
    },
    {
      name: "Bares y Discotecas",
      icon: Music,
      color: "from-violet-400 to-violet-600",
      subcategories: [] // NO tiene subcategorías
    },
    {
      name: "Por Comunas",
      icon: MapPin,
      color: "from-green-400 to-green-600",
      subcategories: [] // NO tiene subcategorías
    },
    {
      name: "Cafeterías y Tiendas",
      icon: ShoppingBag,
      color: "from-orange-400 to-orange-600",
      subcategories: [] // NO tiene subcategorías
    }
  ];



  // Función para normalizar texto (sin tildes, minúsculas)
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');
  }

  // Buscador inteligente IA ultra premium con sugerencias y resaltado
  const [showSuggestions, setShowSuggestions] = useState(false);
  const normalizedTerm = normalize(searchTerm);
  const searchKeywords = normalizedTerm.split(/\s+/).filter(Boolean);

  function matchesAllKeywords(text) {
    const norm = normalize(text);
    return searchKeywords.every(kw => norm.includes(kw));
  }

  const suggestionResults = businesses.filter(business =>
    matchesAllKeywords(business.name) ||
    matchesAllKeywords(business.category) ||
    matchesAllKeywords(business.description) ||
    matchesAllKeywords(business.subdomain) ||
    matchesAllKeywords(business.location)
  ).slice(0, 5);

  // Resalta coincidencias en texto
  function highlightMatch(text) {
    let result = text;
    searchKeywords.forEach(kw => {
      if (kw.length > 0) {
        const regex = new RegExp(`(${kw})`, 'gi');
        result = result.replace(regex, '<mark class="bg-yellow-200 text-black rounded px-1">$1</mark>');
      }
    });
    return result;
  }

  const filteredBusinesses = businesses.filter(business => {
    const term = normalize(searchTerm);
    const matchesSearch = (
      normalize(business.name).includes(term) ||
      normalize(business.category).includes(term) ||
      normalize(business.description).includes(term) ||
      normalize(business.subdomain).includes(term) ||
      normalize(business.location).includes(term)
    );

    // Si está en "Nuestras Marcas", mostrar todos que coincidan con búsqueda
    if (activeCategory === 'Nuestras Marcas') {
      return matchesSearch;
    }

    // Si hay subcategoría activa, filtrar por ella
    if (activeSubcategory) {
      return matchesSearch && 
             business.category === activeCategory && 
             business.subcategory === activeSubcategory;
    }

    // Si no hay subcategoría, filtrar solo por categoría principal
    return matchesSearch && business.category === activeCategory;
  });
  const groupedBusinesses = filteredBusinesses.reduce((acc, business) => {
    if (!acc[business.category]) {
      acc[business.category] = [];
    }
    acc[business.category].push(business);
    return acc;
  }, {});
  const sortedCategories = Object.keys(groupedBusinesses).sort();
  const allBusinessesSorted = sortedCategories.flatMap(category => groupedBusinesses[category]);



  // Asigna imágenes de Unsplash relevantes por categoría
  const unsplashImages = {
    "Alojamiento": "photo-1506744038136-46273834b3fb",
    "Viajes y Turismo": "photo-1507525428034-b723cf961d3e",
    "Emprendedores": "photo-1552664730-d307ca884978",
    "Fotografía y Arte": "photo-1519125323398-675f0ddb6308",
    "Gastronomía": "photo-1414235077428-338989a2e8c0",
    "Transporte": "photo-1449824913935-59a10b8d2000",
    "Belleza y Cuidado Personal": "photo-1517841905240-472988babdf9",
    "Tecnología": "photo-1519389950473-47ba0277781c",
    "Deportes y Academias": "photo-1571019613454-1cb2f99b2d8b",
    "Moda y Ropa": "photo-1512436991641-6745cdb1723f",
    "Regalos y Fiestas": "photo-1513475382585-d06e58bcb0e0",
    "Café y Aromas": "photo-1447933601403-0c6688de566e",
    "Educación y Formación": "photo-1464983953574-0892a716854b",
    "Bares y Discotecas": "photo-1514933651103-005eec06c04b",
    "Por Comunas": "photo-1469474968028-56623f02e42e",
    "Cafeterías y Tiendas": "photo-1578662996442-48f60103fc96"
  };

  // Estilos premium para tarjetas y badges
  const premiumCardClass = `luxury-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 h-full bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl border border-yellow-400/30 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.25)]`;
  const premiumButtonClass = `bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300`;

  // Masonry breakpoints para responsividad mejorada
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1
  };

  // Funciones del carrusel
  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => 
      prevIndex === categoriesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => 
      prevIndex === 0 ? categoriesData.length - 1 : prevIndex - 1
    );
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    setActiveSubcategory(null);
    if (expandedCategory === category.name) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category.name);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExpandedCategory(null);
  };

  // Carrusel giratorio con subcategorías desplegables
  const CategoryCarousel = () => {
    const visibleCategories = 5; // Mostrar 5 categorías a la vez
    const startIndex = currentCategoryIndex;
    const displayCategories = [];
    
    for (let i = 0; i < visibleCategories; i++) {
      const index = (startIndex + i) % categoriesData.length;
      displayCategories.push(categoriesData[index]);
    }

    return (
      <div className="w-full mb-8">
        {/* Botón Nuestras Marcas */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => {
              setActiveCategory('Nuestras Marcas');
              setExpandedCategory(null);
              setActiveSubcategory(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
              activeCategory === 'Nuestras Marcas' ? 'ring-2 ring-yellow-400 scale-110' : ''
            }`}
          >
            <Globe className="h-5 w-5" />
            <span>Nuestras Marcas</span>
          </button>
        </div>

        {/* Carrusel de categorías */}
        <div className="relative">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevCategory}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>

            <div className="flex gap-2 overflow-hidden">
              {displayCategories.map((category, index) => {
                const isCenter = index === Math.floor(visibleCategories / 2);
                return (
                  <div key={category.name} className="flex flex-col items-center">
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
                        activeCategory === category.name ? 'ring-2 ring-yellow-400 scale-110' : ''
                      } ${
                        isCenter ? 'scale-110 z-10' : 'scale-90 opacity-70'
                      }`}
                      style={{ minWidth: isCenter ? '140px' : '120px' }}
                    >
                      <category.icon className="h-4 w-4" />
                      <span className="text-sm truncate">{category.name}</span>
                      {category.subcategories.length > 0 && (
                        <ChevronDown className={`h-3 w-3 transition-transform ${
                          expandedCategory === category.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>
                    
                    {/* Subcategorías desplegables */}
                    {expandedCategory === category.name && (
                      <div className="absolute top-full mt-2 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl p-4 z-20 min-w-[200px] animate-fade-in-up">
                        <div className="grid gap-2">
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory}
                              onClick={() => handleSubcategoryClick(subcategory)}
                              className={`text-left px-3 py-2 rounded-lg text-sm transition-all hover:bg-yellow-100/60 ${
                                activeSubcategory === subcategory 
                                  ? 'bg-yellow-200/80 font-semibold text-yellow-800' 
                                  : 'text-gray-700 hover:text-gray-900'
                              }`}
                            >
                              {subcategory}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextCategory}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        {/* Indicador de subcategoría activa */}
        {activeSubcategory && (
          <div className="flex justify-center mt-4">
            <div className="px-4 py-2 bg-yellow-200/80 rounded-full text-sm font-semibold text-yellow-800">
              Filtrando por: {activeSubcategory}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Tarjeta premium responsiva
  const BusinessCard = ({ business }) => (
    <div className="relative animate-fade-in-up group">
      {/* Badge de categoría pequeño y en la esquina */}
      <span className="absolute top-3 left-3 z-20 px-2 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white shadow-lg border border-yellow-200/60 opacity-90">
        {business.category}
      </span>
      <Card className={premiumCardClass + " mt-8 min-h-[320px] flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/40 group-hover:backdrop-blur-2xl md:min-h-[340px]"}>
        <CardContent className="p-0 h-full flex flex-col justify-between">
          <div className="relative h-32 md:h-40 overflow-hidden rounded-t-3xl">
            {/* Imagen de fondo */}
          <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
                backgroundImage: `url(https://images.unsplash.com/${unsplashImages[business.category] || business.image}?w=600&h=400&fit=crop)`
            }}
          ></div>
            {/* Overlay glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent backdrop-blur-md rounded-t-3xl"></div>
            {/* Nombre del negocio grande y claro */}
            <div className="absolute bottom-2 left-0 w-full px-2 md:px-4">
              <h3 className="text-base md:text-lg font-bold font-serif drop-shadow-lg tracking-wide text-white bg-black/40 rounded-xl px-2 md:px-3 py-1 inline-block max-w-full truncate">
                {business.name}
              </h3>
            </div>
          </div>
          {/* Descripción y datos clave */}
          <div className="flex-1 flex flex-col justify-between p-2 md:p-4">
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400/60 to-yellow-200/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                  <business.icon className="h-3 w-3 text-yellow-900" />
                </div>
                <span className="text-xs text-white/80 font-mono">{business.subdomain}</span>
              </div>
              <div className="bg-white/30 rounded-lg px-2 md:px-3 py-2 text-xs text-black/90 font-light mb-2 shadow-inner line-clamp-3">
                {business.description}
              </div>
              {business.location && (
                <div className="flex items-center gap-1 text-xs text-black/70 mb-1">
                  <MapPin className="h-3 w-3 text-yellow-700" />
                  <span className="line-clamp-1 font-light">{business.location}</span>
                </div>
              )}
                  {business.phone && (
                <div className="flex items-center gap-1 text-xs text-black/70 mb-1">
                  <Phone className="h-3 w-3 text-yellow-700" />
                  <span>{business.phone}</span>
                </div>
              )}
            </div>
            {/* Rating destacado */}
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current animate-shine" />
              <span className="font-semibold text-black/80 text-sm">{business.rating}</span>
            </div>
            {/* Botón de acción premium */}
                <Button 
              size="lg" 
              className={premiumButtonClass + " w-full text-sm md:text-base py-2 mt-2 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300"}
                  asChild
                >
                  <a href={business.url} target="_blank" rel="noopener noreferrer">
                Visitar página
                <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden min-h-screen" id="categories">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-turquoise/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-gold/5 rounded-full animate-float blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-2 md:px-6 relative z-10">
        {/* Carrusel de categorías con subcategorías desplegables */}
        <CategoryCarousel />
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-accent px-6 py-2 rounded-full text-primary font-semibold mb-6">
            <Globe className="h-5 w-5" />
            Directorio de Subdominios Reales
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6 font-serif drop-shadow-lg">Negocios Verificados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Conecta directamente con negocios reales que tienen su propio subdominio. Cada enlace te lleva a una página web real y verificada.
          </p>

          {/* Search Bar Premium */}
          <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up">
            <div className="flex items-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-transparent focus-within:border-yellow-400 transition-all">
              <SearchIcon className="h-6 w-6 text-yellow-500 ml-4 animate-pulse" />
              <input
                type="text"
                placeholder="Buscar negocios, categorías, lugares..."
                value={searchTerm}
                onChange={e => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className="flex-1 bg-transparent border-0 outline-none px-4 py-3 text-lg text-black placeholder:text-black/40 font-medium rounded-2xl"
              />
            </div>
            {/* Sugerencias inteligentes */}
            {showSuggestions && searchTerm && (
              <div className="absolute left-0 right-0 mt-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl z-20 p-2 animate-fade-in-up">
                {suggestionResults.length > 0 ? (
                  suggestionResults.map((business, idx) => (
                    <div
                      key={business.subdomain}
                      className="flex flex-col gap-1 px-4 py-2 hover:bg-yellow-100/60 rounded-xl cursor-pointer transition-all"
                      onMouseDown={() => { setSearchTerm(business.name); setShowSuggestions(false); }}
                    >
                      <span className="font-semibold text-black text-base" dangerouslySetInnerHTML={{__html: highlightMatch(business.name)}} />
                      <span className="text-xs text-black/70" dangerouslySetInnerHTML={{__html: highlightMatch(business.category)}} />
                      <span className="text-xs text-black/60" dangerouslySetInnerHTML={{__html: highlightMatch(business.location)}} />
                    </div>
                  ))
                ) : (
                  <div className="text-center text-black/60 py-4">No se encontraron coincidencias</div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-turquoise">{businesses.length}</div>
              <div className="text-sm text-muted-foreground">Negocios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-gold">{allBusinessesSorted.length}</div>
              <div className="text-sm text-muted-foreground">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-navy">{allBusinessesSorted.length}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
          </div>
        </div>

        {/* Businesses by Category */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4 md:gap-8"
          columnClassName="masonry-column"
        >
          {allBusinessesSorted.map((business, idx) => (
                <BusinessCard key={business.subdomain} business={business} />
              ))}
        </Masonry>

        {/* No results */}
        {allBusinessesSorted.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">No se encontraron resultados</h3>
            <p className="text-muted-foreground">
              Intenta con otros términos de búsqueda o explora todas las categorías
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">

          <Card className="bg-gradient-primary text-white border-0 p-8 max-w-4xl mx-auto relative overflow-hidden">
            <CardContent className="p-0 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres aparecer aquí?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Registra tu negocio y obtén tu propio subdominio personalizado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="premium-button">
                  <Globe className="mr-2 h-5 w-5" />
                  Registrar Negocio
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactar Soporte
                </Button>
              </div>
            </CardContent>
            
            {/* Background decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-turquoise/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </Card>
        </div>

        {/* Domain Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="luxury-card border-0 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">TuGuiaDeTurismo.com</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Plataforma especializada en turismo, hoteles, restaurantes y experiencias únicas en Colombia
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://tuguiadeturismo.com/" target="_blank" rel="noopener noreferrer">
                  Visitar Sitio Principal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="luxury-card border-0 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">ProfesionalesOnline.com.co</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Directorio completo de servicios profesionales especializados en Colombia
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://profesionalesonline.com.co/" target="_blank" rel="noopener noreferrer">
                  Visitar Sitio Principal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Categories;