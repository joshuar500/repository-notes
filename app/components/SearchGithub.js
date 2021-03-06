import React from 'react';

class SearchGithub extends React.Component {
    getRef(ref){
        this.usernameRef = ref;
    }
    handleSubmit(){
        const username = this.usernameRef.value;        
        this.usernameRef.value = '';
        this.context.router.push("/profile/" + username);
    }   
    render(){
        return(
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div className="form-group col-sm-6">
                        <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
                    </div>
                    <div className="form-group col-sm-4">
                        <button type="submit" className="btn btn-block btn-default">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGithub.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SearchGithub;