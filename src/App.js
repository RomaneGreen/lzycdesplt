import React, { lazy, Suspense, Component } from 'react';
import './App.css';

const Page1 = lazy(() => import('./Components/Page1'));
const Page2 = lazy(() => import('./Components/Page2'));
const Page3 = lazy(() => import('./Components/Page3'));

// import Page1 from './Components/Page1';
// import Page2 from './Components/Page2';
// import Page3 from './Components/Page3';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      // Part 2 - Code Splitting - manual
      // component: null
    }
  }
  onRouteChange = (route) => {
    // Part 1 - No Code Splitting
    this.setState({ route: route });
    // Part 2 - Code Splitting - manual
    // if (route === 'page1') {
    //   this.setState({ route: route })
    // } else if (route === 'page2') {
    //   import('./Components/Page2')
    //     .then((Page2) => {
    //       this.setState({ route: route, component: Page2.default })
    //     })
    //     .catch(err => {
    //     });
    // } else {
    //   import('./Components/Page3')
    //     .then((Page3) => {
    //       this.setState({ route: route, component: Page3.default })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     });
    // }
  }
  render() { 
    // Part 1 - No code splitting
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} /> 
    } else if (this.state.route === 'page2') {
      return <Page2 onRouteChange={this.onRouteChange} /> 
    } else {
      return <Page3 onRouteChange={this.onRouteChange} /> 
    }
}
 }
   
    
    



export default App;
