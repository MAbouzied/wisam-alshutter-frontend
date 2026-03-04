import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-zinc-900 mb-2">404</h1>
      <p className="text-zinc-600 mb-6">الصفحة غير موجودة</p>
      <Link
        href="/"
        className="rounded-xl bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
