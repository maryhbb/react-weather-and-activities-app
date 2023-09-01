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

  if (!weather) {
    return (
      <div className="app-loading">
        <strong>Loading...</strong>
      </div>
    );
  }

  const filteredActivities = activities.filter(
    activity => activity.isForGoodWeather === weather.isGoodWeather,
  );

  return (
    <>
      <div className="app">
        <h1 className="app-heading">
          <span style={{ fontSize: "1.5em" }}>{weather.condition}</span>
          <span>{weather.temperature}&nbsp;&#8451;</span>
        </h1>

        <h3>
          {weather.isGoodWeather
            ? "The weather is awesome! Go outside and: "
            : "Bad weather outside! Here's what you can do now: "}
        </h3>
        <List
          activities={filteredActivities}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
      </div>
    </>
  );
}

export default App;
