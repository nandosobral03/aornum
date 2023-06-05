export const load = (async ({ cookies }) => {
    const darkmode = cookies?.get('darkmode') === 'dark' ? true : false;
    return {
        darkmode
    };
})


