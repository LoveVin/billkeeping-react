import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
    tagIds: number[],
    note: string,
    category: '-' | '+',
    amount: number,
    createdAt: string //ISO 8601的格式
}

type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);

    const addRecord = (newRecord: newRecordItem) => {
        const record = {...newRecord, createdAt: (new Date()).toISOString()};
        setRecords([...records, record]); //数据不可变原则
    };

    return {records, addRecord};
};