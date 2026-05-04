import { useEffect, useRef } from "react";
import "../styles/about.css";

function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.475;
    }
  }, []);

  return (
    <div className="about-page">
     
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/videos/AboutBgVideo.mp4" type="video/mp4" />
      </video>

     
      <div className="about-container">
        <h1>About SeaWarX</h1>

        <p>
          SeaWarX is a modern web-based recreation of the classic Battleship game,
          designed to provide an engaging and interactive strategy experience directly
          in the browser.
        </p>

        <p>
          Players compete against an AI-driven opponent on a grid-based battlefield,
          where each move requires logical thinking, prediction, and careful planning.
        </p>

        <p>
          The application is built using React.js with a component-based architecture,
          ensuring scalability, maintainability, and clean code structure.
        </p>

        <p>
          This project was developed collaboratively, helping us understand real-world
          development practices like Git workflows, branching, and pull requests.
        </p>
        <p>
  SeaWarX also emphasizes structured game flow and user interaction. Each turn is
  carefully managed to ensure that the player and the AI alternate moves seamlessly,
  creating a balanced and engaging experience. The system ensures that invalid moves,
  such as repeated attacks on the same cell, are prevented, maintaining fairness and
  consistency throughout the gameplay.
</p>

<p>
  Another important aspect of the project is the implementation of real-time visual
  feedback. Players receive immediate responses for every action, including clear
  indicators for hits and misses. This enhances user understanding and keeps the
  gameplay intuitive, allowing players to quickly adapt their strategy based on
  previous outcomes.
</p>

<p>
  The project also demonstrates efficient state management within a React application.
  Game data such as board state, ship positions, attack history, and game status are
  handled dynamically using state variables. This ensures that the UI updates instantly
  in response to user actions, providing a smooth and responsive experience.
</p>

<p>
  From a design perspective, SeaWarX focuses on clarity and usability rather than
  unnecessary complexity. The layout is structured to guide the user naturally through
  the game, with clear sections for player and opponent boards, status updates, and
  controls. This approach ensures that users can focus on gameplay without confusion.
</p>

<p>
  The development of SeaWarX also highlights the importance of teamwork in software
  projects. Tasks were divided among team members based on different areas such as UI
  development, game logic implementation, and integration. This collaborative approach
  improved efficiency and provided valuable experience in coordinating work within a
  shared codebase.
</p>

<p>
  In addition, the project incorporates best practices in modern web development,
  including code modularity, separation of concerns, and reusable components. These
  practices not only improve the current project but also make it easier to extend in
  the future with features such as multiplayer support, enhanced AI strategies, or
  advanced animations.
</p>

<p>
  Overall, SeaWarX represents a blend of classic game design and modern development
  techniques. It showcases how a simple concept can be expanded into a fully interactive
  web application through thoughtful design, structured logic, and effective use of
  frontend technologies.
</p>
      </div>
    </div>
  );
}

export default About;