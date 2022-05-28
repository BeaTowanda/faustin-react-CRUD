import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoTable({name, description, price,type_name, colection_name,dto}) {
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{type_name}</td>
                <td>{colection_name}</td>
                <td>{dto}</td>
                {/*    <ul>
                        <li>{type_name}</li>
                    </ul>
                </td>
                <td>
                   {/*} <ul>
                        {colors.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.name} 
                            </span>
                        </li> 
                        )}
                        </ul> 
                </td>
                        <td>{dto}</td> */} 
            </tr>
        </tbody>
    )
}

InfoTable.propTypes ={
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    type_name: PropTypes.string.isRequired,
    colection_name:PropTypes.string.isRequired,
    dto: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired 
}

InfoTable.defaultProps = {
    name: "Sin nombre" ,
    description: "Sin descripción",
    price: "",
    type_name:"",
    colection_name:"",
    dto: ""
}



export default InfoTable;