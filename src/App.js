import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import Repositories from "./Repositories";



const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <Repositories />
     {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
};

export default App;
