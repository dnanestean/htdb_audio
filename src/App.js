import React from 'react'

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

//Components
import Header from './Components/Header'

const generateClassName = createGenerateClassName()
const jss = create(jssPreset())
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point')


const App = () =>
  (
    <JssProvider jss={jss} generateClassName={generateClassName}>

      <Header/>

    </JssProvider>

  )


export default App
