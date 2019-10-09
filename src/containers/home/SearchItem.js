import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

class SearchItem extends Component {
    
    render() {
        return (
            <div>
                 <Grid>
        <Grid.Column width={6}>
          <Search
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
            // {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          
        </Grid.Column>
      </Grid>
            </div>
        )
    }
}


export default SearchItem