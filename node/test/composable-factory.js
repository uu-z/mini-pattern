const factory = require('../composable-factory')

const Genji = factory.ninja()
const Soldier76 = factory.gunslinger()
const Hanzo = factory.sniper()
const Reinhardt = factory.samurai()
const Lucio = factory.runner()

Genji.name = "Genji"
Soldier76.name = "Soldier76"
Hanzo.name = "Hanzo"
Reinhardt.name = "Reinhardt"
Lucio.name = "Lucio"

Genji.move(1,0)
Soldier76.shoot('Genji')
Hanzo.shoot('Soldier76')
Lucio.move(6, 5)
Reinhardt.slash('Genji')