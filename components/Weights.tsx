import Image from "next/image";
import style from  "../src/styles/Weights.module.css";
import { useState, useEffect } from "react";
import axios from 'axios'; // make sure to install axios

export default function Weights() {
    const [value, setValue] = useState('');
    const [latestWeight, setLatestWeight] = useState('Loading...');

    useEffect(() => {
        const fetchLatestWeight = async () => {
            try {
                const response = await axios.get('/api/latestWeight');
                setLatestWeight(response.data.weight);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLatestWeight();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const filteredInput = input.replace(/\D/g, '');
        setValue(filteredInput);
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('/api/saveweights', { weight: value });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className={style.weightSection}>
                <h6 className={style.yesterdayWeight}>Yesterday's Weight: {latestWeight} Kg</h6>
                <div className={style.weightInput}>
                    <h3 className={style.weightInputText}>
                        Weight: 
                    </h3>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        color="red"
                        className={style.weightInputField}
                        placeholder="Enter today's weight"
                    />
                    <button className={style.saveButton} onClick={handleSave}>Save</button>
                </div>
            </div>
        </>
    );
}