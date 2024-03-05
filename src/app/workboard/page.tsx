import CreateBoard from '@/components/projects/Workboard/CreateBoard';
import BoardsCollection from '@/components/projects/Workboard/BoardsCollection';

export default function Page() {
    return (
        <main className="space-y-8 w-[25rem] mx-auto">
            <CreateBoard />
            <BoardsCollection />
        </main>
    );
}
