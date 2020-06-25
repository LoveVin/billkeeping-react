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
        tagIds: [] as number[],
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
            <TagsSection value={selected.tagIds}
                         onChange={newTagId => onChange({tagIds: newTagId})}/>
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