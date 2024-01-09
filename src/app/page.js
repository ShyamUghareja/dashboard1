import Dashboard from "./dashboard/sidebar";
import Profile from "./dashboard/profile";
import Withdraw from "./dashboard/withdraw";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-12 gap-3 w-100">
        <div className="col-span-2">
          <Dashboard />
        </div>
        <div className="grid grid-cols-12 col-span-10">
        <div className="col-span-12 grid-rows-4">
          <Profile />
        </div>
        <div class="col-span-6">
        <Withdraw />
        </div>
        </div>
      </main>
    </>
  );
}
