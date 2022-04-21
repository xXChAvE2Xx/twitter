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

    test("Requerimiento 3: Agregando getters", () =>{
        const user = new User(1,"raulchavez", "Raul Antonio", "Bio")
        expect(user.getUsername).toBe("raulchavez")
    })

    test("Requeirmiento 4: Agregando setter", () =>{
        const user = new User(1,"raulchavez", "Raul Antonio", "Bio")
        user.setUsername = "Rulas"
        expect(user.getUsername).toBe("Rulas")
    })
})