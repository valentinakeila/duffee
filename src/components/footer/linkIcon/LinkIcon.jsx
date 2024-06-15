const LinkIcon = ({ icon, url }) => {
  return (
    <a href={url}>
      <i className={icon}></i>
    </a>
  );
};

export default LinkIcon;
