import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import Error404 from "./pages/Error404";
import PreJunior from './pages/PreJunior';
import HW1 from "../h1/HW1";
import HW2 from '../h2/HW2';
import HW3 from "../h3/HW3";
import HW4 from '../h4/HW4';
import HW6 from '../h6/HW6';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW1 : '/HW1',
    HW2 : '/HW2',
    HW3 : '/HW3',
    HW4 : '/HW4',
    HW6 : '/HW6',
}

function Routes() {
    return (
        <div >
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.HW1} render={() => <HW1/>}/>
            <Route path={PATH.HW2} render={() => <HW2/>}/>
            <Route path={PATH.HW3} render={() => <HW3/>}/>
            <Route path={PATH.HW4} render={() => <HW4/>}/>
            <Route path={PATH.HW6} render={() => <HW6/>}/>
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
