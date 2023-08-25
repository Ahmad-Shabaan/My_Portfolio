import "./Footer.css";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const socialIcons = [
    {
      url: "https://facebook.com",
      icon: FaFacebook,
    },
    {
      url: "https://linkedin.com",
      icon: FaLinkedin,
    },
    {
      url: "https://github.com",
      icon: FaGithub,
    },
    {
      url: "https://twitter.com",
      icon: FaTwitter,
    },
  ];

  return (
    <div>
      <div className="sideContent">
        <div className="follow">
          <p style={{ margin: "0" }}>Follow Me</p>
        </div>
        {socialIcons.map((child) => {
          const Icon = child.icon;
          return (
            <a
              href={child.url}
              key={child.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}


