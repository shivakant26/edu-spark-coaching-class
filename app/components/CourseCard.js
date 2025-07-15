export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-icon">{course.icon}</div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}
