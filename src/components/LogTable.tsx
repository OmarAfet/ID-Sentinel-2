
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Check, Ban, Cpu, MoreVertical, AlertCircle } from "lucide-react";

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
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
      {/* Active Operation Card - High Risk Example */}
      <Card className="border-red-200 bg-red-50/50 overflow-visible" dir="rtl">
        <CardContent className="px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start justify-between relative">
            {/* Right Side: Title and Info */}
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-red-700">
                <div className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)] animate-pulse" />
                <h3 className="font-bold text-sm">تم رصد عملية مشبوهة</h3>
              </div>
              
              <div className="space-y-1 pr-4">
                <p className="font-semibold text-gray-900">
                  تسجيل دخول عبر نفاذ من جهاز غير معروف، هل هذا انت؟
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>الوقت: اليوم – 02:13 ص</span>
                </div>
              </div>
            </div>

            {/* Left Side: Actions and Menu */}
            <div className="flex items-start gap-2 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button 
                  variant="destructive" 
                  className="bg-red-600 hover:bg-red-700 text-white gap-2 h-9 cursor-pointer"
                  size="sm"
                >
                   <Ban className="h-4 w-4" /> لا، إلغاء العملية
                </Button>
                <Button 
                  variant="default" 
                  className="bg-green-600 hover:bg-green-700 text-white gap-2 h-9 cursor-pointer"
                  size="sm"
                >
                   <Check className="h-4 w-4" /> نعم، هذا انا
                </Button>
              </div>
              
              {/* Details Dropdown Toggle */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 text-gray-500 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
                
                {isDetailsOpen && (
                  <div className="absolute left-0 top-10 w-64 bg-white rounded-lg shadow-lg border border-gray-100 z-50 p-4 text-sm animate-in fade-in zoom-in-95 duration-200">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start border-b pb-2">
                        <span className="text-gray-500">الجهاز</span>
                        <span className="font-medium text-gray-900 dir-ltr text-right">iPhone 14 Pro</span>
                      </div>
                      <div className="flex justify-between items-start border-b pb-2">
                        <span className="text-gray-500">الموقع</span>
                        <span className="font-medium text-gray-900">الرياض، المعذر</span>
                      </div>
                      <div className="flex justify-between items-start border-b pb-2">
                        <span className="text-gray-500">سبب الاشتباه</span>
                        <span className="font-medium text-gray-900">جهاز جديد</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">مستوى الخطورة</span>
                        <span className="font-bold text-red-600 flex items-center gap-1">
                          عالٍ جدًا <AlertCircle className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <Cpu className="text-primary h-5 w-5" />
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
