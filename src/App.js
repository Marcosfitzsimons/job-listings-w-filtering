import { useEffect, useState } from 'react';
import data from "../src/data.json";
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [jobList, setJobList] = useState(data);
  const [filteredTags, setFilteredTags] = useState([]);

  // Filter job listenings

  const filterJobs = filteredTags => {
    if (filteredTags.length > 0) {
      const filteredJobs = jobList.filter(job => {
        const tags = [...job.languages, ...job.tools, job.role, job.level];
        return filteredTags.every(filteredTag => tags.includes(filteredTag.text));
      });
      setJobList(filteredJobs);
    } else {
      return;
    }
  };

  // Clear filtered tags

  const clearFilteredTags = () => {
    setFilteredTags([]);
    setJobList(data);
  };

  useEffect(() => {
    console.log('chnange')
    filterJobs(filteredTags);
  }, [filteredTags]);

  return (
    <div className="App h-full">
      <Header />
      <MainContent jobList={jobList} setFilteredTags={setFilteredTags} filteredTags={filteredTags} clearFilteredTags={clearFilteredTags} />
    </div>
  );
}

export default App;
