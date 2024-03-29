'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Link from 'next/link';
import Weights from "../../components/Weights";
import CalenderSection from "../../components/CalenderSection";
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Weights></Weights>
      <div className={styles.routineSection}>
        <CalenderSection></CalenderSection>
      </div>
    </>
  );
}
