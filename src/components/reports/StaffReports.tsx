
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, TrendingUp, Award, Calendar } from "lucide-react";

interface StaffReportsProps {
  dateRange: string;
}

const StaffReports = ({ dateRange }: StaffReportsProps) => {
  const staffData = {
    activeStaff: 24,
    totalHours: 1240,
    averageHours: 51.7,
    overtimeHours: 145,
    departments: [
      { name: 'Kitchen', staff: 8, hours: 456, efficiency: 92 },
      { name: 'Service', staff: 10, hours: 520, efficiency: 88 },
      { name: 'Management', staff: 3, hours: 144, efficiency: 95 },
      { name: 'Cleaning', staff: 3, hours: 120, efficiency: 90 }
    ],
    topPerformers: [
      {
        name: 'Sarah Johnson',
        role: 'Head Chef',
        department: 'Kitchen',
        hoursWorked: 58,
        efficiency: 96,
        ordersCompleted: 245,
        rating: 4.9,
        avatar: '/placeholder.svg'
      },
      {
        name: 'Mike Wilson',
        role: 'Senior Waiter',
        department: 'Service',
        hoursWorked: 54,
        efficiency: 94,
        ordersCompleted: 189,
        rating: 4.8,
        avatar: '/placeholder.svg'
      },
      {
        name: 'Emily Davis',
        role: 'Sous Chef',
        department: 'Kitchen',
        hoursWorked: 52,
        efficiency: 91,
        ordersCompleted: 198,
        rating: 4.7,
        avatar: '/placeholder.svg'
      }
    ],
    attendanceData: [
      { name: 'Present', count: 22, percentage: 92 },
      { name: 'Late', count: 1, percentage: 4 },
      { name: 'Absent', count: 1, percentage: 4 }
    ],
    shiftDistribution: [
      { shift: 'Morning (6AM-2PM)', staff: 8, hours: 384 },
      { shift: 'Afternoon (2PM-10PM)', staff: 12, hours: 576 },
      { shift: 'Night (10PM-6AM)', staff: 4, hours: 192 }
    ],
    payrollSummary: {
      totalPayroll: 18450,
      regularHours: 1095,
      overtimeHours: 145,
      bonuses: 2300,
      deductions: 850
    }
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return 'text-green-600';
    if (efficiency >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAttendanceColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'present': return 'bg-green-500';
      case 'late': return 'bg-yellow-500';
      case 'absent': return 'bg-red-500';
      default: return 'bg-gray-500';
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
                <p className="text-sm text-gray-600">Active Staff</p>
                <p className="text-3xl font-bold text-blue-600">{staffData.activeStaff}</p>
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
                <p className="text-sm text-gray-600">Total Hours</p>
                <p className="text-3xl font-bold text-green-600">{staffData.totalHours}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Hours/Staff</p>
                <p className="text-3xl font-bold text-purple-600">{staffData.averageHours}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overtime Hours</p>
                <p className="text-3xl font-bold text-orange-600">{staffData.overtimeHours}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {staffData.departments.map((dept) => (
              <div key={dept.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{dept.name}</h4>
                    <p className="text-sm text-gray-600">{dept.staff} staff members</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{dept.hours} hours</p>
                    <p className={`text-sm font-medium ${getEfficiencyColor(dept.efficiency)}`}>
                      {dept.efficiency}% efficiency
                    </p>
                  </div>
                </div>
                <Progress value={dept.efficiency} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            Top Performers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {staffData.topPerformers.map((performer, index) => (
              <div key={performer.name} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-yellow-100 text-yellow-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={performer.avatar} alt={performer.name} />
                  <AvatarFallback>{performer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{performer.name}</h4>
                  <p className="text-sm text-gray-600">{performer.role} • {performer.department}</p>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                    <span>{performer.hoursWorked}h worked</span>
                    <span>{performer.ordersCompleted} orders</span>
                    <span>⭐ {performer.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">
                    {performer.efficiency}% efficiency
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attendance & Shift Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staffData.attendanceData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getAttendanceColor(item.name)}`}></div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">{item.count}</span>
                    <span className="text-sm text-gray-500 ml-2">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">Attendance Rate</h4>
              <p className="text-2xl font-bold text-blue-600">92%</p>
              <p className="text-sm text-blue-600">Above target of 90%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shift Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staffData.shiftDistribution.map((shift) => (
                <div key={shift.shift} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{shift.shift}</span>
                    <span className="text-sm font-semibold">{shift.staff} staff</span>
                  </div>
                  <Progress value={(shift.staff / 24) * 100} className="h-2" />
                  <div className="text-sm text-gray-600">{shift.hours} total hours</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Payroll Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600">Total Payroll</p>
              <p className="text-2xl font-bold text-green-700">
                ${staffData.payrollSummary.totalPayroll.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600">Regular Hours</p>
              <p className="text-2xl font-bold text-blue-700">
                {staffData.payrollSummary.regularHours}
              </p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-600">Overtime Hours</p>
              <p className="text-2xl font-bold text-orange-700">
                {staffData.payrollSummary.overtimeHours}
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600">Bonuses</p>
              <p className="text-2xl font-bold text-purple-700">
                ${staffData.payrollSummary.bonuses.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-600">Deductions</p>
              <p className="text-2xl font-bold text-red-700">
                ${staffData.payrollSummary.deductions.toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffReports;
