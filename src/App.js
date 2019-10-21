import React, { Component } from 'react';
import './App.css';
import paramUrl from './param';
import { Input, Select, Layout, Icon, Button, Row, Col } from 'antd';
import Background from './pic/alpine-lake-4243396_1920.jpg';
import { Redirect } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const Search = Input.Search;
const BgStyle = {
  width: "100%",
  height: "1080px",
  backgroundImage: 'url(' + Background + ')'
}
const DemoBox = props => <p className={`height-${props.value}`} style={{ height: `${props.value}` }}>{props.children}</p>;


export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      redirect: false,
      value: 1,
      selectMode: '模糊搜索',
      searchText:''
    }
    paramUrl.baseUrlMock = 'https://easy-mock.com/mock/5ce49c0071eacc5100022a19';
    paramUrl.baseUrl = 'http://localhost:8080/phones'

    this.handleClick = this.handleClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({ selectMode: value })
  }
  handleClick = (value) => {

    this.setState({ redirect: true });
    this.setState({searchText:value});
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };


  render() {
    if (this.state.redirect) {
      return (<Redirect push to="/SearchPhone"></Redirect>)
    }
    
    console.log("Search text is : " + this.state.searchText);
    return (
      <div id="search_input_bg" >

        <div className="seach_input_div">
          <div className='search_type_rows' >
            <div>
            <Row type="flex" justify="space-between" align="bottom" >

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>
              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>
              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>
              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>

            </Row>
            </div>
            <div > 
            <Row type="flex" justify="space-between" algin="top" style={{height:'60px'}}>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>
            </Row>  
            </div>
            <div >
            <Row type="flex" justify="space-between" align="bottom">

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>
              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>
              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>
              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <Button shape='circle' icon='bank'></Button></div>
              </Col>

            </Row>
</div><div style={{height:'60px'}}>
            <Row type="flex" justify="space-between" algin="top" >

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>

              <Col span={5} >
                <div style={{ textAlign: 'center' }}>
                  <p>商业公司</p></div>
              </Col>
            </Row>
</div>
          </div>
          <div className='search'>
            <Search
              addonBefore={
                <Select defaultValue="模糊搜索" onChange={this.handleSelectChange} style={{ width: 90 }}>
                  <Option value="FuzzySearch">模糊搜索</Option>
                  <Option value="ExactSearch">完全匹配</Option>
                </Select>
              }
              size="large"
              placeholder="在此输入需查找信息"
              onSearch={value => this.handleClick(value)}
              enterButton >
            </Search>
          </div>
        </div>

      </div>
    )

  }
}