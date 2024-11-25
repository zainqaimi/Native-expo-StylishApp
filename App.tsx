import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();
export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </AuthProvider>
  );
}
