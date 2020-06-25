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
                         onChange={(newTags) => setSelected({
                             ...selected,
                             tags: newTags
                         })}/>
            <NoteSection value={selected.note}
                         onChange={(newNote) => setSelected({
                             ...selected,
                             note: newNote
                         })}/>
            <CategorySection value={selected.category}
                             onChange={(newCategory) => setSelected({
                                 ...selected,
                                 category: newCategory
                             })}/>
            <NumberPadSection value={selected.amount}
                              onChange={(newAmount) => setSelected({
                                  ...selected,
                                  amount: newAmount
                              })}
                              onOk={()=>{}}/>
        </MyLayout>
    );
}

export default Money;