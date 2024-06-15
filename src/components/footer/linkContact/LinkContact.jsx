const LinkContact = ({ icon, data, url, hoverMesagge }) => {
  return (
    <a className="d-flex gap-2 text-light text-decoration-none link-primary" target="_blank" title={hoverMesagge} href={url}>
      <i className={icon}></i>
      <p>{data}</p>
    </a>
  );
};

export default LinkContact;
