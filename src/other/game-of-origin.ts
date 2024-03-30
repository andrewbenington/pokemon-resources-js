export type Origin = {
    readonly name: string
    readonly mark?: string
    readonly region?: string
    readonly logo?: string
    index: number
    readonly gameCubeIndex?: number
}

export const GameOfOriginData: readonly (Origin | null)[] = [
    null,
    { name: 'Sapphire', region: 'Hoenn', index: 1, gameCubeIndex: 8 },
    { name: 'Ruby', region: 'Hoenn', index: 2, gameCubeIndex: 9 },
    { name: 'Emerald', region: 'Hoenn', index: 3, gameCubeIndex: 10 },
    { name: 'FireRed', region: 'Kanto', index: 4, gameCubeIndex: 1 },
    { name: 'LeafGreen', region: 'Kanto', index: 5, gameCubeIndex: 2 },
    null,
    { name: 'HeartGold', region: 'Johto', index: 7 },
    { name: 'SoulSilver', region: 'Johto', index: 8 },
    null,
    { name: 'Diamond', region: 'Sinnoh', index: 10 },
    { name: 'Pearl', region: 'Sinnoh', index: 11 },
    { name: 'Platinum', region: 'Sinnoh', index: 12 },
    null,
    null,
    { name: 'Colosseum/XD', region: 'Orre', index: 15, gameCubeIndex: 11 },
    null,
    null,
    null,
    null,
    { name: 'White', region: 'Unova', index: 20 },
    { name: 'Black', region: 'Unova', index: 21 },
    { name: 'White 2', region: 'Unova', index: 22 },
    { name: 'Black 2', region: 'Unova', index: 23 },
    { name: 'X', region: 'Kalos', mark: 'G6', index: 24 },
    { name: 'Y', region: 'Kalos', mark: 'G6', index: 25 },
    { name: 'Alpha Sapphire', region: 'Hoenn', mark: 'G6', index: 26 },
    { name: 'Omega Ruby', region: 'Hoenn', mark: 'G6', index: 27 },
    null,
    null,
    { name: 'Sun', region: 'Alola', mark: 'Alola', index: 30 },
    { name: 'Moon', region: 'Alola', mark: 'Alola', index: 31 },
    { name: 'Ultra Sun', region: 'Alola', mark: 'Alola', index: 32 },
    { name: 'Ultra Moon', region: 'Alola', mark: 'Alola', index: 33 },
    { name: 'GO', mark: 'GO', index: 34 },
    { name: 'Red', region: 'Kanto', mark: 'GB', index: 35 },
    { name: 'Blue/Green', region: 'Kanto', mark: 'GB', logo: 'BlueGreen', index: 36 },
    { name: 'Blue (Japan)', region: 'Kanto', mark: 'GB', logo: 'BlueJP', index: 37 },
    { name: 'Yellow', region: 'Kanto', mark: 'GB', index: 38 },
    { name: 'Gold', region: 'Johto', mark: 'GB', index: 39 },
    { name: 'Silver', region: 'Johto', mark: 'GB', index: 40 },
    { name: 'Crystal', region: 'Johto', mark: 'GB', index: 41 },
    {
        name: "Let's Go, Pikachu!",
        region: 'Kanto',
        mark: 'LGPE',
        logo: 'LetsGoPikachu',
        index: 42,
    },
    {
        name: "Let's Go, Eevee!",
        region: 'Kanto',
        mark: 'LGPE',
        logo: 'LetsGoEevee',
        index: 43,
    },
    { name: 'Sword', region: 'Galar', mark: 'Galar', index: 44 },
    { name: 'Shield', region: 'Galar', mark: 'Galar', index: 45 },
    null,
    {
        name: 'Legends: Arceus',
        region: 'Hisui',
        mark: 'LA',
        logo: 'LegendsArceus',
        index: 47,
    },
    { name: 'Brilliant Diamond', region: 'Sinnoh', mark: 'BDSP', index: 48 },
    { name: 'Shining Pearl', region: 'Sinnoh', mark: 'BDSP', index: 49 },
    { name: 'Scarlet', region: 'Paldea', mark: 'Tera', index: 50 },
    { name: 'Violet', region: 'Paldea', mark: 'Tera', index: 51 },
]

