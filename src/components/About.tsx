import InfoContainer from "./InfoContainer"

type AboutProps = {
    bio: string | null
    location: string | null
}

function About(props: AboutProps) {
    return (
        <InfoContainer>
            <h2 className="font-bold pb-6 text-lg">About</h2>
            <p>{props.bio !== null ? props.bio : "No bio"}</p>
            <p>{props.location !== null ? props.location : "No location"}</p>
        </InfoContainer>
    )

}
export default About