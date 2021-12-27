import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import AddButton from "../../AddButton/AddButton";
import MyModal from "../../MyModal/MyModal";
import ApplyJobForm from './ApplyJobForm';

const ApplyJobDetail = () => {

    const onApply = () => {
        console.log("Apply");
    }

    const [modalVisibility, setModalVisibility] = useState(false);



    return (
        <div>




            <Row>
                <Col span={4}>
                </Col>


                <Col span={16}>
                <Card bordered={true} style={{ width: "100%", borderRadius: "20px", borderColor: "#531dab",height:"30vh" }}>
                    <h5>Web Developer</h5>
                    <p>Development</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Debitis dicta ab dolorem ex labore est consequuntur harum sapiente quos.
                        Facilis necessitatibus, velit commodi cumque recusandae vel? Tenetur earum deleniti dolores animi
                        voluptatibus amet. Quibusdam, voluptatibus laboriosam itaque debitis asperiores porro quos reiciendis
                        vitae excepturi et beatae quidem quam nostrum. Eligendi.
                    </p>



                    <AddButton setModalVisibility={setModalVisibility} buttonName={"Apply Job"}></AddButton>
                    <MyModal Width={900} Title={"Apply Job"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
                       <ApplyJobForm setModalVisibility={setModalVisibility}></ApplyJobForm>
                    </MyModal>

                    </Card>

                </Col>


                <Col span={4}>
                </Col>
            </Row>

        </div>
    );
};

export default ApplyJobDetail;
