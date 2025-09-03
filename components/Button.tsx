import Link from "next/link";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link} className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600">
      {text}
    </Link>
  );
}
