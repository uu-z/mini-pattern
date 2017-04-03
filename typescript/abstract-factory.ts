namespace abstractFactory {

  interface Payload { weight: number; }
  interface Engine { thrust: number; }
  interface Stage { engines: Engine[]; }
  interface Rocket { payload: Payload; stages: Stage[]; }

  interface RocketFactory<T extends Rocket> {
    createRocket(): Rocket;
    createPayload(): Payload;
    createStages(): Stage[];
  }

  class Client {
    buildRocket<T extends Rocket>(factory: RocketFactory<T>): Rocket {
      let rocket = factory.createRocket();
      rocket.payload = factory.createPayload();
      rocket.stages = factory.createStages();
      return rocket
    }
  }

  class ExperimentalPayload implements Payload {
    weight: number;
  }

  class ExperimentalRocket implements Rocket {
    payload: Payload;
    stages: Stage[];
  }

  class ExperimentalRocketStage implements Stage {
    engines: Engine[]
  }

  class ExperimentalRocketFactory implements RocketFactory<ExperimentalRocket> {
    createRocket(): ExperimentalRocket {
      return new ExperimentalRocket();
    }
    createPayload(): ExperimentalPayload {
      return new ExperimentalPayload();
    }
    createStages(): [ExperimentalRocketStage] {
      return [new ExperimentalRocketStage()];
    }
  }

  class Satellite implements Payload {
    constructor(
      public id: number,
      public weight: number
    ) { }
  }

  class FreightRocketFirstStage implements Stage {
    engines: Engine[]
  }

  class FreightRocketSecondStage implements Stage {
    engines: Engine[]
  }

  type FreightRocketStages = [FreightRocketFirstStage, FreightRocketSecondStage]

  class FreightRocket implements Rocket {
    payload: Satellite
    stages: FreightRocketStages
  }

  class FreightRocketFactory implements RocketFactory<FreightRocket> {
    nextSatelliteId = 0;
    createRocket(): FreightRocket {
      return new FreightRocket()
    }
    createPayload(): Satellite {
      return new Satellite(this.nextSatelliteId++, 100)
    }
    createStages(): FreightRocketStages {
      return [
        new FreightRocketFirstStage(),
        new FreightRocketSecondStage()
      ]
    }
  }

  let client = new Client();

  let experimentalRocketFactory = new ExperimentalRocketFactory()
  let freightRocketFactory = new FreightRocketFactory()

  let rocket = client.buildRocket(experimentalRocketFactory)
  let freightRocket = client.buildRocket(freightRocketFactory)

}