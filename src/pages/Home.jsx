
import Parent from "../components/Parent";
import Profile from "../components/Profile";
import State from "../hooks/State";
import Form from "../hooks/Form";
const Home = () => {
  return (
    <div>
     
      <Form/>
      <Parent/>
      <State />
      <Profile name="xyz" age={33} skills={['HTML','CSS','JSON','NODE']} />
      </div>
  )
}

export default Home