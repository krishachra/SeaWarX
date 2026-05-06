import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footercnt">

        <div className="footerLft">
          <h2>SeaWarX ⚓</h2>

          <p>
            Command your fleet, attack enemy waters,
            and dominate the sea in the ultimate naval
            battle experience.
          </p>
        </div>

        <div className="footerRght">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>

      </div>

      <p className="team-name">
        Made by Shivam, Narendar & Krish...
      </p>

    </footer>
  )
}
export default Footer