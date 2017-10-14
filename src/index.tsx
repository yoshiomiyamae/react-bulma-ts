import * as React from 'react';
import {render} from 'react-dom';
import bulma from './main'

if (require.main !== module) {
  render(
    <div>
      <bulma.Columns.Columns>
        <bulma.Columns.Column>
        TEST
        </bulma.Columns.Column>
      </bulma.Columns.Columns>
    </div>,
     document.getElementById('root')
  );
}
