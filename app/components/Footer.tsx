import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              About Reflink
            </h3>
            <p className="mt-4 text-base text-gray-400">
              Reflink is a decentralized affiliate marketing platform built on
              Solana blockchain. Create, track, and earn from your referral
              links with transparent and instant payouts.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/docs"
                  className="text-base text-gray-400 hover:text-white"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-gray-400 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-gray-400 hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://discord.gg"
                  className="text-base text-gray-400 hover:text-white"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-base text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="text-base text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} Reflink. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
              <a
                href="https://solana.com"
                className="text-sm text-gray-400 hover:text-white"
              >
                Powered by Solana
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
