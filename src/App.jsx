import AdminContextProvider from "./contexts/AdminContext";
import AuthContextProvider from "./contexts/AuthContext";
import Router from "./routes";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AdminContextProvider>
          <Router />
        </AdminContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
