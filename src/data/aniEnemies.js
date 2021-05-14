/** @type {{ [id:string]: AnimationList}} */
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
            code: "H0080501_100_01>H0080501_100_02>H0080501_100_03>H0080501_100_04>H0080501_100_05",
        },
        {
            name: "Slap",
            code: "H0080501_101_01>H0080501_101_02>H0080501_101_03>H0080501_101_04>H0080501_101_05",
        },
        {
            name: "Weapon Swing",
            code: "H0080501_102_01>H0080501_102_02>H0080501_102_03>H0080501_102_04>H0080501_103_01>H0080501_103_02>H0080501_103_03",
        },
        {
            name: "Charge Forward",
            code: "H0080501_104_01>H0080501_104_02>H0080501_104_03>H0080501_104_04>H0080501_104_05",
        },
        {
            name: "Hammer Smash",
            code: "H0080501_105_01>H0080501_105_02>H0080501_105_03>H0080501_105_04>H0080501_105_05",
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
            name: "Roar 2",
            code: "H0020301_103_01>H0020301_103_02>H0020301_103_03>H0020301_103_04>H0020301_103_05",
        },
        {
            name: "Howl",
            code: "H0020301_104_01>H0020301_104_02>H0020301_104_03>H0020301_104_04>H0020301_104_05",
        },
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
            name: "Dash Attack",
            code: "H0020301_102_01>H0020301_102_02>H0020301_102_03",
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
            name: "Dash Attack",
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
            code: "H0030401_105_01>H0030401_105_02>H0030401_105_03>H0030401_105_04>H0030401_105_05",
        },
        {
            name: "Annihilation",
            code: "H0030401_106_01>H0030401_106_02>H0030401_106_03",
        },
    ],
    h0050201: [
        { name: "Idle", code: "H0050201_014_01" },
        { name: "Fly", code: "H0050201_002_01" },
        { name: "Dash", code: "H0050201_020_01" },
        { name: "Buff", code: "H0050201_022_01" },

        {
            name: "Broken",
            code: "H0050201_081_01>H0050201_081_02",
        },
        {
            name: "Recover from Broken",
            code: "H0050201_081_03",
        },
        {
            name: "Beam Attack",
            code: "H0050201_100_01>H0050201_100_02>H0050201_100_03",
        },
        {
            name: "Bolts from Above",
            code: "H0050201_101_01>H0050201_101_02>H0050201_101_03",
        },
        {
            name: "Blast Attack",
            code: "H0050201_102_01>H0050201_102_02>H0050201_102_03>H0050201_102_04>H0050201_102_05",
        },
        {
            name: "Dash Attack",
            code: "H0050201_103_01>H0050201_103_02>H0050201_103_03>H0050201_103_04>H0050201_103_05",
        },
        {
            name: "Spin Attack",
            code: "H0050201_104_01>H0050201_104_02>H0050201_104_03",
        },
        {
            name: "Reappear",
            code: "H0050201_105_01",
        },
        {
            name: "Transform",
            code: "H0050201_106_01",
        },
    ],
    h0060101: [
        { name: "Idle", code: "H0060101_000_01" },
        { name: "Fly", code: "H0060101_002_01" },
        { name: "Frozen", code: "H0060101_013_01" },

        {
            name: "Broken",
            code: "H0060101_081_01>H0060101_081_02",
        },
        {
            name: "Recover from Broken",
            code: "H0060101_081_03",
        },
        {
            name: "Left Swipe",
            code: "H0060101_103_01>H0060101_103_02>H0060101_103_03",
        },
        {
            name: "Right Swipe",
            code: "H0060101_100_01>H0060101_100_02>H0060101_100_03",
        },
        {
            name: "CCW Spin",
            code: "H0060101_104_01>H0060101_104_02>H0060101_104_03>H0060101_104_04>H0060101_104_05",
        },
        {
            name: "CW Spin",
            code: "H0060101_101_01>H0060101_101_02>H0060101_101_03>H0060101_101_04>H0060101_101_05",
        },
        {
            name: "Right Attack",
            code: "H0060101_102_01>H0060101_102_02>H0060101_102_03>H0060101_102_04>H0060101_102_05",
        },
        {
            name: "Left Attack",
            code: "H0060101_105_01>H0060101_105_02>H0060101_105_03>H0060101_105_04>H0060101_105_05",
        },
        {
            name: "Blast Attack",
            code: "H0060101_106_01>H0060101_106_02>H0060101_106_03>H0060101_106_04>H0060101_106_05",
        },
        {
            name: "Charge",
            code: "H0060101_108_01>H0060101_108_02>H0060101_108_03>H0060101_108_04>H0060101_108_05",
        },
        {
            name: "Buff",
            code: "H0060101_109_01>H0060101_109_02>H0060101_109_03>H0060101_109_04>H0060101_109_05",
        },
        {
            name: "Buff 2",
            code: "H0060101_110_01>H0060101_110_02>H0060101_110_03>H0060101_110_04>H0060101_110_05",
        },
        {
            name: "Fall Down",
            code: "H0060101_107_01>H0060101_107_02>H0060101_107_03",
        },
        {
            name: "Transform",
            code: "H0060101_030_01",
        },
    ],
    h0070501: [
        { name: "Idle", code: "H0070501_000_01" },
        { name: "Walk", code: "H0070501_002_01" },
        {
            name: "Broken",
            code: "H0070501_081_01>H0070501_081_02",
        },
        {
            name: "Recover from Broken",
            code: "H0070501_081_03",
        },
        {
            name: "Dash Attack",
            code: "H0070501_100_01>H0070501_100_02>H0070501_100_03>H0070501_100_04>H0070501_100_05",
        },
        {
            name: "Dashing Punch",
            code: "H0070501_101_01>H0070501_101_02>H0070501_101_03>H0070501_101_04>H0070501_101_05",
        },
        {
            name: "Take Flight",
            code: "H0070501_103_01>H0070501_103_02>H0070501_103_03>H0070501_103_04",
        },
        {
            name: "Landing",
            code: "H0070501_104_01>H0070501_104_02",
        },
        {
            name: "Step Back",
            code: "H0070501_102_01>H0070501_102_02>H0070501_102_03",
        },
        {
            name: "Roar",
            code: "H0070501_105_01>H0070501_105_02>H0070501_105_03>H0070501_105_04>H0070501_105_05",
        },
        {
            name: "Punishment Wave",
            code: "H0070501_106_01>H0070501_106_02>H0070501_106_03>H0070501_106_04>H0070501_106_05",
        },
        {
            name: "Palm Strike",
            code: "H0070501_107_01>H0070501_107_02>H0070501_107_03",
        },
        {
            name: "Transform",
            code: "H0070501_030_01",
        },
    ],
    h0100301: [
        { name: "Idle", code: "H0100301_000_01" },
        { name: "Fly", code: "H0100301_002_01" },
        { name: "Defeated", code: "H0100301_011_01" },
        { name: "Buff", code: "H0100301_030_01" },
        { name: "Knocked Back", code: "H0100301_070_01" },
        {
            name: "Knocked Back 2",
            code: "H0100301_104_01>H0100301_104_02>H0100301_104_03",
        },
        {
            name: "Broken",
            code: "H0100301_081_01>H0100301_081_02",
        },
        { name: "Recover from Broken", code: "H0100301_081_03" },
        {
            name: "Attack 1",
            code: "H0100301_100_01>H0100301_100_02>H0100301_100_03",
        },
        {
            name: "Attack 2",
            code: "H0100301_101_01>H0100301_101_02>H0100301_101_03",
        },
        {
            name: "Attack 3",
            code: "H0100301_102_01>H0100301_102_02>H0100301_102_03",
        },
        {
            name: "Attack 4",
            code: "H0100301_103_01",
        },
        { name: "Boss Intro", code: "H0100301_090_02>H0100301_090_01" },
    ],
    c100034_01: [
        { name: "Ilde", code: "A0100001_000_01" },
        { name: "Run", code: "A0100001_002_01" },
        { name: "Take Damage", code: "A0100001_010_01" },
        { name: "Die", code: "A0100001_011_01" },
        { name: "Frozen", code: "A0100001_013_01" },
        { name: "Stun", code: "A0100001_014_01" },
        { name: "Transform", code: "A0100001_022_01" },
        { name: "Buff", code: "A0100001_050_01" },
        {
            name: "Swing",
            code: "A0100001_052_01>A0100001_052_02>A0100001_052_03",
        },
        {
            name: "Boss Intro",
            code: "A0100001_090_02>A0100001_090_01",
        },
        {
            name: "Spin",
            code: "A0100001_100_01>A0100001_100_02>A0100001_100_03>A0100001_100_04>A0100001_100_05",
        },
        {
            name: "Smash",
            code: "A0100001_101_01>A0100001_101_02>A0100001_101_03",
        },
    ],
    c100035_01: [
        { name: "Idle", code: "A0120001_000_01" },
        { name: "Run", code: "A0120001_002_01" },
        { name: "Die", code: "A0120001_011_01" },
        { name: "Stun", code: "A0120001_014_01" },
        {
            name: "Spin",
            code: "A0120001_052_01>A0120001_052_02>A0120001_052_03",
        },
        {
            name: "Broken",
            code: "A0120001_081_01>A0120001_081_02",
        },
        {
            name: "Recover from Broken",
            code: "A0120001_081_03",
        },
        {
            name: "Boss Intro",
            code: "A0120001_090_02>A0120001_090_01",
        },
        {
            name: "Shoot Upward",
            code: "A0120001_100_01>A0120001_100_02>A0120001_100_03",
        },
        {
            name: "Spin Shoot",
            code: "A0120001_101_01>A0120001_101_02>A0120001_101_03",
        },
        {
            name: "Jump Shot",
            code: "A0120001_102_01>A0120001_102_02>A0120001_102_03",
        },
        {
            name: "Jump Shoot 2",
            code: "A0120001_103_01>A0120001_103_02>A0120001_103_03",
        },
        {
            name: "Charge Forward",
            code: "A0120001_104_01>A0120001_104_02>A0120001_104_03>A0120001_104_04>A0120001_104_05",
        },
        {
            name: "Charged Shot",
            code: "A0120001_105_01>A0120001_105_02>A0120001_105_03",
        },
        { name: "Transform", code: "A0120001_106_01" },
        { name: "Slow Spin", code: "A0120001_107_01" },
    ],
    c100036_01: [
        { name: "Idle", code: "A0130101_000_01" },
        { name: "Run", code: "A0130101_002_01" },
        { name: "Die", code: "A0130101_011_01" },
        { name: "Frozen", code: "A0130101_013_01" },
        { name: "Stun", code: "A0130101_014_01" },
        { name: "Transform", code: "A0130101_030_01" },
        { name: "Buff", code: "A0130101_050_01" },
        { name: "Broken", code: "A0130101_081_01" },
        { name: "Boss Intro", code: "A0130101_090_02>A0130101_090_01" },
        {
            name: "Swing",
            code: "A0130101_101_01>A0130101_101_02>A0130101_101_03",
        },
        {
            name: "Spin",
            code: "A0130101_102_01>A0130101_102_02>A0130101_102_03>A0130101_102_04>A0130101_102_05",
        },
        {
            name: "Beam Sttack",
            code: "A0130101_103_01>A0130101_103_02>A0130101_103_03>A0130101_103_04>A0130101_103_05",
        },
        {
            name: "Dash",
            code: "A0130101_104_01>A0130101_104_02>A0130101_104_03",
        },
    ],
    c100037_01: [
        { name: "Idle", code: "A0130102_000_01" },
        { name: "Run", code: "A0130102_002_01" },
        { name: "Die", code: "A0130102_011_01" },
        { name: "Frozen", code: "A0130102_013_01" },
        { name: "Stun", code: "A0130102_014_01" },
        { name: "Transform", code: "A0130102_030_01" },
        { name: "Buff", code: "A0130102_050_01" },
        { name: "Broken", code: "A0130102_081_01" },
        { name: "Boss Intro", code: "A0130102_090_02>A0130102_090_01" },
        { name: "Combo", code: "A0130102_100_01" },
        {
            name: "Spin",
            code: "A0130102_102_01>A0130102_102_02>A0130102_102_03",
        },
        {
            name: "Beam Attack",
            code: "A0130102_103_01>A0130102_103_02>A0130102_103_03>A0130102_103_04>A0130102_103_05",
        },
        {
            name: "Punch Ground",
            code: "A0130102_104_01>A0130102_104_02>A0130102_104_03",
        },
        {
            name: "Knocked Back",
            code: "A0130102_105_01>A0130102_105_02>A0130102_105_03",
        },
    ],
    c100041_01: [
        { name: "Idle", code: "A0140001_000_01" },
        { name: "Run", code: "A0140001_002_01" },
        { name: "Die", code: "A0140001_011_01" },
        { name: "Frozen", code: "A0140001_013_01" },
        { name: "Stun", code: "A0140001_014_01" },
        { name: "Transform", code: "A0140001_030_01" },
        { name: "Buff", code: "A0140001_050_01" },
        {
            name: "Nebula",
            code: "A0140001_052_01>A0140001_052_02>A0140001_052_03",
        },
        { name: "Boss Intro", code: "A0140001_090_02>A0140001_090_01" },
        {
            name: "Downward Slash",
            code: "A0140001_100_01>A0140001_100_02>A0140001_100_03",
        },
        {
            name: "Side Slash",
            code: "A0140001_101_01>A0140001_101_02>A0140001_101_03",
        },
        {
            name: "Triple Slash",
            code: "A0140001_102_01",
        },
        {
            name: "Stab Ground",
            code: "A0140001_103_01>A0140001_103_02>A0140001_103_03",
        },
    ],
};

export default enemyAni;
