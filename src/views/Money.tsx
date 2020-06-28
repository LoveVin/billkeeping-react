import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from '../components/Money/CategorySection';
import {NoteSection} from '../components/Money/NoteSection';
import {NumberPadSection} from '../components/Money/NumberPadSection';
import {TagsSection} from '../components/Money/TagsSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';

const defaultFormDate = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
};

function Money() {
    const [selected, setSelected] = useState(defaultFormDate);
    const {addRecord} = useRecords();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };
    const submit = () => {
        addRecord(selected);
        alert('记账成功！');
        setSelected(defaultFormDate);
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
                              onOk={submit}/>
        </MyLayout>
    );
}

export default Money;