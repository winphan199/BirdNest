import notFound from '~/assets/images/not_found.jpg';

function ListPlaceholder({ ...params }) {
    return (
        <div {...params}>
            <div className="w-1/12 mx-auto">
                <img src={notFound} alt="list placeholder" className="w-full" />
            </div>
            <p className="text-center mx-auto text-lg font-medium text-slate-600 my-1">
                No violating drones have been found yet!
            </p>
        </div>
    );
}

export default ListPlaceholder;
