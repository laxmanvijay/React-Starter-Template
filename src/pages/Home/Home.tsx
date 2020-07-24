import React from 'react';
import './Home.scss';
import Button from '../../shared/Button/Button';

export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return ( 
        <div>
            Home Works!
            <Button></Button>
        </div>
     );
}
 
export default Home;