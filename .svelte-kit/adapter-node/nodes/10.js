

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/classrooms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Dc9zdQdr.js","_app/immutable/chunks/CjXL7628.js","_app/immutable/chunks/CsTUXKtP.js","_app/immutable/chunks/Cb6qxkjI.js","_app/immutable/chunks/BzpG_h4y.js"];
export const stylesheets = ["_app/immutable/assets/10.CKEE-vJC.css"];
export const fonts = [];
