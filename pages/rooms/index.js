
import { Hero } from "../../components/Hero";
import { Banner } from "../../components/Banner";
import Link from "next/link";
import { RoomsContainer } from "../../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero>
        <Banner title="our rooms">
          <Link href="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;