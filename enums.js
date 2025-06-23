
const BATTLEREASONS = {
    ATTACK : "Attack",
    GUARD : "Guard",
    METABOLISM : "Metabolism",
    DEPLOY : "Deploy",
    CONTROLLEDMOVE : "Controlled Move",
    COLLISIONWALL : "Collision (Wall)",
    COLLISIONDIRECTED : "Collision (Directed)",
    COLLISIONBACKLASH : "Collision (Backlash)",
    PRIMARYATTACK : "Primary Attack",
    SECONDARYATTACK : "Secondary Attack",
    BURNING : "Burning",
    BERSERK : "Berserk",
    BULKY : "Bulky",
    POISONED : "Poisoned",
    BLEEDING : "Bleeding",
    SHOCKED : "Shocked",
    EXPLOSION : "Explosion",
    PRESSURE : "Pressure",
    DESTROYER : "Destroyer",
    PETRIFY : "Petrify",
    VULNERABLE : "Vulnerable",
    CHAINED : "Chained",
    FROZEN : "Frozen",
    SHELLED : "Shelled",
    CRAZED : "Crazed",
    QUICKNESS : "Quickness",
    RAGE : "Rage",
    SAVANT : "Savant",
    SUNDERED : "Sundered",
    EMPOWERED : "Empowered",
    WEAK : "Weak",
    MENDING : "Mending",
    LINK : "Link",
    LEECHING : "Leeching",
    BARRIER : "Barrier",
    REPULSE : "Repulse",
    SILENCED : "Silenced",
    VACUUM : "Vacuum",
    UNMENDING : "Unmending",
    SAP : "Sap",
    SUREFOOTED : "SureFooted",
    FIRE : "Fire",
    EARTH : "Earth",
    WATER : "Water",
    AIR : "Air",
    HORSEDUNG : "Horse Dung",
    LODESTONE : "Lodestone",
    MULTIPLICATION : "Multiplication",
    COPPER : "Copper",
    LEAD : "Lead",
    IRON : "Iron",
    REGULUSOFIRON : "Regulus Of Iron",
    SOUL : "Soul",
    CALCINATION : "Calcination",
    FERMENTATION : "Fermentation",
}

const ELEMENTTYPES = {
    FIRE : "Fire",
    WATER : "Water",
    EARTH : "Earth",
    METAL : "Metal",
    AIR : "Air",
    NONE : "Void",
};

const CELLTYPES = {
    FIRE : "red",
    WATER : "blue",
    EARTH : "gray",
    WOOD : "green",
    AIR : "yellow",
    HEALING : "purple",
    RAINBOW : "rainbow",
    JAMMER : "black",
    BOMB : "orange",
    WILDCARD : "*",
};

const LOSEABLESTATS = {
    INT : "intelligence",
    STAM : "stamina",
    POT : "potential",
    FIRE : "firepower",
    WATER : "waterpower",
    EARTH : "metalpower",
    WOOD : "woodpower",
    AIR : "airpower",
    HEALING : "heartpower",
    RAINBOW : "rainbowpower",
    JAMMER : "jammerpower",
    BOMB : "bombpower",
}

const DIRECTIONTYPES = {
    UP : "Up",
    DOWN : "Down",
    LEFT : "Left",
    RIGHT : "Right",
    NONE : "None",
}

