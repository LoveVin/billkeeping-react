import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import EditTag from 'views/EditTag';

const AppWrapper = styled.div`
  color: #333;
  max-width: 450px;
  margin: 0 auto;
  background: #f5f5f5;
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route exact path="/tags/:id">
                        <EditTag/>
                    </Route>
                    <Route exact path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
