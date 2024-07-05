const menuItems = [
  {
    key: "about",
    name: "About Us",
  },
  {
    key: "projects",
    name: "Projects",
  },
  {
    key: "contact",
    name: "Contact",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 bg-white w-full flex justify-between px-6 py-3 shadow-sm">
      <img src="" alt="logo" />
      <nav>
        <ul className="w-full flex justify-between">
          {menuItems.map(({ key, name }) => (
            <li key={name} className="ml-8">
              <a href={`#${key}`}> {name} </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
