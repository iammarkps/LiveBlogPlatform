import React from 'react'
import { Menu, Icon, Row, Col } from 'antd'
import BlogList from './blogList'
import { withRouter, Route, Switch } from 'react-router-dom'
import AdminPanel from './admin'

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
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home" onClick={() => this.props.history.push('/')}>
            <Icon type="home" />
            Home
          </Menu.Item>
          <Menu.Item
            key="admin"
            onClick={() => this.props.history.push('/admin')}
          >
            <Icon type="edit" />
            Admin
          </Menu.Item>
        </Menu>
        <Row>
          <Col span={12} offset={6}>
            <Switch>
              <Route exact path="/" component={BlogList} />
              <Route path="/admin" component={AdminPanel} />
            </Switch>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(App)
