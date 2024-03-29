import Image from "next/image";
import style from "../src/styles/Navbar.module.css";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
      <div className={style.navigationBar}>
        <h2 className={style.logoText}>gymbro</h2>
        <div>
            <h4>History</h4>
        </div>
        <h2 className={style.profileName}>Hey Mihir</h2>
      </div>
    </nav>
  );
}