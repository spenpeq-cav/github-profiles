import InfoContainer from "./InfoContainer"

function MyProjects() {
    return (
        <InfoContainer>
            <h2 className="font-bold pb-6 text-lg">My Projects</h2>
            <div className="grid grid-cols-4 text-sm">
                <div className="">
                    <h3 className="font-semibold pb-2">Name</h3>
                    <p>Project #1</p>
                </div>
                <div className="">
                    <h3 className="font-semibold pb-2">Language</h3>
                    <p>Javascript</p>
                </div>
                <div className="">
                    <h3 className="font-semibold pb-2">Forks</h3>
                    <p>0</p>
                </div>
                <div className="">
                    <h3 className="font-semibold pb-2">Watchers</h3>
                    <p>0</p>
                </div>
            </div>
        </InfoContainer>
    )

}
export default MyProjects