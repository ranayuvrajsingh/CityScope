import React, { useEffect } from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';

const Cityguide = (props) => {

    useEffect(() => {
        console.log('this is Cityguide');
    }, []);

    return (    
        <div>
        <TopBar />
        <Sidebar />

              <div className="" style={{marginTop:"60px","marginLeft":"80px","height":"90vh",width:"auto"}}>
                <iframe onL src="https://cityguide.super.site" style={{height:"100%",width:"100%"}}></iframe>
              </div>

              </div>

    );
};

export default (Cityguide);