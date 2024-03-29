import Image from "next/image";
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import style from "../src/styles/CalenderSection.module.css"
import React from "react";
export default function CalenderSection() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <>
            <Calendar
                mode="single"
                selected={date}
                // className={style.calendarCustom}
                onSelect={setDate}
                className={style.calendarCustom}
            />
        </>
    );
}