export const GameOfOriginDataGC = [
    null,
    { name: 'FireRed', region: 'Kanto', gba: 4 },
    { name: 'LeafGreen', region: 'Kanto', gba: 5 },
    null,
    null,
    null,
    null,
    null,
    { name: 'Sapphire', region: 'Hoenn', gba: 1 },
    { name: 'Ruby', region: 'Hoenn', gba: 2 },
    { name: 'Emerald', region: 'Hoenn', gba: 3 },
    { name: 'Colosseum/XD', region: 'Orre', gba: 15 },
]

export enum GameOfOrigin {
    INVALID_0,
    Sapphire,
    Ruby,
    Emerald,
    FireRed,
    LeafGreen,
    INVALID_6,
    HeartGold,
    SoulSilver,
    INVALID_9,
    Diamond,
    Pearl,
    Platinum,
    INVALID_13,
    INVALID_14,
    ColosseumXD,
    INVALID_16,
    INVALID_17,
    INVALID_18,
    INVALID_19,
    White,
    Black,
    White2,
    Black2,
    X,
    Y,
    AlphaSapphire,
    OmegaRuby,
    INVALID_28,
    INVALID_29,
    Sun,
    Moon,
    UltraSun,
    UltraMoon,
    GO,
    Red,
    BlueGreen,
    BlueJapan,
    Yellow,
    Gold,
    Silver,
    Crystal,
    LetsGoPikachu,
    LetsGoEevee,
    Sword,
    Shield,
    INVALID_46,
    LegendsArceus,
    BrilliantDiamond,
    ShiningPearl,
    Scarlet,
    Violet,
}

export const isAlola = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.Sun && origin <= GameOfOrigin.UltraMoon
}

export const isGalar = (origin: GameOfOrigin) => {
    return origin === GameOfOrigin.Sword || origin === GameOfOrigin.Shield
}

export const isPaldea = (origin: GameOfOrigin) => {
    return origin === GameOfOrigin.Scarlet || origin === GameOfOrigin.Violet
}

export const isGen1 = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.Red && origin <= GameOfOrigin.Yellow
}

export const isGen2 = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.Gold && origin <= GameOfOrigin.Crystal
}

export const isGameBoy = (origin: GameOfOrigin) => {
    return isGen1(origin) || isGen2(origin)
}

export const isGBA = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.Sapphire && origin <= GameOfOrigin.LeafGreen
}

export const isGen3 = (origin: GameOfOrigin) => {
    return isGBA(origin) || origin === GameOfOrigin.ColosseumXD
}

export const isGen4 = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.HeartGold && origin <= GameOfOrigin.Platinum
}

export const isGen5 = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.White && origin <= GameOfOrigin.Black2
}

export const isUnova = (origin: GameOfOrigin) => {
    return isGen5(origin)
}

export const isGen6 = (origin: GameOfOrigin) => {
    return origin >= GameOfOrigin.X && origin <= GameOfOrigin.OmegaRuby
}

export const isKalos = (origin: GameOfOrigin) => {
    return origin === GameOfOrigin.X || origin === GameOfOrigin.Y
}

export const isLetsGo = (origin: GameOfOrigin) => {
    return origin === GameOfOrigin.LetsGoPikachu || origin === GameOfOrigin.LetsGoEevee
}

export const isGen7 = (origin: GameOfOrigin) => {
    return isAlola(origin) || isLetsGo(origin)
}

export const isBDSP = (origin: GameOfOrigin) => {
    return origin === GameOfOrigin.BrilliantDiamond || origin === GameOfOrigin.ShiningPearl
}

