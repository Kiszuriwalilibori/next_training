export async function Usr({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <p>USER Profile {id}</p>;
}

export default Usr;
