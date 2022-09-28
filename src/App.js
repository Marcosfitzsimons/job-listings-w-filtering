import { useEffect, useState } from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import axios from 'axios';

function App() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(companies)

  return (
    <div className="App h-full">
      <Header />
      <MainContent companies={companies} />
    </div>
  );
}

export default App;
