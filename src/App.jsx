import "./index.css";
import "./App.css";
import Form from "./components/Form/index.jsx";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities(previousActivities => [...previousActivities, newActivity]);
  }

  const isGoodWeather = false;
  const filteredActivities = activities.filter(
    activity => activity.isForGoodWeather === isGoodWeather,
  );

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
