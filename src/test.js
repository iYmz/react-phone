import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';
import paramUrl from './param';
import{Card,Table,Input, AutoComplete} from 'antd';
import axios from 'axios';
import Background from './pic/alpine-lake-4243396_1920.jpg';
const Search = Input.Search;
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
  return(      
    <div>
    <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
      <Table
        columns={columns}
        dataSource={this.state.dataSource2}
        pagination={false}
      />
    </Card>
    <Button type="primary" onClick={this.handleClick}>Button</Button>
</div>
  )
}
export default class BasicTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dataSource2:[]
      }
      paramUrl.baseUrlMock = 'https://easy-mock.com/mock/5ce49c0071eacc5100022a19';
      paramUrl.baseUrl = 'http://localhost:8080/phones'
      this.handleClick = this.handleClick.bind(this);
}
  
  componentDidMount(){
    this.request()
  }

handleClick=(type)=>{
  axios.get(paramUrl.baseUrl+'/info/?type='+type).then((res) =>{ 
    console.log(paramUrl.baseUrl+'/info/?type='+type);
    console.log(res.data);
    this.setState({
      dataSource2:res.data
    })
    })
}

  //动态获取mock数据
  request=()=>{
    
    axios.get(paramUrl.baseUrlMock+'/test').then((res)=>{
      // console.log(JSON.stringify(res))
        console.log(res.data);
        this.setState({
          dataSource2:res.data
        })
      
    })
  }
  render(){
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
    
    return(
      <div  style={sectionStyle}>
      <div id="search_table" style={tableStyle}>
      <Search placeholder="input search text"   onSearch={value => this.handleClick(value)} enterButton />
        <br></br>
        <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Button type="primary" onClick={this.handleClick}>Button</Button>
      </div>
      </div>
    )
  }
}