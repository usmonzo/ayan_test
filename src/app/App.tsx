import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routers/router.tsx";
import { Provider } from "@/app/providers/chakra/provider.tsx";
import { Suspense } from "react";
import { LoadingPage } from "@/pages/Loading";

function App() {
  return (
    <Provider>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;
