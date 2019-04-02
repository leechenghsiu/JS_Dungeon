import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Boss1 from './1F_BOSS_9x9/components/Boss1';
import Boss2 from './2F_BOSS_CLOCK/components/Boss2';
import Boss3 from './3F_BOSS_CALCULATOR/components/Boss3';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/3F_BOSS_CALCULATOR" component={Boss3} />
        <Route path="/2F_BOSS_CLOCK" component={Boss2} />
        <Route path="/1F_BOSS_9x9" component={Boss1} />
        <Route path="/">
          <Redirect to={{ pathname: '/1F_BOSS_9x9' }} />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.querySelector('#root')
);
