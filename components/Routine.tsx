import Image from "next/image";
import style from  "../src/styles/Routine.module.css";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Routine({ dayOffset }: { dayOffset: number }) {
    const [workout, setWorkout] = useState('Loading...');
    const [isDone, setIsDone] = useState(false);
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    useEffect(() => {
        const fetchWorkout = async () => {
            const day = (new Date().getDate() + dayOffset) % 4;
            try {
                const response = await axios.get(`/api/workout?day=${day}`);
                setWorkout(response.data.workout);
                setIsDone(response.data.isDone);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWorkout();
    }, [dayOffset]);

    const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDone(event.target.checked);
        const day = (new Date().getDate() + dayOffset) % 4;
        try {
            await axios.post(`/api/workout`, { day, isDone: event.target.checked });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={style.routineSection}>
            <h6 className={style.todayDate}>Date: {formattedDate}</h6>
            <h6 className={style.todayWorkout}>Workout: {workout}</h6>
            <input type="checkbox" checked={isDone} onChange={handleCheckboxChange} />
        </div>
    );
}