import React from 'react';
import SearchGithub from './SearchGithub';

const Main = ({history, children}) => {
    return(
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                <div class="container">
                    <div className="col-md-4 col-md-offset-7" style={{marginTop: 15}}>
                        <SearchGithub history={history}/>
                    </div>
                </div>
                </nav>
                <div className="container">
                {children}
                </div>
            </div>
        )
}



export default Main;