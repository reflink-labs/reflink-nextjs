import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
              <span className="text-purple-400">Reflink</span>
              <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded-full">
                Solana
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">
              Dashboard
            </Link>
            <Link href="/campaigns" className="text-gray-300 hover:text-white">
              Campaigns
            </Link>
            <Link href="/earnings" className="text-gray-300 hover:text-white">
              Earnings
            </Link>
            <Link href="/analytics" className="text-gray-300 hover:text-white">
              Analytics
            </Link>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              Connect Wallet
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
