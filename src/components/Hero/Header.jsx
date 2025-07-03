export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-20"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <div className="flex gap-2 text-2xl font-bold text-black">
              <img src="/logo.svg" alt="Logo" className="w-5" />
              <span>
                AI
                <span className="text-blue-600">Derm</span>
              </span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
