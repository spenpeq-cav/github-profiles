type InfoContainerProps = {
    children: React.ReactNode; // 👈️ type children
};

function InfoContainer(props: InfoContainerProps) {
    return (
        <div className="bg-zinc-200 rounded px-8 pt-4 pb-8 mt-4 mb-16">{props.children}</div>
    )
}
export default InfoContainer