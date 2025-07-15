
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter,
  Package,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Edit,
  Trash2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('items');

  const inventoryItems = [
    {
      id: 'INV-001',
      name: 'Chicken Breast',
      category: 'Meat',
      currentStock: 25,
      minStock: 50,
      maxStock: 200,
      unit: 'kg',
      costPerUnit: 8.99,
      supplier: 'Fresh Foods Co.',
      lastRestocked: '2024-01-10',
      status: 'low'
    },
    {
      id: 'INV-002',
      name: 'Tomatoes',
      category: 'Vegetables',
      currentStock: 80,
      minStock: 30,
      maxStock: 150,
      unit: 'kg',
      costPerUnit: 3.50,
      supplier: 'Farm Fresh',
      lastRestocked: '2024-01-12',
      status: 'good'
    },
    {
      id: 'INV-003',
      name: 'Olive Oil',
      category: 'Oils',
      currentStock: 5,
      minStock: 10,
      maxStock: 50,
      unit: 'liters',
      costPerUnit: 12.99,
      supplier: 'Gourmet Supplies',
      lastRestocked: '2024-01-08',
      status: 'critical'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'low': return 'bg-yellow-100 text-yellow-800';
      case 'good': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
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
                  <p className="text-2xl font-bold text-blue-600">245</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Low Stock Items</p>
                  <p className="text-2xl font-bold text-yellow-600">15</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Out of Stock</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold text-green-600">$12,450</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['items', 'categories', 'suppliers', 'reports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search inventory items..."
              className="w-full"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Inventory Items */}
        <div className="space-y-4">
          {inventoryItems.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">{item.category} • {item.supplier}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Current Stock</p>
                    <p className="font-semibold">{item.currentStock} {item.unit}</p>
                    <Progress 
                      value={getStockPercentage(item.currentStock, item.maxStock)} 
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Cost per Unit</p>
                    <p className="font-semibold">${item.costPerUnit}</p>
                    <p className="text-sm text-gray-500">Total: ${(item.currentStock * item.costPerUnit).toFixed(2)}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Last Restocked</p>
                    <p className="font-semibold">{item.lastRestocked}</p>
                    <p className="text-sm text-gray-500">Min: {item.minStock} {item.unit}</p>
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

export default Inventory;
