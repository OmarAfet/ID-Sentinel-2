
import { Link } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <a 
      href={service.enabled ? service.href : undefined} 
      className={cn(
        "block group transition-all duration-300",
        service.enabled ? "cursor-pointer" : "cursor-not-allowed opacity-70"
      )}
    >
      <Card className="h-full border-muted bg-card/50 hover:bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-primary transition-all duration-300" />
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-lg font-bold text-foreground/90">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
            {service.description}
          </CardDescription>
          {service.enabled && (
            <div className="mt-4 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              الدخول للخدمة &lt;-
            </div>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
