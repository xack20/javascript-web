import React from 'react';

import FooterCustom from '../../../Components/Footer/FooterCustom';
import LoadSpin from '../../../Components/Spinner/LoadSpin';
import AdminDashboard from '../../../Views/AdminDashboard/AdminDashboard';

// import Attendance from '../../../Views/Attendance/Attendance';
// import NotFound from '../../../Views/Default/404';
// import AllEmployees from '../../../Views/Employees/AllEmployees';
// import AttendanceEmp from '../../../Views/Attendance/AttendanceEmp';

const Attendance = React.lazy(() =>
  import('../../../Views/Attendance/Attendance')
);
const NotFound = React.lazy(() => import('../../../Views/Default/404'));
const AllEmployees = React.lazy(() =>
  import('../../../Views/Employees/AllEmployees')
);

const AttendanceEmp = React.lazy(() =>
  import('../../../Views/Attendance/AttendanceEmp')
);

export default function PassThrough(props) {
  let comp = <h1></h1>;
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
