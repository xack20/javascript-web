import {
  UserOutlined,
  ProjectOutlined,
  SmileOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  RocketOutlined,
} from '@ant-design/icons';

const data = [
  {
    title: 'Main',
    child: [
      {
        title: 'Dashboard',
        icon: <DashboardOutlined style={{ fontSize: 20 }} />,
        child: ['Admin Dashboard', 'Employee Dashboard'],
      },
      {
        title: 'Apps',
        icon: <AppstoreOutlined style={{ fontSize: 20 }} />,
        child: ['Chat', 'Calendar', 'Contacts', 'Email', 'File Manager'],
      },
    ],
  },
  {
    title: 'Employee',
    child: [
      {
        title: 'Employees',
        icon: <UserOutlined style={{ fontSize: 20 }} />,
        child: [
          'All Employees',
          'Holidays',
          'Leaves Admin',
          'Leaves Employee',
          'Leave Settings',
          'Attendance Admin',
          'Attendance Employee',
          'Departments',
          'Designations',
          'Time Sheet',
          'Overtime',
        ],
      },
      {
        title: 'Projects',
        icon: <ProjectOutlined style={{ fontSize: 20 }} />,
        child: ['Project', 'Task', 'Taskboard'],
      },
      {
        title: 'Clients',
        icon: <SmileOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Leads',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Tickets',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
    ],
  },
  {
    title: 'HR',
    child: [
      {
        title: 'Accounts',
        icon: <UserOutlined style={{ fontSize: 20 }} />,
        child: [
          'Estimates',
          'Invoices',
          'Payments',
          'Expenses',
          'Provident Fund',
          'Taxes',
        ],
      },
      {
        title: 'Payroll',
        icon: <ProjectOutlined style={{ fontSize: 20 }} />,
        child: ['Employee Salary', 'Payslip', 'Payroll Items'],
      },
      {
        title: 'Policies',
        icon: <SmileOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Reports',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: ['Expense Report', 'Invoice Reports'],
      },
    ],
  },
  {
    title: 'Performance',
    child: [
      {
        title: 'Performance',
        icon: <UserOutlined style={{ fontSize: 20 }} />,
        child: ['Indicator', 'Review', 'Appraisal'],
      },
      {
        title: 'Goals',
        icon: <ProjectOutlined style={{ fontSize: 20 }} />,
        child: ['Goal List', 'Goal Type'],
      },
      {
        title: 'Training',
        icon: <SmileOutlined style={{ fontSize: 20 }} />,
        child: ['Training List', 'Trainers', 'Training Type'],
      },
      {
        title: 'Promotions',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Resignation',
        icon: <SmileOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Termination',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
    ],
  },
  {
    title: 'Administration',
    child: [
      {
        title: 'Assets',
        icon: <UserOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Jobs',
        icon: <ProjectOutlined style={{ fontSize: 20 }} />,
        child: ['Manage Jobs', 'Applied Candidates'],
      },
      {
        title: 'Knowledgebase',
        icon: <SmileOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Activities',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Users',
        icon: <SmileOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
      {
        title: 'Settings',
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
        child: [],
      },
    ],
  },
];

export default data;
