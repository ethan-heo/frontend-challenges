import GithubIcon from "./assets/icons/github-mark.svg?react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-inner">
        <ul className="header-icon-list">
          <li>
            <a
              href="https://github.com/ethan-heo"
              rel="noopener"
              target="_blank"
              aria-label="github link"
            >
              <GithubIcon
                preserveAspectRatio="xMidYMid meet"
                width={32}
                height={32}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
