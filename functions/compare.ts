const compare = (a: any, b: any): number => {
    if (a.localized_name > b.localized_name) {
        return 1;
    }

    if (a.localized_name < b.localized_name) {
        return -1;
    }

    return 0;
}

export default compare;
