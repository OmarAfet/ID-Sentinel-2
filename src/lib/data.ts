
import {
  Activity,
  Briefcase,
  Building2,
  Car,
  FileText,
  Plane,
  ShieldCheck,
  Users
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  href: string;
  enabled: boolean;
}

export const services: Service[] = [
  {
    id: 'citizen-logs',
    title: 'إدارة الهوية', // Citizen Logs
    description: 'سجل شامل لعمليات الدخول والتحقق من الهوية عبر مختلف الخدمات الحكومية.',
    icon: Activity,
    href: '/citizen-logs',
    enabled: true,
  },
  {
    id: 'vehicles',
    title: 'خدمات المركبات', // Vehicles Services
    description: 'تجديد رخصة المركبة، نقل الملكية، وإدارة رخص القيادة.',
    icon: Car,
    href: '#',
    enabled: false,
  },
  {
    id: 'passports',
    title: 'الجوازات', // Passports
    description: 'إصدار أو تجديد الجوازات، إدارة التأشيرات، وتصاريح السفر.',
    icon: Plane,
    href: '#',
    enabled: false,
  },
  {
    id: 'civil-affairs',
    title: 'الأحوال المدنية', // Civil Affairs
    description: 'إدارة الهوية الوطنية، تسجيل المواليد والوفيات، وسجل الأسرة.',
    icon: Users,
    href: '#',
    enabled: false,
  },
  {
    id: 'traffic-violations',
    title: 'المخالفات المرورية', // Traffic Violations
    description: 'الاستعلام عن المخالفات المرورية وسدادها، والاعتراض على المخالفات.',
    icon: FileText,
    href: '#',
    enabled: false,
  },
  {
    id: 'labor',
    title: 'العمالة الوافدة', // Expatriate Affairs
    description: 'إدارة تصاريح الإقامة (الإقامة)، نقل الكفالة، وتأشيرات الخروج والعودة.',
    icon: Briefcase,
    href: '#',
    enabled: false,
  },
  {
    id: 'business',
    title: 'خدمات الأعمال', // Business Services
    description: 'السجل التجاري، التوثيق، وتصاريح الأعمال.',
    icon: Building2,
    href: '#',
    enabled: false,
  },
  {
    id: 'digital-id',
    title: 'الهوية الرقمية', // Digital ID
    description: 'إدارة هويتك الرقمية والخصائص الحيوية.',
    icon: ShieldCheck,
    href: '#',
    enabled: false,
  }
];

export interface CitizenLog {
  id: string;
  timestamp: string;
  service: string;
  action: string;
  location: string;
  device: string;
  ip: string;
  status: 'نجاح' | 'قيد المعالجة' | 'فشل' | 'تنبيه'; // Success | Pending | Failed | Warning
}

export const mockLogs: CitizenLog[] = [
  {
    id: 'log-001',
    timestamp: '2025-12-11T14:45:00',
    service: 'نفاذ', // Nafath
    action: 'طلب توثيق', // Authentication Request
    location: 'الرياض، السعودية',
    device: 'iPhone 15 Pro',
    ip: 'بيانات الجوال',
    status: 'نجاح',
  },
  {
    id: 'log-002',
    timestamp: '2025-12-11T12:30:00',
    service: 'وزارة الداخلية', // Ministry of Interior
    action: 'استعلام الهوية الوطنية', // National ID Query
    location: 'جدة، السعودية',
    device: 'Chrome / Windows 11',
    ip: 'واي فاي منزلي',
    status: 'تنبيه',
  },
  {
    id: 'log-003',
    timestamp: '2025-12-11T09:15:00',
    service: 'أبشر', // Absher
    action: 'تسجيل دخول للبوابة', // Portal Login
    location: 'الدمام، السعودية',
    device: 'Safari / macOS',
    ip: 'شبكة العمل',
    status: 'نجاح',
  },
  {
    id: 'log-004',
    timestamp: '2025-12-10T23:45:00',
    service: 'الربط البنكي', // Bank Integration
    action: 'تحقق اعرف عميلك', // KYC Verification
    location: 'الرياض، السعودية',
    device: 'Android App',
    ip: 'بيانات الجوال',
    status: 'نجاح',
  },
  {
    id: 'log-005',
    timestamp: '2025-12-10T18:20:00',
    service: 'المنافذ والحدود', // Border Control
    action: 'فحص خروج وعودة', // Exit Re-entry Check
    location: 'مطار الملك خالد الدولي',
    device: 'محطة النظام',
    ip: 'شبكة حكومية',
    status: 'نجاح',
  },
  {
    id: 'log-006',
    timestamp: '2025-12-10T10:00:00',
    service: 'نفاذ',
    action: 'محاولة دخول فاشلة', // Failed Login Attempt
    location: 'غير معروف',
    device: 'متصفح غير معروف',
    ip: 'غير محدد',
    status: 'فشل',
  }
];
