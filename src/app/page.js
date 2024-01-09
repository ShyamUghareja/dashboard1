import Dashboard from "./dashboard/sidebar";
import Profile from "./dashboard/profile";
import Withdraw from "./dashboard/withdraw";

export default function Home() {
  return (
    <>
      <main className="row w-100">
        <div className="col-2">
          <Dashboard />
        </div>
        <div className="col-10 p-0">
        <div className="col-12 mb-3 p-0 me-0">
          <Profile />
        </div>
        <div className="col-12 flex gap-3">
        <div class="col-6">
        <Withdraw />
        </div>
        <div class="col-5">
        <Withdraw />
        </div>
        </div>
        </div>
      </main>
    </>
  );
}
