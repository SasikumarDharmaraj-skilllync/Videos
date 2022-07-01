import { useState, useEffect } from "react"; 
const Header = () => {
    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
    return (
        <>
            <nav className={scroll ? "navbar bg-dark header-box-shadow" : "navbar bg-dark"}>
                <div className="container py-1">
                   <img src="https://d2oda4j5uueq2i.cloudfront.net/myspace/1183/white-logo_1652343137.png" className="navlogo"/>
                    <div className="d-flex">
                        <div>
                            <i className="text-white fa fa-bell-o mx-3" aria-hidden="true"></i>
                        </div>
                        
                        <div className="ml-3"><img src="Https://d2oda4j5uueq2i.cloudfront.net/myspace/668/skill-logo_1656652213.png" class="rounded-circle nav_avatar" alt="" /></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;