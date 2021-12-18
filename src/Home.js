import useFetch from "./useFetch";
import Show from './Show';

const Home = () => {
  const { error, isPending, data: traffic } = useFetch('http://localhost:8000/traffic')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { traffic && <Show traffic={traffic} /> }
    </div>
  );
}
 
export default Home;