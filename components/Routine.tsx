import Image from "next/image";
import style from  "../src/styles/Routine.module.css";
import { useState, useEffect } from "react";
import axios from 'axios'; // make sure to install axios

export default function Routine() {
    const [workout, setWorkout] = useState('Loading...');

    useEffect(() => {
        const fetchWorkout = async () => {
            const day = new Date().getDate() % 4; // get the current day of the month and modulo 4 to get a number between 0 and 3
            try {
                const response = await axios.get(`/api/workout?day=${day}`);
                setWorkout(response.data.workout);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWorkout();
    }, []);

    return (
        <>
            <div className={style.routineSection}>
                <h6 className={style.todayDate}>Date: {new Date().toLocaleDateString()}</h6>
                <h6 className={style.todayWorkout}>Workout: {workout}</h6>
            </div>
        </>
    );
}