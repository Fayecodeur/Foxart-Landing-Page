import { logoApp } from "../assets/index.js";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
export default function Header() {
  return (
    <header className="border-b border-stroke-1">
      <Container className={"bg-n-9"}>
        <div className="flex justify-between items-center py-2">
          <img src={logoApp} alt="Logo" width={104} height={32} />
          <Button theme="secondary">Login</Button>
        </div>
      </Container>
    </header>
  );
}
