import "./index.css";
import "./App.css";
import Form from "./components/Form/index.jsx";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState(null);

  function handleAddActivity(newActivity) {
    setActivities(previousActivities => [...previousActivities, newActivity]);
  }

  function handleDeleteActivity(id) {
    console.log("delete Item with id: ", id);
    setActivities(previousActivities =>
      previousActivities.filter(activity => activity.id !== id),
    );
  }

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe",
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Failed!!");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
    const timer = setInterval(fetchWeather, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const isGoodWeather = weather?.isGoodWeather ?? false;
  console.log(weather);

  const filteredActivities = activities.filter(
    activity => activity.isForGoodWeather === isGoodWeather,
  );

  console.log(filteredActivities);

  if (!weather) {
    return (
      <div className="app-loading">
        <strong>Loading...</strong>
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <h1>Wheather & Activities App</h1>
        <Form onAddActivity={handleAddActivity} />
        <List activities={filteredActivities} />
      </div>
    </>
  );
}

export default App;
