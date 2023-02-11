import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container my-10">
      <div className="header">
        <h1>Ibnu Topan</h1>
        <p className="position">Software Engineer</p>
        <div>
          <h2>Summary</h2>
          <p className="summary">
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
              width="80px"
              alt=""
            />
            Deadline-oriented software engineer with lots of experience. Solid
            track record of architecting solutions that exceed client
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
