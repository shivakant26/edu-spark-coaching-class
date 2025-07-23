'use client';
import { useRouter } from 'next/navigation';
import styles from './join.module.css';
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

export default function JoinNowPage() {
  const router = useRouter();
  const handleClick = (role) => {
    router.push(`/join-now/${role}`);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Join As</h1>
      <div className={styles.cardWrapper}>
        <div className={styles.card} onClick={() => handleClick('admin')}>
            <RiAdminFill className={styles.icon}/>
          <h2>Admin</h2>
        </div>
        <div className={styles.card} onClick={() => handleClick('teacher')}>
          <GiTeacher className={styles.icon}/>
          <h2>Teacher</h2>
        </div>
        <div className={styles.card} onClick={() => handleClick('student')}>
          <PiStudentFill className={styles.icon}/>
          <h2>Student</h2>
        </div>
      </div>
    </div>
  );
}
