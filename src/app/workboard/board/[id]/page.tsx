import MyBoard from '@/components/projects/Workboard/MyBoard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My board',
};

export default function Page({ params }: { params: { id: string } }) {
    return <MyBoard boardId={params.id} />;
}
