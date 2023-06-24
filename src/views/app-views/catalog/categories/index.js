import React from 'react';
import {useNavigate} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../../configs/AppConfig";
import {Button} from "antd";


const Categories = () => {
    const navitage=useNavigate()
    return (
        <>
            <Button onClick={()=>navitage(`${APP_PREFIX_PATH}/main/catalog/products`)}>to prod</Button>
            категории
        </>
    )
}


export default Categories;
