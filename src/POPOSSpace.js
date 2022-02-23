import logo from './logo.svg'

function POPOSSpace() {
  return (
    <div>
      <h1>Name...</h1>
      <img 
        src={`${process.env.PUBLIC_URL}/images/50-california-st.jpg`}    
        width="300"
        height="300"
        alt="Hello"
      />
      <div>Address...</div>
    </div>
  )
}

export default POPOSSpace