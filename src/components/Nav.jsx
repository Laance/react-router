import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div class="container">
            <header class="main">
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/images">Images</Link>
            </header>
      </div>
    )
}
export default Nav;