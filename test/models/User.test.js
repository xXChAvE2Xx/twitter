const User = require('./../../app/models/User.js');

describe("Test para User", () => {
    test("Creacion de User", () => {
        const user = new User(1, "raulchavez", "Raul Antonio", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("raulchavez")

    })

    test("Requerimiento 2: Fechas en atributos de User", () =>{
        const user = new User(1,"raulchavez", "Raul Antonio", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})