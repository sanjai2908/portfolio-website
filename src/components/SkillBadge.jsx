import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const iconMap = {
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Bootstrap: SiBootstrap,
  "React.js": SiReact,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": FiCode,
  "MS Office": null,
};

export function SkillBadge({ skill }) {
  const IconComponent = iconMap[skill];

  return (
    <span className="tag skill-tag">
      <span className="skill-icon">
        {IconComponent ? <IconComponent /> : "📊"}
      </span>
      {skill}
    </span>
  );
}
