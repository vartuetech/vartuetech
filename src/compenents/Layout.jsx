import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <div className='bg-white w-full overflow-x-hidden'>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;