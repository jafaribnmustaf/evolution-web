export const CTT_PARAMETER = (i => ({
  ANIMAL: 1 << i++
  , SELF: 1 << i++
  , ENEMY: 1 << i++
  , LINK: 1 << i++
  , ONEWAY: 1 << i++
}))(0);

export const CARD_TARGET_TYPE = {
  ANIMAL_SELF: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.SELF
  , ANIMAL_ENEMY: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.ENEMY
  , LINK_SELF: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.SELF + CTT_PARAMETER.LINK
  , LINK_SELF_ONEWAY: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.SELF + CTT_PARAMETER.LINK + CTT_PARAMETER.ONEWAY
  , LINK_ENEMY: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.ENEMY + CTT_PARAMETER.LINK
};

export const FOOD_SOURCE_TYPE = {
  GAME: 'GAME'
  , ANIMAL_TAKE: 'ANIMAL_TAKE'
  , ANIMAL_COPY: 'ANIMAL_COPY'
};

export const TRAIT_TARGET_TYPE = {
  ANIMAL: 'ANIMAL'
};

export const TRAIT_COOLDOWN_PLACE = {
  ANIMAL: 'ANIMAL'
  , PLAYER: 'PLAYER'
  , GAME: 'GAME'
};

export const TRAIT_COOLDOWN_DURATION = {
  ACTIVATION: 'ACTIVATION'
  , ROUND: 'ROUND'
  , TWO_TURNS: 'TWO_ROUNDS'
  , TURN: 'PHASE'
};

export const TRAIT_COOLDOWN_LINK = {
  EATING: 'EATING'
};

//export const TRAIT_COOLDOWN_PLACE = (i => ({
//  ANIMAL: 'ANIMAL'
//  , PLAYER: 'PLAYER'
//  , GAME: 'GAME'
//}))(0);
//
//export const TRAIT_COOLDOWN_DURATION = (i => ({
//  ACTIVATION: 'ACTIVATION'
//  , ROUND: 'ROUND'
//  , TWO_ROUNDS: i++
//  , PHASE: i++
//}))(0);
//
//export const TRAIT_COOLDOWN_LINK = (i => ({
//  EATING: i++
//}))(0);