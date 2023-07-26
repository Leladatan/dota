const attr = (str: string): string => {
    if (str === "str") return "Strength";
    if (str === "agi") return "Agility";
    if (str === "int") return "Intelligence";

    return "Universal";
}

export default attr;
