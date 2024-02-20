import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';

interface Props {
    isOpen: boolean;
    postId: string | null;
    onDeletePost: (postId: string) => void;
    requestClose: () => void;
}

const DeletePostModal: React.FC<Props> = ({ isOpen, postId, onDeletePost, requestClose }) => {
    if (!postId) return;

    return (
        <Modal isOpen={isOpen} title="Delete post" requestClose={requestClose}>
            <ModalBody>
                <h1 className="mb-5">Are you sure you want to delete your post?</h1>
                <div className="flex gap-x-4">
                    <button
                        className="w-full p-1 text-white bg-red border border-red rounded-md
                            hover:brightness-90 active:brightness-75"
                        onClick={() => {
                            onDeletePost(postId);
                            requestClose();
                        }}
                    >
                        Yes, delete
                    </button>
                    <button
                        className="w-full p-1 text-grey-120 border border-grey-120 rounded-md
                            hover:bg-grey-100 hover:bg-opacity-20"
                        onClick={requestClose}
                    >
                        Cancel
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default DeletePostModal;
