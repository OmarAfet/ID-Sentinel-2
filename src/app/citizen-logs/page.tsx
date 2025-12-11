
import { LogTable } from '@/components/LogTable';
import { Button } from '@/components/ui/button';
import { mockLogs } from '@/lib/data';
import { Ban, Download, Filter } from 'lucide-react'; // ArrowRight is better for RTL back
import Link from 'next/link';

export default function CitizenLogsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb / Back Navigation */}
        <div className="flex items-center space-x-2 space-x-reverse text-muted-foreground mb-4">
          <Link href="/" className="flex items-center hover:text-primary transition-colors gap-1">
            <span className="text-lg">➔</span> {/* Simple arrow or use Icon with rotate */}
            <span>العودة للرئيسية</span>
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">إدارة الهوية</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <img
                src="/absher-logo.png"
                alt="شعار أبشر"
                className="h-12 w-auto object-contain"
              />
              <img
                src="/moi-logo.png"
                alt="شعار وزارة الداخلية"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">إدارة الهوية</h1>
              <p className="text-muted-foreground mt-1">
                سجل شامل لعمليات الدخول والتحقق من الهوية عبر مختلف الخدمات الحكومية.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              <Ban className="w-4 h-4 ml-2" />
              إيقاف العمليات
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 ml-2" />
              تصفية
            </Button>
            <Button variant="default" size="sm">
              <Download className="w-4 h-4 ml-2" />
              تصدير التقرير
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">إجمالي العمليات</p>
            <p className="text-2xl font-bold">{mockLogs.length}</p>
          </div>
          <div className="p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">موقع آخر دخول</p>
            <p className="text-2xl font-bold truncate">{mockLogs[0]?.location || 'غير متوفر'}</p>
          </div>
          <div className="p-4 rounded-xl border bg-card text-card-foreground shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">الحالة الأمنية</p>
            <p className="text-2xl font-bold text-green-600">آمن</p>
          </div>
        </div>

        {/* Logs Table */}
        <section>
          <LogTable logs={mockLogs} />
        </section>
      </div>
    </main>
  );
}
