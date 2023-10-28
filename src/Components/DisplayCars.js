import React from "react";
function DisplayCars(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Cars are displayed below</h1>
            <ul>
                {cars.map((item) => {
                    return <li>
                        {item.name === "" ? null :
                            <div>
                                <div>{item.name}</div>
                                <div>{item.model}</div>
                                <div>{item.qty}</div>
                            </div>}
                    </li>
                })}
            </ul>
        </>
    )
}

export default DisplayCars;