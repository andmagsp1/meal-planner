import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { router } from "./router";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main style={{ flex: 1, padding: "2rem" }}>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
