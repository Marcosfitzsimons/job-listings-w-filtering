import { useEffect, useState } from 'react';
import data from "../src/data.json";
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [jobList, setJobList] = useState(data);
  const [filteredTags, setFilteredTags] = useState([]);

  // Filter job listings

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

  // Delete filter

  const handleDeleteFilter = (tag) => {
    const newFilteredTags = filteredTags.filter((filter) => {
      return filter.text !== tag.target.textContent;
    });
    setFilteredTags(newFilteredTags);
  }

  useEffect(() => {
    filterJobs(filteredTags);
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