const HOOKEDFUNCS = [
    "Fighter.getter",
    "Fighter.setter",
    "Fighter.initializeStats",
    "Fighter.getStatScalingFunction",
    "Fighter.onShrugOffDamage",
    "Fighter.isGuarding",
    "Fighter.reduceDamageByDefense",
    "Fighter.increaseDamageEffects",
    "Fighter.reduceDamageEffects",
    "Fighter.damage",
    "Fighter.onDamage",
    "Fighter.instantKill",
    "Fighter.onInstantKill",
    "Fighter.death",
    "Fighter.onDeath",
    "Fighter.afflictCondition",
    "Fighter.onAfflictCondition",
    "Fighter.removeCondition",
    "Fighter.onRemoveCondition",
    "Fighter.makeTerrain",
    "Fighter.acquirePassive",
    "Fighter.acquireSkill",
    "Fighter.onAcquirePassive",
    "Fighter.onAcquireSkill",
    "Fighter.hasCondition",
    "Fighter.hasSkill",
    "Fighter.notHasCondition",
    "Fighter.sameRace",
    "Fighter.aggregateSameRace",
    "Fighter.aggregateAllies",
    "Fighter.aggregateEnemies",
    "Fighter.getRandomEnemy",
    "Fighter.getRandomAlly",
    "Fighter.isBackstab",
    "Fighter.backstabDamageFormula",
    "Fighter.isElementalWeakness",
    "Fighter.isElementalStrength",
    "Fighter.elementalDamageStrengthMultiplier",
    "Fighter.elementalDamageWeaknessMultiplier",
    "Fighter.rotate",
    "Fighter.collisionDamageFormula",
    "Fighter.collide",
    "Fighter.move",
    "Fighter.onMove",
    "Fighter.directedMove",
    "Fighter.getMaxManualActions",
    "Fighter.controlledMove",
    "Fighter.aggregateOnPositions",
    "Fighter.increaseStatCostEffects",
    "Fighter.reduceStatCostEffects",
    "Fighter.costStat",
    "Fighter.onStatCost",
    "Fighter.regenCompatibilityLowerBounds",
    "Fighter.regenCompatibilityUpperBounds",
    "Fighter.getHealingCompatibility",
    "Fighter.increaseHealEffects",
    "Fighter.reduceHealEffects",
    "Fighter.heal",
    "Fighter.standardRegenerate",
    "Fighter.onHeal",
    "Fighter.nextTurn",
    "Fighter.onTurn",
    "Fighter.healthRatio",
    "Fighter.countThoseOfAnElement",
    "Fighter.countThoseOfARace",
    "Fighter.countConditions",
    "Fighter.countDeadFighters",
    "Fighter.isSummon",
    "Fighter.onDedicatedPatternMatch",
    "Fighter.onBlobPatternMatch",
    "Fighter.processBlobMatches",
    "Fighter.activateAttack",
    "Fighter.mutateData",
    "Fighter.onMutate",
    "Fighter.changeCell",
    "Fighter.chanceOf",
    "Fighter.countConditionsOfTag",
    "Fighter.onPassiveEvent",
    "Fighter.onSkillEvent",
    "Fighter.deactivateSkill",
    "Fighter.onDeploy",
    "Fighter.summon",
    "Fighter.onSummon",
    "Fighter.quickSecondaryTargetingFunctionQueryFunctionList",
    "Fighter.getAttackSecondaryTargetingFunction",
    "Fighter.getTerrainStandingOn",
    "Fighter.getDragTime",
    "Passive.getter",
    "Passive.setter",
    "Skill.getter",
    "Skill.setter",
    "Skill.activate",
    "Skill.onActivate",
]


const CONDITIONTYPES = {
    Burning: "BATTLEREASONS.BURNING",
    Berserk: "BATTLEREASONS.BERSERK",
    Bulky: "BATTLEREASONS.BULKY",
    Poisoned: "BATTLEREASONS.POISONED",
    Bleeding: "BATTLEREASONS.BLEEDING",
    Shocked: "BATTLEREASONS.SHOCKED",
    Destroyer: "BATTLEREASONS.DESTROYER",
    Petrify: "BATTLEREASONS.PETRIFY",
    Vulnerable: "BATTLEREASONS.VULNERABLE",
    Chained: "BATTLEREASONS.CHAINED",
    Frozen: "BATTLEREASONS.FROZEN",
    Shelled: "BATTLEREASONS.SHELLED",
    Crazed: "BATTLEREASONS.CRAZED",
    Quickness: "BATTLEREASONS.QUICKNESS",
    Rage: "BATTLEREASONS.RAGE",
    Savant: "BATTLEREASONS.SAVANT",
    Sundered: "BATTLEREASONS.SUNDERED",
    Empowered: "BATTLEREASONS.EMPOWERED",
    Weak: "BATTLEREASONS.WEAK",
    Mending: "BATTLEREASONS.MENDING",
    Link: "BATTLEREASONS.LINK",
    Leeching: "BATTLEREASONS.LEECHING",
    Barrier: "BATTLEREASONS.BARRIER",
    Repulse: "BATTLEREASONS.REPULSE",
    Silenced: "BATTLEREASONS.SILENCED",
    Vacuum: "BATTLEREASONS.VACUUM",
    Unmending: "BATTLEREASONS.UNMENDING",
    Sap: "BATTLEREASONS.SAP",
    SureFooted: "BATTLEREASONS.SUREFOOTED",
}


