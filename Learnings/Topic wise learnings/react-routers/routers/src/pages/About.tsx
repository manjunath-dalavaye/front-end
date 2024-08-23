import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = () => {
    const [message,setMessage]=useState('Manjunath');
    const {number}=useParams();
    

    useEffect(()=>{
        if(number)
        {
            setMessage('The number is '+ number);
        }
        else{
            setMessage('No message was provided');
        }
    },[]);


    return (      
    <div>
     <p>About page</p>
     <p>{message}</p>
    </div>
    );
};

export default AboutPage;