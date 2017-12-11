


class Clock extends React.Component {

  // call super on props and assign state
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    }

  // when component is mounted, it launches a delayed setState
  // setState will call render
  componentDidMount() {
    this.timerID =  setInterval(
      () =>  this.setState({ date: new Date() })
        , 1000)}

  // when unmounted, setInterval is cleared
  componentWillUnmount() {clearInterval(timerID)}

  render() {
    return (<span className="clock">  { this.state.date.toLocaleString() }  </span>);
    }
}
