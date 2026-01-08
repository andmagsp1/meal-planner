import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Footer } from "./components/footer/Footer.tsx";
import { Header } from "./components/header/Header.tsx";
import { router } from "./router";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
