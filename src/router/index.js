import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

const home = React.lazy(() => import('../pages/home'));
const workList = React.lazy(() => import('../pages/work-list'));

export default function routers() {
  return <>
    <React.Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/" exact component={ home } />
        <Route path="/work-list" exact component={ workList } />
      </Switch>
    </React.Suspense>
  </>
}