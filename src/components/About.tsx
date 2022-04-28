import InfoContainer from "./InfoContainer"

type AboutProps = {
    bio: string | null
    location: string | null
    active: boolean
}

function About(props: AboutProps) {
    return (
        <>
            { props.active ? 
            <InfoContainer>
                <h2 className="font-bold pb-6 text-xl text-zinc-900">About</h2>
                <p className="pb-2 text-lg text-zinc-900">{props.bio !== null ? props.bio : "No bio"}</p>
                <p className="text-lg text-zinc-900">{props.location !== null ? props.location : "No location"}</p>
            </InfoContainer> : <></> }
        </>
        
    )

}
export default About