const TERRAINTYPES = {
    Fire: BATTLEREASONS.FIRE,
    Earth: BATTLEREASONS.EARTH,
    Water: BATTLEREASONS.WATER,
    Air: BATTLEREASONS.AIR,
    HorseDung: BATTLEREASONS.HORSEDUNG,
    Lodestone: BATTLEREASONS.LODESTONE,
    Multiplication: BATTLEREASONS.MULTIPLICATION,
    Copper: BATTLEREASONS.COPPER,
    Lead: BATTLEREASONS.LEAD,
    Iron: BATTLEREASONS.IRON,
    RegulusOfIron: BATTLEREASONS.REGULUSOFIRON,
    Soul: BATTLEREASONS.SOUL,
    Calcination: BATTLEREASONS.CALCINATION,
    Fermentation: BATTLEREASONS.FERMENTATION,
}

const FUNCTIONTYPE = "FUNCTIONTYPE";
const NUMBERTYPE = "NUMBERTYPE";
const ELEMENTENUMTYPE = "ELEMENTENUMTYPE";
const CELLENUMTYPE = "CELLENUMTYPE";
const DIRECTIONENUMTYPE = "DIRECTIONENUMTYPE";
const STRINGTYPE = "STRINGTYPE";
const STRINGARRAYTYPE = "STRINGARRAYTYPE";
const CONDITIONENUMTYPE = "CONDITIONENUMTYPE";
const TERRAINENUMTYPE = "TERRAINENUMTYPE";

const ENUM_LISTS = {
  ELEMENTENUMTYPE: ELEMENTTYPES,
  CONDITIONENUMTYPE: CONDITIONTYPES,
  TERRAINENUMTYPE: TERRAINTYPES,
  CELLENUMTYPE: CELLTYPES,
  DIRECTIONENUMTYPE: DIRECTIONTYPES,
};

