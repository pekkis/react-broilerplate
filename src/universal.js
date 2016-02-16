export default function createFetchers(store) {

    return {

        prefetcher: function(nextState, replaceState, callback) {

            if (!this.component.fetch) {
                callback();
                return;
            }

            this.component.fetch(store, nextState).then(callback);
        },

        fetcher: function(nextState, replaceState) {

            if (this.component.fetch) {
                this.component.fetch(store, nextState);
            }
        }

    };
}


