
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Clock, Calendar } from "lucide-react";

interface SalesReportsProps {
  dateRange: string;
}

const SalesReports = ({ dateRange }: SalesReportsProps) => {
  const salesData = {
    totalRevenue: 45750,
    totalOrders: 1247,
    averageOrderValue: 36.70,
    revenueGrowth: 12.5,
    orderGrowth: 8.2,
    topSellingItems: [
      { name: 'Margherita Pizza', quantity: 245, revenue: 4410, growth: 15.2 },
      { name: 'Caesar Salad', quantity: 189, revenue: 2457, growth: -3.1 },
      { name: 'Grilled Salmon', quantity: 156, revenue: 3900, growth: 22.8 },
      { name: 'Pasta Carbonara', quantity: 134, revenue: 2680, growth: 8.5 }
    ],
    hourlyPerformance: [
      { hour: '6-7 AM', orders: 15, revenue: 245 },
      { hour: '7-8 AM', orders: 32, revenue: 485 },
      { hour: '8-9 AM', orders: 45, revenue: 720 },
      { hour: '12-1 PM', orders: 89, revenue: 1580 },
      { hour: '1-2 PM', orders: 102, revenue: 1890 },
      { hour: '6-7 PM', orders: 125, revenue: 2340 },
      { hour: '7-8 PM', orders: 145, revenue: 2680 },
      { hour: '8-9 PM', orders: 134, revenue: 2450 }
    ],
    paymentMethods: [
      { method: 'Credit Card', percentage: 65, amount: 29737.50 },
      { method: 'Cash', percentage: 25, amount: 11437.50 },
      { method: 'Digital Wallet', percentage: 10, amount: 4575.00 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600">
                  ${salesData.totalRevenue.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+{salesData.revenueGrowth}%</span>
                </div>
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
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-blue-600">
                  {salesData.totalOrders.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm text-blue-500">+{salesData.orderGrowth}%</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Order Value</p>
                <p className="text-3xl font-bold text-purple-600">
                  ${salesData.averageOrderValue}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-purple-500 mr-1" />
                  <span className="text-sm text-purple-500">+5.8%</span>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Selling Items */}
      <Card>
        <CardHeader>
          <CardTitle>Top Selling Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salesData.topSellingItems.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.quantity} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">${item.revenue.toLocaleString()}</p>
                  <div className="flex items-center">
                    {item.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={`text-xs ${item.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {item.growth > 0 ? '+' : ''}{item.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hourly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Hourly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {salesData.hourlyPerformance.map((hour) => (
              <div key={hour.hour} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <Badge variant="outline">{hour.hour}</Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold">${hour.revenue}</p>
                  <p className="text-sm text-gray-600">{hour.orders} orders</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesData.paymentMethods.map((method) => (
                <div key={method.method} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{method.method}</span>
                    <span className="text-sm font-semibold">${method.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">{method.percentage}% of total</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Peak Hours</h4>
                <p className="text-green-700">7-9 PM generates highest revenue</p>
                <p className="text-sm text-green-600">Average: $2,565 per evening</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Best Day</h4>
                <p className="text-blue-700">Saturdays perform 23% better</p>
                <p className="text-sm text-blue-600">Average: $1,840 per Saturday</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Growth Opportunity</h4>
                <p className="text-purple-700">Morning sales can increase by 15%</p>
                <p className="text-sm text-purple-600">Consider breakfast promotions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesReports;
