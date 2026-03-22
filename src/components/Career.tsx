import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Rajasthan Royals</h5>
              </div>
              <h3>PAST</h3>
            </div>
            <p>
              Designed layouts and visual assets for digital platforms.
              Worked within professional design workflows and collaborative team environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Intern</h4>
                <h5>Upflre Company</h5>
              </div>
              <h3>RECENT</h3>
            </div>
            <p>
              Contributed to full-stack web development, handling responsive frontend UI and backend logic.
              Collaborated with developers on real-world product features, APIs, and deployment workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Winner (3rd)</h4>
                <h5>Smart India Hackathon (SIH), JIET</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Secured 3rd Position at Smart India Hackathon (SIH) in September 2025.
              Recognized for innovative problem-solving and team collaboration during the hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
