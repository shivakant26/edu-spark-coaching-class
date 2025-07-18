import CourseCard from "@/components/CourseCard";
import courseList from "../utils/data/courseData";
export default function Courses() {
  return (
    <section className="courses-section">
      <h2 className="courses-title">📚 Our Courses</h2>
      <p className="courses-subtitle">
        Empowering students from basics to brilliance.
      </p>

      <div className="courses-grid">
        {courseList.map((course, index) => (
          <CourseCard course={course} key={index}/>
        ))}
      </div>
    </section>
  );
}
