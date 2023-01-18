import { useEffect, useState } from 'react';
import data from "../src/data.json";
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [jobList, setJobList] = useState(data);
  const [filteredTags, setFilteredTags] = useState([]);


  const filterJobs = filteredTags => {
    if (filteredTags.length > 0) {
      const filteredJobs = data.filter(job => {
        const tags = [...job.languages, ...job.tools, job.role, job.level];
        return filteredTags.every(filteredTag => tags.includes(filteredTag.text));
      });
      return filteredJobs;
    } else {
      return data;
    }
  };

  const handleDeleteFilter = (tag) => {
    const newFilteredTags = filteredTags.filter((filter) => {
      return filter.text !== tag.target.textContent;
    });
    setFilteredTags(newFilteredTags);
    setJobList(filterJobs(newFilteredTags))
  };


  const clearFilteredTags = () => {
    setFilteredTags([]);
    setJobList(data);
  };


  useEffect(() => {
    setJobList(filterJobs(filteredTags));
  }, [filteredTags]);


  return (
    <div className="App h-full">
      <Header />
      <MainContent
        jobList={jobList}
        setJobList={setJobList}
        filteredTags={filteredTags}
        setFilteredTags={setFilteredTags}
        handleDeleteFilter={handleDeleteFilter}
        clearFilteredTags={clearFilteredTags} />
    </div>
  );
}

export default App;
