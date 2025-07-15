
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const [activeTab, setActiveTab] = useState('items');

  const menuItems = [
    {
      id: 'MENU-001',
      name: 'Classic Margherita Pizza',
      category: 'Pizza',
      price: 18.99,
      cost: 7.50,
      description: 'Fresh mozzarella, tomato sauce, basil',
      prepTime: 15,
      calories: 850,
      isActive: true,
      isPopular: true,
      image: '/placeholder.svg',
      ingredients: ['Mozzarella', 'Tomato Sauce', 'Basil', 'Pizza Dough']
    },
    {
      id: 'MENU-002',
      name: 'Grilled Salmon',
      category: 'Seafood',
      price: 24.99,
      cost: 12.00,
      description: 'Atlantic salmon with lemon herb seasoning',
      prepTime: 20,
      calories: 420,
      isActive: true,
      isPopular: false,
      image: '/placeholder.svg',
      ingredients: ['Salmon Fillet', 'Lemon', 'Herbs', 'Olive Oil']
    },
    {
      id: 'MENU-003',
      name: 'Caesar Salad',
      category: 'Salads',
      price: 12.99,
      cost: 4.50,
      description: 'Crisp romaine lettuce with caesar dressing',
      prepTime: 10,
      calories: 320,
      isActive: true,
      isPopular: true,
      image: '/placeholder.svg',
      ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan']
    }
  ];

  const categories = [
    { name: 'All', count: 45, active: true },
    { name: 'Pizza', count: 12, active: false },
    { name: 'Seafood', count: 8, active: false },
    { name: 'Salads', count: 6, active: false },
    { name: 'Beverages', count: 15, active: false },
    { name: 'Desserts', count: 4, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700">
              <Plus className="h-5 w-5 mr-2" />
              Add Item
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Items</p>
                  <p className="text-2xl font-bold text-purple-600">45</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Items</p>
                  <p className="text-2xl font-bold text-green-600">42</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-2xl font-bold text-blue-600">8</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Filter className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Price</p>
                  <p className="text-2xl font-bold text-orange-600">$18.75</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className="whitespace-nowrap"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search menu items..."
              className="w-full"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.isPopular && (
                  <Badge className="absolute top-2 left-2 bg-orange-500">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
                {!item.isActive && (
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    Inactive
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-xl font-bold text-green-600">${item.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.prepTime} min
                  </div>
                  <div>{item.calories} cal</div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-600">Cost: </span>
                    <span className="font-medium">${item.cost}</span>
                    <span className="text-green-600 ml-2">
                      {Math.round(((item.price - item.cost) / item.price) * 100)}% margin
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
