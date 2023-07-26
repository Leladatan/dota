export interface IFindPlayer {
    leaderboard_rank: number;
    rank_tier: number;
    solo_competitive_rank: number;
    competitive_rank: number;
    mmr_estimate : {
        estimate: number;
    }
    profile: {
        account_id: number;
        personaname: string;
        name: string;
        plus: boolean;
        cheese: number;
        steamid: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
        profileurl: string;
        last_login: string;
        loccountrycode: string;
        status: string;
        is_contributor: boolean;
        is_subscriber: boolean;
    }
}
