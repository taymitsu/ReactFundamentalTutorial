import './POPOSSpace.css';

function POPOSSpace(props) {
  const { image, name, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{ name }</h1>
      <div>{ address }</div>
    </div>
  )
}

export default POPOSSpace;