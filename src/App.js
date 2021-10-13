import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './component/Menu/Menu'
import routes from './routes'
function App() {
  return (
    <Router>
      <>
        <Menu />
        <Switch>
          {routes.map((route, i) => {
            const { path, exact, main } = route;
            return (<Route key={i}
              path={path}
              exact={exact}
              component={main}
            />)

          })}
        </Switch>

      </>

    </Router>


  )

}

export default App
