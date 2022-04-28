type InfoContainerProps = {
    children: React.ReactNode;
};

function InfoContainer(props: InfoContainerProps) {
    return (
        <div className="bg-zinc-300 rounded px-8 pt-4 pb-8 mt-4 mb-16 mx-36">{props.children}</div>
    )
}
export default InfoContainer