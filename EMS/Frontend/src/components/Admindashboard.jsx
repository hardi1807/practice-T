import { Building2Icon, UserIcon,  Calendar1Icon,  FileTextIcon} from 'lucide-react'


const Admindashboard = ({data}) => {
     const stats = [
    {
      icon: UserIcon,
      value: data.totalEmployees,
      title: "Total Employees",
      subtitle: "Active workforce",
    },
    {
      icon: Building2Icon,
      value: data.totalDepartments,
      title: "Departments",
      subtitle: "Organization uits",
    },
    {
      icon: Calendar1Icon,
      value: data.todatAttendance,
      title: "Today's Attandance",
      subtitle: "Checked in Today",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting Approval",
    },
]
 return (
    <div className="animate-fade-in">
      <div className="page-header">
        <p className='font-bold'> Welcome Back Admin!
        </p>
        <p className='text-slate-500'> here is your overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
        {stats.map((S) => {
          const Icon = S.icon;

          return (
            <div key={S.title} className="bg-white p-5 rounded-xl shadow-sm">
              <Icon size={24} />
              <h2 className="text-2xl font-bold mt-3">{S.value}</h2>
              <p className="font-medium">{S.title}</p>
              <p className="text-sm text-gray-500">{S.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admindashboard