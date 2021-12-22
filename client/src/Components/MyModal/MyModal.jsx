import React from "react";

import { Modal } from "antd";

import { CloseCircleTwoTone } from "@ant-design/icons";

const componentName = ({ children, Width, Title, modalVisibility, setModalVisibility }) => {

  return (
    <Modal
      visible={modalVisibility}
      onCancel={ () => setModalVisibility(false) }
      centered={true}
      footer={null}
      closeIcon={
        <CloseCircleTwoTone
          twoToneColor="#bfbfbf"
          style={{ fontSize: "25px" }}
        />
      }
      style={{
        overflowX: "hidden",
        borderRadius: "5px",
      }}
      width={Width}
      zIndex={10000000}
      className="shadow-sm bg-body rounded"
    >
      <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
        {Title}
      </h3>

      {children}
    </Modal>
  );
};

export default componentName;
