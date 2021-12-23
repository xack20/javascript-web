
import { Button,Row } from 'antd';
import React from 'react';
import NewTry from './NewTry';



const BasicCard = () => {
    return (
        <div>
            
            <NewTry></NewTry>


            <Row type="flex" justify="center" align="middle" style={{minHeight: '10vh'}}>

            <Button ghost type="primary" style={{ borderRadius: "10px"}}>Save</Button>
            </Row>

            

        </div>
    );
};

export default BasicCard;


