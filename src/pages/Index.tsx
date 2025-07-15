
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Package, 
  Menu as MenuIcon, 
  Users, 
  Receipt, 
  BarChart3,
  Bell,
  Search,
  Settings,
  LogOut
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    const updateTime = () => setCurrentTime(new Date());

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      clearInterval(timeInterval);
    };
  }, []);

  const menuItems = [
    {
      title: "Sales",
      description: "Process orders and manage transactions",
      icon: ShoppingCart,
      path: "/sales",
      color: "from-green-500 to-emerald-600",
      stats: "24 orders today"
    },
    {
      title: "Inventory",
      description: "Track stock levels and ingredients",
      icon: Package,
      path: "/inventory",
      color: "from-blue-500 to-cyan-600",
      stats: "15 low stock items"
    },
    {
      title: "Menu",
      description: "Manage dishes and pricing",
      icon: MenuIcon,
      path: "/menu",
      color: "from-purple-500 to-violet-600",
      stats: "45 active items"
    },
    {
      title: "Users",
      description: "Staff and customer management",
      icon: Users,
      path: "/users",
      color: "from-orange-500 to-red-600",
      stats: "12 active staff"
    },
    {
      title: "Expenses",
      description: "Track costs and expenditures",
      icon: Receipt,
      path: "/expenses",
      color: "from-rose-500 to-pink-600",
      stats: "$2,450 this week"
    },
    {
      title: "Reports",
      description: "Analytics and insights",
      icon: BarChart3,
      path: "/reports",
      color: "from-indigo-500 to-purple-600",
      stats: "View analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Adhujo Restaurant</h1>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {isOnline ? 'Online' : 'Offline'}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="w-64"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} • {currentTime.toLocaleTimeString()}
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Today's Sales</p>
                  <p className="text-2xl font-bold">$4,750</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-green-100" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Orders</p>
                  <p className="text-2xl font-bold">142</p>
                </div>
                <Receipt className="h-8 w-8 text-blue-100" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-violet-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Active Tables</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Users className="h-8 w-8 text-purple-100" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Staff Online</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Package className="h-8 w-8 text-orange-100" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-gray-800 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-sm font-medium text-gray-500">{item.stats}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
