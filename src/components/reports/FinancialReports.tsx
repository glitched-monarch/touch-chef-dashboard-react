
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, AlertCircle } from "lucide-react";

interface FinancialReportsProps {
  dateRange: string;
}

const FinancialReports = ({ dateRange }: FinancialReportsProps) => {
  const financialData = {
    revenue: {
      total: 45750,
      growth: 12.5,
      breakdown: [
        { source: 'Dine-in', amount: 32450, percentage: 71, change: 8.2 },
        { source: 'Takeout', amount: 8900, percentage: 19, change: 25.6 },
        { source: 'Delivery', amount: 4400, percentage: 10, change: 18.9 }
      ]
    },
    expenses: {
      total: 28950,
      growth: 8.7,
      categories: [
        { name: 'Food & Ingredients', amount: 12450, percentage: 43, budget: 13000 },
        { name: 'Staff Wages', amount: 10200, percentage: 35, budget: 10000 },
        { name: 'Utilities', amount: 2800, percentage: 10, budget: 3000 },
        { name: 'Rent', amount: 2500, percentage: 9, budget: 2500 },
        { name: 'Marketing', amount: 1000, percentage: 3, budget: 1200 }
      ]
    },
    profitability: {
      grossProfit: 16800,
      grossMargin: 36.7,
      netProfit: 14250,
      netMargin: 31.1,
      ebitda: 15680
    },
    cashFlow: {
      beginning: 25000,
      inflow: 45750,
      outflow: 28950,
      ending: 41800,
      changePercent: 67.2
    },
    kpis: [
      { name: 'Revenue per Customer', value: 51.32, target: 50, unit: '$' },
      { name: 'Food Cost %', value: 27.2, target: 30, unit: '%' },
      { name: 'Labor Cost %', value: 22.3, target: 25, unit: '%' },
      { name: 'Table Turnover', value: 3.2, target: 3.0, unit: 'x' }
    ],
    monthlyComparison: [
      { month: 'Jan', revenue: 38500, expenses: 24800, profit: 13700 },
      { month: 'Feb', revenue: 41200, expenses: 26100, profit: 15100 },
      { month: 'Mar', revenue: 39800, expenses: 25900, profit: 13900 },
      { month: 'Apr', revenue: 43600, expenses: 27200, profit: 16400 },
      { month: 'May', revenue: 45750, expenses: 28950, profit: 16800 }
    ]
  };

  const getKPIStatus = (value: number, target: number, name: string) => {
    const isGood = name.includes('Cost') ? value < target : value > target;
    return isGood ? 'good' : 'warning';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'danger': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600">
                  ${financialData.revenue.total.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+{financialData.revenue.growth}%</span>
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
                <p className="text-sm text-gray-600">Total Expenses</p>
                <p className="text-3xl font-bold text-red-600">
                  ${financialData.expenses.total.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">+{financialData.expenses.growth}%</span>
                </div>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <CreditCard className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${financialData.profitability.netProfit.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm text-blue-500">{financialData.profitability.netMargin}% margin</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <PiggyBank className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cash Flow</p>
                <p className="text-3xl font-bold text-purple-600">
                  ${financialData.cashFlow.ending.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-purple-500 mr-1" />
                  <span className="text-sm text-purple-500">+{financialData.cashFlow.changePercent}%</span>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialData.revenue.breakdown.map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{source.source}</span>
                    <Badge className="bg-green-100 text-green-800">
                      +{source.change}%
                    </Badge>
                  </div>
                  <span className="font-semibold">${source.amount.toLocaleString()}</span>
                </div>
                <Progress value={source.percentage} className="h-2" />
                <div className="text-sm text-gray-600">{source.percentage}% of total revenue</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expense Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialData.expenses.categories.map((category) => (
              <div key={category.name} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{category.name}</span>
                  <div className="text-right">
                    <span className="font-semibold">${category.amount.toLocaleString()}</span>
                    <div className="text-sm text-gray-500">
                      Budget: ${category.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
                <Progress value={(category.amount / category.budget) * 100} className="h-2 mb-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{category.percentage}% of total expenses</span>
                  <span className={category.amount > category.budget ? 'text-red-500' : 'text-green-500'}>
                    {category.amount > category.budget ? 'Over' : 'Under'} budget
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Performance Indicators */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {financialData.kpis.map((kpi) => {
              const status = getKPIStatus(kpi.value, kpi.target, kpi.name);
              return (
                <div key={kpi.name} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{kpi.name}</h4>
                    <Badge className={getStatusColor(status)}>
                      {status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">
                    {kpi.unit === '$' && '$'}{kpi.value}
                    {kpi.unit !== '$' && kpi.unit}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Target: {kpi.unit === '$' && '$'}{kpi.target}
                    {kpi.unit !== '$' && kpi.unit}
                  </div>
                  <Progress 
                    value={(kpi.value / kpi.target) * 100} 
                    className="h-1.5 mt-2"
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Financial Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialData.monthlyComparison.map((month) => (
              <div key={month.month} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">{month.month}</div>
                <div className="flex space-x-8 text-sm">
                  <div>
                    <span className="text-gray-600">Revenue: </span>
                    <span className="font-semibold text-green-600">${month.revenue.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Expenses: </span>
                    <span className="font-semibold text-red-600">${month.expenses.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Profit: </span>
                    <span className="font-semibold text-blue-600">${month.profit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Health Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
            Financial Health Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">Strong Performance</h4>
              <p className="text-green-700 text-sm">Revenue growth exceeding targets by 2.5%</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800">Monitor Labor Costs</h4>
              <p className="text-yellow-700 text-sm">Wages increased 8% - optimize scheduling</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">Cash Flow Positive</h4>
              <p className="text-blue-700 text-sm">Strong cash position for expansion</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialReports;
