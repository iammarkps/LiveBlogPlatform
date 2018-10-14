import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { firebase } from './firebase'

const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class adminPanel extends React.Component {
  state = {
    title: '',
    content: ''
  }

  componentDidMount() {
    this.props.form.validateFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        firebase
          .database()
          .ref('/blog')
          .push({
            title: '5',
            content: 'ggfirebase'
          })
      }
    })
  }

  submitToFirebase() {}

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form

    const titleError = isFieldTouched('title') && getFieldError('title')
    const contentError = isFieldTouched('content') && getFieldError('content')
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={titleError ? 'error' : ''}
          help={titleError || ''}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input title!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Title"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={contentError ? 'error' : ''}
          help={contentError || ''}
        >
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input content!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Content"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Add
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedAdminPanel = Form.create()(adminPanel)
export default WrappedAdminPanel
