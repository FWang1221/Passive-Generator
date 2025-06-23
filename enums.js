
const BATTLEREASONS = {
    ATTACK : "BATTLEREASONS.ATTACK",
    GUARD : "BATTLEREASONS.GUARD",
    METABOLISM : "BATTLEREASONS.METABOLISM",
    DEPLOY : "BATTLEREASONS.DEPLOY",
    CONTROLLEDMOVE : "BATTLEREASONS.CONTROLLEDMOVE",
    COLLISIONWALL : "BATTLEREASONS.COLLISIONWALL",
    COLLISIONDIRECTED : "BATTLEREASONS.COLLISIONDIRECTED",
    COLLISIONBACKLASH : "BATTLEREASONS.COLLISIONBACKLASH",
    PRIMARYATTACK : "BATTLEREASONS.PRIMARY ATTACK",
    SECONDARYATTACK : "BATTLEREASONS.SECONDARY ATTACK",
    BURNING : "BATTLEREASONS.BURNING",
    BERSERK : "BATTLEREASONS.BERSERK",
    BULKY : "BATTLEREASONS.BULKY",
    POISONED : "BATTLEREASONS.POISONED",
    BLEEDING : "BATTLEREASONS.BLEEDING",
    SHOCKED : "BATTLEREASONS.SHOCKED",
    EXPLOSION : "BATTLEREASONS.EXPLOSION",
    PRESSURE : "BATTLEREASONS.PRESSURE",
    DESTROYER : "BATTLEREASONS.DESTROYER",
    PETRIFY : "BATTLEREASONS.PETRIFY",
    VULNERABLE : "BATTLEREASONS.VULNERABLE",
    CHAINED : "BATTLEREASONS.CHAINED",
    FROZEN : "BATTLEREASONS.FROZEN",
    SHELLED : "BATTLEREASONS.SHELLED",
    CRAZED : "BATTLEREASONS.CRAZED",
    QUICKNESS : "BATTLEREASONS.QUICKNESS",
    RAGE : "BATTLEREASONS.RAGE",
    SAVANT : "BATTLEREASONS.SAVANT",
    SUNDERED : "BATTLEREASONS.SUNDERED",
    EMPOWERED : "BATTLEREASONS.EMPOWERED",
    WEAK : "BATTLEREASONS.WEAK",
    MENDING : "BATTLEREASONS.MENDING",
    LINK : "BATTLEREASONS.LINK",
    LEECHING : "BATTLEREASONS.LEECHING",
    BARRIER : "BATTLEREASONS.BARRIER",
    REPULSE : "BATTLEREASONS.REPULSE",
    SILENCED : "BATTLEREASONS.SILENCED",
    VACUUM : "BATTLEREASONS.VACUUM",
    UNMENDING : "BATTLEREASONS.UNMENDING",
    SAP : "BATTLEREASONS.SAP",
    SUREFOOTED : "BATTLEREASONS.SUREFOOTED",
    FIRE : "BATTLEREASONS.FIRE",
    EARTH : "BATTLEREASONS.EARTH",
    WATER : "BATTLEREASONS.WATER",
    AIR : "BATTLEREASONS.AIR",
    HORSEDUNG : "BATTLEREASONS.HORSE DUNG",
    LODESTONE : "BATTLEREASONS.LODESTONE",
    MULTIPLICATION : "BATTLEREASONS.MULTIPLICATION",
    COPPER : "BATTLEREASONS.COPPER",
    LEAD : "BATTLEREASONS.LEAD",
    IRON : "BATTLEREASONS.IRON",
    REGULUSOFIRON : "BATTLEREASONS.REGULUSOFIRON",
    SOUL : "BATTLEREASONS.SOUL",
    CALCINATION : "BATTLEREASONS.CALCINATION",
    FERMENTATION : "BATTLEREASONS.FERMENTATION",
}

const ELEMENTTYPES = {
    FIRE : "ELEMENTTYPES.FIRE",
    WATER : "ELEMENTTYPES.WATER",
    EARTH : "ELEMENTTYPES.EARTH",
    METAL : "ELEMENTTYPES.METAL",
    AIR : "ELEMENTTYPES.AIR",
    NONE : "ELEMENTTYPES.NONE",
};

