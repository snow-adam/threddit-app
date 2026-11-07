import NavigationBar from "./NavigationBar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";
import "./App.css"

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Feed />
      <Suggestions />
    </div>
  )
}