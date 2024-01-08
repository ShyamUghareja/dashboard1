import Dashboard from "./dashboard/sidebar";
import Profile from "./dashboard/profile";

export default function Home() {
  return (
    <>
      <main className="row w-100">
        <div className="col-3">
          <Dashboard />
        </div>
        <div className="col-9">
          <Profile />
        </div>
      </main>
    </>
  );
}
