import Notifications from "./@notifications/page";

export default function DashboardLayout({
    children,
    user,
    revenue,
    notifications,
    login,
}:{
    children:React.ReactNode;
    user:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;
    login:React.ReactNode;
}){
    const isloggedin = true;
    return isloggedin ? (
        <>
        <div>{children}</div>
        <div style={{display:"flex"}}>
            <div style={{display:"flex" , flexDirection: "column"}}>
                <div>{user}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display: "flex", flex:1}}>{notifications}</div>
        </div>
        </>
    ):(
        login
    );
}