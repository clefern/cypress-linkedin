describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://www.inm.gob.mx/sae/publico/en/solicitud.html')
    })

    it('try register', () => {
        const registered = false;
        const male = '1'
        const brazil = '26'
        const married = '140'
        const business = '906'
        const passport = '1'
        const catholic = '167'
        const work = '112'
        // Personal data
        cy.get('#nombre').type('Cleber')
        cy.get('#apellidos').type('Antonio Fernandes')
        cy.get('#sexo').select(male)
        cy.get('#fechaNacimiento').type('25/01/1982')
        cy.get('#nacionalidad').select(brazil)
        cy.get('#estadoCivil').select(married)
        // place of birth
        cy.get('#paisNacimiento').select(brazil)
        // passport
        cy.get('#tipoDocumentoPasaporte').select(passport)
        cy.get('#numeroPasaporte').type('GD878297')
        cy.get('#paisExpedicionPasaporte').select(brazil)
        cy.get('#fechaExpedicionPasaporte').type('14/03/2022')
        cy.get('#fechaVencimientoPasaporte').type('13/03/2032')
        // trip information
        cy.get('#motivo').select(business)
        cy.get('#residencia').select(brazil)
        cy.get('#fechaViaje').type('19/06/2022')
        cy.get('#tiempoViaje').type('5')
        // additional information
        cy.get('#visitoMexico').select('false')
        cy.get('#religion').select(catholic)
        cy.get('#actividad').select(work)
        cy.get('#expulsado').select('false')
        cy.get('#antecedentes').select('false')
        // captcha
        cy.get('#imagenCaptcha > img')
        // cy.get('#captcha').
        // cy.get('#procesar').click()
        // cy.get('#aceptar').click()

    })

});