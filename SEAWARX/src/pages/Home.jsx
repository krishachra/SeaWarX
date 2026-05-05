import {Link} from "react-router-dom";
import "../styles/home.css"
import logo from "../assets/logo.svg";

function Home() {
    return (
        <>
          <main className="home-page">
            <section className="hero">
                <h1 className="glow-head">BATTLESHIP</h1>
              <div className="game-title">
                <span></span>
                <p>★ SEWARX ★</p>
                <span></span>
              </div>
              <p className="tagline">
                Command your fleet. Sink every enemy ship. Claim victory
              </p>
            </section>
            <section className="home-card">
              <div className="box">
                <h2>🚢 YOUR BOARD</h2>
                <div className="preview-grid">
                  {Array.from({length: 25}).map((_, index) => (
                    <div className="preview-cell" key={index}>
                      {[0, 7, 12, 18, 23].includes(index) ? "🚢" : ""}
                    </div>
                  ))}
                </div>
                <p>Place your ships on the grid</p>
              </div>

              <div className="home-info">
                <h2>🎯 HOW TO PLAY</h2>
                <p><span>1.</span> Place your ships.</p>
                <p><span>2.</span> Attack enemy cells</p>
                <p><span>3.</span> Hit or miss will show</p>
                <p><span>4.</span> Sink all ships to win</p>
                <Link to="/game" className="start-btn">
                 START GAME
                </Link>
              </div>

              <div className="box">
                <h2 className="enemy-title">♟ ENEMY BOARD</h2>
                <div className="preview-grid">
                  {Array.from({length: 25}).map((_, index) => (
                    <div className="preview-cell" key={index}>
                    {[2, 11, 23].includes(index) ? "🔥" : ""}
                    {[6, 17].includes(index) ? "❌" : ""}
                    </div>
                  ))}
                </div>
                <p>Attack enemy ships</p>
              </div>
            </section>
            <section className="features">
              <div>
                <h3>🚢 STRATEGY</h3>
                <p>Plan your moves and outsmart the computer.</p>
              </div>
              <div>
                <h3>🎯 ACCURACY</h3>
                <p>Aim carefully and destroy enemy ships</p>
              </div>
              <div>
                <h3>🏆 VICTORY</h3>
                <p>Be the frist to sink all enemy ships</p>
              </div>
            </section>
          </main>
        </>
    )
}

export default Home;