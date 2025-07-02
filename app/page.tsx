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

export const example = {
  "wrapperType": "track",
  "kind": "music-video",
  "artistId": 1459319359,
  "trackId": 1612840305,
  "artistName": "Omah Lay & Justin Bieber",
  "trackName": "Attention Attention Attention",
  "trackCensoredName": "Attention",
  "artistViewUrl": "https://music.apple.com/us/artist/omah-lay/1459319359?uo=4",
  "trackViewUrl": "https://music.apple.com/us/music-video/attention/1612840305?uo=4",
  "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/52/67/cc/5267cc9f-ea69-a5e7-5a22-feb0844e05cc/mzvf_18335047271308154097.640x480.h264lc.U.p.m4v",
  "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/b9/e7/9f/b9e79fc7-9aa0-6c88-5e92-232b1d72d305/USWBV2200111.sca1.jpg/30x30bb.jpg",
  "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/b9/e7/9f/b9e79fc7-9aa0-6c88-5e92-232b1d72d305/USWBV2200111.sca1.jpg/60x60bb.jpg",
  "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/b9/e7/9f/b9e79fc7-9aa0-6c88-5e92-232b1d72d305/USWBV2200111.sca1.jpg/100x100bb.jpg",
  "collectionPrice": 1.99,
  "trackPrice": 1.99,
  "releaseDate": "2022-03-04T08:00:00Z",
  "collectionExplicitness": "notExplicit",
  "trackExplicitness": "notExplicit",
  "trackTimeMillis": 189063,
  "country": "USA",
  "currency": "USD",
  "primaryGenreName": "R&B/Soul"
}
