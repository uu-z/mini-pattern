var abstractFactory;
(function (abstractFactory) {
    class Client {
        buildRocket(factory) {
            let rocket = factory.createRocket();
            rocket.payload = factory.createPayload();
            rocket.stages = factory.createStages();
            return rocket;
        }
    }
    class ExperimentalPayload {
    }
    class ExperimentalRocket {
    }
    class ExperimentalRocketStage {
    }
    class ExperimentalRocketFactory {
        createRocket() {
            return new ExperimentalRocket();
        }
        createPayload() {
            return new ExperimentalPayload();
        }
        createStages() {
            return [new ExperimentalRocketStage()];
        }
    }
    class Satellite {
        constructor(id, weight) {
            this.id = id;
            this.weight = weight;
        }
    }
    class FreightRocketFirstStage {
    }
    class FreightRocketSecondStage {
    }
    class FreightRocket {
    }
    class FreightRocketFactory {
        constructor() {
            this.nextSatelliteId = 0;
        }
        createRocket() {
            return new FreightRocket();
        }
        createPayload() {
            return new Satellite(this.nextSatelliteId++, 100);
        }
        createStages() {
            return [
                new FreightRocketFirstStage(),
                new FreightRocketSecondStage()
            ];
        }
    }
    let client = new Client();
    let experimentalRocketFactory = new ExperimentalRocketFactory();
    let freightRocketFactory = new FreightRocketFactory();
    let rocket = client.buildRocket(experimentalRocketFactory);
    let freightRocket = client.buildRocket(freightRocketFactory);
})(abstractFactory || (abstractFactory = {}));
//# sourceMappingURL=abstract-factory.js.map