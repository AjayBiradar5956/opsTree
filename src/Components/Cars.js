import { useState } from "react";
import DisplayCars from "./DisplayCars";

function Cars() {
    const [cars, setCars] = useState([
        {
            name: "",
            model: "",
            qty: 0,
        },
    ]);
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [qty, setQty] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleModelChange = (e) => {
        setModel(e.target.value);
    }

    const handleQtyChange = (e) => {
        setQty(e.target.value);
    }

    const handleSubmit = () => {
        const carIndex = cars.findIndex(car => car.name === name && car.model === model);

        if (carIndex !== -1) {
            // Car already exists, update the quantity
            const updatedCars = [...cars];
            updatedCars[carIndex].qty = parseInt(updatedCars[carIndex].qty) + parseInt(qty);
            setCars(updatedCars);
        } else {
            // Car doesn't exist, create a new car object
            const obj = {
                name,
                model,
                qty: parseInt(qty),
            };
            setCars([...cars, obj]);
        }

        // Reset input fields
        setName("");
        setModel("");
        setQty("");
    }

    return (
        <center>
            <input placeholder="Enter Car Name" type="text" value={name} onChange={handleNameChange} />
            <br></br>
            <input placeholder="Enter Model Name" type="text" value={model} onChange={handleModelChange} />
            <br></br>
            <input placeholder="Enter Quantity" type="Number" value={qty} onChange={handleQtyChange} />
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
            <DisplayCars cars={cars} />
        </center>
    );
}

export default Cars;
