import React from 'react'
import { firebase } from './firebase'
import * as fiery from 'fiery'
import { Card } from 'antd'

export default class BlogList extends React.Component {
  render() {
    const dataRef = firebase.database().ref('/blog')
    return (
      <fiery.Data dataRef={dataRef}>
        {blogState =>
          fiery.unwrap(blogState, {
            loading: () => <h1 style={{ textAlign: 'center' }}>Loading</h1>,
            completed: blogs =>
              Object.keys(blogs).map(key => (
                <Card
                  key={key}
                  title={blogs[key].title}
                  style={{ marginTop: '20px', marginBottom: '20px' }}
                >
                  {blogs[key].content}
                </Card>
              )),
            error: () => <h1>ERROR</h1>
          })
        }
      </fiery.Data>
    )
  }
}
