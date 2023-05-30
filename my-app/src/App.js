import './App.css';
import { useCallback } from 'react/cjs/react.production.min';

function App() {

  const url = 'https://league-of-legends-champions.p.rapidapi.com/champions/pt-br?page=0&size=10&name=aatrox&role=fighter';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6795b45346msh226b82303e4e28ep108d74jsn9f0ed758028e',
      'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
    }
  };

  const loader = useCallback(async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, [])


  useEffect(() => {
    loader()
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;