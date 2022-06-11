


function Img({url,title,className}) {
  return (
    <div>
      <img className={className} src={url} alt={title} />
    </div>
  );
}

export default Img;