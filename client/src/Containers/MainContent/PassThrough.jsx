import React from 'react';

import FooterCustom from '../../Components/Footer/FooterCustom';
import LoadSpin from '../../Components/Spinner/LoadSpin';

import AdminDashboard from '../../Views/AdminDashboard/AdminDashboard';



// import Attendance from '../../../Views/Attendance/Attendance';
// import NotFound from '../../../Views/Default/404';
// import AllEmployees from '../../../Views/Employees/AllEmployees';
// import AttendanceEmp from '../../../Views/Attendance/AttendanceEmp';

const Attendance = React.lazy(() =>
  import('../../Views/Attendance/Attendance')
);

const NotFound = React.lazy(() => import('../../Views/Default/404'));

const AllEmployees = React.lazy(() =>
  import('../../Views/Employees/AllEmployees')
);

const AttendanceEmp = React.lazy(() =>
  import('../../Views/Attendance/AttendanceEmp')
);

const Clients = React.lazy(() =>
  import('../../Views/Clients/Clients')
);

const Tickets = React.lazy(() =>
  import('../../Views/Tickets/Tickets')
);


const Leads = React.lazy(() =>
  import('../../Views/Leads/Leads')
);


const EmployeeDashboard = React.lazy(() =>
  import('../../Views/EmployeeDashboard/EmployeeDashboard')
);


const Invoice = React.lazy(() =>
  import('../../Views/Invoice/Invoice')
);

const LeavePageAdmin = React.lazy(() =>
  import('../../Views/Leaves Admin/LeavePageAdmin')
);

const LeavePageEmp = React.lazy(() =>
  import('../../Views/Leaves Employee/LeavePageEmp')
);

const ManageJobs = React.lazy(() =>
  import('../../Views/Manage Jobs/ManageJobs')
);

const AppliedCandidates = React.lazy(() =>
  import('../../Views/Applied Candidates/AppliedCandidates')
);




export default function PassThrough(props) {
  let comp;
  if (props.page === 'All Employees')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <AllEmployees />
      </React.Suspense>
    );
  else if (props.page === 'Attendance Admin')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <Attendance />
      </React.Suspense>
    );
  else if (props.page === 'Attendance Employee')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <AttendanceEmp />
      </React.Suspense>
    );
  else if (props.page === 'Admin Dashboard') comp = <AdminDashboard />;

  else if (props.page === 'Clients')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <Clients />
      </React.Suspense>
    );

    else if (props.page === 'Tickets')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <Tickets />
      </React.Suspense>
    );

    else if (props.page === 'Leads')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <Leads />
      </React.Suspense>
    );

    else if (props.page === 'Leaves Admin')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <LeavePageAdmin />
      </React.Suspense>
    );

    else if (props.page === 'Leaves Employee')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <LeavePageEmp />
      </React.Suspense>
    );


    else if (props.page === 'Manage Jobs')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <ManageJobs></ManageJobs>
      </React.Suspense>
    );


    else if (props.page === 'Applied Candidates')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <AppliedCandidates></AppliedCandidates>
      </React.Suspense>
    );

    else if (props.page === 'Employee Dashboard')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <EmployeeDashboard />
      </React.Suspense>
    );

    else if (props.page === 'Invoices')
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <Invoice />
      </React.Suspense>
    );


  else
    comp = (
      <React.Suspense fallback={<LoadSpin />}>
        <NotFound name={props.page} />
      </React.Suspense>
    );

  return (
    <>
      {comp}
      <FooterCustom />
    </>
  );
}
