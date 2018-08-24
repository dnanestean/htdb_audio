import React from 'react';
import styled from 'styled-components'

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const MainContainer = styled.div`
  max-width: 960px
  margin: 0 auto
`;

const App = () =>
  (
    <JssProvider jss={jss} generateClassName={generateClassName}>

      <MainContainer>
        <h1>HTDB Audio</h1>
      </MainContainer>

    </JssProvider>

  );


export default App;
