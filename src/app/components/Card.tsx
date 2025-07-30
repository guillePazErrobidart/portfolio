import Link from "next/link";

type CardProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export function Card({ icon, label, href }: CardProps) {
  return (
    <Link href={href}>
      <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-800 transition cursor-pointer">
        <div className="text-2xl mb-2">{icon}</div>
        <span>{label}</span>
      </div>
    </Link>
  );
}