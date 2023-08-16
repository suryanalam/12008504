import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TrainDetailCard from './components/TrainDetailCard';


function App() {

  const [trainData, setTrainData] = useState([]);

  const filterTrainsByDepartureTime = async (data) => {
      let newData = data.filter((train)=>train.departureTime.Minutes > 30 && train.departureTime.Hours > 0);
      setTrainData(newData);
  }

  const fetchData = async () =>{
    const res = await axios.get('http://20.244.56.144:80/train/trains', {
      headers: {
        authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIxOTYxMzEsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNWM5OWEwM2MtZWE5Yy00NmMzLThkNTYtMGY4NTQwOTBiMTg3Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjEyMDA4NTA0In0.J78YDq_-rQfP0eeXEXxtAQJIbC-IqkMeacbOQ6Zbcww'
      }
    })

    let data = res.data;
    await filterTrainsByDepartureTime(data);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
        <h1>Train Details</h1>
        <div className='trains-detail-card-bg'>
        {
          trainData.map((trainDetails,index)=>(<TrainDetailCard data = {trainDetails}  key = {index}/>))
        }
        </div>
    </div>
  );
}

export default App;
