import {useState} from 'react';

//封装一个自定义 hook

type Tag = {
    id: number,
    name: string
}

const useTags = () => {
    const [tags, setTags] = useState<Tag[]>([
        {id: 1, name: '衣'},
        {id: 2, name: '食'},
        {id: 3, name: '住'},
        {id: 4, name: '行'}
    ]);
    return {
        tags,
        setTags
    };
};

export {useTags};