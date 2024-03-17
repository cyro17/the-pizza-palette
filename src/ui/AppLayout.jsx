import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="fixed bottom-0 pb-0 top-0 left-0 right-0 grid grid-rows-[auto_1fr_auto] h-dvh">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-auto"   >
      
        <main className="mx-auto max-w-full px-2 py-2 sm:px-1 sm:py-1 ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
