/**
 *
 * @param f
 * @returns Middleware in charge of caching certain requests.
 */
export const memoize = <R, T extends (...args: any[]) => R>(f: T): T => {
    const memory = new Map<string, R>();
    const g = (...args: any[]) => {
        /**
         * If the keys are not found in the dictionary enter the if.
         */
        if (!memory.get(args.join())) {
            /**
             * The result is stored in the dictionary and the fn function is executed, passing it the parameters.
             */
            memory.set(args.join(), f(...args));
        }
        /**
         * Return the keys.
         */
        return memory.get(args.join());
    };

    return g as T;
};
