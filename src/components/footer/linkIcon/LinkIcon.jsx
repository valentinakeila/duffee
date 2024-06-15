const LinkIcon = ({ icon, url, hoverMesagge }) => {
  return (
    <a className="d-flex" target="_blank" title={hoverMesagge} href={url}>
      <div className="bg-light text-black link-primary px-2 py-1 rounded-circle" style={{fontSize: "22px"}}>
        <i className={icon}></i>
      </div>
    </a>
  );
};

export default LinkIcon;
