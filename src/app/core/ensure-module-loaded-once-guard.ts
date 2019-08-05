export class EnsureModuleLoadedOnceGuard {
  // tslint:disable-next-line:no-any
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
    }
  }
}