import {
  Collection1,
  Collection2,
  Explore,
  Footer,
  Header,
  Subscribe,
} from "../../components";
const Home = () => {
  
  return (
    <>
      <Header />
      <div className="collection-hold">
        <div className="collection-holder">
        <Collection1 />
        <div className="circle"></div>
        <Collection2 />
        </div>
        <Explore />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
