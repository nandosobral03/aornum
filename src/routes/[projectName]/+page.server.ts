import { error } from '@sveltejs/kit'
import { projects } from '$lib/models/project.model.js';

export const load = ({params}) => {
    let details = projects.get(params.projectName);
    if (!details) {
        throw error(404, {
            message: 'Not found'
        });
    }

    return {
        ...details
    }
}