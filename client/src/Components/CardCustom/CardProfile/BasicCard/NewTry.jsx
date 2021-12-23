import React from "react";
import { Card, Table,Button } from 'antd';

import { Avatar } from 'antd';
import "./NewTry.css"
const { Column } = Table;




const data = [
    {
        key: '1',
        info_tag: 'Phone',
        info_det: '9876543210',

    },
    {
        key: '2',
        info_tag: 'Email',
        info_det: 'johndoe@example.com',

    },
    {
        key: '3',
        info_tag: 'Birthday',
        info_det: '24th July',

    },
    {
        key: '4',
        info_tag: 'Address',
        info_det: '1861 Bayonne Ave, Manchester Township, NJ, 08759',

    },
    {
        key: '5',
        info_tag: 'Gender',
        info_det: 'Male',

    },
    {
        key: '6',
        info_tag: 'Reports to',
        info_det: 'Jeffery Lalor',

    },

];

const data2 = [
    {
        key: '1',
        
        info_det: 'John Doe',

    },
    {
        key: '2',
        
        info_det: 'UI/UX Design Team',

    },
    {
        key: '3',
       
        info_det: 'Web Designer',

    },
    {
        key: '4',
        
        info_det: 'Employee ID : FT-0001',

    },
    {
        key: '5',
        
        info_det: 'Date of Join : 1st Jan 2013',

    },
   

];


const gridStyle = {
    width: '50%',

};





const NewTry = () => {
    return (
        <div>

            <Card
            
             equal-heights size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
                <Card.Grid hoverable={false} style={gridStyle}>
                <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png"
                    />
                   
                    <Table pagination={false} dataSource={data2}>

                        <Column dataIndex="info_det" key="info_det" />


                    </Table>


                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>

            
                  
                        


                    <Table pagination={false} dataSource={data}>

                        <Column dataIndex="info_tag" key="info_tag" />
                        <Column dataIndex="info_det" key="info_det" />
                    </Table>
                </Card.Grid>
            </Card>



        </div>
    );
};

export default NewTry;
