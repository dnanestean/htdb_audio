import React from 'react'
import { Router } from '@reach/router'


import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

//Components
import Home from './Pages/Home'
import Towers from './Pages/Towers'

const generateClassName = createGenerateClassName()
const jss = create(jssPreset())
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point')


class App extends React.Component {
  render() {
    return  (
      <JssProvider jss={jss} generateClassName={generateClassName}>

        <Router>
          <Home path={process.env.PUBLIC_URL + '/'}/>
          <Towers path={process.env.PUBLIC_URL + '/towers'} />
        </Router>

      </JssProvider>
    )
  }
}


export default App
