
import { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  Users,
  ShoppingCart,
  Calendar,
  Download,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SalesReports from "./SalesReports";
import InventoryReports from "./InventoryReports";
import StaffReports from "./StaffReports";
import FinancialReports from "./FinancialReports";
import CustomerReports from "./CustomerReports";

const ReportsDashboard = () => {
  const [activeReport, setActiveReport] = useState('overview');
  const [dateRange, setDateRange] = useState('month');

  const kpiCards = [
    {
      title: "Total Revenue",
      value: "$45,750",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Total Orders",
      value: "1,247",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Customer Count",
      value: "892",
      change: "-2.1%",
      trend: "down",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Avg Order Value",
      value: "$36.70",
      change: "+5.8%",
      trend: "up",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const reportTypes = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'sales', label: 'Sales Reports', icon: DollarSign },
    { id: 'inventory', label: 'Inventory Reports', icon: ShoppingCart },
    { id: 'staff', label: 'Staff Reports', icon: Users },
    { id: 'financial', label: 'Financial Reports', icon: TrendingUp },
    { id: 'customer', label: 'Customer Reports', icon: Users }
  ];

  const renderReportContent = () => {
    switch (activeReport) {
      case 'sales':
        return <SalesReports dateRange={dateRange} />;
      case 'inventory':
        return <InventoryReports dateRange={dateRange} />;
      case 'staff':
        return <StaffReports dateRange={dateRange} />;
      case 'financial':
        return <FinancialReports dateRange={dateRange} />;
      case 'customer':
        return <CustomerReports dateRange={dateRange} />;
      default:
        return (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiCards.map((kpi) => (
                <Card key={kpi.title}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{kpi.title}</p>
                        <p className="text-2xl font-bold">{kpi.value}</p>
                        <div className="flex items-center mt-2">
                          {kpi.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                          )}
                          <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {kpi.change}
                          </span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                        <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Reports */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Margherita Pizza', sales: 245, revenue: '$4,410' },
                      { name: 'Caesar Salad', sales: 189, revenue: '$2,457' },
                      { name: 'Grilled Salmon', sales: 156, revenue: '$3,900' },
                      { name: 'Pasta Carbonara', sales: 134, revenue: '$2,680' }
                    ].map((item, index) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{item.revenue}</div>
                          <div className="text-sm text-gray-500">{item.sales} orders</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: '2 mins ago', activity: 'New order #1247 - Table 5', amount: '$45.99' },
                      { time: '5 mins ago', activity: 'Payment received - Order #1246', amount: '$32.50' },
                      { time: '8 mins ago', activity: 'Staff check-in - Sarah Johnson', amount: '' },
                      { time: '12 mins ago', activity: 'Inventory update - Low stock alert', amount: '' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{item.activity}</div>
                          <div className="text-xs text-gray-500">{item.time}</div>
                        </div>
                        {item.amount && (
                          <div className="font-semibold text-green-600">{item.amount}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <p className="text-gray-600">Comprehensive insights into your restaurant performance</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Report Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {reportTypes.map((report) => (
            <button
              key={report.id}
              onClick={() => setActiveReport(report.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                activeReport === report.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <report.icon className="h-4 w-4" />
              <span>{report.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Report Content */}
      {renderReportContent()}
    </div>
  );
};

export default ReportsDashboard;
