import { useState } from "react";
import Posts from "./Posts";

const Home = () => {
  const [posts, setPost] = useState([
    {
      id: 1,
      username: "Khurram",
      title: "Weather",
      content: "Weather is cold!",
    },
    { id: 2, username: "Ali", title: "Foods", content: "I am hungry!" },
    {
      id: 3,
      username: "Zeeshan",
      title: "Earth",
      content: "We are living on earth",
    },
  ]);
  const [value, setValue] = useState("Excellent");

  const handleClick = (name, event) => {
    console.log("My name is ", name, event.target.innerHTML);
  };

  const handleChange = () => {
    setValue("Good");
  };

  return (
    <div>
      <h1>Home Page</h1>
        <Posts posts={posts} title="All Posts" />
        <Posts posts={posts.filter((post) => post.id === 1)} title="Special Post" />
    </div>
  );
};

export default Home;
