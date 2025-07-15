export default async function Home() {
  return (
    <div>
      <div className="banner">
        <div className="center_wr">
          <div className="banner-content">
            <h1>Unlock Your Bright Future</h1>
            <p>
              Join the top coaching institute for SSC, Banking, UPSC & more.
            </p>
            <a href="/courses" className="cta-button">
              Explore Courses
            </a>
          </div>
        </div>
      </div>
      <section className="why-choose-us">
        <div className="center_wr">
          <h2>Why Choose Edu Spark Coaching Classes?</h2>
          <p className="subheading">
            We provide quality education from basics to brilliance!
          </p>
          <div className="features-container">
            <div className="feature-box">
              <h3>📘 Classes 1st to 10th</h3>
              <p>
                All subjects with complete conceptual clarity & personal
                attention.
              </p>
            </div>
            <div className="feature-box">
              <h3>🧪 11th & 12th PCM</h3>
              <p>
                Physics, Chemistry & Maths by subject experts with test series.
              </p>
            </div>
            <div className="feature-box">
              <h3>🏫 Navodaya Preparation</h3>
              <p>
                Focused preparation for Navodaya entrance — with practice
                papers.
              </p>
            </div>
            <div className="feature-box">
              <h3>🧠 Reasoning & Aptitude</h3>
              <p>Logical reasoning sessions for competitive exam success.</p>
            </div>
            <div className="feature-box">
              <h3>📊 Math Mastery</h3>
              <p>
                From basics to advanced — shortcut techniques & tricks included.
              </p>
            </div>
            <div className="feature-box">
              <h3>🌍 General Knowledge</h3>
              <p>
                Stay updated with daily current affairs & static GK quizzes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="center_wr">
          <h2>Our Courses</h2>
          <p className="courses-subheading">
            We offer a wide range of coaching from school to competitive level.
          </p>

          <div className="course-grid">
            <div className="course-card">
              <span className="course-icon">📘</span>
              <h3>1st to 10th (All Subjects)</h3>
              <p>
                Comprehensive school coaching with personal attention and
                regular tests.
              </p>
            </div>

            <div className="course-card">
              <span className="course-icon">📐</span>
              <h3>11th & 12th (PCM)</h3>
              <p>
                Physics, Chemistry, and Math coaching by expert faculty with
                detailed notes.
              </p>
            </div>

            <div className="course-card">
              <span className="course-icon">🏫</span>
              <h3>Navodaya Entrance</h3>
              <p>
                Focused preparation with practice sets and strategy for Navodaya
                exam.
              </p>
            </div>

            <div className="course-card">
              <span className="course-icon">🧠</span>
              <h3>Reasoning & Aptitude</h3>
              <p>
                Short tricks and concepts to master reasoning for competitive
                exams.
              </p>
            </div>

            <div className="course-card">
              <span className="course-icon">📊</span>
              <h3>Math Mastery</h3>
              <p>
                Math from basics to advanced — including mental math techniques.
              </p>
            </div>
            <div className="course-card">
              <span className="course-icon">🌍</span>
              <h3>General Knowledge</h3>
              <p>
                Static GK & current affairs with quizzes and weekly updates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="commitment-section">
        <div className="center_wr">
          <div className="commitment-container">
            <div className="commitment-text">
              <h2>🎯 Our Commitment</h2>
              <p className="tagline">
                We don't just teach — we build a brighter future.
              </p>
              <p>
                At Bright Future Coaching, our goal is to guide every student
                toward success with proper planning, personal attention, and the
                right motivation.
              </p>
              <ul className="commitment-list">
                <li>✅ Daily doubt-solving sessions</li>
                <li>✅ Small batch size for personal focus</li>
                <li>✅ Regular class tests & performance tracking</li>
                <li>✅ Monthly motivation & progress meetings</li>
                <li>✅ Special support for weak students</li>
              </ul>
            </div>
            <div className="commitment-image">
              <img src="/images/our-misson.jpg" alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
