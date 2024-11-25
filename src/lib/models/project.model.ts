import { chimera } from './projects/chimera';
import { deadair } from './projects/deadair';
import { eos } from './projects/eos';
import { minos } from './projects/minos';
import { momentum } from './projects/momentum';
import { nochan } from './projects/nochan';
import { polemos } from './projects/polemos';
import { polemosRoyale } from './projects/polemos-royale';
import { reactBonsai } from './projects/react-bonsai';
import { rhea } from './projects/rhea';
import { spring83 } from './projects/spring83';
import { todayin } from './projects/todayin';
import { mushare } from './projects/mushare';
import { fourCombinator } from './projects/4combinator';
export type Project = {
	name: string;
	description: string;
	coverImage: string;
	year: number;
};

export type ProjectDetails = {
	name: string;
	links: { url: string; name: string }[];
	description: string;
	technologies?: string;
	thingsLearned?: string;
	thingsIWouldDoDifferently?: string;
	images?: {
		url: string;
		alt: string;
	}[];
};

export const projects: Map<string, ProjectDetails> = new Map();
projects.set('eos', eos);
projects.set('rhea', rhea);
projects.set('polemos', polemos);
projects.set('minos', minos);
projects.set('chimera', chimera);
projects.set("spring'83", spring83);
projects.set('nochan', nochan);
projects.set('deadair', deadair);
projects.set('momentum', momentum);
projects.set('today in', todayin);
projects.set('polemos royale', polemosRoyale);
projects.set('react bonsai', reactBonsai);
projects.set('mushare', mushare);
projects.set('4combinator', fourCombinator);
