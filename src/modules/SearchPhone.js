import React, { Component } from 'react';
import Button from 'antd/lib/button';
import paramUrl from '../param';
import{Card,Table,Input, AutoComplete} from 'antd';
import axios from 'axios';
import Background from '../pic/alpine-lake-4243396_1920.jpg';
import { Radio } from 'antd';
const Search = Input.Search;
const columns=[
  {
    title:'id',
    dataIndex:'id',
    width:'100px'

  },
  {
    title:'电话号码',
    dataIndex:'mobile'
  },
  {
    title:'信息',
    dataIndex:'info'
  },
  {
    title:'地址',
    dataIndex:'address'
  }
]
const sectionStyle={
  width: "100%",
  height:"1080px",
  backgroundImage: 'url('+Background+')'
}
const tableStyle={
  margin: '0 auto',
  width:'70%'
}
function getTableTest(){
  this.props.history.push("/test");
}
export default class SearchPhone extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dataSource2:[],
      value: 1
      }
      paramUrl.baseUrlMock = 'https://easy-mock.com/mock/5ce49c0071eacc5100022a19';
      paramUrl.baseUrl = 'http://localhost:8080/phones'
      
      this.handleClick = this.handleClick.bind(this);
}
  

handleClick=(type)=>{
  let targetUrlValue = this.state.value;
  let targetUrl = '/info/?type=';
  console.log(targetUrlValue);
  if(targetUrlValue==2) 
    targetUrl = '/mobile/?number='
  axios.get(paramUrl.baseUrl+targetUrl+type).then((res) =>{ 
  console.log(paramUrl.baseUrl+targetUrl+type);
  console.log(res.data);
  this.setState({
      dataSource2:res.data
    })
    })
}

  //动态获取mock数据
  // request=()=>{
    
  //   axios.get(paramUrl.baseUrlMock+'/test').then((res)=>{
  //     // console.log(JSON.stringify(res))
  //       console.log(res.data);
  //       this.setState({
  //         dataSource2:res.data
  //       })
      
  //   })
  // }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render(){
    return(
      
      <div  style={sectionStyle}>

      <div id="search_table" style={tableStyle}>
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>电话信息</Radio>
        <Radio value={2}>电话号码</Radio>
      </Radio.Group>
      <Search placeholder="input search text" style={{marginTop:'10%'}}  onSearch={value => this.handleClick(value)} enterButton />
        <br></br>
        <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Button type="primary" onClick={this.getTableTest}>Button</Button>
      </div>
      </div>
    )
  }
}