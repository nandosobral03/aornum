import { chimera } from "./projects/chimera";
import { eos } from "./projects/eos";
import { minos } from "./projects/minos";
import { polemos } from "./projects/polemos";
import { rhea } from "./projects/rhea";

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