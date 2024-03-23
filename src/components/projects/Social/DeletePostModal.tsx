import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import useStore from './Store';

export default function DeletePostModal() {
    const { isDeletePostModalOpen, deletePost, setIsDeletePostModalOpen } = useStore();
    const requestClose = () => setIsDeletePostModalOpen(false);

    return (
        <Modal isOpen={isDeletePostModalOpen} title="Delete post" requestClose={requestClose}>
            <ModalBody>
                <h1 className="mb-5">Are you sure you want to delete your post?</h1>
                <div className="flex gap-x-4">
                    <button
                        className="w-full p-1 text-white bg-red border border-red rounded-md
                            hover:brightness-90 active:brightness-75"
                        onClick={() => {
                            deletePost();
                            requestClose();
                        }}
                    >
                        Yes, delete
                    </button>
                    <button
                        className="w-full p-1 text-grey-120 border border-grey-120 rounded-md
                            hover:bg-neutral-500 hover:bg-opacity-20"
                        onClick={requestClose}
                    >
                        Cancel
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
}
