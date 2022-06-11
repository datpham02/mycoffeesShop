import { Header, LeftSideBar, Contents } from '~/components';

function Home() {
    return (
        <>
            <Header />
            <div className="container-lg">
                <div className="row">
                    <div className="col-3">
                        <LeftSideBar />
                    </div>
                    <div className="col-9">
                        <Contents />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
