import { chimera } from "./projects/chimera";
import { eos } from "./projects/eos";
import { minos } from "./projects/minos";
import { nochan } from "./projects/nochan";
import { polemos } from "./projects/polemos";
import { rhea } from "./projects/rhea";
import { spring83 } from "./projects/spring83";
import { deadair } from "./projects/deadair";
import { momentum } from "./projects/momentum";
export type Project = {
    name: string;
    description: string;
    coverImage: string;
}

export type ProjectDetails = {
    name: string;
    links: { url: string, name: string }[];
    description: string;
    technologies?: string;
    thingsLearned?: string;
    thingsIWouldDoDifferently?: string;
    images?: {
        url: string;
        alt: string;
    }[]
}

export const projects: Map<string, ProjectDetails> = new Map();
projects.set("eos", eos);
projects.set("rhea", rhea);
projects.set("polemos", polemos);
projects.set("minos", minos);
projects.set("chimera", chimera);
projects.set("spring'83", spring83);
projects.set("nochan", nochan);
projects.set("deadair", deadair);
projects.set("momentum", momentum);