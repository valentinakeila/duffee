import "./linkContact.css";

const LinkContact = ({ icon, data, url }) => {
  return (
    <a className="linkC-container" href={url}>
      <i className={icon}></i>
      <p>{data}</p>
    </a>
  );
};

export default LinkContact;
