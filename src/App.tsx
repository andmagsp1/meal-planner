import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Recipes } from "./features/Recipes.tsx";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Recipes />
    </QueryClientProvider>
  );
}

export default App;
