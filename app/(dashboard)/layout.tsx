export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p>Dashoburt layout</p>
            {children}
        </div>
    );
}
