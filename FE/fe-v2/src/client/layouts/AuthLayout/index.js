


function AuthLayout({children}) {
    return (
        <>
            <header className="flex justify-center items-center py-3 h-20 shadow-md bg-white">
                <h1 className="text-[30px] font-semibold text-blue-500 ">Chat App</h1>
            </header>
        
            {children}
        </>
    );
}

export default AuthLayout;