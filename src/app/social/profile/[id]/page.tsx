export default function Page({ params }: { params: { id: string } }) {
    return <div>Profile - {params.id}</div>;
}
