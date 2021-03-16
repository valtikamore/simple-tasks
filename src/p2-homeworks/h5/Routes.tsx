import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Error404 from "./pages/Error404";
import PreJunior from './pages/PreJunior';
import HW1 from "../h1/HW1";
import HW2 from '../h2/HW2';
import HW3 from "../h3/HW3";
import HW4 from '../h4/HW4';
import HW6 from '../h6/HW6';
import HW7 from '../h7/HW7';
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import HW8 from '../h8/HW8';


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/juniorPlus',
    HW1: '/HW1',
    HW2: '/HW2',
    HW3: '/HW3',
    HW4: '/HW4',
    HW6: '/HW6',
    HW7: '/HW7',
    HW8: '/HW8',
}
function Routes() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>
                <Route path={PATH.HW1} render={() => <HW1/>}/>
                <Route path={PATH.HW2} render={() => <HW2/>}/>
                <Route path={PATH.HW3} render={() => <HW3/>}/>
                <Route path={PATH.HW4} render={() => <HW4/>}/>
                <Route path={PATH.HW6} render={() => <HW6/>}/>
                <Route path={PATH.HW7} render={() => <HW7/>}/>
                <Route path={PATH.HW7} render={() => <HW8/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
