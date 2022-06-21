import { Header, LeftSideBar, Contents } from '~/components';
function Home() {
    return (
        <div className="bg-home_img text-[#fff] h-[100vh]">
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
        </div>
    );
}

export default Home;
