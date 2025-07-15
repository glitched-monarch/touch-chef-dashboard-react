
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, TrendingUp, TrendingDown, Package, DollarSign } from "lucide-react";

interface InventoryReportsProps {
  dateRange: string;
}

const InventoryReports = ({ dateRange }: InventoryReportsProps) => {
  const inventoryData = {
    totalItems: 245,
    totalValue: 12450,
    lowStockItems: 15,
    outOfStockItems: 3,
    topCategories: [
      { name: 'Meat & Poultry', value: 4250, percentage: 34, items: 28 },
      { name: 'Vegetables', value: 2100, percentage: 17, items: 45 },
      { name: 'Dairy Products', value: 1850, percentage: 15, items: 22 },
      { name: 'Beverages', value: 1450, percentage: 12, items: 35 },
      { name: 'Spices & Seasonings', value: 950, percentage: 8, items: 58 }
    ],
    criticalStockItems: [
      { name: 'Chicken Breast', current: 5, minimum: 20, unit: 'kg', status: 'critical' },
      { name: 'Olive Oil', current: 2, minimum: 10, unit: 'liters', status: 'critical' },
      { name: 'Tomatoes', current: 15, minimum: 30, unit: 'kg', status: 'low' },
      { name: 'Mozzarella Cheese', current: 8, minimum: 25, unit: 'kg', status: 'low' }
    ],
    consumption: [
      { item: 'Chicken Breast', used: 45, period: 'week', trend: 'up', change: 12 },
      { item: 'Pasta', used: 38, period: 'week', trend: 'up', change: 8 },
      { item: 'Tomato Sauce', used: 32, period: 'week', trend: 'down', change: -5 },
      { item: 'Lettuce', used: 28, period: 'week', trend: 'up', change: 15 }
    ],
    wasteData: {
      totalWaste: 285,
      wasteValue: 425.50,
      categories: [
        { name: 'Vegetables', amount: 125, value: 187.50, percentage: 44 },
        { name: 'Dairy', amount: 85, value: 127.50, percentage: 30 },
        { name: 'Meat', amount: 45, value: 67.50, percentage: 16 },
        { name: 'Bread', amount: 30, value: 42.50, percentage: 10 }
      ]
    }
  };

  const getStockStatus = (current: number, minimum: number) => {
    const percentage = (current / minimum) * 100;
    if (percentage < 50) return 'critical';
    if (percentage < 100) return 'low';
    return 'good';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'low': return 'bg-yellow-100 text-yellow-800';
      case 'good': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Items</p>
                <p className="text-3xl font-bold text-blue-600">{inventoryData.totalItems}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-3xl font-bold text-green-600">
                  ${inventoryData.totalValue.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Stock</p>
                <p className="text-3xl font-bold text-yellow-600">{inventoryData.lowStockItems}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Out of Stock</p>
                <p className="text-3xl font-bold text-red-600">{inventoryData.outOfStockItems}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventoryData.topCategories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500 ml-2">({category.items} items)</span>
                  </div>
                  <span className="font-semibold">${category.value.toLocaleString()}</span>
                </div>
                <Progress value={category.percentage} className="h-2" />
                <div className="text-sm text-gray-600">{category.percentage}% of total inventory</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Critical Stock Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            Critical Stock Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventoryData.criticalStockItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-600">
                      Current: {item.current} {item.unit}
                    </span>
                    <span className="text-sm text-gray-600">
                      Min: {item.minimum} {item.unit}
                    </span>
                  </div>
                  <Progress 
                    value={(item.current / item.minimum) * 100} 
                    className="mt-2 h-2"
                  />
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Consumption Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Consumed Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventoryData.consumption.map((item) => (
                <div key={item.item} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{item.item}</h4>
                    <p className="text-sm text-gray-600">{item.used} units this {item.period}</p>
                  </div>
                  <div className="flex items-center">
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                    )}
                    <span className={`text-sm ${item.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Waste Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">Total Waste</span>
                <span className="text-lg font-bold text-red-600">
                  ${inventoryData.wasteData.wasteValue}
                </span>
              </div>
              <p className="text-sm text-gray-600">{inventoryData.wasteData.totalWaste} kg this month</p>
            </div>
            
            <div className="space-y-3">
              {inventoryData.wasteData.categories.map((category) => (
                <div key={category.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm font-semibold">${category.value}</span>
                  </div>
                  <Progress value={category.percentage} className="h-1.5" />
                  <div className="text-xs text-gray-500">{category.amount} kg ({category.percentage}%)</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Urgent Restocking</h4>
              <p className="text-red-700 text-sm">3 items critically low. Reorder immediately to avoid stockouts.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Optimize Orders</h4>
              <p className="text-yellow-700 text-sm">Consider bulk purchasing for frequently used items to reduce costs.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Reduce Waste</h4>
              <p className="text-green-700 text-sm">Implement portion control to reduce vegetable waste by 20%.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryReports;
