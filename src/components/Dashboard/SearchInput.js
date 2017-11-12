import React from 'react';

class SearchInput extends React.Component {
    render(){
        return (
            <div>
                    <span className="pull-left">Search Movies : </span><br/>
                    <input type="text" className="pull-left"/>
            </div>
        );
    }
}

export default SearchInput;