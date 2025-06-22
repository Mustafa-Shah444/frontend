import { ShoppingCart} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchTerm } from '../Feature/Courses-Details/CoursesSlice';

export default function Navbar() {
  // const [isOpen, SetIsOpen] = useState(false);

  // const handleUser = () => {
  //   SetIsOpen(!isOpen);
  // };
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=> state.course.searchTerm)
  return (
<header className='bg-white shadow-md'>
  <>
{/* <div className='py-4 shadow-md flex'>
<ul className='container mx-auto flex justify-between md:flex-row px-4 md:px-[2rem] items-center relative'>
<div className='flex gap-4'>
  <li>
    <Link to="/">Home</Link>
  </li>
    <li>
    <Link to="/">About</Link>
  </li>
    <li>
    <Link to="/">FAQs</Link>
  </li>
    <li>
    <Link to="/">Contact</Link>
  </li>
</div>
<div className={`${isOpen ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4" : "hidden"}`}>
  <li>
    <Link to="/">Sign</Link>
  </li>
    <li>
    <Link to="/">My Acount</Link>
  </li>
</div>
<User size={40} className='bg-gray-200 text-balck p-2 rounded-full cursor-pointer' onClick={handleUser}/>
</ul>
  </div> */}
  <nav className='flex justify-between items-center container mx-auto md:py-4 py-8 px-[2rem]'>
    <div className='flex items-center'>
    <Link to="/">
        <img className="w-[50px] h-auto" src="/courses-images/easy-learn-logo.jpg" alt=""/>
    </Link>
    <Link to="/courseList">
        Course List
    </Link>
    </div>
    <form className='w-1/2 sm:block hidden'>
      <input type="text" placeholder='Search' className='bg-zinc-100 rounded-md border border-zinc-200 foucs:outline py-[0.5rem] px-3 w-full'
      value={searchTerm}
      onChange={(e)=> dispatch(setSearchTerm(e.target.value))}
      />
    </form>
    <Link to={"/card"} className='cursor-pointer bg-gray-100 px-3 py-2 rounded-full'>
    <ShoppingCart/>
    </Link>
  </nav>
  </>
</header>
  )
}
