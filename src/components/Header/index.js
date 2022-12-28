import { Link } from 'react-router-dom';
import routes from '~/configs/routes';
import { TargetIcon } from '../Icons';

function Header() {
    return (
        <div className="sticky top-0 left-0 right-0 z-10 bg-white shadow-md border-b border-solid border-slate-200 md:px-10 lg:px-20 xl:px-24">
            <div className="flex items-center text-lg xl:text-xl py-3 pl-2 md:pl-0 font-bold">
                <Link to={routes.home} className="pr-2 py-2">
                    <p className="text-rose-500">BIRDNEST</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
