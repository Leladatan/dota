import {type FC} from 'react';
import {IStatus} from "@/types/status";

interface StatusContentProps {
    status: IStatus | undefined;
}

const StatusContent: FC<StatusContentProps> = ({status}) => {
    if (!status) return <div>Not found</div>

    return (
        <div className="flex flex-col gap-y-2 px-4">
            <p>Users: {status.user_players}</p>
            <p>Matches_last_day: {status.matches_last_day}</p>
            <p>Retriever_matches_last_day: {status.retriever_matches_last_day}</p>
            <p>Retriever_players_last_day: {status.retriever_players_last_day}</p>
        </div>
    );
};

export default StatusContent;
