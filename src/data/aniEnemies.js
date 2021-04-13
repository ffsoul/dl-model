/**
 * @type {{ [id:string]: AnimationList}}
 */
const enemyAni = {
    h0080501: [
        { name: "Idle", code: "H0080501_000_01" },
        { name: "Move Forward", code: "H0080501_002_01" },
        { name: "Defeated", code: "H0080501_011_01" },
        { name: "Idle 2", code: "H0080501_014_01" },
        { name: "Buff", code: "H0080501_030_01" },
        { name: "Look Around", code: "H0080501_070_01>H0080501_070_02" },
        { name: "Broken", code: "H0080501_081_01>H0080501_081_02" },
        { name: "Recover from Broken", code: "H0080501_081_03" },
        {
            name: "Blast Attack",
            code:
                "H0080501_100_01>H0080501_100_02>H0080501_100_03>H0080501_100_04>H0080501_100_05",
        },
        {
            name: "Slap",
            code:
                "H0080501_101_01>H0080501_101_02>H0080501_101_03>H0080501_101_04>H0080501_101_05",
        },
        {
            name: "Weapon Swing",
            code:
                "H0080501_102_01>H0080501_102_02>H0080501_102_03>H0080501_102_04>H0080501_103_01>H0080501_103_02>H0080501_103_03",
        },
        {
            name: "Charge Forward",
            code:
                "H0080501_104_01>H0080501_104_02>H0080501_104_03>H0080501_104_04>H0080501_104_05",
        },
        {
            name: "Hammer Smash",
            code:
                "H0080501_105_01>H0080501_105_02>H0080501_105_03>H0080501_105_04>H0080501_105_05",
        },
        { name: "Boss Intro", code: "H0080501_090_02>H0080501_090_01" },
    ],
    h0090501: [
        { name: "Idle", code: "H0090501_000_01" },
        { name: "Move Forward", code: "H0090501_002_01" },
        { name: "Idle 2", code: "H0090501_014_01" },
        { name: "Spin", code: "H0090501_100_01" },
    ],
    h0020301: [
        { name: "Idle", code: "H0020301_014_01" },
        { name: "Walk", code: "H0020301_002_01" },
        { name: "Roar", code: "H0020301_022_01" },
        {
            name: "Broken",
            code: "H0020301_081_01>H0020301_081_02",
        },
        {
            name: "Recover from Broken",
            code: "H0020301_081_03",
        },
        {
            name: "Left Swipe",
            code: "H0020301_100_01>H0020301_100_02>H0020301_100_03",
        },
        {
            name: "Right Swipe",
            code: "H0020301_101_01>H0020301_101_02>H0020301_101_03",
        },
        {
            name: "Charge",
            code: "H0020301_102_01>H0020301_102_02>H0020301_102_03",
        },
        {
            name: "Roar",
            code:
                "H0020301_103_01>H0020301_103_02>H0020301_103_03>H0020301_103_04>H0020301_103_05",
        },
        {
            name: "Howl",
            code:
                "H0020301_104_01>H0020301_104_02>H0020301_104_03>H0020301_104_04>H0020301_104_05",
        },
        {
            name: "Bloodmoon Broken",
            code: "H0020301_105_01>H0020301_105_02",
        },
    ],
    h0030401: [
        { name: "Idle", code: "H0030401_000_01" },
        { name: "Walk", code: "H0030401_002_01" },
        { name: "Roar", code: "H0030401_022_01" },
        {
            name: "Broken",
            code: "H0030401_081_01>H0030401_081_02",
        },
        {
            name: "Recover from Broken",
            code: "H0030401_081_03",
        },
        {
            name: "Left Swipe",
            code: "H0030401_100_01>H0030401_100_02>H0030401_100_03",
        },
        {
            name: "Right Swipe",
            code: "H0030401_101_01>H0030401_101_02>H0030401_101_03",
        },
        {
            name: "Charge",
            code: "H0030401_102_01>H0030401_102_02>H0030401_102_03",
        },
        {
            name: "Cataclysm",
            code: "H0030401_103_01>H0030401_103_02",
        },
        {
            name: "Cataclysm Broken",
            code: "H0030401_103_03",
        },
        {
            name: "Cataclysm Exploded",
            code: "H0030401_103_04",
        },
        {
            name: "Throw",
            code: "H0030401_104_01",
        },
        {
            name: "Put up Shield",
            code:
                "H0030401_105_01>H0030401_105_02>H0030401_105_03>H0030401_105_04>H0030401_105_05",
        },
        {
            name: "Extinction",
            code: "H0030401_106_01>H0030401_106_02>H0030401_106_03",
        },
    ],
};

export default enemyAni;
