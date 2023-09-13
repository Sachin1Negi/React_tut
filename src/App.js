// import About from './About'
// import Form from './form'
// import Route_Api from './Route'
// import Api from './Api.js'
import Jwt from './Jwt'

function App() {
  return (
    <div>
      <Jwt />
    </div>
  );
}

export default App;  //In functions we need to write it in the end to export the function.

//////////////////////////////////////////////////////////////////////////////////
// Note: React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.

//In easy words : components must have their first letter capital. JSX uses this idea to differentiate between the HTML tags and the components.