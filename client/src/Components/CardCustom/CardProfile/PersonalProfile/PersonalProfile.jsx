import React from 'react';
import NewTry from '../BasicCard/NewTry';

const PersonalProfile = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <Button ghost type="primary" icon={<EditOutlined />} style={{ borderRadius: "10px" }}></Button>
            </div>
            <div>
                <NewTry></NewTry>

                <PersonalInfo></PersonalInfo>


                <Row type="flex" justify="center" align="middle" style={{ minHeight: '10vh' }}>

                    <Button ghost type="primary" style={{ borderRadius: "10px" }}>Save</Button>
                </Row>


            </div>

        </div>
    );
};

export default PersonalProfile;