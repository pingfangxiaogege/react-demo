import React from "react";
import './index.css';
import { Input, Button, List, Form } from 'antd';
const { TextArea } = Input;


export default class WorkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      workContent: '',
      workList: []
    }
  }

  formRef = React.createRef();

  handleInputChange = ({target}) => {
    this.setState({
      workContent: target.value
    });
  }
  onFinish = (values) => {
    this.setState({
      workList: [...this.state.workList, values]
    });
    this.formRef.current.resetFields();
  }
  
  render() {
    const {workContent, workList} = this.state;

    return (<div className='content'>
      <div>
        <h1>今日工作</h1>
        <Form
          name="basic"
          labelCol={{
            span: 2,
          }}
          ref={this.formRef}
          onFinish={this.onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your title!',
              },
            ]}
          >
            <Input placeholder='标题'></Input>
          </Form.Item>
          <Form.Item
            label="工作简述"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <TextArea value={workContent} rows={4} placeholder='请输入今日工作内容'  onChange={this.handleInputChange}></TextArea>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 2,
            }}
          >
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <h1>工作列表</h1>
        <List
          itemLayout="horizontal"
          dataSource={workList}
          bordered
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>)
  }
}