import Companies from "./Companies";
import Everything from "./Everything";
import { FiverBusiness } from "./FiverBusiness";
import HeroBanner from "./HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Companies />
      <Everything />
      <FiverBusiness />
    </>
  );
}
