
import React, { useEffect, useState } from 'react';
import base64 from "react-native-base64";
import AddButton from '../../Components/AddButton/AddButton.jsx';
import MyModal from '../../Components/MyModal/MyModal.jsx';
import TableLeads from "../../Components/TableLeads/TableLeads";

const Leads = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <div>
      {base64.decode(window.localStorage.getItem("_usrl_")) === "ADMIN" && (
        <AddButton
          setModalVisibility={setModalVisibility}
          buttonName={"Add Lead"}
        />
      )}
      <MyModal
        Width={900}
        Title={"Add Lead"}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
      </MyModal>
      <TableLeads></TableLeads>
    </div>
  );
};

export default Leads;
