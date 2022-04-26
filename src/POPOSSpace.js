import './POPOSSpace.css';

function POPOSSpace({ name, image, address, hours }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{ name }</h1>
      <div>{ address }</div>
      <p>{hours}</p>
    </div>
  )
}

export default POPOSSpace;