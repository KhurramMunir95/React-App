const Home = () => {

    const handleClick = (name, event) =>{
        console.log('My name is ',name, event.target.innerHTML); 
    }

    return ( 
        <div>
            <h1>Home Page</h1>
            <button onClick={(e) => handleClick('Ali', e)}>Click Me</button>
        </div>
     );
}
 
export default Home;