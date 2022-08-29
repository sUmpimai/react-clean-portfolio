import WorkItem from './WorkItem.js';
import dataWorks from '../../mock.json';
import { useEffect, useState } from 'react';


const WorkList = () => {

    const [data, setData] = useState([]);

    const getData = () => {
      fetch(dataWorks)
        .then(res => res.json())
        .then(data => setData(data))
    };

    useEffect(() => {
      getData();
    },[]);

    return (
    <div className='portfolio'>
      <div className='container'>
        <h2 className='mb-5 mt-5'>My Works.</h2>
          {data && data.length>0 ? <WorkItem items={data}/> : "No data" }  
      </div>
    </div>
    );
}

export default WorkList;