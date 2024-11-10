import { FiMenu } from "react-icons/fi";

interface HeaderProps {
  font: {
    className: string;
  };
}

function Header({ font }: HeaderProps) {
  return (
    <>
      <div className="container p-8">
        <div className="flex justify-between items-center">
          <div className={`text-xl font-medium ${font.className}`}>Alishba Shahid</div>


          <ul className="gap-10 lg:gap-16 hidden md:flex">
            <li className="menu-link">Home</li>
            <li className="menu-link">Project</li>
            <li className="menu-link">Skills</li>
            <li className="menu-link">About</li>
            <li className="menu-link">Contact</li>
          </ul>

          <FiMenu className="md:hidden" size={30} />
        </div>
      </div>
    </>
  );
}

export default Header;
