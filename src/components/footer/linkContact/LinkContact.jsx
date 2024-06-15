const LinkContact = ({ icon, data, url }) => {
  return (
    <a href={url}>
      <i className={icon}></i>
      <p>{data}</p>
    </a>
  );
};

export default LinkContact;
