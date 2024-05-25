import { Github } from "./ui/icons";
import { Twitter } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center w-full mb-5">
      <div className="flex justify-center items-center">
        <p>No Copyrights . Lame Brown Dev</p>
      </div>
      <div className="flex justify-center space-x-3 mt-5">
        <Github />
        <Twitter />
      </div>
    </footer>
  );
}
