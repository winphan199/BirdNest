import { useContext } from 'react';
import Table from '~/components/Table';
import { ViolatingDronesContext } from '~/contexts/ViolatingDronesContext';

function Home() {
    const { violatingDrones } = useContext(ViolatingDronesContext);

    return (
        <div className="min-h-screen md:px-10 lg:px-20 xl:px-24 bg-neutral-100 overflow-hidden">
            <div className="pt-20">
                <Table pilotList={violatingDrones} />
            </div>
        </div>
    );
}

export default Home;
