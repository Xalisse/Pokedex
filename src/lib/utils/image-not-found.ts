const fallback = 'http://placekitten.com/96/96';

export const handleError = (ev: any) => (ev.target.src = fallback);