const PRIORCONDITIONFUNCTIONS = {
    NoCondition : [],
    TurnsPassedSinceCreation: [
        { turns: NUMBERTYPE}
    ],
    UseArgsInsteadOfParamsForNextCheck: [],
    GetterSetterCheckKey: [
        { key: STRINGTYPE, keys: STRINGARRAYTYPE }
    ],
    Sourceless: [],
    Sourced: [],
    SourceIsBearer: [],
    SourceIsNotBearer: [],
    TargetIsBearer: [],
    TargetIsNotBearer: [],
    SourceAndBearerAllied: [],
    TargetAndBearerAllied: [],
    SourceAndTargetAllied: [],
    SourceAndBearerSameRace: [],
    TargetAndBearerSameRace: [],
    SourceAndTargetSameRace: [],
    SourceIsRace: [
        { race: STRINGTYPE}
    ],
    TargetIsRace: [
        { race: STRINGTYPE}
    ],
    BearerIsRace: [
        {race: STRINGTYPE}
    ],
    SourceIsSummon: [],
    TargetIsSummon: [],
    BearerIsSummon: [],
    SourceIsNotSummon: [],
    TargetIsNotSummon: [],
    BearerIsNotSummon: [],
    SourceIsGuarding: [],
    TargetIsGuarding: [],
    BearerIsGuarding: [],
    SourceAndBearerEnemies: [],
    TargetAndBearerEnemies: [],
    SourceAndTargetEnemies: [],
    SourceAndBearerPositionRelationship: [], // todo
    TargetAndBearerPositionRelationship: [], // todo
    SourceAndTargetPositionRelationship: [], // todo
    SourceHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    TargetHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    BearerHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    SourceNotHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    TargetNotHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    BearerNotHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    SourceStatBetween: [
        {statName: STRINGTYPE},
        {minValue: NUMBERTYPE},
        {maxValue: NUMBERTYPE}
    ],
    TargetStatBetween: [
        {statName: STRINGTYPE},
        {minValue: NUMBERTYPE},
        {maxValue: NUMBERTYPE}
    ],
    BearerStatBetween: [
        {statName: STRINGTYPE},
        {minValue: NUMBERTYPE},
        {maxValue: NUMBERTYPE}
    ],
    StartOfBattle: [],
    SourceHealthRatioBetween: [
        {minValue: NUMBERTYPE},
        {maxValue: NUMBERTYPE}
    ],
    TargetHealthRatioBetween: [
        {minValue: NUMBERTYPE},
        {maxValue: NUMBERTYPE}
    ],
    BearerHealthRatioBetween: [
        {minValue: NUMBERTYPE},
        {maxValue: NUMBERTYPE}
    ],
    BearerPrimaryElement: [
        { element: ELEMENTENUMTYPE }
    ],
    SourcePrimaryElement: [
        { element: ELEMENTENUMTYPE }
    ],
    TargetPrimaryElement: [
        { element: ELEMENTENUMTYPE }
    ],
    BearerSecondaryElement: [
        { element: ELEMENTENUMTYPE }
    ],
    SourceSecondaryElement: [
        { element: ELEMENTENUMTYPE }
    ],
    TargetSecondaryElement: [
        { element: ELEMENTENUMTYPE }
    ],
    BearerStandingOnTerrain: [
        { terrain: TERRAINENUMTYPE }
    ],
    SourceStandingOnTerrain: [
        { terrain: TERRAINENUMTYPE }
    ],
    TargetStandingOnTerrain: [
        { terrain: TERRAINENUMTYPE }
    ],
    ParamsAmountBetween: [
        { minValue: NUMBERTYPE },
        { maxValue: NUMBERTYPE }
    ],
    ParamsConditionEquals: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    ParamsDamageWasBackstab: [],
    ParamsDamageWasElementalWeakness: [],
    ParamsDamageWasElementalStrength: [],
    ParamsDamageTypeEquals: [
        {damageType: ELEMENTENUMTYPE, damageTypeFunc: FUNCTIONTYPE}
    ],
    ParamsDamageTypeNotEquals: [
        {damageType: ELEMENTENUMTYPE, damageTypeFunc: FUNCTIONTYPE}
    ],
    ParamsEventSuccess: [],
    ParamsEventFailure: [],
    ParamsStatType: [
        { statType: STRINGTYPE }
    ],
    ParamsEffectName: [
        { effect: STRINGTYPE }
    ],
    ParamsReasonName: [
        { reason: STRINGTYPE }
    ],
    ParamsNotReasonName: [
        { reason: STRINGTYPE }
    ],
    ParamsHasFlag: [
        { flagName: STRINGTYPE }
    ],
    ParamsCustomFlag: [
        { flagName: STRINGTYPE }
    ],
    ParamsNotCustomFlag: [
        { flagName: STRINGTYPE }
    ],
    ParamsElement: [
        { element: ELEMENTENUMTYPE }
    ],
    ParamsCellType: [
        { cellType: CELLENUMTYPE }
    ],
    ParamsNewType: [
        { newType: CELLENUMTYPE }
    ],
    PassiveCheckData: [
        { checkDataFunc: FUNCTIONTYPE }
    ],
    SkillCheckData: [
        { checkDataFunc: FUNCTIONTYPE }
    ],
    SkillName: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE }
    ],
    SkillNotName: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE }
    ],
    SourceHasHighestStat: [
        { statName: STRINGTYPE },
        { limit: NUMBERTYPE }
    ],
    TargetHasHighestStat: [
        { statName: STRINGTYPE },
        { limit: NUMBERTYPE }
    ],
    BearerHasHighestStat: [
        { statName: STRINGTYPE },
        { limit: NUMBERTYPE }
    ],
    SourceHasLowestStat: [
        { statName: STRINGTYPE },
        { limit: NUMBERTYPE }
    ],
    TargetHasLowestStat: [
        { statName: STRINGTYPE },
        { limit: NUMBERTYPE }
    ],
    BearerHasLowestStat: [
        { statName: STRINGTYPE },
        { limit: NUMBERTYPE }
    ],
    SkillIs: [
        { skillName: STRINGTYPE }
    ],
    BattleStateCheckData: [
        {checkDataFunc: FUNCTIONTYPE }
    ],
};

