import { fetchUserTasks } from "@/lib/data";
import { TasksTable } from "@/components/dashboard/tasks-table";

export default async function Completed() {
  const tasks = await fetchUserTasks(
    "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    "completed"
  );

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Completed</h1>
      </div>
      <div
        className="rounded-lg border border-dashed shadow-sm p-4 lg:p-6"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="w-full">
          <TasksTable tasks={tasks} />
        </div>
      </div>
    </>
  );
}
