export default defineNitroPlugin((nitroApp) => {
  if (typeof console !== 'undefined' && !(console as any).createTask) {
    (console as any).createTask = () => ({
      run: (fn: any) => fn(),
    });
  }
});
