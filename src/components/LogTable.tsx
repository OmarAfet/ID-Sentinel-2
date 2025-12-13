
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLogs = logs.filter((log) => {
    const query = searchQuery.toLowerCase();
    return (
      log.service.toLowerCase().includes(query) ||
      log.action.toLowerCase().includes(query) ||
      log.location.toLowerCase().includes(query) ||
      log.device.toLowerCase().includes(query) ||
      log.ip.toLowerCase().includes(query) ||
      log.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="بحث في العمليات..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm text-right bg-white"
          dir="rtl"
        />
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
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="text-xs text-muted-foreground text-right font-mono" dir="ltr">
                      {new Date(log.timestamp).toLocaleString('en-SA', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    لا توجد نتائج.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-card rounded-md border p-6 text-right" dir="rtl">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-primary/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary h-5 w-5"
            >
              <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <path d="m5 7 1.4-1.4" />
              <path d="m19 7-1.4-1.4" />
              <path d="M12 22v-4" />
              <path d="m5 17 1.4 1.4" />
              <path d="m19 17-1.4 1.4" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <rect width="8" height="8" x="8" y="8" rx="1" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">تحليل الذكاء الاصطناعي</h3>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            قام النظام بتحليل {logs.length} عملية باستخدام الذكاء الاصطناعي لكشف عن الاحتيال المتقدمة. 
            تشير المؤشرات الحالية إلى نمط سلوك طبيعي مع مستويات خطر منخفضة جداً.
          </p>

          <div className="space-y-3">
            <div className="flex justify-between items-center bg-muted/50 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">مؤشر الخطر</span>
              </div>
              <span className="text-lg font-bold text-green-500">8%</span>
            </div>
            
            <div className="relative h-4 w-full rounded-full overflow-hidden shadow-inner">
               {/* Background gradient for the slider track to indicate severity zones */}
               <div className="absolute inset-0 opacity-20 bg-gradient-to-l from-red-500 via-yellow-500 to-green-500"></div>
               
               {/* The "Thumb" or fill */}
               <div 
                 className="absolute top-0 right-0 h-full bg-green-500 transition-all duration-1000 ease-out rounded-l-full shadow-sm"
                 style={{ width: '12%', left: 'auto' }} // RTL: starts from right
               ></div>
            </div>

            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>آمن</span>
              <span>مخاطر متوسطة</span>
              <span>خطر مرتفع</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
