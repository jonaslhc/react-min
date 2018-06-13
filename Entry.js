const { React, ReactDom } = window;

window.addEventListener('load', function() {
  console.log(React);
  ReactDOM.render(
    React.createElement(Greeting, null),
    document.body
  );
});

class Greeting extends React.Component {
  render() {
    return (
        React.createElement('h1', null, 'Hello, world!')
    );    
  }
}
