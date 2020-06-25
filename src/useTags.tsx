import {useState} from 'react';
import {createId} from './lib/createId';

//封装一个自定义 hook

const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
];

type Tag = {
    id: number,
    name: string
}

const useTags = () => {
    const [tags, setTags] = useState<Tag[]>(defaultTags);
    return {
        tags,
        setTags
    };
};

export {useTags};