import { Dispatch, SetStateAction } from 'react';

export type HeaderProps = {
    creator: string;
    date: string;
    edited: boolean;
    isPostCreator: boolean;
};

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
