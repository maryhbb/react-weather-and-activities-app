import "./index.css";
import "./App.css";
import Form from "./components/Form/index.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities(previousActivities => [...previousActivities, newActivity]);

    console.log("newActivity:", newActivity);
  }

  return (
    <>
      <div className="App">
        <h1>Wheather & Activities App</h1>
        <Form onAddActivity={handleAddActivity} />
      </div>
    </>
  );
}

export default App;
