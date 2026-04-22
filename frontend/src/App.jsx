import React from "react";
import ProviderList from "./components/ProviderList.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

function App() {
  return (
    <main>
      <h1>Farm Connect</h1>
      <DashboardPage />
      <ProviderList />
    </main>
  );
}

export default App;
