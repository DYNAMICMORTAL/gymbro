'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Link from 'next/link';
import Weights from "../../components/Weights";
import CalenderSection from "../../components/CalenderSection";
import { cn } from "@/lib/utils"
import Routine from "../../components/Routine";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Analytics/>
      <SpeedInsights/>
      <Navbar></Navbar>
      <Weights></Weights>
      <div className={styles.flexContainer}>
        <div className={styles.calenderSection}>
          <CalenderSection />
        </div>
        <div className={styles.routineContainer}>
          {[0, 1, 2, 3, 4,].map(dayOffset => (
            <div key={dayOffset} className={styles.routineDay}>
              <Routine dayOffset={dayOffset} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}