
import { Hero } from "../../components/Hero";
import { Banner } from "../../components/Banner";
import Link from "next/link";
import { RoomsContainer } from "../../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero imageUrl='https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'>
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