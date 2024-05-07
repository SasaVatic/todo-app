import { CreateTask } from "@/components/dashboard/create-task";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-4xl font-semibold tracking-tight text-center">
            Ready for a new task?
          </h3>
          <CreateTask />
        </div>
      </div>
    </>
  );
}
