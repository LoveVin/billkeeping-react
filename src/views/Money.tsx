import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from '../components/Money/CategorySection';
import {NoteSection} from '../components/Money/NoteSection';
import {NumberPadSection} from '../components/Money/NumberPadSection';
import {TagsSection} from '../components/Money/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };
    return (
        <MyLayout>
            {selected.tags.join(',')}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <hr/>
            {selected.amount}
            <TagsSection value={selected.tags}
                         onChange={newTags => onChange({tags: newTags})}/>
            <NoteSection value={selected.note}
                         onChange={newNote => onChange({note: newNote})}/>
            <CategorySection value={selected.category}
                             onChange={newCategory => onChange({category: newCategory})}/>
            <NumberPadSection value={selected.amount}
                              onChange={newAmount => onChange({amount: newAmount})}
                              onOk={() => {
                              }}/>
        </MyLayout>
    );
}

export default Money;