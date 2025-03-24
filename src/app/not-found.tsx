import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="w-fit">
        <p>Сторінку не знайдено</p>
        <Link href="/" className="text-text mt-20">
          Повернутися на домашню сторінку
        </Link>
      </div>
    </div>
  );
}
