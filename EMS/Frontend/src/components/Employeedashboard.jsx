import {
    ArrowRightIcon,
  Calendar1Icon,
  DollarSignIcon,
  FileTextIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';



const Employeedashboard = ({ data }) => {

  if (!data) {
    return <p>Loading dashboard...</p>;
  }

  const emp = data.employee;

  const cards = [
    {
      icon: Calendar1Icon,
      value: data.presentDays,
      title: "Days Present",
      subtitle: "This Month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting Approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `₹${data.latestPayslip.netSalary?.toLocaleString("en-IN")}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most Recent Payout",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1>Welcome, {emp?.firstName}!</h1>
        <p>
          {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
              <Icon size={24} />
              <h2 className="text-2xl font-bold mt-3">{card.value}</h2>
              <p className="font-medium">{card.title}</p>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col sm:flex-row gap-3 mt-5'>
        <Link to="/attandance" className="bg-indigo-500 rounded-lg text-white p-2.5 font-bold  text-center inline-flex items-center justify-center gap-2">
        Mark Attendance <ArrowRightIcon className='w-4 h-4'/>
        </Link>

        <Link to="/leave" className='text-center b rounded-lg text-slate-700 border border-slate-300 p-2.5' >
        Apply for Leave 
        </Link>
      </div>
    </div>
  );
};

export default Employeedashboard;
