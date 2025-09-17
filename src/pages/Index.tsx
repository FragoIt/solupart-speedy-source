import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Shield, Truck, MapPin, Phone, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-autoparts.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userType, setUserType] = useState<"workshop" | "distributor" | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-primary">SOLUPART</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#buscar" className="text-muted-foreground hover:text-primary transition-colors">
              Buscar Repuestos
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
              Cómo Funciona
            </a>
            <a href="#talleres" className="text-muted-foreground hover:text-primary transition-colors">
              Para Talleres
            </a>
            <a href="#distribuidores" className="text-muted-foreground hover:text-primary transition-colors">
              Para Distribuidores
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Iniciar Sesión
            </Button>
            <Button variant="primary" size="sm">
              Registrarse
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Encuentra Repuestos Automotrices en
            <span className="block bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Menos de 24 Horas
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            La plataforma que conecta talleres con distribuidores de repuestos en Colombia. 
            Reduce los tiempos de espera de semanas a horas.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Busca por VIN, placa, marca o modelo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" size="lg" className="absolute right-2 top-2">
                Buscar
              </Button>
            </div>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-medium">Entrega ≤24 horas</span>
            </div>
            <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-success" />
              <span className="font-medium">Hasta 40% menos</span>
            </div>
            <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Truck className="w-5 h-5 text-warning" />
              <span className="font-medium">Entrega directa</span>
            </div>
          </div>

          {/* User Type Selection */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-card/90 backdrop-blur-sm hover:bg-card text-card-foreground border-2 border-transparent hover:border-accent transition-all"
              onClick={() => setUserType("workshop")}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Soy un Taller
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-card/90 backdrop-blur-sm hover:bg-card text-card-foreground border-2 border-transparent hover:border-accent transition-all"
              onClick={() => setUserType("distributor")}
            >
              <Truck className="w-5 h-5 mr-2" />
              Soy Distribuidor
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Talleres Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Distribuidores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">24h</div>
              <div className="text-muted-foreground">Tiempo Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-warning mb-2">40%</div>
              <div className="text-muted-foreground">Ahorro Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cómo Funciona SOLUPART
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proceso simple y eficiente para encontrar los repuestos que necesitas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="workshop-card text-center">
              <CardHeader>
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>1. Busca tu Repuesto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ingresa VIN, placa, marca y modelo. Nuestro sistema encuentra 
                  repuestos compatibles instantáneamente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="workshop-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle>2. Compara y Compra</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ve opciones disponibles, precios y tiempos de entrega. 
                  Paga seguro y obtén factura electrónica.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="workshop-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-success-foreground" />
                </div>
                <CardTitle>3. Recibe en 24h</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Seguimiento en tiempo real. Entrega garantizada 
                  directamente en tu taller.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Workshops */}
      <section id="talleres" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Para Talleres Mecánicos
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Optimiza tu operación y reduce tiempos muertos. 
                Encuentra repuestos cuando los necesites.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Búsqueda Inteligente</h3>
                    <p className="text-muted-foreground">
                      Encuentra repuestos por VIN, placa o especificaciones técnicas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Precios Transparentes</h3>
                    <p className="text-muted-foreground">
                      Compara precios sin intermediarios. Ahorra hasta 40%
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Entrega Garantizada</h3>
                    <p className="text-muted-foreground">
                      Máximo 24 horas. Seguimiento en tiempo real
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="glow-effect">
                  Registrar Taller
                </Button>
                <Button variant="outline" size="lg">
                  Ver Demo
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="workshop-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Filtro de Aceite</CardTitle>
                    <Badge className="delivery-badge">Disponible 4h</Badge>
                  </div>
                  <CardDescription>Toyota Corolla 2018-2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">$35.000</div>
                      <div className="text-sm text-muted-foreground line-through">$50.000</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="font-medium">4.8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="workshop-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Pastillas de Freno</CardTitle>
                    <Badge className="delivery-badge">Disponible 6h</Badge>
                  </div>
                  <CardDescription>Chevrolet Spark 2015-2019</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">$85.000</div>
                      <div className="text-sm text-muted-foreground line-through">$120.000</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="font-medium">4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Distributors */}
      <section id="distribuidores" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Para Distribuidores
              </h2>
              <p className="text-xl text-muted-foreground">
                Amplía tu alcance y vende más repuestos. 
                Conecta con talleres de toda Colombia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Catálogo Digital</h3>
                    <p className="text-muted-foreground">
                      Sube tu inventario y gestiona precios en tiempo real
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Más Clientes</h3>
                    <p className="text-muted-foreground">
                      Accede a cientos de talleres activos buscando repuestos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Pagos Seguros</h3>
                    <p className="text-muted-foreground">
                      Cobra al instante. Facturación electrónica automática
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" className="accent-glow">
                  Registrar Distribuidora
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ventas
                </Button>
              </div>
            </div>

            <div className="lg:order-1">
              <Card className="workshop-card p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Plan Básico</h3>
                  <div className="text-4xl font-bold text-primary">
                    $30.000
                    <span className="text-lg text-muted-foreground font-normal">/mes</span>
                  </div>
                  <p className="text-muted-foreground">Por taller registrado</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Comisión 3-5% (primeros 100)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Catálogo ilimitado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Gestión de inventario</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Facturación automática</span>
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Comenzar Gratis
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">SOLUPART</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Conectando talleres con distribuidores de repuestos automotrices en Colombia.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Medellín, Colombia
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Para Talleres</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Registrarse</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cómo Buscar</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Soporte</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Para Distribuidores</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Vender Repuestos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Gestión de Inventario</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Comisiones</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 SOLUPART. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;