export default function Spinner() {
    const style = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "100",
        backgroundColor: "white"
    }
    return (
        <div style={style}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}