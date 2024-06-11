import "./linkIcon.css";

const LinkIcon = ({ icon, url }) => {
  return (
    <a className="linkI-container" href={url}>
      <i className={icon}></i>
    </a>
  );
};

export default LinkIcon;
