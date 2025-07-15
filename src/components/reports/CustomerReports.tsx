
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, TrendingUp, Star, Heart, Gift, Calendar } from "lucide-react";

interface CustomerReportsProps {
  dateRange: string;
}

const CustomerReports = ({ dateRange }: CustomerReportsProps) => {
  const customerData = {
    totalCustomers: 1247,
    newCustomers: 89,
    returningCustomers: 1158,
    customerGrowth: 8.2,
    demographics: {
      ageGroups: [
        { range: '18-25', count: 187, percentage: 15 },
        { range: '26-35', count: 374, percentage: 30 },
        { range: '36-45', count: 312, percentage: 25 },
        { range: '46-55', count: 249, percentage: 20 },
        { range: '55+', count: 125, percentage: 10 }
      ],
      visitFrequency: [
        { type: 'First-time', count: 89, percentage: 7 },
        { type: 'Occasional (2-5 visits)', count: 498, percentage: 40 },
        { type: 'Regular (6-15 visits)', count: 436, percentage: 35 },
        { type: 'Frequent (16+ visits)', count: 224, percentage: 18 }
      ]
    },
    satisfaction: {
      averageRating: 4.6,
      totalReviews: 342,
      ratingDistribution: [
        { stars: 5, count: 198, percentage: 58 },
        { stars: 4, count: 89, percentage: 26 },
        { stars: 3, count: 34, percentage: 10 },
        { stars: 2, count: 14, percentage: 4 },
        { stars: 1, count: 7, percentage: 2 }
      ]
    },
    topCustomers: [
      {
        name: 'Alice Johnson',
        email: 'alice@email.com',
        visits: 45,
        totalSpent: 2340.50,
        avgOrderValue: 52.01,
        lastVisit: '2024-01-14',
        loyalty: 'VIP',
        avatar: '/placeholder.svg'
      },
      {
        name: 'Bob Smith',
        email: 'bob@email.com',
        visits: 38,
        totalSpent: 1890.75,
        avgOrderValue: 49.76,
        lastVisit: '2024-01-13',
        loyalty: 'Gold',
        avatar: '/placeholder.svg'
      },
      {
        name: 'Carol Davis',
        email: 'carol@email.com',
        visits: 32,
        totalSpent: 1650.25,
        avgOrderValue: 51.57,
        lastVisit: '2024-01-15',
        loyalty: 'Gold',
        avatar: '/placeholder.svg'
      }
    ],
    preferences: {
      popularItems: [
        { item: 'Margherita Pizza', orders: 245, customerCount: 189, percentage: 15.2 },
        { item: 'Caesar Salad', orders: 198, customerCount: 156, percentage: 12.5 },
        { item: 'Grilled Salmon', orders: 167, customerCount: 134, percentage: 10.7 },
        { item: 'Pasta Carbonara', orders: 145, customerCount: 118, percentage: 9.5 }
      ],
      diningPreferences: [
        { type: 'Dine-in', percentage: 65, customers: 811 },
        { type: 'Takeout', percentage: 25, customers: 312 },
        { type: 'Delivery', percentage: 10, customers: 124 }
      ]
    },
    retention: {
      rate: 85.2,
      churnRate: 14.8,
      lifetimeValue: 485.30,
      monthlyGrowth: [
        { month: 'Jan', new: 78, retained: 945, churned: 125 },
        { month: 'Feb', new: 82, retained: 987, churned: 89 },
        { month: 'Mar', new: 91, retained: 1034, churned: 102 },
        { month: 'Apr', new: 95, retained: 1087, churned: 78 },
        { month: 'May', new: 89, retained: 1158, churned: 67 }
      ]
    }
  };

  const getLoyaltyColor = (loyalty: string) => {
    switch (loyalty.toLowerCase()) {
      case 'vip': return 'bg-purple-100 text-purple-800';
      case 'gold': return 'bg-yellow-100 text-yellow-800';
      case 'silver': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Customer Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Customers</p>
                <p className="text-3xl font-bold text-blue-600">
                  {customerData.totalCustomers.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+{customerData.customerGrowth}%</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Customers</p>
                <p className="text-3xl font-bold text-green-600">{customerData.newCustomers}</p>
                <p className="text-sm text-gray-500 mt-1">This month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-3xl font-bold text-yellow-600">{customerData.satisfaction.averageRating}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-500">{customerData.satisfaction.totalReviews} reviews</span>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Retention Rate</p>
                <p className="text-3xl font-bold text-purple-600">{customerData.retention.rate}%</p>
                <p className="text-sm text-gray-500 mt-1">Customer loyalty</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Age Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerData.demographics.ageGroups.map((group) => (
                <div key={group.range} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{group.range} years</span>
                    <span className="font-semibold">{group.count} customers</span>
                  </div>
                  <Progress value={group.percentage} className="h-2" />
                  <div className="text-sm text-gray-600">{group.percentage}% of total</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visit Frequency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerData.demographics.visitFrequency.map((freq) => (
                <div key={freq.type} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{freq.type}</span>
                    <span className="font-semibold">{freq.count} customers</span>
                  </div>
                  <Progress value={freq.percentage} className="h-2" />
                  <div className="text-sm text-gray-600">{freq.percentage}% of total</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Customers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Gift className="h-5 w-5 text-purple-500 mr-2" />
            Top Customers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerData.topCustomers.map((customer, index) => (
              <div key={customer.email} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={customer.avatar} alt={customer.name} />
                  <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{customer.name}</h4>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                    <span>{customer.visits} visits</span>
                    <span>${customer.totalSpent.toLocaleString()} spent</span>
                    <span>Last: {customer.lastVisit}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getLoyaltyColor(customer.loyalty)}>
                    {customer.loyalty}
                  </Badge>
                  <div className="text-sm text-gray-600 mt-1">
                    ${customer.avgOrderValue} avg
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Customer Satisfaction */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerData.satisfaction.ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 w-16">
                  <span className="font-medium">{rating.stars}</span>
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <Progress value={rating.percentage} className="h-2" />
                </div>
                <div className="w-20 text-right">
                  <span className="font-semibold">{rating.count}</span>
                  <span className="text-sm text-gray-500 ml-1">({rating.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Items & Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Popular Menu Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerData.preferences.popularItems.map((item, index) => (
                <div key={item.item} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                    <div>
                      <h4 className="font-medium">{item.item}</h4>
                      <p className="text-sm text-gray-600">{item.customerCount} customers ordered</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{item.orders} orders</div>
                    <div className="text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dining Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerData.preferences.diningPreferences.map((pref) => (
                <div key={pref.type} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{pref.type}</span>
                    <span className="font-semibold">{pref.customers} customers</span>
                  </div>
                  <Progress value={pref.percentage} className="h-2" />
                  <div className="text-sm text-gray-600">{pref.percentage}% preference</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">High Satisfaction</h4>
              <p className="text-green-700 text-sm">84% of customers rate 4+ stars</p>
              <p className="text-xs text-green-600 mt-1">Above industry average</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">Strong Loyalty</h4>
              <p className="text-blue-700 text-sm">53% are regular/frequent visitors</p>
              <p className="text-xs text-blue-600 mt-1">Excellent retention rate</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800">Growth Opportunity</h4>
              <p className="text-purple-700 text-sm">Expand delivery services</p>
              <p className="text-xs text-purple-600 mt-1">Only 10% use delivery currently</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerReports;