const CELLTYPES = {
    FIRE : "CELLTYPES.FIRE",
    WATER : "CELLTYPES.WATER",
    EARTH : "CELLTYPES.EARTH",
    WOOD : "CELLTYPES.WOOD",
    AIR : "CELLTYPES.AIR",
    HEALING : "CELLTYPES.HEALING",
    RAINBOW : "CELLTYPES.RAINBOW",
    JAMMER : "CELLTYPES.JAMMER",
    BOMB : "CELLTYPES.BOMB",
    WILDCARD : "CELLTYPES.WILDCARD",
};

const LOSEABLESTATS = { // todo: replace like ones above
    INT : "LOSEABLESTATS.INT",
    STAM : "LOSEABLESTATS.STAM",
    POT : "LOSEABLESTATS.POT",
    FIRE : "LOSEABLESTATS.FIRE",
    WATER : "LOSEABLESTATS.WATER",
    EARTH : "LOSEABLESTATS.EARTH",
    WOOD : "LOSEABLESTATS.WOOD",
    AIR : "LOSEABLESTATS.AIR",
    HEALING : "LOSEABLESTATS.HEALING",
    RAINBOW : "LOSEABLESTATS.RAINBOW",
    JAMMER : "LOSEABLESTATS.JAMMER",
    BOMB : "LOSEABLESTATS.BOMB",
}

