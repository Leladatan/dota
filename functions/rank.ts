const rank = (rank: number): string => {
    if (rank >= 0 && rank <= 769) {
        return "Herald";
    }

    if (rank >= 770 && rank <= 1539) {
        return "Guardian";
    }

    if (rank >= 1540 && rank <= 2309) {
        return "Crusader";
    }

    if (rank >= 2310 && rank <= 3079) {
        return "Archon";
    }

    if (rank >= 3080 && rank <= 3849) {
        return "Legend";
    }

    if (rank >= 3850 && rank <= 4619) {
        return "Ancient";
    }

    if (rank >= 4620 && rank <= 5619) {
        return "Divine";
    }

    if (rank >= 5620 && rank <= 6499) {
        return "Titan";
    }

    return "Titan+";
}

export default rank;