export const isGen8 = (origin: GameOfOrigin) => {
    return isGalar(origin) || isBDSP(origin) || origin === GameOfOrigin.LegendsArceus
}

export const isGen9 = isPaldea

export const isKanto = (origin: GameOfOrigin) => {
    return (
        isGen1(origin) ||
        origin === GameOfOrigin.FireRed ||
        origin === GameOfOrigin.LeafGreen ||
        origin === GameOfOrigin.LetsGoPikachu ||
        origin === GameOfOrigin.LetsGoEevee
    )
}

export const isJohto = (origin: GameOfOrigin) => {
    return isGen2(origin) || origin === GameOfOrigin.HeartGold || origin === GameOfOrigin.SoulSilver
}

export const isHoenn = (origin: GameOfOrigin) => {
    return (
        origin === GameOfOrigin.Sapphire ||
        origin === GameOfOrigin.Ruby ||
        origin === GameOfOrigin.Emerald ||
        origin === GameOfOrigin.AlphaSapphire ||
        origin === GameOfOrigin.OmegaRuby
    )
}

export const isSinnoh = (origin: GameOfOrigin) => {
    return (
        origin === GameOfOrigin.Diamond ||
        origin === GameOfOrigin.Pearl ||
        origin === GameOfOrigin.Platinum ||
        origin === GameOfOrigin.BrilliantDiamond ||
        origin === GameOfOrigin.ShiningPearl
    )
}

export const gameOfOriginFromFormat = (format: string) => {
    switch (format) {
        case 'PK2':
            return GameOfOrigin.Crystal
        case 'PK3':
            return GameOfOrigin.Sapphire
        case 'PK4':
            return GameOfOrigin.SoulSilver
        case 'PK5':
            return GameOfOrigin.White2
        case 'PK6':
            return GameOfOrigin.OmegaRuby
        case 'PK7':
            return GameOfOrigin.Moon
        case 'PB7':
            return GameOfOrigin.LetsGoEevee
        case 'PK8':
            return GameOfOrigin.Shield
        case 'PA8':
            return GameOfOrigin.LegendsArceus
        case 'PB8':
            return GameOfOrigin.BrilliantDiamond
        case 'PK9':
            return GameOfOrigin.Scarlet
    }
    return GameOfOrigin.INVALID_0
}

const ColosseumOnlyNonShadow = [311]

const ColosseumOnlyShadow = [
    153, 154, 156, 157, 159, 160, 162, 164, 176, 468, 185, 188, 189, 190, 192, 193, 195, 198, 200,
    206, 207, 210, 211, 213, 214, 215, 218, 223, 461, 472, 469, 430, 429, 982, 223, 224, 225, 226,
    227, 234, 899, 235, 237, 241, 243, 244, 245, 248, 250, 307, 308, 329, 330, 333, 357, 359, 376,
]

const CXDShadow = [166, 168, 180, 181, 196, 197, 205, 217, 219, 221, 473, 901, 229, 296, 297, 334]

const CXDNonShadow = [196, 197]

export enum ColosseumOrXD {
    Colosseum,
    XD,
    NotDeterminable,
}

export const colosseumOrXD = (dexNum?: number, hasNationalRibbon?: boolean): ColosseumOrXD => {
    if (dexNum === undefined || hasNationalRibbon === undefined) {
        return ColosseumOrXD.NotDeterminable
    }
    if (hasNationalRibbon) {
        if (ColosseumOnlyShadow.includes(dexNum)) {
            return ColosseumOrXD.Colosseum
        }
        if (CXDShadow.includes(dexNum)) {
            return ColosseumOrXD.NotDeterminable
        }
        return ColosseumOrXD.XD
    }
    if (ColosseumOnlyNonShadow.includes(dexNum)) {
        return ColosseumOrXD.Colosseum
    }
    if (CXDNonShadow.includes(dexNum)) {
        return ColosseumOrXD.NotDeterminable
    }
    return ColosseumOrXD.XD
}