const DIRECTIONTYPES = { // todoL same
    UP : "DIRECTIONTYPES.UP",
    DOWN : "DIRECTIONTYPES.DOWN",
    LEFT : "DIRECTIONTYPES.LEFT",
    RIGHT : "DIRECTIONTYPES.RIGHT",
    NONE : "DIRECTIONTYPES.NONE",
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

HOOKEDFUNCS.sort();


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


const TERRAINTYPES = {// todo: formatting
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
const LOSEABLESTATSTYPE = "LOSEABLESTATSTYPE";

const ENUM_LISTS = {
  ELEMENTENUMTYPE: ELEMENTTYPES,
  CONDITIONENUMTYPE: CONDITIONTYPES,
  TERRAINENUMTYPE: TERRAINTYPES,
  CELLENUMTYPE: CELLTYPES,
  DIRECTIONENUMTYPE: DIRECTIONTYPES,
  LOSEABLESTATSTYPE: LOSEABLESTATS,
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
        { statType: LOSEABLESTATSTYPE }
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
        { statType: LOSEABLESTATSTYPE, statTypeFunc: FUNCTIONTYPE },
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
        {customFlags: STRINGARRAYTYPE, customFlagsFunc: FUNCTIONTYPE}
    ],
    DamageTarget : [
        { damageAmount: NUMBERTYPE, damageAmountFunc: FUNCTIONTYPE },
        { damageType: ELEMENTENUMTYPE },
        {customFlags: STRINGARRAYTYPE, customFlagsFunc: FUNCTIONTYPE}
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
        {minBoundX: NUMBERTYPE},
        {maxBoundX: NUMBERTYPE},
        {minBoundY: NUMBERTYPE},
        {maxBoundY: NUMBERTYPE},
        {limit : NUMBERTYPE, limitFunc: FUNCTIONTYPE},
        {newType: CELLENUMTYPE, newTypeFunc: FUNCTIONTYPE},
    ],
    ReplaceCellRow: [
        {row: NUMBERTYPE, rowFunc: FUNCTIONTYPE},
        {newType: CELLENUMTYPE, newTypeFunc: FUNCTIONTYPE},
    ],
    ReplaceCellColumn: [
        {column: NUMBERTYPE, columnFunc: FUNCTIONTYPE},
        {newType: CELLENUMTYPE, newTypeFunc: FUNCTIONTYPE},
    ],
    ReplaceCellType: [
        {oldType: CELLENUMTYPE, oldTypeFunc: FUNCTIONTYPE},
        {newType: CELLENUMTYPE, newTypeFunc: FUNCTIONTYPE},
    ],
    ManipulateArgsValue: [
        { newValueFunc: FUNCTIONTYPE },
    ],
    ManipulateRawReturnValue: [
        { newValueFunc: FUNCTIONTYPE },
    ],
    ManipulateReturnValue: [
        { newValueFunc: FUNCTIONTYPE },
    ],
    ManipulateReturnValueAmount: [
        { newAmountFunc: FUNCTIONTYPE },
    ],
    TriggerOnEffects: [
        {onEffect: STRINGARRAYTYPE},
        {params: STRINGARRAYTYPE, paramsFunc: FUNCTIONTYPE},
    ],
    BearerAcquiresPassive: [
        { passiveName: STRINGTYPE},
    ],
    ChanceOf: [
        { chance: NUMBERTYPE, chanceFunc: FUNCTIONTYPE },
    ],
    TargetNextTurn: [],
    SummonFighter: [
        {fighterTemplate: STRINGTYPE, fighterTemplateFunc: FUNCTIONTYPE},
        {customFlags: STRINGARRAYTYPE, customFlagsFunc: FUNCTIONTYPE},
    ],
    AcquireSkill: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE },
    ],
    AcquireSkillTarget: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE },
    ],
    DeactivateSkill: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE },
    ],
    PlayBulletAtBearer: [
        { bulletName: STRINGTYPE},
        {category: ELEMENTENUMTYPE}
    ],
    PlayBulletAtTarget: [
        { bulletName: STRINGTYPE},
        {category: ELEMENTENUMTYPE}
    ],
    PlayBulletAtTargetCoord: [
        { bulletName: STRINGTYPE},
        {category: ELEMENTENUMTYPE},
    ],
    PassiveSetData: [
        {setDataFunc: FUNCTIONTYPE},
    ],
    SkillSetData: [
        {setDataFunc: FUNCTIONTYPE},
    ],
    PassiveCheckData: [
        { checkDataFunc: FUNCTIONTYPE }
    ],
    SkillCheckData: [
        { checkDataFunc: FUNCTIONTYPE }
    ],
    AddExtraTargets: [
        {extraTargetFunc: FUNCTIONTYPE},
    ],
    ConvertCoordinateToFighter: [],
    ConvertCoordinateToFighterOrMakeTerrain: [
        { terrainTemplate: TERRAINENUMTYPE },
        { terrainData: STRINGARRAYTYPE, terrainDataFunc: FUNCTIONTYPE }
    ],
    GiveTargetPassive: [
        { passiveName: STRINGTYPE, passiveNameFunc: FUNCTIONTYPE },
    ],
    GiveBearerPassive: [
        { passiveName: STRINGTYPE, passiveNameFunc: FUNCTIONTYPE },
    ],
    GiveTargetCustomPassive: [
        {passiveTemplate: STRINGARRAYTYPE}
    ],
    GiveBearerCustomPassive: [
        {passiveTemplate: STRINGARRAYTYPE}
    ],
    AttackTarget: [
        {customFlags: STRINGARRAYTYPE, customFlagsFunc: FUNCTIONTYPE},
    ],
    CastOnTarget: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE },
        { customFlags: STRINGARRAYTYPE, customFlagsFunc: FUNCTIONTYPE },
        { targetPoolFunc: FUNCTIONTYPE },
    ],
    CastOnBearer: [
        { skillName: STRINGTYPE, skillNameFunc: FUNCTIONTYPE },
        { customFlags: STRINGARRAYTYPE, customFlagsFunc: FUNCTIONTYPE },
    ],
    RemoveCustomPassiveTarget: [
        { passive: STRINGTYPE }
    ],
    MoveTargetRandomly: [
        {distance: NUMBERTYPE, distanceFunc: FUNCTIONTYPE},
    ],
    MoveBearerRandomly: [
        {distance: NUMBERTYPE, distanceFunc: FUNCTIONTYPE},
    ],
    MoveBearer: [
        {newXYFunc: FUNCTIONTYPE},
    ],
    MoveTarget: [
        {newXYFunc: FUNCTIONTYPE},
    ],
    CannotBeManuallyCast: [],
    MustBeManuallyCast: [],
    CheckPriorConditionFunction:[], // todo, reference prior condition func
    IncrementScore: [
        { amount: NUMBERTYPE, amountFunc: FUNCTIONTYPE },
    ],
    BattleStateSetData: [
        { setDataFunc: FUNCTIONTYPE },
    ],
    BattleStateCheckData: [
        { checkDataFunc: FUNCTIONTYPE }
    ],
    MakePassiveNotStackable: [],
    PassiveSectionNotStackCheck: [],
}