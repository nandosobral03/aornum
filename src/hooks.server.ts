export const handle = async ({ event, resolve }) => {
    const darkmode = event.cookies.get('darkmode');
    const response = await resolve(event, {
        transformPageChunk: ({html}) => html.replace('data-theme=""', `data-theme="${darkmode}"`)
    });
    return response;
}