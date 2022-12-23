const PageOne = () => {
  const BASE_URL = "https://pokeapi.co/api/v2/berry/";

  const [berries, setBerries] = useState([]);

  useEffect(() => {
    const fetchBerries = async () => {
      const results = await ShowPokemon();
      console.log("RESULTSSSS ONE", results);
      setBerries(results.results);
    };
    fetchBerries();
  }, []);

  const ShowPokemon = async () => {
    const results = await fetch(`${BASE_URL}`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await results.json();
    //console.log("DATAAAAAA", data);
    return data;
  };

  return (
    <div>
      <h1 className="color">Pokemon Berries</h1>

      {berries.map((individualBerry, i) => {
        return (
          <div key={i} className="color">
            <h4>Name: {individualBerry.name} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default PageOne;
