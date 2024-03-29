import Modal from '@/components/ui/Modal';
import ModalBody from '@/components/ui/Modal/ModalBody';
import useStore from '../Store';
import CancelButton from '../ui/CancelButton';
import DeleteButton from '../ui/DeleteButton';

export default function DeletePostModal() {
    const { isDeletePostModalOpen, deletePost, setIsDeletePostModalOpen } = useStore();
    const requestClose = () => setIsDeletePostModalOpen(false);

    return (
        <Modal isOpen={isDeletePostModalOpen} title="Delete post" requestClose={requestClose}>
            <ModalBody>
                <h1 className="mb-5">Are you sure you want to delete your post?</h1>
                <div className="flex justify-center gap-x-4">
                    <CancelButton size="sm" onClick={requestClose} />
                    <DeleteButton
                        label="Yes, delete"
                        size="sm"
                        onClick={() => {
                            deletePost();
                            requestClose();
                        }}
                    />
                </div>
            </ModalBody>
        </Modal>
    );
}
