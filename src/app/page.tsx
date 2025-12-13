
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <div className="flex justify-center md:justify-start items-center gap-4 w-full md:w-auto">
              <img
                src="/absher-logo.png"
                alt="شعار أبشر"
                className="h-12 md:h-16 w-auto object-contain"
              />
              <div className="h-8 md:h-12 w-px bg-gray-300 mx-2 block"></div>
              <img
                src="/moi-logo.png"
                alt="شعار وزارة الداخلية"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <div className="w-full md:w-auto md:mr-4">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                بوابة أبشر
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                المنصة الرسمية للخدمات الإلكترونية للأفراد.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4 space-x-reverse w-full md:w-auto">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
              ع
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-medium">عمر العنزي</p>
              <p className="text-xs text-muted-foreground">رقم الهوية: 11xxxxxx89</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-green-500 rounded-full inline-block"></span>
            خدماتي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t text-center text-muted-foreground text-sm">
          <p>حقوق النشر &copy; {new Date().getFullYear()} المملكة العربية السعودية. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </main>
  );
}
