const Header = ({username, dummyAlert}) =>{
    return(
        <div>
<h1>Hello! {username}</h1>
<button onClick={dummyAlert}>Alert</button>
        </div>
    )
}
export default Header;