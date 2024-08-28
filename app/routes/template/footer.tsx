export default function Foolter() {
    return (
      <footer className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 m-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              choompunut
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 justify-center md:justify-end">
            <li>
              <a href="/" className="text-gray-900 dark:text-white hover:underline mx-1">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="MyHerbForm" className="text-gray-900 dark:text-white hover:underline mx-1" aria-current="page">
                เพิ่มยาสมุนไพร
              </a>
            </li>
            <li>
              <a href="MyHomePage" className="text-gray-900 dark:text-white hover:underline mx-1">
                ข้อมูลของฉัน
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }