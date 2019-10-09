import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import HomeCard from './card'
import './home.css'
import card from './card';
import TabTable from './tabTable'
import SearchItem from './SearchItem'
const panes = [
    { menuItem: 'Faviourate', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'BTC Markets', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'USDC markets', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'EXTO markets', render: () => <Tab.Pane><TabTable></TabTable></Tab.Pane> },
    { menuItem: 'Search',render: () => <SearchItem></SearchItem>}
  ]
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div>
                <div className='banner'>
                    <img className='banner_img' src='https://static1.bigstockphoto.com/0/1/2/large1500/210463369.jpg' />
                </div>
            <div className='container'>
            <div className="mydiv">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
            </div>
            <div className='tbs'>
                <Tab panes={panes} />
            </div>
                
            </div> 
            </div>
        )
    }
} 
export default Home;