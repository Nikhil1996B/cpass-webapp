import React, { Component } from 'react'

require('./style.scss')


//** Elastic search component */ 

// TODO - Filter the results on page based on search criteria

class ElasticSearch extends Component {
    render() {
        return (
            <form id="demo-2">
                <input type="search" placeholder="Search" />
            </form>
        )
    }
}

export default ElasticSearch
