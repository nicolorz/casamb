import { CardWrapper } from "./components/CardWrapper/CardWrapper";
import { Header } from "./components/HeaderWrapper/HeaderWrapper";

function Page() {
  return (
    <div className="main-wrapper">
      <Header />
      <CardWrapper />
    </div>
  );
}

export default Page;
