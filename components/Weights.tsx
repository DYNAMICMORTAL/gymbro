import Image from "next/image";
import style from  "../src/styles/Weights.module.css";
import { useState } from "react";
export default function Weights() {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const filteredInput = input.replace(/\D/g, '');
        setValue(filteredInput);
    };
    return (
        <>
            <div className={style.weightSection}>
                <h6 className={style.yesterdayWeight}>Yesterday's Weight: 67.68 Kg</h6>
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
                    <button className={style.saveButton}>Save</button>
                </div>
            </div>
        </>
    );
}