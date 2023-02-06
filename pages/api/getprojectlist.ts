import { getSortedProjectsList } from '@/lib/projects';
import { NextApiRequest, NextApiResponse } from 'next';
import { MatterItem } from '@/lib/types';

type Data = MatterItem[];

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const dataList: Data = await getSortedProjectsList();
        res.status(200).json(dataList);
    } catch (e) {
        res.status(400).end();
    }
}

