export interface IStatus {
    user_players: number;
    tracked_players: number;
    matches_last_day: number;
    matches_last_hour: number;
    retriever_matches_last_day: number;
    retriever_players_last_day: number;
    backup_retriever_last_day: number;
    parsed_matches_last_day: number;
    requests_last_day: number;
    cassandra_repair_last_day: number;
    build_match_last_day: number;
    error_last_day: number;
    fullhistory_last_day: number;
    skip_seq_num_last_day: number;
    webhooks_last_day: number;
    feed_last_day: number;
    api_hits_last_day: number;
    api_hits_ui_last_day: number;
    fhQueue: number;
    gcQueue: number;
    mmrQueue: number;
    countsQueue: number;
    scenariosQueue: number;
    benchmarksQueue: number;
    retriever: [
        {
            hostname: string;
            count: string
        }
    ];
    api_paths: [
        {
            hostname: string;
            count: string
        }
    ];
    last_added: [
        {
            match_id: number,
            duration: number,
            start_time: number
        }
    ];
    last_parsed: [
        {
            match_id: number,
            duration: number,
            start_time: number
        },
    ];
    load_times: {
        50: number,
        75: number,
        90: number,
        95: number,
        99: number
    };
    health: {};


















}
