import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task } from "@/lib/definitions";
import { formatDateToLocal } from "@/lib/utils";

export function TasksTable({ tasks }: { tasks: Task[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-52">Name</TableHead>
          <TableHead>Chore</TableHead>
          <TableHead className="text-right">Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="font-medium bg-accent">{task.name}</TableCell>
            <TableCell>{task.chore}</TableCell>
            <TableCell className="text-right">
              {formatDateToLocal(task.date)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
