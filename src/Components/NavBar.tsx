import { useEffect, useState } from 'react'
import bull from '../assets/bull-logo-vector-symbol-v8_254833-original.webp'

const NavBar  =()=>{
// export default  NavBar= () => {
    const [state, setState] = useState(false)
    

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Skills", path: "javascript:void(0)" },
        { title: "Portfolio", path: "javascript:void(0)" },
        {title:"Blog",path:"https://devblog.vishwakarnati.com"},
        { title: "Contact", path: "javascript:void(0)" },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target  = e.target as HTMLElement;
            if (target.closest(".menu-btn")) setState(false);
        };
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 bg-white pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src={bull}
                            width={120}
                            height={50}
                            alt="Bull UI logo "
                        />
                    </a>
                
                </div>
                <div className={` justify-end flex-1 items-center mt-8 md:mt-0 md:flex  ${state ? 'block' : 'hidden'} `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-gray-900">
                                        <a href={item.path} className="shrink-0 p-2 text-sm font-medium hover:bg-gray-100 text-black hover:underline hover:text-black hover:decoration-black" >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                
                </div>
            </div>
        </nav>
    )
}
export default  NavBar;