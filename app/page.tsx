import SearchContainer from "@/components/search-container/SearchContainer";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="flex min-h-full">
      <aside className="border-r border-slate-600 min-w-[200px] h-screen p-4 sticky top-0 hidden md:block">
        <div className="flex items-center gap-2 pb-8">
          <Image src="/logoipsum-327.png" alt="logo" width={32} height={32} />
          <h1 className="text-2xl font-bold">Itunes</h1>
        </div>
        <ul className="flex flex-col">
          <li><Link href="/" className="text-slate-50 font-medium flex p-2 hover:bg-slate-800 rounded-md">Home</Link></li>
          <li><Link href="/" className="text-slate-50 font-medium flex p-2 hover:bg-slate-800 rounded-md">Discover</Link></li>
          <li><Link href="/" className="text-slate-50 font-medium flex p-2 hover:bg-slate-800 rounded-md">Search</Link></li>
        </ul>
      </aside>
      <main className="h-full w-full mb-10 flex-1 overflow-x-hidden relative">
        <SearchContainer />
      </main>
    </div>
  );
}


