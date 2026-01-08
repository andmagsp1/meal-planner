import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <header
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "1rem 2rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Meal Planner</h1>
        </header>

        <main style={{ flex: 1, padding: "2rem" }}>
          <RouterProvider router={router} />
        </main>

        <footer
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "1rem 2rem",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <p style={{ margin: 0 }}>© 2026 Meal Planner</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
