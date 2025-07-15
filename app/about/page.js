import Image from "next/image";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About EduSpark Coaching Classes</h2>
          <p className="tagline">
            “Education for All, Empowerment for Every Student”
          </p>
          <p>
            <strong>EduSpark Coaching Classes</strong> was founded in{" "}
            <strong>2025</strong> by <strong>Mr. Shivakant Tiwari</strong> with
            a clear vision — to provide quality education to every student,
            regardless of their background or financial status. Situated in the
            heart of the community, our coaching center currently runs in
            offline mode, but soon we are expanding to online platforms to reach
            even more learners across the region.
          </p>
          <p>
            We believe that every child has a spark within — some just need the
            right environment, the right guidance, and someone who truly
            believes in them. At EduSpark Coaching Classes, we are committed to
            becoming that guiding light for each student.
          </p>

          <p>
            Our mission is especially focused on helping academically weak or
            underconfident students. We aim to provide them not just subject
            knowledge, but life skills, confidence, and motivation to succeed in
            all walks of life. With affordable fees, personal attention, and
            continuous support — we strive to remove the fear of study and build
            a love for learning.
          </p>

          <p>
            Whether it's <strong>school coaching from class 1st to 10th</strong>
            , <strong>11th–12th PCM preparation</strong>, or{" "}
            <strong>
              competitive exams like Navodaya, reasoning, and general knowledge
            </strong>{" "}
            — we cover it all with care and passion.
          </p>
          <ul className="points">
            <li>✅ Teaching beyond syllabus — with moral values</li>
            <li>✅ Affordable fees for every student</li>
            <li>✅ Monthly motivational sessions & goal setting</li>
            <li>✅ Special focus on weak and shy students</li>
            <li>✅ A roadmap to help them discover their future</li>
          </ul>
          <p>
            At EduSpark Coaching Classes, we don’t just teach — we prepare
            children for life.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/images/about-img.jpg"
            alt="EduSpark Coaching Classes Students"
            width={800}
            height={600}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
