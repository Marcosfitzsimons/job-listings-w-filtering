import { useEffect, useState } from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import axios from 'axios';

function App() {

  const [jobList, setJobList] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);


  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => setJobList(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter job listenings


  return (
    <div className="App h-full">
      <Header />
      <MainContent jobList={jobList} setFilteredTags={setFilteredTags} filteredTags={filteredTags} />
    </div>
  );
}

export default App;
