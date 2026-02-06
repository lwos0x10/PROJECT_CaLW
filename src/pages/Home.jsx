import './Home.css';

function Home() {
  const projectName = "PROJECT_CaLW";

  return (
    <div className="container">
      <header className="header">
        <h1>PROJECT CaLW</h1>
      </header>

      <p className="header">This is official website of PROJECT CaLW</p>

      <section className="enter">
          <div className="enter-button">
            <p><a href="/About">Go to page</a></p>
        </div>
      </section>
    </div>
  );
}

export default Home;