const TARGETFILTRATIONFUNCTIONS = {
    NoCondition : [],
    CheckPriorConditionFunction : [
        { priorConditionFunction: FUNCTIONTYPE }
    ],
    TargetIsEventTarget : [],
    TargetIsEventSource : [],
    TargetIsBearer : [],
    TargetIsBearerAndSource: [],
    TargetIsBearerAndTarget : [],
    TargetIsSourceAndTarget : [],
    TargetIsNotBearer : [],
    TargetIsNotDead : [],
    TargetIsRandomEnemy : [],
    TargetIsRandomAlly : [],
    CheckTargetData: [
        { checkDataFunc: FUNCTIONTYPE }
    ],
    TargetAndBearerSameRace : [],
    TargetAndBearerNotSameRace : [],
    AllEnemiesOfTarget : [],
    AllAlliesOfTarget : [],
    AllEnemiesOfSource : [],
    AllAlliesOfSource : [],
    AllEnemiesOfBearer : [],
    AllAlliesOfBearer : [],
    Everybody : [],
    TargetAndBearerPositionRelationship : [], // todo
    TargetAndSourcePositionRelationship : [], // todo
    TargetAndTargetPositionRelationship : [], // todo
    HasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    NotHasCondition: [
        { conditionName: CONDITIONENUMTYPE }
    ],
    StandingOnTerrain: [
        { terrainName: TERRAINENUMTYPE }
    ],

}

const EFFECTFUNCTIONS = {
    NoEffect : [],
    CostStatBearer : [
        { statType: STRINGTYPE, statTypeFunc: FUNCTIONTYPE },
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    CostStatEventTarget : [
        { statType: STRINGTYPE, statTypeFunc: FUNCTIONTYPE },
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    CostStatEventSource : [
        { statType: STRINGTYPE, statTypeFunc: FUNCTIONTYPE },
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    CostStatTarget : [
        { statType: STRINGTYPE, statTypeFunc: FUNCTIONTYPE },
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    AfflictConditionTarget : [
        { conditionTemplate: CONDITIONENUMTYPE },
        { conditionData: STRINGARRAYTYPE, conditionDataFunc: FUNCTIONTYPE }
    ],
    AfflictConditionBearer : [
        { conditionTemplate: CONDITIONENUMTYPE },
        { conditionData: STRINGARRAYTYPE, conditionDataFunc: FUNCTIONTYPE }
    ],
    MakeTerrainAtCoordinate : [
        { terrainTemplate: TERRAINENUMTYPE },
        {terrainData: STRINGARRAYTYPE, terrainDataFunc: FUNCTIONTYPE },
    ],
    RemoveConditionTarget : [
        { conditionTemplate: CONDITIONENUMTYPE }
    ],
    HealBearer : [
        { healAmount: NUMBERTYPE, healAmountFunc: FUNCTIONTYPE },
    ],
    StandardRegenerateBearer : [],
    HealTarget : [
        { healAmount: NUMBERTYPE, healAmountFunc: FUNCTIONTYPE },
    ],
    StandardRegenerateTarget : [],
    DamageBearer : [
        { damageAmount: NUMBERTYPE, damageAmountFunc: FUNCTIONTYPE },
        { damageType: ELEMENTENUMTYPE },
    ],
    DamageTarget : [
        { damageAmount: NUMBERTYPE, damageAmountFunc: FUNCTIONTYPE },
        { damageType: ELEMENTENUMTYPE },
    ],
    InstantKillTarget : [],
    InstantKillBearer : [],
    PushTarget : [
        { direction: DIRECTIONENUMTYPE, directionFunc: FUNCTIONTYPE },
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    PushBearer : [
        { direction: DIRECTIONENUMTYPE, directionFunc: FUNCTIONTYPE },
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    RotateTarget : [
        { direction: DIRECTIONENUMTYPE, directionFunc: FUNCTIONTYPE },
    ],
    MutateTarget: [
        { mutationData: STRINGARRAYTYPE, mutationDataFunc: FUNCTIONTYPE },
    ],
    MutateBearer: [
        { mutationData: STRINGARRAYTYPE, mutationDataFunc: FUNCTIONTYPE },
    ],
    ReplaceCellRandomly: [

    ] // todo: add optional params
}