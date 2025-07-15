
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter,
  Users as UsersIcon,
  Shield,
  Clock,
  Mail,
  Phone,
  Edit,
  Trash2,
  UserCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Users = () => {
  const [activeTab, setActiveTab] = useState('staff');

  const staffMembers = [
    {
      id: 'STAFF-001',
      name: 'John Smith',
      email: 'john.smith@restaurant.com',
      phone: '+1 (555) 123-4567',
      role: 'Manager',
      department: 'Management',
      status: 'active',
      lastLogin: '2024-01-15 09:30',
      hireDate: '2023-06-15',
      avatar: '/placeholder.svg'
    },
    {
      id: 'STAFF-002',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@restaurant.com',
      phone: '+1 (555) 234-5678',
      role: 'Chef',
      department: 'Kitchen',
      status: 'active',
      lastLogin: '2024-01-15 08:15',
      hireDate: '2023-08-20',
      avatar: '/placeholder.svg'
    },
    {
      id: 'STAFF-003',
      name: 'Mike Wilson',
      email: 'mike.wilson@restaurant.com',
      phone: '+1 (555) 345-6789',
      role: 'Waiter',
      department: 'Service',
      status: 'inactive',
      lastLogin: '2024-01-10 18:45',
      hireDate: '2023-12-01',
      avatar: '/placeholder.svg'
    }
  ];

  const customers = [
    {
      id: 'CUST-001',
      name: 'Alice Brown',
      email: 'alice.brown@email.com',
      phone: '+1 (555) 111-2222',
      totalOrders: 25,
      totalSpent: 750.50,
      lastVisit: '2024-01-14',
      joinDate: '2023-09-15',
      loyaltyPoints: 150,
      status: 'vip'
    },
    {
      id: 'CUST-002',
      name: 'Bob Davis',
      email: 'bob.davis@email.com',
      phone: '+1 (555) 222-3333',
      totalOrders: 8,
      totalSpent: 240.00,
      lastVisit: '2024-01-12',
      joinDate: '2023-11-20',
      loyaltyPoints: 48,
      status: 'regular'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'vip': return 'bg-purple-100 text-purple-800';
      case 'regular': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'manager': return 'bg-red-100 text-red-800';
      case 'chef': return 'bg-orange-100 text-orange-800';
      case 'waiter': return 'bg-blue-100 text-blue-800';
      case 'cashier': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            </div>
            
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
              <Plus className="h-5 w-5 mr-2" />
              Add User
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
                  <p className="text-sm text-gray-600">Total Staff</p>
                  <p className="text-2xl font-bold text-blue-600">24</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Staff</p>
                  <p className="text-2xl font-bold text-green-600">22</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Customers</p>
                  <p className="text-2xl font-bold text-purple-600">1,247</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <UsersIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">VIP Customers</p>
                  <p className="text-2xl font-bold text-orange-600">47</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['staff', 'customers', 'roles', 'permissions'].map((tab) => (
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
              placeholder={`Search ${activeTab}...`}
              className="w-full"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Staff List */}
        {activeTab === 'staff' && (
          <div className="space-y-4">
            {staffMembers.map((staff) => (
              <Card key={staff.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={staff.avatar} alt={staff.name} />
                        <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{staff.name}</h3>
                        <p className="text-gray-600">{staff.department}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {staff.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {staff.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge className={getRoleColor(staff.role)}>
                          {staff.role}
                        </Badge>
                        <div className="mt-2">
                          <Badge className={getStatusColor(staff.status)}>
                            {staff.status}
                          </Badge>
                        </div>
                      </div>
                      
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
                  
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Hire Date: </span>
                      <span className="font-medium">{staff.hireDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Last Login: </span>
                      <span className="font-medium">{staff.lastLogin}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Customers List */}
        {activeTab === 'customers' && (
          <div className="space-y-4">
            {customers.map((customer) => (
              <Card key={customer.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {customer.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {customer.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                        <div className="mt-2 text-sm">
                          <span className="text-gray-600">Points: </span>
                          <span className="font-medium">{customer.loyaltyPoints}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Total Orders: </span>
                      <span className="font-medium">{customer.totalOrders}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Spent: </span>
                      <span className="font-medium">${customer.totalSpent}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Last Visit: </span>
                      <span className="font-medium">{customer.lastVisit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Users;
