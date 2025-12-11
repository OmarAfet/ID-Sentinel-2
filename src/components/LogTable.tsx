
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CitizenLog } from "@/lib/data";

function StatusBadge({ status }: { status: string }) {
  let colorClass = "bg-gray-100 text-gray-800";
  // Updated status matching to Arabic logic
  if (status === "نجاح") colorClass = "bg-green-100 text-green-800 border-green-200"; // Success
  if (status === "تنبيه") colorClass = "bg-yellow-100 text-yellow-800 border-yellow-200"; // Warning
  if (status === "فشل") colorClass = "bg-red-100 text-red-800 border-red-200"; // Failed

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClass}`}>
      {status}
    </span>
  );
}

interface LogTableProps {
  logs: CitizenLog[];
}

export function LogTable({ logs }: LogTableProps) {
  return (
    <div className="rounded-md border bg-card text-right overflow-x-auto" dir="rtl">
      <Table className="min-w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px] text-right">وقت العملية</TableHead>
            <TableHead className="text-right">الخدمة</TableHead>
            <TableHead className="text-right">الإجراء</TableHead>
            <TableHead className="text-right">الموقع</TableHead>
            <TableHead className="hidden md:table-cell text-right">الجهاز</TableHead>
            <TableHead className="hidden lg:table-cell text-right">مصدر الاتصال</TableHead>
            <TableHead className="text-right">الحالة</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="text-sm text-muted-foreground text-right" dir="ltr">
                {new Date(log.timestamp).toLocaleString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                }).toUpperCase()}
              </TableCell>
              <TableCell className="font-medium text-right">{log.service}</TableCell>
              <TableCell className="text-right">{log.action}</TableCell>
              <TableCell className="text-right">{log.location}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground text-right">{log.device}</TableCell>
              <TableCell className="hidden lg:table-cell text-xs text-right">{log.ip}</TableCell>
              <TableCell className="text-right">
                <StatusBadge status={log.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
