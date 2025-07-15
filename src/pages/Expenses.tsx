
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Edit,
  Trash2,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Expenses = () => {
  const [activeTab, setActiveTab] = useState('expenses');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const expenses = [
    {
      id: 'EXP-001',
      category: 'Food & Ingredients',
      description: 'Weekly grocery shopping',
      amount: 1250.00,
      date: '2024-01-15',
      vendor: 'Fresh Foods Co.',
      status: 'approved',
      receipt: 'receipt-001.pdf',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'EXP-002',
      category: 'Utilities',
      description: 'Electricity bill - January',
      amount: 450.00,
      date: '2024-01-14',
      vendor: 'Power Company',
      status: 'paid',
      receipt: 'receipt-002.pdf',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'EXP-003',
      category: 'Equipment',
      description: 'New coffee machine',
      amount: 2800.00,
      date: '2024-01-12',
      vendor: 'Restaurant Supply Co.',
      status: 'pending',
      receipt: null,
      paymentMethod: 'Cash'
    },
    {
      id: 'EXP-004',
      category: 'Staff',
      description: 'Weekly payroll',
      amount: 5200.00,
      date: '2024-01-10',
      vendor: 'Internal',
      status: 'paid',
      receipt: 'payroll-001.pdf',
      paymentMethod: 'Bank Transfer'
    }
  ];

  const categories = [
    { name: 'Food & Ingredients', amount: 4250.00, percentage: 35, color: 'bg-green-500' },
    { name: 'Staff', amount: 5200.00, percentage: 43, color: 'bg-blue-500' },
    { name: 'Utilities', amount: 1350.00, percentage: 11, color: 'bg-yellow-500' },
    { name: 'Equipment', amount: 800.00, percentage: 7, color: 'bg-purple-500' },
    { name: 'Marketing', amount: 500.00, percentage: 4, color: 'bg-pink-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

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
              <h1 className="text-2xl font-bold text-gray-900">Expense Management</h1>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Export
              </Button>
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                <Plus className="h-5 w-5 mr-2" />
                Add Expense
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Period Selector */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {['week', 'month', 'quarter', 'year'].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                onClick={() => setSelectedPeriod(period)}
                className="capitalize"
              >
                This {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Expenses</p>
                  <p className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-red-500">+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Approvals</p>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-blue-600">$8,450</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500">-5.2% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average Daily</p>
                  <p className="text-2xl font-bold text-purple-600">$281</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm font-semibold">${category.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {category.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['expenses', 'categories', 'reports', 'budget'].map((tab) => (
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
              placeholder="Search expenses..."
              className="w-full"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Expenses List */}
        <div className="space-y-4">
          {expenses.map((expense) => (
            <Card key={expense.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{expense.description}</h3>
                      <span className="text-2xl font-bold text-red-600">
                        -${expense.amount.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Category:</span> {expense.category}
                      </div>
                      <div>
                        <span className="font-medium">Vendor:</span> {expense.vendor}
                      </div>
                      <div>
                        <span className="font-medium">Date:</span> {expense.date}
                      </div>
                      <div>
                        <span className="font-medium">Payment:</span> {expense.paymentMethod}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 ml-4">
                    <Badge className={getStatusColor(expense.status)}>
                      {expense.status}
                    </Badge>
                    
                    <div className="flex space-x-2">
                      {expense.receipt && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default Expenses;
