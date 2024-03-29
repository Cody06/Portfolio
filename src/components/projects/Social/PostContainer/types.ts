import { Dispatch, SetStateAction } from 'react';

export type EditFormProps = {
    content: string;
    postId: string;
    setIsEditingPost: Dispatch<SetStateAction<boolean>>;
};

export type BodyProps = EditFormProps & {
    isEditingPost: boolean;
};

export type FooterProps = {
    isPostCreator: boolean;
    numOfLikes: number;
    postId: string;
} & Pick<EditFormProps, 'setIsEditingPost'>;
