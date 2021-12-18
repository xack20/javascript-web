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
