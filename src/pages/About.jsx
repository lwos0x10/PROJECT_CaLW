import "./About.css";

export default function About() {
  return (
<div className="about-page">

      {/* HERO (SAME AS HOME) */}
      <section className="about-title">
        <h1>PROJECT CaWL</h1>
        <p>This is official website of PROJect CaLW</p>
      </section>
      <section className="about-website">
      <p>Blah blah blah blah blah blah blah</p>
      </section>

      <section className="about-content">
        <h2>About Us</h2>

        <div className="about-us">
          <div className="person-card">
            <h3>LWOS0x10</h3>
            <a href="/LWOS0x10-info">Go to page</a>
          </div>

          <div className="person-card">
            <h3>Cringe</h3>
            <a href="/Cringe-info">Go to page</a>
          </div>
        </div>
      </section>

    </div>
  );
}

