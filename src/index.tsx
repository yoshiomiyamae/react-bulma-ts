import * as React from 'react';
import {render} from 'react-dom';
import bulma from './main'

if (require.main !== module) {
  render(
    <div>
      <bulma.Input type={bulma.InputTypes.Password}/>
    </div>,
     document.getElementById('root')
  );
}
