import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
