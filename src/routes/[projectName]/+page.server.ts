import { error } from '@sveltejs/kit'

export const load = ({params}) => {
    let validPages = ['eos', 'rhea', 'polemos', 'minos', 'chimera']
    if (!validPages.includes(params.projectName)) {
        throw error(404, {
            message: 'Not found'
        });
    }

    return {
        page: params.projectName
    }
}