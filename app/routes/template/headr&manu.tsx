export default function AppMenu() {
  return (
    <nav className="bg-blue-100 dark:bg-blue-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center text-gray-900 text-xl dark:text-white hover:underline">
            <span className="ml-2">ร้านยาสมุนไพร</span>
          </a>
          <ul className="flex flex-row space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a
                href="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                href="MyHerbForm"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                เพิ่มยาสมุนไพร
              </a>
            </li>
            
            <li>
              <a
                href="MyHomePage"
                className="text-gray-900 dark:text-white hover:underline"
              >
                ข้อมูลของฉัน
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
