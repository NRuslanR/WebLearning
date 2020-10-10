class Time extends React.Component {

  render() {

    return <h1>Current Time - {new Date().toLocaleTimeString()}</h1>
    
  }
}
