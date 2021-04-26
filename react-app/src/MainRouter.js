import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Courses, Course, Students, Student } from './components';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/courses/:id' component={Course} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/students/:id' component={Student} />
        </Switch>
    )
}

export default MainRouter;