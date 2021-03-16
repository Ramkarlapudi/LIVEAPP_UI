export interface currentmatches {
  map: Map;
}
export interface Map {
  upcomingMatchCount: number;
  inProgressMatchCount: number;
  completedMatchCount: number;
  venue: Venue;
  isMultiDay: boolean;
  awayTeam: AwayTeamOrHomeTeam;
  scores: Scores;
  currentInningId: number;
  winningTeamId: number;
  matchSummaryText: string;
  endDateTime: string;
  isWomensMatch: boolean;
  liveStreams: LiveStreams;
  isLive: boolean;
  startDateTime: string;
  isMatchDrawn: boolean;
  series: Series;
  currentMatchState: string;
  name: string;
  homeTeam: AwayTeamOrHomeTeam;
  isMatchAbandoned: boolean;
  id: number;
  removeMatch: boolean;
  matchTypeId: number;
  isGamedayEnabled: boolean;
  status: string;
  players?: null;
  live: boolean;
  multiDay: boolean;
  womensMatch: boolean;
  matchDrawn: boolean;
  matchAbandoned: boolean;
  gamedayEnabled: boolean;
}
export interface Venue {
  map: Map1;
}
export interface Map1 {
  name: string;
  shortName: string;
  lastName?: null;
  t20DebutDate?: null;
  battingStyle?: null;
  fullName?: null;
  bio?: null;
  didYouKnow?: null;
  bowlingStyle?: null;
  firstName?: null;
  testDebutDate?: null;
  dob?: null;
  odiDebutDate?: null;
  imageURL?: null;
  playerType?: null;
  playerId: number;
  height?: null;
  someclass?: null;
}
export interface AwayTeamOrHomeTeam {
  map: Map2;
}
export interface Map2 {
  name: string;
  isBatting: boolean;
  id: number;
  shortName: string;
  batting: boolean;
}
export interface Scores {
  map: Map3;
}
export interface Map3 {
  homeOvers: string;
  awayOvers: string;
  homeScore: string;
  awayScore: string;
}
export interface LiveStreams {
  myArrayList?: (null)[] | null;
}
export interface Series {
  map: Map4;
}
export interface Map4 {
  name: string;
  id: number;
  shortName: string;
}
