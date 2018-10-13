import React from 'react'
import { Menu, Icon } from 'antd'
import 'antd/dist/antd.css'
import BlogList from './blogList'
import Admin from './admin'
import { withRouter, HashRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
    current: 'home'
  }

  handleClick = e => {
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Icon type="home" />
              Home
            </Menu.Item>
            <Menu.Item key="admin" onClick={this.props.history.push('/admin')}>
              <Icon type="edit" />
              Admin
            </Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default withRouter(App)
