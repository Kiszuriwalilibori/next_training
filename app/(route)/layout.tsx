export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>Navbar</h1>
            {children}
        </div>
    );
};

export default Layout;
