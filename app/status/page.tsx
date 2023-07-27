import {Metadata, NextPage} from "next";
import getStatus from "@/actions/getStatus";
import {IStatus} from "@/types/status";
import StatusContent from "@/app/status/components/StatusContent";

export const metadata: Metadata = {
    title: 'Dota Info Status',
    description: 'Dota Info',
};

const StatusPage: NextPage = async () => {
    const status: IStatus | undefined = await getStatus();

    return (
        <>
            <StatusContent status={status} />
        </>
    );
};

export default StatusPage;
